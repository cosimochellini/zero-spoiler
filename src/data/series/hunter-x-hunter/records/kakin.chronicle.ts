import type { Dated, LocalizedText, Story, Timeline } from '~/data/types'

/**
 * A Kakin story: the manga's alone, filed at the chapter by whose end the
 * reader knows all of it. The anime ends at episode 148, which only orders it.
 */
function told(
  chapter: number,
  title: LocalizedText,
  body: LocalizedText,
): Dated<Story> {
  return { episode: 148, chapter, source: 'chapter', value: { title, body } }
}

/** Kakin stories, chapters 340–370 (#1155): the Zodiacs, Heavens Arena and the Black Whale. */
export const kakinChronicles = {
  // New in phase 1 (chapters 340–357).
  'beyond-netero': [
    told(
      340,
      { it: 'Il capo della spedizione', en: 'Leader of the expedition' },
      {
        it: 'In un video il re di Cakin annuncia che un viaggio verso il Continente Oscuro partirà dal suo paese. Presenta il defunto [[netero|Netero]] e dice di aver ingaggiato suo figlio Beyond per guidarlo. Beyond promette a tutti le stesse possibilità e invita chiunque lo desideri a raggiungere Cakin per partire verso il nuovo mondo. I membri dello Zodiaco non sapevano che Netero avesse un figlio. Più tardi Beyond parla ai suoi seguaci, tra cui [[pariston-hill|Pariston]], di una terra che nessuno ha mai visto.',
        en: 'In a video, the King of Kakin announces that a voyage to the Dark Continent will start from his country. He presents the late [[netero|Netero]] and says he has hired Netero’s son, Beyond, to lead it. Beyond promises everyone an equal chance and invites anyone who wishes to come to Kakin and set out for the new world. The Zodiacs did not know that Netero had a son. Later Beyond speaks to his followers, [[pariston-hill|Pariston]] among them, about a land nobody has ever seen.',
      },
    ),
    told(
      341,
      { it: 'La resa allo Zodiaco', en: 'Surrender to the Zodiacs' },
      {
        it: 'In un secondo video lasciato da [[netero|Netero]], il padre racconta che Beyond è già stato nel Continente Oscuro e ne ha riportato nuove minacce, e chiede all’Associazione Hunter di arrivarci prima di lui. Mentre i membri dello Zodiaco ne discutono, [[beans|Beans]] riceve una telefonata di Beyond. Poco dopo Beyond si presenta davanti a loro di persona e gli dice di comunicare ai V5 che lo hanno catturato.',
        en: 'In a second video left by [[netero|Netero]], his father explains that Beyond once travelled to the Dark Continent and brought new threats back, and asks the Hunter Association to get there before him. While the Zodiacs argue about it, [[beans|Beans]] receives a call from Beyond. Soon after, Beyond appears before them in person and tells them to inform the V5 that they have captured him.',
      },
    ),
    told(
      342,
      { it: 'Una dichiarazione di guerra', en: 'A declaration of war' },
      {
        it: 'Beyond è chiuso in una cella e [[cheadle-yorkshire|Cheadle]] lo interroga mentre gli altri membri dello Zodiaco assistono. Lui prevede che finiranno per liberarlo e per andare con lui nel Continente Oscuro, e Cheadle la chiama un’illusione. [[saccho-kobayakawa|Saccho]] riassume il suo accordo con il re di Cakin: un posto nella storia in cambio di un biglietto per il Continente Oscuro. Beyond dichiara guerra allo Zodiaco e Cheadle accetta. Saccho si offre di sorvegliarlo.',
        en: 'Beyond is held in a cell, and [[cheadle-yorkshire|Cheadle]] questions him while the other Zodiacs watch. He predicts that they will end up releasing him and going to the Dark Continent with him, and Cheadle calls it a delusion. [[saccho-kobayakawa|Saccho]] sums up his deal with the King of Kakin: a place in history in exchange for a ticket to the Dark Continent. Beyond declares war on the Zodiacs, and Cheadle accepts. Saccho offers to watch over him.',
      },
    ),
    told(
      345,
      { it: 'La firma del contratto', en: 'Signing the contract' },
      {
        it: 'Su ordine del direttore dell’agenzia che rilascia i permessi di viaggio, [[cheadle-yorkshire|Cheadle]] porta a Beyond un contratto: se infrangerà le regole anche una sola volta, passerà il resto della vita in prigione. Beyond lo legge, accetta e firma. Poi conficca la penna nel contratto, che resta attaccata al foglio e al ripiano, e dice che restano soltanto tre cose: la capacità, i mezzi e il contratto.',
        en: 'On orders from the director of the agency that issues travel permits, [[cheadle-yorkshire|Cheadle]] brings Beyond a contract: if he breaks the rules even once, he will spend the rest of his life in prison. Beyond reads it, agrees and signs. Then he drives the pen into the contract so that it sticks to the paper and the pad, and says that only three things are left: capacity, means and contract.',
      },
    ),
  ],
  'zigg-zoldyck': [
    told(
      344,
      { it: 'La spedizione di Netero', en: 'Netero’s expedition' },
      {
        it: '[[ging-freecss|Ging]] racconta a tre membri della squadra di [[beyond-netero|Beyond]] un viaggio segreto nel Continente Oscuro. Vi presero parte [[netero|Netero]], [[linne-horsdoeuvre|Rinne]] e Zigg, e secondo Netero il continente è immenso. Il racconto mostra i tre davanti a creature molto più grandi di loro. Per impedire a Beyond di tornarci, Netero e i V5 hanno poi vietato il viaggio.',
        en: '[[ging-freecss|Ging]] tells three members of [[beyond-netero|Beyond]]’s team about a secret journey to the Dark Continent. [[netero|Netero]], [[linne-horsdoeuvre|Linne]] and Zigg took part in it, and according to Netero the continent is gigantic. The account shows the three facing creatures much larger than themselves. To keep Beyond from going back there, Netero and the V5 later banned the journey.',
      },
    ),
  ],
  'tserriednich-hui-guo-rou': [
    told(
      343,
      { it: 'Il proprietario degli occhi', en: 'The owner of the eyes' },
      {
        it: '[[mizaistom-nana|Mizaistom]] trova [[kurapika|Kurapika]] e gli dice che gli Hunter sanno chi possiede molte paia di occhi scarlatti, una persona che Kurapika non è riuscito a rintracciare. Kurapika valuta l’offerta e riceve la fotografia del proprietario: Tserriednich, il quarto principe dell’impero di Cakin. Il principe è uno dei passeggeri del viaggio verso il Continente Oscuro.',
        en: '[[mizaistom-nana|Mizaistom]] finds [[kurapika|Kurapika]] and tells him that the Hunters know who owns many pairs of Scarlet Eyes, someone Kurapika has failed to track down. Kurapika considers the offer and receives the owner’s picture: Tserriednich, the Fourth Prince of the Kakin Empire. The prince is one of the passengers on the voyage to the Dark Continent.',
      },
    ),
    told(
      345,
      { it: 'Ospiti in hotel', en: 'Guests at the hotel' },
      {
        it: 'Due ragazze conosciute in un locale vengono invitate nell’hotel di Tserriednich. Quando gli chiedono se vive lì da solo, il principe risponde che non si sente mai solo e chiede di parlargli di loro. Più tardi, nella vasca, telefona a [[mark|Mark]]: si lamenta che le ragazze pensavano solo alla moda e gli chiede di mandargliene altre due. Il bagno è coperto di sangue. Le ha uccise, e con ogni probabilità non sono le prime.',
        en: 'Two women met in a dance club are invited to Tserriednich’s hotel. When they ask whether he lives there alone, the prince says he never feels lonely and asks them to tell him about themselves. Later, from his bath, he phones [[mark|Mark]], complains that the women cared only about fashion and asks him to send two more. The bathroom is covered in blood. He has killed them, and they were most likely not the first.',
      },
    ),
    told(
      349,
      { it: 'L’urna del rito', en: 'The ritual urn' },
      {
        it: 'Un messaggero del re spiega a Tserriednich le regole della successione: possono partecipare solo i figli delle mogli legittime, e solo se salgono sulla Black Whale e assistono alla cerimonia di partenza. Poi gli presenta un’urna di un antico rito di Cakin. Tserriednich vi versa una goccia di sangue e infila la mano. Ne esce una piccola creatura che gli fa mangiare un uovo e sparisce. Chi compie il rito porta dentro di sé l’uovo di una bestia guardiana, che si schiuderà in un protettore modellato sul suo ospite.',
        en: 'A messenger of the king explains the succession rules to Tserriednich: only the children of the king’s legal wives may take part, and only if they board the Black Whale and attend the departure ceremony. Then he presents an urn from an old Kakin ritual. Tserriednich puts a drop of his blood and his hand inside. A small creature comes out, feeds him a tiny egg and vanishes. Whoever does this carries the egg of a guardian beast, which will hatch into a protector shaped by its host.',
      },
    ),
    told(
      362,
      {
        it: 'Un’alleanza e un interrogatorio',
        en: 'An alliance and an interrogation',
      },
      {
        it: 'Tserriednich stringe un’alleanza con [[tubeppa-hui-guo-rou|Tsubeppa]]. La sua guardia del corpo discute con un collega come tenerlo nei suoi alloggi senza rivelargli il segreto del Nen. Poco dopo il principe la affronta, con la sua bestia guardiana accanto, e la interroga sul Nen. Lei ammette di conoscerlo e di saperlo usare.',
        en: 'Tserriednich agrees to an alliance with [[tubeppa-hui-guo-rou|Tubeppa]]. His bodyguard discusses with a colleague how to keep him in his quarters without revealing the secret of Nen to him. Shortly after, the prince confronts her, his guardian beast beside him, and questions her about Nen. She admits that she knows about it and can use it.',
      },
    ),
    told(
      368,
      { it: 'Un allievo dotato', en: 'A gifted pupil' },
      {
        it: 'Tserriednich si allena nel Nen con la sua guardia del corpo, che scopre in lui un genio. Dopo aver sentito un messaggio di [[zhang-lei-hui-guo-rou|Chowrai]] secondo cui il Nen si può insegnare in due settimane, la minaccia perché gli dica davvero quanto tempo serve. Lei risponde che è possibile ma rischioso, e che il suo metodo è il migliore. La bestia del principe le si avvicina mentre giura di dire la verità. Sul pavimento schizza del sangue.',
        en: 'Tserriednich trains in Nen with his bodyguard, who discovers that he is a genius at it. After hearing a message from [[zhang-lei-hui-guo-rou|Zhang Lei]] that Nen can be taught in two weeks, he threatens her to tell him how long it really takes. She answers that it is possible but dangerous, and that her method is the best. The prince’s beast closes in on her as she swears she is telling the truth. Blood spatters the floor.',
      },
    ),
  ],
  'mark': [
    told(
      345,
      { it: 'Le chiamate del principe', en: 'The prince’s calls' },
      {
        it: 'Mark lavora per [[tserriednich-hui-guo-rou|Tserriednich]]. Due ragazze conosciute in un locale vengono invitate nell’hotel del principe. Più tardi Tserriednich chiama Mark dalla vasca da bagno, si lamenta che le ragazze non sapevano nulla del mondo oltre alla moda e gli ordina di trovarne altre due. Il bagno intorno al principe è coperto di sangue: le ha uccise.',
        en: 'Mark works for [[tserriednich-hui-guo-rou|Tserriednich]]. Two women met in a dance club are invited to the prince’s hotel. Later Tserriednich calls Mark from his bath, complains that the women knew nothing of the world beyond fashion and orders him to find two more. The bathroom around the prince is covered in blood: he has killed them.',
      },
    ),
  ],
  'curly': [
    told(
      346,
      { it: 'La sfida sui vocaboli', en: 'The vocabulary contest' },
      {
        it: 'Curly, professore nella squadra di [[beyond-netero|Beyond]], aveva già cercato di fare domande a [[ging-freecss|Ging]] e gli aveva chiesto da dove venissero le sue informazioni sul Continente Oscuro. Un mese dopo lo sfida a elencare più parole dell’antica lingua kappe che cominciano per N. Ging vince facilmente. Curly lo accetta come numero due della squadra e accetta anche il suo denaro.',
        en: 'Curly, a professor in [[beyond-netero|Beyond]]’s team, had already tried to question [[ging-freecss|Ging]] and asked where his knowledge of the Dark Continent came from. A month later he challenges Ging to name more words of the ancient Kappe language that begin with N. Ging wins easily. Curly accepts him as the team’s number two and accepts his money as well.',
      },
    ),
  ],
  'golem': [
    told(
      347,
      { it: 'Le armi di Golem', en: 'Golem’s weapons' },
      {
        it: 'Golem fa parte della squadra Stone Wall, nel gruppo di [[beyond-netero|Beyond]]. Materializza un’arma pesante manovrata da un altro utilizzatore di Nen che crea i proiettili, così che arma e proiettili sono più forti insieme, e ha fornito le armi usate contro [[ging-freecss|Ging]] e [[pariston-hill|Pariston]]. Ging lo riconosce come un utilizzatore di Nen simbiotico e chiede il suo vero nome. Una voce distorta risponde che i compagni lo chiamano Golem e che non risponderà ad altre domande.',
        en: 'Golem belongs to the Stone Wall squad in [[beyond-netero|Beyond]]’s team. It conjures a heavy weapon worked by another Nen user who creates the bullets, so that weapon and bullets are stronger together, and it supplied the guns used against [[ging-freecss|Ging]] and [[pariston-hill|Pariston]]. Ging recognises it as a symbiotic Nen user and asks its real name. A distorted voice answers that Golem is what its comrades call it and that it will answer no further questions.',
      },
    ),
  ],
  'benjamin-hui-guo-rou': [
    told(
      349,
      { it: 'Chi sopravvive', en: 'Whoever survives' },
      {
        it: 'Benjamin chiama il fratello [[tserriednich-hui-guo-rou|Tserriednich]] per dirgli che il padre ha deciso: chi sopravviverà alla spedizione sarà il nuovo re. Tserriednich risponde che il re sarà lui. Benjamin è il primo principe di Cakin, il maggiore dei quattordici figli che il re ha avuto dalle sue otto mogli legittime, e sua madre è [[unma-hui-guo-rou|Unma]].',
        en: 'Benjamin calls his brother [[tserriednich-hui-guo-rou|Tserriednich]] to tell him that their father has decided: whoever survives the expedition will become the new king. Tserriednich replies that he will be the king. Benjamin is the First Prince of Kakin, the eldest of the fourteen children the king has had with his eight legal wives, and his mother is [[unma-hui-guo-rou|Unma]].',
      },
    ),
    told(
      363,
      {
        it: 'Guardie reali per ogni principe',
        en: 'Royal guards for every prince',
      },
      {
        it: 'Al banchetto Benjamin litiga con [[camilla-hui-guo-rou|Camilla]] davanti al padre e giura di tagliare i rami malati del grande albero di Cakin. La sua bestia guardiana è alle sue spalle. Quando gli parlano delle bestie di Nen, chiede perché non riesce a vederle, visto che sa usare il Nen. Poi manda i suoi quattordici soldati a fare da guardie reali presso gli altri principi e a riferirgli tutto, autorizzandoli a uccidere per legittima difesa.',
        en: 'At the banquet Benjamin quarrels with [[camilla-hui-guo-rou|Camilla]] in front of their father and swears to cut the diseased branches from Kakin’s great tree. His guardian beast stands behind him. Told about the Nen beasts, he asks why he cannot see them when he can use Nen. He then sends his fourteen soldiers to serve as royal guards to the other princes and report everything to him, allowing them to kill in self-defence.',
      },
    ),
  ],
  'unma-hui-guo-rou': [
    told(
      349,
      { it: 'La prima regina', en: 'The First Queen' },
      {
        it: 'Unma è la prima regina di Cakin, una delle otto mogli legittime del re. I suoi figli [[benjamin-hui-guo-rou|Benjamin]] e [[tserriednich-hui-guo-rou|Tserriednich]] sono il primo e il quarto principe. Solo i figli delle mogli legittime possono contendersi il trono, a patto di salire sulla Black Whale e di assistere alla cerimonia di partenza. Fino a quel giorno l’identità dei partecipanti resta segreta.',
        en: 'Unma is the First Queen of Kakin, one of the king’s eight legal wives. Her sons [[benjamin-hui-guo-rou|Benjamin]] and [[tserriednich-hui-guo-rou|Tserriednich]] are the First and Fourth Princes. Only the children of the legal wives may compete for the throne, provided they board the Black Whale and attend the departure ceremony. Until that day, who takes part stays secret.',
      },
    ),
  ],
  'tang-zhao-li-hui-guo-rou': [
    told(
      349,
      { it: 'La terza regina', en: 'The Third Queen' },
      {
        it: 'Towchowrai è la terza regina di Cakin, una delle otto mogli legittime del re, e la madre di [[zhang-lei-hui-guo-rou|Chowrai]], il terzo principe. Il re ha avuto quattordici figli dalle sue mogli legittime, tutti chiamati principi e numerati secondo l’ordine di nascita. Ognuno di loro può contendersi il trono, se sale sulla Black Whale e assiste alla cerimonia di partenza.',
        en: 'Tang Zhao Li is the Third Queen of Kakin, one of the king’s eight legal wives, and the mother of [[zhang-lei-hui-guo-rou|Zhang Lei]], the Third Prince. The king has fourteen children by his legal wives, all called princes and numbered in order of birth. Each of them may compete for the throne by boarding the Black Whale and attending the departure ceremony.',
      },
    ),
  ],
  'katrono-hui-guo-rou': [
    told(
      349,
      { it: 'La quarta regina', en: 'The Fourth Queen' },
      {
        it: 'Katrono è la quarta regina di Cakin, una delle otto mogli legittime del re, e la madre di [[tyson-hui-guo-rou|Tyson]], il sesto principe. Alla successione partecipano solo i figli delle mogli legittime che salgono sulla Black Whale e assistono alla cerimonia di partenza. Chi sopravviverà al viaggio diventerà il prossimo re.',
        en: 'Katrono is the Fourth Queen of Kakin, one of the king’s eight legal wives, and the mother of [[tyson-hui-guo-rou|Tyson]], the Sixth Prince. Only the children of the legal wives who board the Black Whale and attend the departure ceremony take part in the succession. Whoever survives the voyage will be the next king.',
      },
    ),
  ],
  'seiko-hui-guo-rou': [
    told(
      349,
      { it: 'La sesta regina', en: 'The Sixth Queen' },
      {
        it: 'Seiko è la sesta regina di Cakin, una delle otto mogli legittime del re. I suoi figli [[kacho-hui-guo-rou|Kachow]] e [[fugetsu-hui-guo-rou|Fugetsu]] sono il decimo e l’undicesimo principe. Come gli altri figli delle mogli legittime, possono contendersi il trono se salgono sulla Black Whale e assistono alla cerimonia di partenza.',
        en: 'Seiko is the Sixth Queen of Kakin, one of the king’s eight legal wives. Her children [[kacho-hui-guo-rou|Kacho]] and [[fugetsu-hui-guo-rou|Fugetsu]] are the Tenth and Eleventh Princes. Like the other children of the legal wives, they may compete for the throne if they board the Black Whale and attend the departure ceremony.',
      },
    ),
  ],
  'woble-hui-guo-rou': [
    told(
      350,
      { it: 'La richiesta della regina', en: 'The queen’s request' },
      {
        it: '[[kurapika|Kurapika]] risponde a un annuncio che crede di [[halkenburg-hui-guo-rou|Harkenburg]], ma a ingaggiarlo è la madre di Woble, il quattordicesimo e più giovane principe. La regina gli rivela che il viaggio nasconde una guerra di successione e che chi si ritira verrebbe ucciso. Gli offre dieci volte la paga per far scendere lei e Woble dalla nave, e Kurapika accetta a certe condizioni. Lei dice di aver trovato il proprio valore nella figlia e lascia che Kurapika prenda in braccio la bambina.',
        en: '[[kurapika|Kurapika]] answers a posting he believes is [[halkenburg-hui-guo-rou|Halkenburg]]’s, but his employer is the mother of Woble, the Fourteenth and youngest Prince. The queen reveals that the voyage hides a succession war and that deserters would be killed. She offers him ten times the pay to get her and Woble off the ship, and Kurapika agrees on certain conditions. She says she found her true worth in her daughter, and lets Kurapika hold the baby.',
      },
    ),
    told(
      360,
      { it: 'Morti negli alloggi', en: 'Deaths in her quarters' },
      {
        it: 'Prima della partenza [[kurapika|Kurapika]] avverte dell’aura salire dalla culla di Woble. A bordo cinque guardie vengono trovate morte nei suoi alloggi, prosciugate del sangue. Saputo che Woble ha partecipato al rito dell’urna poco più di un mese prima, Kurapika sospetta che la sua bestia guardiana abbia attaccato per difesa, percependo l’ansia della madre come un pericolo. Non esclude però che un altro principe stia colpendo Woble perché è la più giovane e la più debole.',
        en: 'Before departure, [[kurapika|Kurapika]] senses aura rising from Woble’s cradle. On board, five guards are found dead in her quarters, drained of blood. Learning that Woble took part in the urn ritual a little over a month earlier, Kurapika suspects that her guardian beast attacked in self-defence, sensing her mother’s anxiety as danger. He cannot rule out, though, that another prince is targeting Woble because she is the youngest and weakest.',
      },
    ),
  ],
  'izunavi': [
    told(
      350,
      { it: 'Al servizio di Tyson', en: 'Hired by Tyson' },
      {
        it: '[[kurapika|Kurapika]] riunisce Izunabi con [[biscuit-krueger|Biscuit]], [[basho|Basho]], [[hanzo|Hanzo]] e [[melody|Melody]] perché si candidino come guardie del corpo dei principi e raccolgano informazioni su [[tserriednich-hui-guo-rou|Tserriednich]]. Izunabi osserva che dev’essere successo qualcosa di grave perché sei principi cerchino scorte nello stesso momento. Viene assunto da [[tyson-hui-guo-rou|Tyson]].',
        en: '[[kurapika|Kurapika]] brings Izunavi together with [[biscuit-krueger|Biscuit]], [[basho|Basho]], [[hanzo|Hanzo]] and [[melody|Melody]] to apply as bodyguards to the princes and gather information on [[tserriednich-hui-guo-rou|Tserriednich]]. Izunavi points out that something significant must have happened for six princes to post jobs at the same time. He is hired by [[tyson-hui-guo-rou|Tyson]].',
      },
    ),
    told(
      361,
      { it: 'Il consiglio del maestro', en: 'His mentor’s advice' },
      {
        it: '[[kurapika|Kurapika]] ricorda una conversazione con il suo maestro Izunabi. Preoccupato che combatta da solo, Izunabi gli aveva detto di lasciare per il momento una delle sue catene vuota e aveva insistito sull’importanza di combattere insieme ad altri. Davanti all’ostinazione di Kurapika, gli aveva consigliato di aggiungere un’abilità che compensi la mancanza di aiuto quando si trova in difficoltà. Avrebbe capito, gli disse, combattendo al fianco di qualcuno.',
        en: '[[kurapika|Kurapika]] remembers a conversation with his mentor Izunavi. Worried about him fighting alone, Izunavi told him to keep one of his chains empty for now and stressed the value of fighting alongside others. When Kurapika insisted, Izunavi advised him to add an ability that makes up for the lack of help when he is struggling. He would understand, Izunavi said, once he fought side by side with someone.',
      },
    ),
  ],

  // Returning characters, chapters 340–357.
  'beans': [
    told(
      341,
      { it: 'I video', en: 'The videos' },
      {
        it: 'Beans irrompe nella riunione dello Zodiaco e mostra un video in cui il re di Cakin annuncia un viaggio verso il Continente Oscuro guidato da [[beyond-netero|Beyond]], figlio di [[netero|Netero]]. Beans rivela che Netero ha lasciato due DVD: il secondo andava mostrato allo Zodiaco se qualcuno si fosse presentato come suo figlio. Mentre i membri ne discutono, Beans riceve una telefonata dallo stesso Beyond.',
        en: 'Beans bursts into the Zodiacs’ meeting and shows a video in which the King of Kakin announces a voyage to the Dark Continent led by [[beyond-netero|Beyond]], son of [[netero|Netero]]. Beans reveals that Netero left two DVDs: the second was to be shown to the Zodiacs if anyone came forward claiming to be his child. While they argue, Beans receives a call from Beyond himself.',
      },
    ),
  ],
  'netero': [
    told(
      341,
      { it: 'Il secondo video', en: 'The second video' },
      {
        it: 'Dopo la sua morte, [[beans|Beans]] mostra allo Zodiaco un secondo video lasciato da Netero. Netero spiega che suo figlio [[beyond-netero|Beyond]] è stato nel Continente Oscuro e ne ha riportato nuove minacce, e che per questo ha vietato nuovi viaggi a Beyond e all’Associazione Hunter fino alla propria morte. Chiede all’Associazione di esplorare il continente prima del figlio, precisando che è una richiesta e non un ordine.',
        en: 'After his death, [[beans|Beans]] shows the Zodiacs a second video Netero left for them. Netero explains that his son [[beyond-netero|Beyond]] once travelled to the Dark Continent and brought new threats back, so he forbade further attempts by Beyond and the Hunter Association until his own death. He asks the Association to explore the continent before his son, stressing that it is a request rather than an order.',
      },
    ),
  ],
  'cheadle-yorkshire': [
    told(
      341,
      { it: 'La caccia a Beyond', en: 'Hunting Beyond' },
      {
        it: 'Cheadle annuncia allo Zodiaco che [[ging-freecss|Ging]] e [[pariston-hill|Pariston]] si sono dimessi e che i V5 hanno affidato allo Zodiaco un incarico speciale: dare la caccia a [[beyond-netero|Beyond]]. Nel secondo video lasciato da [[netero|Netero]], il presidente chiede all’Associazione di raggiungere il Continente Oscuro prima del figlio. Cheadle accetta la missione, ma stabilisce che nessun altro Hunter debba unirsi a loro. Poi Beyond si presenta di persona e chiede di comunicare la sua cattura.',
        en: 'Cheadle tells the Zodiacs that [[ging-freecss|Ging]] and [[pariston-hill|Pariston]] have resigned and that the V5 have given the Zodiacs a special assignment: to hunt down [[beyond-netero|Beyond]]. In the second video left by [[netero|Netero]], the chairman asks the Association to reach the Dark Continent before his son. Cheadle accepts the mission but rules that no other Hunters should join them. Then Beyond appears in person and asks them to report his capture.',
      },
    ),
    told(
      346,
      { it: 'L’obiettivo dello Zodiaco', en: 'The Zodiacs’ objective' },
      {
        it: 'Cheadle e [[leorio-paradinight|Leorio]] accolgono [[kurapika|Kurapika]] e [[mizaistom-nana|Mizaistom]] alla riunione dello Zodiaco. Cheadle annuncia che Cakin si è unita alle cinque nazioni guida, ora V6, e che il pericolo delle cinque minacce del Continente Oscuro è stato classificato sopra quello delle formichimere. L’obiettivo è catturarne almeno una, sopravvivere al ritorno e occuparsi di [[beyond-netero|Beyond]] lungo la strada. Ogni membro dichiara poi il proprio ruolo nel viaggio.',
        en: 'Cheadle and [[leorio-paradinight|Leorio]] greet [[kurapika|Kurapika]] and [[mizaistom-nana|Mizaistom]] at the Zodiacs’ meeting. Cheadle announces that Kakin has joined the five leading nations, now the V6, and that the danger rank of the Dark Continent’s Five Threats has been raised above the Chimera Ants. Their objective is to capture at least one of them, survive the trip back and deal with [[beyond-netero|Beyond]] along the way. Each member then states their role in the voyage.',
      },
    ),
  ],
  'leorio-paradinight': [
    told(
      343,
      { it: 'Un posto per un amico', en: 'A seat for a friend' },
      {
        it: '[[cheadle-yorkshire|Cheadle]] telefona a Leorio e lo invita a entrare nello Zodiaco, aggiungendo che lo aspetta uno studio medico e che il professore responsabile sarà lei. Leorio sembra sul punto di rifiutare, poi accetta e chiede se nello Zodiaco c’è posto anche per un’altra persona, perché ha in mente qualcuno. Su sua richiesta [[mizaistom-nana|Mizaistom]] va a cercare [[kurapika|Kurapika]].',
        en: '[[cheadle-yorkshire|Cheadle]] phones Leorio and invites him to join the Zodiacs, adding that a medical study awaits him with her as the professor in charge. Leorio seems about to decline, then accepts and asks whether there is room in the Zodiacs for one more, because he has someone in mind. At his request, [[mizaistom-nana|Mizaistom]] goes to find [[kurapika|Kurapika]].',
      },
    ),
  ],
  'ging-freecss': [
    told(
      343,
      { it: 'Il nuovo numero due', en: 'The new number two' },
      {
        it: 'Uscito dallo Zodiaco, Ging raggiunge il covo della squadra di [[beyond-netero|Beyond]] e affronta [[pariston-hill|Pariston]]. Gli espone i suoi motivi: in cerca di qualcosa di nuovo che lo diverta, Pariston spargerebbe le formichimere per il mondo e aprirebbe le rotte proibite verso il Continente Oscuro. Pariston ammette che ha ragione. Quando un membro della squadra lo minaccia, Ging lo solleva da terra. Poi si proclama numero due della squadra e sfida chiunque non sia d’accordo.',
        en: 'Having left the Zodiacs, Ging goes to the hideout of [[beyond-netero|Beyond]]’s team and confronts [[pariston-hill|Pariston]]. He lays out Pariston’s motives: looking for something new to entertain him, he would spread the Chimera Ants around the world and open the forbidden routes to the Dark Continent. Pariston admits he is right. When a team member threatens him, Ging lifts him off the ground. Then he declares himself the team’s number two and challenges anyone who objects.',
      },
    ),
    told(
      344,
      { it: 'Le cinque minacce', en: 'The Five Threats' },
      {
        it: 'Invece di combattere, Ging offre ai membri della squadra il doppio di quanto li paga [[beyond-netero|Beyond]]. Poi racconta a tre di loro le cinque minacce del Continente Oscuro, più forti delle formichimere, e il viaggio segreto di [[netero|Netero]], [[linne-horsdoeuvre|Rinne]] e [[zigg-zoldyck|Zigg]]. Quando gli chiedono da dove vengano le sue informazioni, spiega che una sola persona ha esplorato il continente e ne ha scritto un libro trecento anni fa, e che quel libro è ancora in scrittura.',
        en: 'Instead of fighting, Ging offers the team members double what [[beyond-netero|Beyond]] pays them. He then tells three of them about the Five Threats of the Dark Continent, stronger than the Chimera Ants, and about the secret journey of [[netero|Netero]], [[linne-horsdoeuvre|Linne]] and [[zigg-zoldyck|Zigg]]. Asked where his information comes from, he explains that only one person explored the continent and wrote a book about it three hundred years ago, and that the book is still being written.',
      },
    ),
    told(
      347,
      { it: 'L’accordo con i soldati', en: 'Settling with the soldiers' },
      {
        it: 'Quando alcuni uomini armati attaccano lui e [[pariston-hill|Pariston]], Ging li mette fuori combattimento imitando il pugno a distanza di [[leorio-paradinight|Leorio]], una tecnica che può copiare perché l’ha subita. Rivela a Pariston di aver capito che l’attacco era una sua messinscena. Il mercenario a capo dei soldati gli spiega che il suo denaro li ha offesi. Ging si scusa, accetta di versarlo a un fondo per le famiglie dei soldati caduti e di obbedire ai suoi ordini sul campo di battaglia.',
        en: 'When gunmen attack him and [[pariston-hill|Pariston]], Ging knocks them out by copying [[leorio-paradinight|Leorio]]’s remote punch, a technique he can imitate because he was hit by it. He tells Pariston he knew the attack was staged by him. The mercenary who leads the soldiers explains that Ging’s money has offended them. Ging apologises, agrees to give it to a fund for the families of fallen soldiers, and accepts the mercenary’s orders on the battlefield.',
      },
    ),
  ],
  'pariston-hill': [
    told(
      345,
      { it: 'Odiare per la prima volta', en: 'Hating for the first time' },
      {
        it: 'Uscito dallo Zodiaco, Pariston è tra i seguaci di [[beyond-netero|Beyond]]. [[ging-freecss|Ging]] lo affronta nel covo della squadra e gli espone i suoi motivi. Pariston ammette che Ging ha ragione: si sente felice quando è odiato e vuole fare del male alle cose che ama. Si definisce numero due della squadra, ma Ging prende il posto per sé. Osservandolo con la squadra, Pariston riconosce tra sé che è la prima volta che odia davvero qualcuno.',
        en: 'Having left the Zodiacs, Pariston is among [[beyond-netero|Beyond]]’s followers. [[ging-freecss|Ging]] confronts him in the team’s hideout and lays out his motives. Pariston admits Ging is right: he feels happy when he is hated and wants to harm the things he loves. He calls himself the team’s number two, but Ging takes the place for himself. Watching him with the team, Pariston admits to himself that this is the first time he has ever hated anyone.',
      },
    ),
    told(
      347,
      { it: 'L’attacco messo in scena', en: 'The staged attack' },
      {
        it: 'Pariston fugge con [[ging-freecss|Ging]] quando alcuni uomini armati aprono il fuoco e lo guarda abbatterli con la tecnica di [[leorio-paradinight|Leorio]]. Ging gli rivela di aver capito che era tutto una sua messinscena e gli dice di affrontarlo di persona, se vuole vedere le sue vere capacità. Chiusa la questione, Pariston si congratula con Ging per il nuovo incarico e rifiuta la sua offerta di lasciargli il comando.',
        en: 'Pariston escapes with [[ging-freecss|Ging]] when gunmen open fire, and watches him take them down with [[leorio-paradinight|Leorio]]’s technique. Ging reveals he knew Pariston had staged it all and tells him to come at him himself if he wants to see his real abilities. Once the matter is settled, Pariston congratulates Ging on his position and turns down his offer to let him lead.',
      },
    ),
  ],
  'mizaistom-nana': [
    told(
      343,
      { it: 'Alla ricerca di Kurapika', en: 'Looking for Kurapika' },
      {
        it: 'Mizaistom va a cercare [[kurapika|Kurapika]]. Quando tre uomini gli sbarrano la strada, mostra loro un cartellino che vieta la violenza, e quando lo attaccano il cartellino li blocca. Kurapika arriva e rifiuta subito di entrare nello Zodiaco, ma Mizaistom gli dice che gli Hunter possono individuare chi possiede molti occhi scarlatti. Kurapika valuta l’offerta e riceve la fotografia di [[tserriednich-hui-guo-rou|Tserriednich]].',
        en: 'Mizaistom goes looking for [[kurapika|Kurapika]]. When three men block his way, he shows them a card that forbids violence, and when they attack, the card stops them moving. Kurapika appears and refuses at once to join the Zodiacs, but Mizaistom tells him the Hunters can identify the owner of many Scarlet Eyes. Kurapika considers the offer and receives the picture of [[tserriednich-hui-guo-rou|Tserriednich]].',
      },
    ),
    told(
      349,
      { it: 'Una sorveglianza segreta', en: 'Watching in secret' },
      {
        it: 'Mizaistom e [[kurapika|Kurapika]] riguardano il colloquio di Mizaistom con [[beyond-netero|Beyond]], che sostiene di non sapere nulla di una spia. Kurapika conferma che ha detto la verità. Mizaistom conclude che dietro la cospirazione di [[saiyu|Saiyu]] c’è [[pariston-hill|Pariston]]. Decidono di sorvegliare Saiyu in segreto e di arrestarlo poco prima dell’arrivo, sapendo che gli altri membri dello Zodiaco criticherebbero Mizaistom per aver agito alle loro spalle. Poi vengono a sapere che sei principi cercano guardie del corpo.',
        en: 'Mizaistom and [[kurapika|Kurapika]] review Mizaistom’s talk with [[beyond-netero|Beyond]], who claims to know nothing of a spy. Kurapika confirms he told the truth. Mizaistom concludes that [[pariston-hill|Pariston]] is behind [[saiyu|Saiyu]]’s conspiracy. They decide to watch Saiyu in secret and arrest him just before arrival, aware that the other Zodiacs would criticise Mizaistom for acting behind their backs. Then they learn that six princes are hiring bodyguards.',
      },
    ),
  ],
  'saiyu': [
    told(
      349,
      { it: 'L’infiltrato', en: 'The infiltrator' },
      {
        it: 'Mentre i membri dello Zodiaco si rivelano a vicenda le proprie abilità, [[kurapika|Kurapika]] li osserva da una telecamera nascosta e riconosce in Saiyu il traditore. Saiyu era sollevato di non dover mentire sul proprio potere, segno che sta dalla parte di [[beyond-netero|Beyond]]. Kurapika e [[mizaistom-nana|Mizaistom]] decidono di sorvegliarlo in segreto: si aspettano che tenti di liberare Beyond, e pensano di arrestarlo poco prima dell’arrivo.',
        en: 'As the Zodiacs reveal their abilities to one another, [[kurapika|Kurapika]] watches through a hidden camera and identifies Saiyu as the traitor. Saiyu was relieved not to have to lie about his power, a sign that he is on [[beyond-netero|Beyond]]’s side. Kurapika and [[mizaistom-nana|Mizaistom]] decide to watch him in secret: they expect him to try to free Beyond, and plan to arrest him just before arrival.',
      },
    ),
  ],
  'kurapika': [
    told(
      343,
      { it: 'Un’offerta dello Zodiaco', en: 'An offer from the Zodiacs' },
      {
        it: 'Su richiesta di [[leorio-paradinight|Leorio]], [[mizaistom-nana|Mizaistom]] trova Kurapika e lo invita a entrare nello Zodiaco. Kurapika rifiuta, finché Mizaistom non nomina gli occhi scarlatti: gli Hunter possono individuare una persona che ne possiede molti. Kurapika valuta l’offerta e riceve la fotografia del proprietario, [[tserriednich-hui-guo-rou|Tserriednich]], quarto principe di Cakin. Entra nello Zodiaco.',
        en: 'At [[leorio-paradinight|Leorio]]’s request, [[mizaistom-nana|Mizaistom]] finds Kurapika and invites him to join the Zodiacs. Kurapika refuses until Mizaistom mentions the Scarlet Eyes: the Hunters can identify a person who owns many of them. Kurapika considers the offer and receives the owner’s picture, [[tserriednich-hui-guo-rou|Tserriednich]], the Fourth Prince of Kakin. He joins the Zodiacs.',
      },
    ),
    told(
      348,
      { it: 'Il traditore', en: 'The traitor' },
      {
        it: 'Durante l’ultima prova dell’Esame Hunter, Kurapika e [[mizaistom-nana|Mizaistom]] verificano le risposte dei candidati sulla spedizione di [[beyond-netero|Beyond]]. Kurapika spiega a Mizaistom le sue abilità e i loro limiti. Sospettando una spia nello Zodiaco, si offre di trovarla. Mentre Mizaistom affronta gli altri membri e li fa parlare delle proprie abilità, Kurapika guarda tutto da una telecamera nascosta e scopre il traditore: [[saiyu|Saiyu]].',
        en: 'During the last phase of the Hunter Exam, Kurapika and [[mizaistom-nana|Mizaistom]] check the applicants’ answers about [[beyond-netero|Beyond]]’s expedition. Kurapika explains his abilities and their limits to Mizaistom. Suspecting a spy among the Zodiacs, he volunteers to find them. While Mizaistom confronts the other members and has them talk about their abilities, Kurapika watches through a hidden camera and identifies the traitor: [[saiyu|Saiyu]].',
      },
    ),
    told(
      350,
      { it: 'Al servizio di una regina', en: 'Hired by a queen' },
      {
        it: 'Kurapika recluta [[biscuit-krueger|Biscuit]], [[basho|Basho]], [[izunavi|Izunabi]], [[hanzo|Hanzo]] e [[melody|Melody]] come guardie del corpo per sei principi, per trovare un modo di avvicinare [[tserriednich-hui-guo-rou|Tserriednich]]. Lui stesso risponde all’annuncio che crede di [[halkenburg-hui-guo-rou|Harkenburg]], il fratello più vicino a Tserriednich. Ad assumerlo è invece la madre di [[woble-hui-guo-rou|Woble]], che gli rivela la guerra di successione e gli chiede di portare lei e la figlia giù dalla nave. Kurapika accetta a certe condizioni.',
        en: 'Kurapika recruits [[biscuit-krueger|Biscuit]], [[basho|Basho]], [[izunavi|Izunavi]], [[hanzo|Hanzo]] and [[melody|Melody]] as bodyguards for six princes, to find a way to approach [[tserriednich-hui-guo-rou|Tserriednich]]. He answers the posting he believes is [[halkenburg-hui-guo-rou|Halkenburg]]’s, the sibling closest to Tserriednich. His employer is instead the mother of [[woble-hui-guo-rou|Woble]], who reveals the succession war and asks him to get her and her daughter off the ship. Kurapika accepts on certain conditions.',
      },
    ),
    told(
      360,
      { it: 'La verità sul viaggio', en: 'The truth about the voyage' },
      {
        it: 'Negli alloggi di [[woble-hui-guo-rou|Woble]] cinque guardie vengono trovate prosciugate del sangue. Kurapika tiene sotto tiro le altre con la pistola e la Dowsing Chain, rivela che il viaggio è una guerra di successione e scopre due guardie che lo sapevano già: come i colleghi uccisi, riferiscono alle altre regine. Poi bestie guardiane invisibili a chi non conosce il Nen invadono la stanza. Kurapika lancia una chiamata d’emergenza su tutti i canali, e [[biscuit-krueger|Biscuit]] conferma di averle viste anche lei.',
        en: 'In [[woble-hui-guo-rou|Woble]]’s quarters, five guards are found drained of blood. Kurapika holds the others at gunpoint with his Dowsing Chain, reveals that the voyage is a succession war and finds two who already knew: like their dead colleagues, they report to other queens. Then guardian beasts, invisible to anyone without Nen, flood the room. Kurapika makes an emergency call on every channel, and [[biscuit-krueger|Biscuit]] confirms she has seen them too.',
      },
    ),
    told(
      361,
      { it: 'La Steal Chain', en: 'Steal Chain' },
      {
        it: 'Una guardia spinta da una bestia guardiana accoltella tre persone. Kurapika la immobilizza e, ripensando al consiglio di [[izunavi|Izunabi]], usa una nuova catena con una siringa, la Steal Chain, per prenderle l’abilità per un po’. Con Emperor Time attivo la affida a Stealth Dolphin, che la chiama Little Eye: controlla una piccola creatura e ne condivide ciò che vede e sente. Due ore dopo la partenza, a [[woble-hui-guo-rou|Woble]] restano due guardie e due domestici.',
        en: 'A guard driven by a guardian beast stabs three people. Kurapika restrains him and, remembering [[izunavi|Izunavi]]’s advice, uses a new chain tipped with a syringe, Steal Chain, to take his ability for a time. With Emperor Time active he loads it into Stealth Dolphin, which names it Little Eye: it controls a small creature and shares what it sees and hears. Two hours after departure, [[woble-hui-guo-rou|Woble]] is left with two guards and two servants.',
      },
    ),
    told(
      367,
      { it: 'Un corso di Nen', en: 'Offering a Nen class' },
      {
        it: 'Davanti alle guardie mandate da [[zhang-lei-hui-guo-rou|Chowrai]] e da [[tubeppa-hui-guo-rou|Tsubeppa]], Kurapika spiega come i principi hanno ricevuto le bestie guardiane e che queste si nutrono della loro aura. Intanto la madre di [[woble-hui-guo-rou|Woble]] usa in segreto l’abilità presa in prestito su uno scarafaggio, mentre gli altri credono che lo controlli un Hunter, e lo manda a spiare gli altri principi. Kurapika offre di insegnare le basi del Nen in due settimane, se tutti i principi saranno avvisati.',
        en: 'Before guards sent by [[zhang-lei-hui-guo-rou|Zhang Lei]] and [[tubeppa-hui-guo-rou|Tubeppa]], Kurapika explains how the princes received their guardian beasts and that the beasts feed on their aura. Meanwhile [[woble-hui-guo-rou|Woble]]’s mother secretly uses the borrowed ability on a cockroach, while the others believe a Hunter controls it, and sends it to spy on the other princes. Kurapika offers to teach the guards the basics of Nen in two weeks, provided every prince is told.',
      },
    ),
    told(
      369,
      { it: 'Il prezzo di Emperor Time', en: 'The price of Emperor Time' },
      {
        it: 'Dopo aver tenuto attivo Emperor Time per ore, Kurapika sviene, e con lui perde i sensi la madre di [[woble-hui-guo-rou|Woble]], che condivide l’abilità. Si risveglia nove ore dopo. Manda l’insetto verso gli alloggi di [[tserriednich-hui-guo-rou|Tserriednich]], ma nel condotto compaiono i volti della bestia del principe e l’insetto viene perso. Quando la regina gli chiede di insegnarle il Nen, Kurapika le rivela che la sua abilità lo ha già risvegliato in lei. Woble gli tende la mano.',
        en: 'After keeping Emperor Time active for hours, Kurapika faints, and [[woble-hui-guo-rou|Woble]]’s mother, who shares the ability, blacks out with him. He wakes nine hours later. He sends the insect towards [[tserriednich-hui-guo-rou|Tserriednich]]’s quarters, but the faces of the prince’s beast appear in the vent and the insect is lost. When the queen asks him to teach her Nen, Kurapika reveals that his ability has already awakened it in her. Woble reaches out to him.',
      },
    ),
    told(
      370,
      { it: 'La prima lezione', en: 'The first lesson' },
      {
        it: 'La mattina del secondo giorno di viaggio, guardie e domestici di diversi principi si riuniscono negli alloggi di [[woble-hui-guo-rou|Woble]]. Kurapika segna sul pavimento una linea che nessuno deve oltrepassare, tiene testa alla provocazione di [[myuhan|Myuhan]] e promette di insegnare il Nen in due settimane. Dopo le presentazioni dei sedici partecipanti, [[barrigen|Barrigen]] viene ucciso dai serpenti davanti a tutti. Kurapika resta calmo e comincia a cercare l’assassino nascosto tra loro.',
        en: 'On the morning of the voyage’s second day, guards and servants of several princes gather in [[woble-hui-guo-rou|Woble]]’s quarters. Kurapika marks a line on the floor that nobody may cross, faces down [[myuhan|Myuhan]]’s provocation and promises to teach them Nen in two weeks. After the sixteen attendees introduce themselves, [[barrigen|Barrigen]] is killed by snakes in front of everyone. Kurapika stays calm and starts looking for the assassin hidden among them.',
      },
    ),
  ],
  'biscuit-krueger': [
    told(
      350,
      { it: 'Al servizio di Marayam', en: 'Hired by Marayam' },
      {
        it: '[[kurapika|Kurapika]] recluta Biscuit perché si candidi come guardia del corpo di uno dei principi. Lei nota che l’eliminazione delle minacce richiesta negli annunci suona sospetta, e si arrabbia quando Kurapika dà per scontato che sarà pagata anche se la missione finirà prima. Ricordando un consiglio di [[killua|Killua]], Kurapika la lusinga per tenerla dalla sua parte. Biscuit viene assunta da [[marayam-hui-guo-rou|Marayam]].',
        en: '[[kurapika|Kurapika]] recruits Biscuit to apply as a bodyguard to one of the princes. She remarks that the elimination of threats in the postings sounds suspicious, and is angered when Kurapika takes it for granted that she will be paid even if the mission ends early. Recalling [[killua|Killua]]’s advice, Kurapika flatters her to keep her on his side. Biscuit is hired by [[marayam-hui-guo-rou|Marayam]].',
      },
    ),
  ],
  'basho': [
    told(
      350,
      { it: 'Al servizio di Loozlus', en: 'Hired by Luzurus' },
      {
        it: '[[kurapika|Kurapika]] recluta Basho con altri quattro Hunter perché si candidino come guardie del corpo dei principi e raccolgano informazioni su [[tserriednich-hui-guo-rou|Tserriednich]]. Quando [[hanzo|Hanzo]] osserva che Tserriednich ha probabilmente un esercito privato, Basho aggiunge che i principi più ingenui offrono denaro come ricompensa. Basho viene assunto da [[luzurus-hui-guo-rou|Loozlus]].',
        en: '[[kurapika|Kurapika]] recruits Basho with four other Hunters to apply as bodyguards to the princes and gather information on [[tserriednich-hui-guo-rou|Tserriednich]]. When [[hanzo|Hanzo]] remarks that Tserriednich probably has a private army, Basho adds that the naive princes offer money as a reward. Basho is hired by [[luzurus-hui-guo-rou|Luzurus]].',
      },
    ),
  ],
  'hanzo': [
    told(
      350,
      { it: 'Al servizio di Momoze', en: 'Hired by Momoze' },
      {
        it: 'Hanzo è uno degli Hunter che [[kurapika|Kurapika]] recluta come guardie del corpo dei principi. Osserva che [[tserriednich-hui-guo-rou|Tserriednich]] probabilmente non è tra i principi che cercano scorte, perché è esperto e ha di sicuro un esercito privato. Hanzo viene assunto da [[momoze-hui-guo-rou|Momoze]], il dodicesimo principe.',
        en: 'Hanzo is one of the Hunters [[kurapika|Kurapika]] recruits as bodyguards for the princes. He points out that [[tserriednich-hui-guo-rou|Tserriednich]] is probably not among the princes hiring, because he is experienced and likely has a private army. Hanzo is hired by [[momoze-hui-guo-rou|Momoze]], the Twelfth Prince.',
      },
    ),
    told(
      368,
      { it: 'Vendicare Momoze', en: 'Avenging Momoze' },
      {
        it: 'Dopo l’uccisione di [[momoze-hui-guo-rou|Momoze]], Hanzo si rimprovera di non averla protetta e [[biscuit-krueger|Biscuit]] lo consola. Deduce che il colpevole ha usato un clone e che arrestare le sei guardie servirebbe solo a scagionarle se ci fosse un altro omicidio. Chi ha ucciso doveva concentrarsi del tutto sul clone, e Biscuit ne conclude che era una guardia fuori servizio. Hanzo giura di vendicare Momoze e di catturare l’assassino.',
        en: 'After [[momoze-hui-guo-rou|Momoze]] is killed, Hanzo blames himself for failing to protect her, and [[biscuit-krueger|Biscuit]] comforts him. He deduces that the culprit used a clone, and that arresting the six guards would only clear them if another murder happened. The killer had to focus entirely on the clone, so Biscuit concludes it was an off-duty guard. Hanzo vows to avenge Momoze and catch the killer.',
      },
    ),
  ],
  'gon-freecss': [
    told(
      345,
      { it: 'Ritorno all’Isola Balena', en: 'Back to Whale Island' },
      {
        it: 'Gon si accorge di non riuscire più a usare il Nen. Al telefono [[ging-freecss|Ging]] gli spiega che probabilmente la sua aura esce ancora ma lui non la vede: è tornato normale e dovrebbe essere grato di non aver perso di più. Gon torna sull’Isola Balena e aiuta [[mito-freecss|Myto]] in casa. A cena le dice che trovare Ging era il suo obiettivo e che voleva stargli vicino per sentirne la forza, cosa che senza il Nen non può più fare.',
        en: 'Gon finds that he can no longer use Nen. On the phone [[ging-freecss|Ging]] explains that his aura is probably still coming out but he cannot see it: he is back to normal and should be grateful he lost nothing more. Gon returns to Whale Island and helps [[mito-freecss|Mito]] at home. At dinner he tells her that finding Ging was his goal, and that he wanted to be with him to feel his strength, which he can no longer do without Nen.',
      },
    ),
  ],
  'mito-freecss': [
    told(
      345,
      { it: 'A cena con Gon', en: 'Dinner with Gon' },
      {
        it: '[[gon-freecss|Gon]] torna sull’Isola Balena e aiuta Myto con le faccende di casa. A cena lei gli chiede se gli dispiace non essere partito con [[ging-freecss|Ging]], e lui risponde che senza il Nen gli sarebbe solo d’intralcio. Myto conviene che Ging non si è mai comportato da padre, e quando Gon scherza che lui non è stato da meno come figlio lo smentisce con decisione. Poi gli dice che ora è bloccato con lei e torna con due pile di documenti da compilare.',
        en: '[[gon-freecss|Gon]] returns to Whale Island and helps Mito with the housework. At dinner she asks whether he is sorry not to have gone with [[ging-freecss|Ging]], and he answers that without Nen he would only be in the way. Mito agrees that Ging never behaved like a father, and when Gon jokes that he was no proper son either, she firmly rejects it. Then she tells him he is stuck with her now and returns with two piles of papers for him to fill in.',
      },
    ),
  ],
  'hisoka': [
    told(
      351,
      { it: 'Uno scontro fino alla morte', en: 'A fight to the death' },
      {
        it: 'All’Arena Celeste Hisoka e [[chrollo|Quoll]] si affrontano come Maestri di piano in un incontro che entrambi vogliono fino alla morte. Quoll controlla l’arbitro con un’antenna dell’abilità di [[shalnark|Shalnark]] e lo manda contro Hisoka. Hisoka si difende con il Bungee Gum e uccide l’arbitro, ma un’esplosione dal suo corpo lo costringe a rifugiarsi sul soffitto: Quoll ha segnato l’arbitro con un’abilità che trasforma in bombe ciò che tocca.',
        en: 'At Heavens Arena, Hisoka and [[chrollo|Chrollo]] meet as Floor Masters in a match both want to be to the death. Chrollo controls the referee with an antenna from [[shalnark|Shalnark]]’s ability and sends him at Hisoka. Hisoka fights back with Bungee Gum and kills the referee, but a blast from the referee’s body drives him up to the ceiling: Chrollo has marked the referee with an ability that turns what it touches into bombs.',
      },
    ),
    told(
      356,
      { it: 'Circondato dalle bombe', en: 'Surrounded by bombs' },
      {
        it: 'Hisoka si apre la strada tra le marionette di [[chrollo|Quoll]] usando come armi delle teste mozzate, ma perde quattro dita quando la testa che stringe esplode. Centinaia di marionette segnate gli corrono contro, e Quoll gli scaglia addosso degli spettatori. Un’altra esplosione gli porta via parte di una gamba, e quando la folla lo circonda Hisoka viene travolto da un’enorme deflagrazione.',
        en: 'Hisoka fights his way through [[chrollo|Chrollo]]’s puppets using severed heads as weapons, but loses four fingers when the head he is holding explodes. Hundreds of marked puppets rush at him, and Chrollo throws bystanders at him. Another blast takes off part of a leg, and when the crowd closes around him, Hisoka is caught in an enormous explosion.',
      },
    ),
    told(
      357,
      { it: 'Due in meno', en: 'Two down' },
      {
        it: 'Dopo l’esplosione Hisoka viene dato per morto. Mentre [[machi|Machi]] si occupa del suo corpo, il suo Nen gli fa ripartire cuore e polmoni, come lui gli aveva chiesto prima di morire. Si ricompone con il Bungee Gum e il Texture Surprise, immobilizza Machi e le dice di avvertire la Brigata che li combatterà finché non li avrà uccisi tutti. Poi uccide [[kortopi|Kortopi]] e [[shalnark|Shalnark]], e dice che ne restano dieci.',
        en: 'After the explosion, Hisoka is reported dead. While [[machi|Machi]] tends his body, his Nen restarts his heart and lungs, as he asked it to before dying. He patches himself up with Bungee Gum and Texture Surprise, binds Machi and tells her to warn the Troupe that he will fight them until he has killed them all. Then he kills [[kortopi|Kortopi]] and [[shalnark|Shalnark]], and says that ten remain.',
      },
    ),
  ],
  'chrollo': [
    told(
      352,
      { it: 'Le abilità in mostra', en: 'Abilities on display' },
      {
        it: 'Nell’incontro con [[hisoka|Hisoka]], Quoll spiega le sue abilità una per una. Un segnalibro gli permette di tenerne attiva una a libro chiuso mentre ne usa un’altra. Usa le antenne di [[shalnark|Shalnark]], le copie di [[kortopi|Kortopi]], un timbro che impartisce ordini semplici alle marionette, segni che trasformano in bombe e mani che scambiano l’aspetto. Un’abilità resta nel suo libro anche dopo la morte del proprietario, e i suoi segni non si cancellano finché la bomba non esplode.',
        en: 'In his match with [[hisoka|Hisoka]], Chrollo explains his abilities one by one. A bookmark lets him keep one active with the book closed while he uses another. He uses [[shalnark|Shalnark]]’s antennas, [[kortopi|Kortopi]]’s copies, a stamp that gives puppets simple orders, marks that make bombs and hands that swap appearances. One ability stays in his book after its owner’s death, so its marks cannot be removed until the bomb goes off.',
      },
    ),
    told(
      356,
      { it: 'La vittoria all’Arena', en: 'Victory at the arena' },
      {
        it: 'Quoll riempie l’arena di copie degli spettatori, le segna come bombe e ordina loro di distruggere [[hisoka|Hisoka]]. Trasforma in una potente bomba il corpo di una marionetta decapitata da Hisoka e, con il telefono di [[shalnark|Shalnark]], la fa innescare da uno spettatore, così esplode anche la testa che Hisoka tiene in mano. Manda le marionette a farsi esplodere accanto a Hisoka e gli lancia contro i presenti per bloccarlo, finché un’enorme esplosione non lo avvolge.',
        en: 'Chrollo fills the arena with copies of the audience, marks them as bombs and orders them to break [[hisoka|Hisoka]]. He turns the body of a puppet Hisoka beheaded into a powerful bomb and, through [[shalnark|Shalnark]]’s phone, has a bystander set it off, so the head Hisoka is holding explodes too. He sends puppets to blow themselves up next to Hisoka and throws bystanders at him to pin him down, until an enormous explosion engulfs him.',
      },
    ),
    told(
      357,
      { it: 'Il tesoro della nave', en: 'The treasure on the ship' },
      {
        it: 'Dopo l’incontro, Quoll telefona a [[shalnark|Shalnark]]: la famiglia reale di Cakin invita passeggeri comuni sul suo viaggio verso il Nuovo Continente. Progetta che la Brigata rubi il tesoro a bordo e promette di restituire a Shalnark il telefono quando saliranno sulla nave. Shalnark è contento che la Brigata si riunisca al completo. Poco dopo la telefonata, [[hisoka|Hisoka]] uccide Shalnark e [[kortopi|Kortopi]].',
        en: 'After the match, Chrollo phones [[shalnark|Shalnark]]: the Kakin royal family is inviting ordinary passengers on its voyage to the New Continent. He plans for the Troupe to steal the treasure on board and promises to give Shalnark his phone back once they board. Shalnark is glad the whole Troupe will be together again. Shortly after the call, [[hisoka|Hisoka]] kills Shalnark and [[kortopi|Kortopi]].',
      },
    ),
  ],
  'shalnark': [
    told(
      357,
      { it: 'L’ultima telefonata', en: 'The last call' },
      {
        it: 'Shalnark trova [[hisoka|Hisoka]] morto insieme a [[kortopi|Kortopi]] e [[machi|Machi]], spiega che è morto soffocato e se ne va. Al telefono [[chrollo|Quoll]] gli parla del tesoro da rubare sulla nave di Cakin e gli promette di restituirgli il telefono. Shalnark è contento che la Brigata si riunisca. Poi vede Hisoka uscire dal bagno, afferra al volo la testa mozzata di Kortopi e viene ucciso con un solo colpo.',
        en: 'Shalnark finds [[hisoka|Hisoka]] dead with [[kortopi|Kortopi]] and [[machi|Machi]], explains that he died of suffocation and leaves. On the phone [[chrollo|Chrollo]] tells him about stealing the treasure on the Kakin ship and promises to give his phone back. Shalnark is glad the Troupe will be together again. Then he sees Hisoka leave the bathroom, catches Kortopi’s severed head and is killed with a single blow.',
      },
    ),
  ],
  'kortopi': [
    told(
      357,
      { it: 'Ucciso da Hisoka', en: 'Killed by Hisoka' },
      {
        it: 'Dopo lo scontro con [[chrollo|Quoll]], che durante l’incontro ha usato la sua abilità di copia, Kortopi è con [[shalnark|Shalnark]] e [[machi|Machi]] accanto al corpo di [[hisoka|Hisoka]]. Chiede a Machi se viene con loro e ricorda che lei ha rifiutato il denaro mentre Hisoka combatteva. Più tardi Hisoka, tornato in vita, uccide Kortopi in un bagno e lancia la sua testa mozzata a Shalnark.',
        en: 'After the fight with [[chrollo|Chrollo]], who used his copying ability during the match, Kortopi stands with [[shalnark|Shalnark]] and [[machi|Machi]] over [[hisoka|Hisoka]]’s body. He asks Machi whether she is coming and recalls that she refused money while Hisoka fought. Later Hisoka, back from the dead, kills Kortopi in a bathroom and throws his severed head to Shalnark.',
      },
    ),
  ],
  'machi': [
    told(
      357,
      { it: 'Ricucire Hisoka', en: 'Stitching Hisoka' },
      {
        it: 'Machi resta accanto al corpo di [[hisoka|Hisoka]] per curargli le ferite, visto che l’ha pagata in anticipo, e lo ringrazia per averla aiutata a esorcizzare [[chrollo|Quoll]]. Mentre comincia a ricucirlo, l’aura di Hisoka si risveglia e lui torna in vita. Rifiuta il suo aiuto e si ripara da solo. Poi la immobilizza con il Bungee Gum e le dice di avvertire la Brigata che li combatterà tutti. Machi, furiosa, minaccia di ucciderlo.',
        en: 'Machi stays by [[hisoka|Hisoka]]’s body to tend his wounds, since he paid her in advance, and thanks him for helping to exorcise [[chrollo|Chrollo]]. As she starts to stitch him, his aura swells and he comes back to life. He declines her help and repairs himself. Then he binds her with Bungee Gum and tells her to warn the Troupe that he will fight them all. Machi, furious, threatens to kill him.',
      },
    ),
  ],

  // New in phase 2 (chapters 358–370), with the princes’ later stories.
  'tokarine': [
    told(
      359,
      {
        it: 'I trasporti dal Continente Oscuro',
        en: 'Transport from the Dark Continent',
      },
      {
        it: 'Durante una riunione di membri dello Zodiaco e Hunter a bordo della Black Whale si chiarisce il piano: la famiglia reale e i passeggeri andranno verso il Nuovo Continente, mentre gli Hunter passeranno sulla nave di [[morel-mackernasey|Morau]] diretti al vero Continente Oscuro. [[knov|Nobu]] gestirà rifornimenti e personale da una base su un’isola vicina. Tokarine si occuperà del trasporto dal Continente Oscuro alla base. Spiega che la sua abilità non teletrasporta e porta poche persone, e chiede a [[gel|Gell]] di trovare altri trasportatori.',
        en: 'At a meeting of Zodiacs and Hunters aboard the Black Whale, the plan is made clear: the royal family and the passengers will head for the New Continent, while the Hunters will transfer to [[morel-mackernasey|Morel]]’s ship bound for the real Dark Continent. [[knov|Knov]] will manage supplies and personnel from a base on a nearby island. Tokarine will handle transport from the Dark Continent back to the base. She explains that her ability cannot teleport and carries few people, and asks [[gel|Gel]] to find more transporters.',
      },
    ),
  ],
  'kacho-hui-guo-rou': [
    told(
      359,
      { it: 'Il patto delle gemelle', en: 'The twins’ pact' },
      {
        it: 'Dopo il banchetto Kachow e la gemella [[fugetsu-hui-guo-rou|Fugetsu]] cercano di uscire insieme, ma devono andarsene una alla volta. Quando Fugetsu le chiede della successione, Kachow le dice di non abituarsi troppo: lavoreranno insieme per uccidere gli altri, e quando saranno rimaste solo loro convincerà il padre a risparmiare la sorella. Le ricorda di sorridere alle telecamere. Con le sue guardie è molto esigente, e [[melody|Melody]] si chiede se il principe stia ingannando se stesso.',
        en: 'After the banquet, Kacho and her twin [[fugetsu-hui-guo-rou|Fugetsu]] try to leave together, but they must go one at a time. When Fugetsu asks about the succession, Kacho tells her not to get too comfortable: they will work together to kill the others, and once only they are left she will persuade their father to spare her sister. She reminds her to smile for the cameras. With her own guards she is very demanding, and [[melody|Melody]] wonders whether the prince is fooling herself.',
      },
    ),
  ],
  'fugetsu-hui-guo-rou': [
    told(
      359,
      { it: 'Il piano della sorella', en: 'Her sister’s plan' },
      {
        it: 'Fugetsu, l’undicesimo principe, va molto d’accordo con la gemella [[kacho-hui-guo-rou|Kachow]]. Uscendo dal banchetto prova a chiederle della guerra di successione. Kachow le risponde che lavoreranno insieme per uccidere gli altri principi e che, quando saranno rimaste solo loro due, convincerà il padre a risparmiarla. Le chiede anche di far collaborare le sue guardie con le proprie.',
        en: 'Fugetsu, the Eleventh Prince, gets along very well with her twin [[kacho-hui-guo-rou|Kacho]]. Leaving the banquet, she tries to ask her about the succession war. Kacho answers that they will work together to kill the other princes and that, once only the two of them remain, she will persuade their father to spare her. She also asks Fugetsu to have her guards work with her own.',
      },
    ),
  ],
  'melody': [
    told(
      360,
      { it: 'Al servizio di Kachow', en: 'Hired by Kacho' },
      {
        it: 'Melody è tra gli Hunter che [[kurapika|Kurapika]] recluta come guardie del corpo, e viene assunta da [[kacho-hui-guo-rou|Kachow]]. A bordo il principe è molto esigente con le sue guardie, e Melody si chiede se non stia ingannando se stessa. Quando le bestie guardiane invadono gli alloggi di [[woble-hui-guo-rou|Woble]], Kurapika lancia una chiamata d’emergenza e Melody risponde che nella sua zona non c’è nulla.',
        en: 'Melody is one of the Hunters [[kurapika|Kurapika]] recruits as bodyguards, and she is hired by [[kacho-hui-guo-rou|Kacho]]. On board, the prince is very demanding with her guards, and Melody wonders whether she is fooling herself. When guardian beasts flood [[woble-hui-guo-rou|Woble]]’s quarters, Kurapika makes an emergency call and Melody reports that her section is clear.',
      },
    ),
  ],
  'halkenburg-hui-guo-rou': [
    told(
      361,
      { it: 'Il ritiro dalla successione', en: 'Withdrawing from the contest' },
      {
        it: 'A un banchetto Harkenburg, il nono principe, va a salutare il padre, con una bestia guardiana dall’unico occhio appoggiata sulle spalle. Dichiara di volersi ritirare dalla successione: ha accettato di partecipare solo per rispetto e non vuole un trono sporco di sangue. Il re sorride e gli risponde che può fare come preferisce.',
        en: 'At a banquet, Halkenburg, the Ninth Prince, goes to greet his father, a one-eyed guardian beast resting on his shoulders. He declares that he wants to withdraw from the contest: he took part only out of respect and does not want a throne stained with blood. The king smiles and tells him he may do as he wishes.',
      },
    ),
    told(
      366,
      { it: 'Undici guardie', en: 'Eleven guards' },
      {
        it: 'Dopo aver annunciato al padre che vuole ritirarsi, Harkenburg trova tutte e undici le sue guardie del corpo a terra, prive di sensi, e ne resta sconvolto. Quando si sveglia dal sonno le trova invece vive, e pensa di aver soltanto sognato la loro sorte. Intanto la guerra di successione continua intorno a lui.',
        en: 'After telling his father he wants to withdraw, Halkenburg finds all eleven of his bodyguards lying unconscious and is horrified. When he wakes from his sleep, he finds them alive instead, and concludes that he only dreamed of their fate. Meanwhile the succession war goes on around him.',
      },
    ),
  ],
  'momoze-hui-guo-rou': [
    told(
      361,
      { it: 'A maglia nella sua stanza', en: 'Knitting in her room' },
      {
        it: 'Momoze, il dodicesimo principe, ha [[hanzo|Hanzo]] tra le sue guardie. Sua madre decide che a Momoze bastano sei guardie, perché [[marayam-hui-guo-rou|Marayam]] ha bisogno di più protezione. Momoze le dice di non preoccuparsi per lei. Seduta a lavorare a maglia, compatisce chi non è adatto a regnare ed è sopraffatto dalla paura. Alle sue spalle, rivolta dall’altra parte, c’è la sua bestia guardiana: la creatura che ha parlato alla guardia che ha accoltellato tre persone negli alloggi di [[woble-hui-guo-rou|Woble]].',
        en: 'Momoze, the Twelfth Prince, has [[hanzo|Hanzo]] among her guards. Her mother decides that six guards are enough for Momoze, because [[marayam-hui-guo-rou|Marayam]] needs more protection. Momoze tells her not to worry about her. Sitting and knitting, she feels sorry for those unfit to rule who are overwhelmed by fear. Behind her, facing the other way, is her guardian beast: the creature that spoke to the guard who stabbed three people in [[woble-hui-guo-rou|Woble]]’s quarters.',
      },
    ),
    told(
      368,
      { it: 'La morte di Momoze', en: 'Momoze’s death' },
      {
        it: 'Le guardie di Momoze progettano ciascuna di ucciderla in modo che il proprio mandante lo riconosca e le autorità no. Momoze si ritira in camera prima del solito, e lì una guardia del corpo la soffoca, mentre le sei guardie in servizio sono fuori dalla stanza. L’avvertimento arriva troppo tardi. Sua madre chiede che le sei guardie vengano giustiziate. [[kurapika|Kurapika]] spiega che la sua bestia non l’ha protetta perché le aveva già sottratto molta aura. [[hanzo|Hanzo]] piange la sua morte.',
        en: 'Momoze’s guards each plan to kill her in a way their employer will recognise but the authorities will not. She retires to her bedroom earlier than usual, and there a bodyguard suffocates her, while the six guards on duty are outside her room. The warning comes too late. Her mother demands that the six guards be executed. [[kurapika|Kurapika]] explains that her beast failed to protect her because it had already drained much of her aura. [[hanzo|Hanzo]] mourns her.',
      },
    ),
  ],
  'tubeppa-hui-guo-rou': [
    told(
      365,
      {
        it: 'Una tregua in cambio di informazioni',
        en: 'A truce for information',
      },
      {
        it: 'Tsubeppa stringe un’alleanza con [[tserriednich-hui-guo-rou|Tserriednich]]. Capisce che chi ha lanciato la chiamata d’emergenza sulle bestie di Nen vuole imporre uno stallo e chiede a una delle sue guardie informazioni su quell’Hunter. Tramite un’altra guardia offre poi a [[kurapika|Kurapika]] una tregua in cambio di informazioni sulle bestie guardiane, e gli concede un’ora per occuparsi di un soldato di [[benjamin-hui-guo-rou|Benjamin]] che aspetta alla sua porta.',
        en: 'Tubeppa agrees to an alliance with [[tserriednich-hui-guo-rou|Tserriednich]]. She realises that whoever made the emergency call about the Nen beasts wants to force a stalemate, and asks one of her guards for information on that Hunter. Through another guard she then offers [[kurapika|Kurapika]] a truce in exchange for information about the guardian beasts, and gives him an hour to deal with one of [[benjamin-hui-guo-rou|Benjamin]]’s soldiers waiting at his door.',
      },
    ),
  ],
  'camilla-hui-guo-rou': [
    told(
      363,
      { it: 'La morte biologica', en: 'Biological death' },
      {
        it: 'A un banchetto Camilla chiede al padre di confermare che uscire dalla successione significa morire. Il re risponde che il suo successore sarà l’unico sopravvissuto, e che il modo in cui lei lo interpreta fa parte della gara. Quando [[benjamin-hui-guo-rou|Benjamin]] le dice di non badare alle interpretazioni, Camilla risponde che vuole che tutti i fratelli le obbediscano e si uccidano da soli. I due si insultano e lei se ne va.',
        en: 'At a banquet, Camilla asks her father to confirm that leaving the contest means biological death. The king answers that the sole survivor will be his successor, and that how she reads this is part of the contest. When [[benjamin-hui-guo-rou|Benjamin]] tells her not to dwell on interpretations, Camilla says she wants all her siblings to obey her and kill themselves. They trade insults and she leaves.',
      },
    ),
    told(
      366,
      { it: 'Un piano contro due fratelli', en: 'A plan against two brothers' },
      {
        it: 'Camilla ha già avvertito le sue guardie che gli uomini di [[benjamin-hui-guo-rou|Benjamin]] moriranno se entreranno nel suo salotto. Ordina poi a sua madre, [[duazul-hui-guo-rou|Duazul]], di avvicinarsi a [[halkenburg-hui-guo-rou|Harkenburg]] perché lei possa ucciderlo, e di fare lo stesso con Benjamin. Una delle guardie di Benjamin ascolta di nascosto la conversazione e usa la sua abilità di Nen per raccogliere prove del complotto.',
        en: 'Camilla has already warned her guards that [[benjamin-hui-guo-rou|Benjamin]]’s men will die if they enter her living room. She then orders her mother, [[duazul-hui-guo-rou|Duazul]], to get close to [[halkenburg-hui-guo-rou|Halkenburg]] so that she can kill him, and to do the same with Benjamin. One of Benjamin’s guards overhears the conversation and uses his Nen ability to gather physical evidence of the plot.',
      },
    ),
  ],
  'zhang-lei-hui-guo-rou': [
    told(
      363,
      { it: 'Le guardie di Woble', en: 'Woble’s guards' },
      {
        it: 'Chowrai viene a sapere che quasi tutte le guardie di [[woble-hui-guo-rou|Woble]] sono morte e si stupisce che sia stata colpita per prima la più giovane. Poi ricorda che le sue guardie sono scelte dalle altre regine. Una delle sue guardie solleva la questione delle bestie di Nen. Quando arriva un soldato di [[benjamin-hui-guo-rou|Benjamin]] come guardia reale, Chowrai capisce il piano del fratello e vede l’occasione di saperne di più sulle bestie.',
        en: 'Zhang Lei learns that nearly all of [[woble-hui-guo-rou|Woble]]’s guards are dead and is surprised that the youngest was targeted first. Then he remembers that her guards are chosen by the other queens. One of his guards raises the matter of Nen beasts. When one of [[benjamin-hui-guo-rou|Benjamin]]’s soldiers arrives as a royal guard, Zhang Lei sees through his brother’s plan and his own chance to learn more about the beasts.',
      },
    ),
    told(
      366,
      { it: 'Il colloquio con Kurapika', en: 'Talks with Kurapika' },
      {
        it: '[[kurapika|Kurapika]] chiama Chowrai prima di [[benjamin-hui-guo-rou|Benjamin]], e Chowrai gli chiede perché. Kurapika risponde che gli è sembrato più aperto al dialogo, visto che vuole conoscere il Nen. Chowrai invita lui, [[woble-hui-guo-rou|Woble]] e sua madre nei propri alloggi. Lì Kurapika gli spiega le basi del Nen e come i principi hanno ricevuto le bestie guardiane durante il rito. Finito il colloquio, Chowrai manda due delle sue guardie reali ad aiutare Kurapika.',
        en: '[[kurapika|Kurapika]] calls Zhang Lei before [[benjamin-hui-guo-rou|Benjamin]], and Zhang Lei asks why. Kurapika says he seemed more open to discussion because he wants to learn about Nen. Zhang Lei invites him, [[woble-hui-guo-rou|Woble]] and her mother to his quarters. There Kurapika explains the basics of Nen and how the princes received their guardian beasts in the ritual. When the talk ends, Zhang Lei sends two of his royal guards to help Kurapika.',
      },
    ),
  ],
  'vincent': [
    told(
      363,
      { it: 'Alla porta', en: 'At the door' },
      {
        it: 'Vincent suona agli alloggi di [[woble-hui-guo-rou|Woble]] e si presenta al citofono: viene per ordine di [[benjamin-hui-guo-rou|Benjamin]]. Poco dopo, accanto a lui, una domestica giace con un coltello nel petto. Vincent sostiene che lei lo ha aggredito con quell’arma e che non ha potuto fare altro che difendersi, e mostra una fiala di veleno che lei portava con sé. [[kurapika|Kurapika]] capisce che non è una spia ma un assassino.',
        en: 'Vincent rings at [[woble-hui-guo-rou|Woble]]’s quarters and introduces himself over the intercom: he is there on [[benjamin-hui-guo-rou|Benjamin]]’s orders. Moments later a servant lies beside him with a knife in her chest. Vincent claims she came at him with the weapon and that he had no choice but to defend himself, and shows a vial of poison she was carrying. [[kurapika|Kurapika]] realises he is not a spy but an assassin.',
      },
    ),
    told(
      364,
      { it: 'Il veleno nascosto', en: 'The hidden poison' },
      {
        it: '[[kurapika|Kurapika]] evita di combattere con Vincent per le conseguenze legali, mentre Vincent dice di voler collaborare. Quando Kurapika trasferisce un’abilità alla madre di [[woble-hui-guo-rou|Woble]], Vincent lo scambia per un attacco e si distrae. Un altro Hunter della scorta gli si avvicina, Kurapika gli sottrae l’aura e Vincent viene immobilizzato. Per non essere costretto a confessare un tentato omicidio, ingoia un veleno nascosto dietro i denti.',
        en: '[[kurapika|Kurapika]] avoids fighting Vincent because of the legal consequences, while Vincent says he wants to cooperate. When Kurapika transfers an ability to [[woble-hui-guo-rou|Woble]]’s mother, Vincent takes it for an attack and is distracted. Another Hunter of the escort closes in, Kurapika steals Vincent’s aura and he is restrained. To avoid being forced to confess to an attempted assassination, Vincent swallows a poison hidden behind his back teeth.',
      },
    ),
  ],
  'tyson-hui-guo-rou': [
    told(
      366,
      { it: 'Il suo libro', en: 'Her book' },
      {
        it: 'Tyson, il sesto principe e figlia di [[katrono-hui-guo-rou|Katrono]], assume [[izunavi|Izunabi]] come guardia del corpo per il viaggio. Prima della partenza le sue guardie e quelle di [[benjamin-hui-guo-rou|Benjamin]] sono le uniche a non aver sostenuto l’Esame Hunter. A bordo Tyson scopre il Nen e le bestie guardiane che circondano i principi. Mentre la successione comincia, si dedica al suo libro, e Izunabi loda il suo atteggiamento in una situazione così difficile.',
        en: 'Tyson, the Sixth Prince and daughter of [[katrono-hui-guo-rou|Katrono]], hires [[izunavi|Izunavi]] as a bodyguard for the voyage. Before departure, her guards and [[benjamin-hui-guo-rou|Benjamin]]’s are the only ones who did not sit the Hunter Exam. On board, Tyson becomes aware of Nen and of the guardian beasts around the princes. As the succession war begins, she devotes herself to her book, and Izunavi praises her attitude in such difficult circumstances.',
      },
    ),
  ],
  'luzurus-hui-guo-rou': [
    told(
      366,
      { it: 'Una droga salutare', en: 'A healthy drug' },
      {
        it: 'Loozlus, il settimo principe, assume [[basho|Basho]] come guardia del corpo. Tutte le sue guardie erano state bocciate all’Esame Hunter. A bordo scopre il Nen e le bestie guardiane. Fuma una droga salutare che Basho ha creato per lui e parla di distribuirla come terapia per i tossicodipendenti, se diventerà re.',
        en: 'Luzurus, the Seventh Prince, hires [[basho|Basho]] as a bodyguard. All of his guards had failed the Hunter Exam. On board he becomes aware of Nen and of the guardian beasts. He smokes a healthy drug that Basho created for him and talks about distributing it as a therapy for addicts if he becomes king.',
      },
    ),
  ],
  'sale-sale-hui-guo-rou': [
    told(
      366,
      { it: 'Promesse per il banchetto', en: 'Promises for the banquet' },
      {
        it: 'Saresare, l’ottavo principe di Cakin, è figlio di [[swinko-swinko-hui-guo-rou|Swinko-swinko]], una delle mogli legittime del re. A bordo della Black Whale prende alla leggera la guerra di successione, e sua madre ne è in ansia. Lui le assicura che le cose cambieranno al prossimo banchetto.',
        en: 'Salé-salé, the Eighth Prince of Kakin, is the son of [[swinko-swinko-hui-guo-rou|Swinko-swinko]], one of the king’s legal wives. Aboard the Black Whale he treats the succession war lightly, and his mother is anxious about it. He assures her that things will change at the next banquet.',
      },
    ),
  ],
  'swinko-swinko-hui-guo-rou': [
    told(
      366,
      { it: 'In attesa del banchetto', en: 'Waiting for the banquet' },
      {
        it: 'Swinko-swinko è una delle otto mogli legittime del re e la madre di [[sale-sale-hui-guo-rou|Saresare]], l’ottavo principe. A bordo della Black Whale è in ansia perché il figlio prende alla leggera la guerra di successione. Lui le assicura che le cose cambieranno al prossimo banchetto.',
        en: 'Swinko-swinko is one of the king’s eight legal wives and the mother of [[sale-sale-hui-guo-rou|Salé-salé]], the Eighth Prince. Aboard the Black Whale she is anxious because her son treats the succession war lightly. He assures her that things will change at the next banquet.',
      },
    ),
  ],
  'duazul-hui-guo-rou': [
    told(
      366,
      { it: 'L’ordine di Camilla', en: 'Camilla’s order' },
      {
        it: 'Duazul, la seconda regina, ha quattro figli in gara per il trono: [[camilla-hui-guo-rou|Camilla]], [[tubeppa-hui-guo-rou|Tsubeppa]], [[luzurus-hui-guo-rou|Loozlus]] e [[halkenburg-hui-guo-rou|Harkenburg]]. A bordo della Black Whale, Camilla le ordina di avvicinarsi ad Harkenburg perché lei possa ucciderlo, e di fare lo stesso con [[benjamin-hui-guo-rou|Benjamin]]. Una guardia di Benjamin ascolta di nascosto e raccoglie prove del complotto con il Nen.',
        en: 'Duazul, the Second Queen, has four children competing for the throne: [[camilla-hui-guo-rou|Camilla]], [[tubeppa-hui-guo-rou|Tubeppa]], [[luzurus-hui-guo-rou|Luzurus]] and [[halkenburg-hui-guo-rou|Halkenburg]]. Aboard the Black Whale, Camilla orders her to get close to Halkenburg so that Camilla can kill him, and to do the same with [[benjamin-hui-guo-rou|Benjamin]]. One of Benjamin’s guards overhears and gathers evidence of the plot with his Nen.',
      },
    ),
  ],
  'marayam-hui-guo-rou': [
    told(
      367,
      { it: 'Il drago alle sue spalle', en: 'The dragon behind him' },
      {
        it: 'Marayam, il tredicesimo principe, assume [[biscuit-krueger|Biscuit]] come guardia del corpo. Quando le bestie guardiane compaiono nei suoi alloggi, Biscuit riferisce che Marayam sta bene e non si accorge di nulla. Lei e [[hanzo|Hanzo]] notano che la sua bestia sta crescendo. Più tardi un insetto controllato con il Nen entra nella sua stanza e lo vede con la madre, una guardia e la sua bestia: una grande creatura simile a un drago, alle sue spalle.',
        en: 'Marayam, the Thirteenth Prince, hires [[biscuit-krueger|Biscuit]] as a bodyguard. When guardian beasts appear in his quarters, Biscuit reports that Marayam is fine and unaware of them. She and [[hanzo|Hanzo]] notice that his beast is growing. Later an insect controlled through Nen enters his room and sees him with his mother, one guard and his beast: a large dragon-like creature standing behind him.',
      },
    ),
  ],
  'slakka': [
    told(
      367,
      { it: 'Una guardia in prestito', en: 'A guard on loan' },
      {
        it: 'Slakka, una delle guardie di [[zhang-lei-hui-guo-rou|Chowrai]], collabora con i soldati di [[unma-hui-guo-rou|Unma]] perché hanno interessi in comune. Va negli alloggi di [[woble-hui-guo-rou|Woble]] con le due guardie che Chowrai manda ad aiutare [[kurapika|Kurapika]], e si accorda con un soldato di [[benjamin-hui-guo-rou|Benjamin]] per tenere d’occhio gli uomini di Chowrai. Quando Kurapika dice che in due settimane le guardie possono imparare le basi del Nen, Slakka chiede se le istruirà tutte.',
        en: 'Slakka, one of [[zhang-lei-hui-guo-rou|Zhang Lei]]’s guards, works with [[unma-hui-guo-rou|Unma]]’s soldiers because their interests match. He goes to [[woble-hui-guo-rou|Woble]]’s quarters with the two guards Zhang Lei sends to help [[kurapika|Kurapika]], and agrees with one of [[benjamin-hui-guo-rou|Benjamin]]’s soldiers to keep an eye on Zhang Lei’s men. When Kurapika says the guards could learn the basics of Nen in two weeks, Slakka asks whether he will coach everyone.',
      },
    ),
  ],
  // The Nen class of chapter 370: every attendee is named there.
  'barrigen': [
    told(
      370,
      { it: 'I serpenti', en: 'The snakes' },
      {
        it: 'La madre di [[marayam-hui-guo-rou|Marayam]] manda Barrigen a imparare il Nen nel tempo stabilito, e lui è contento di essere stato scelto. Al corso di [[kurapika|Kurapika]] si presenta con gli altri. Quando [[loberry|Loberry]] indica una donna che nessuno vede, Barrigen crolla a terra con le mani alla gola. Quattro serpenti gli si avvolgono intorno e gli prosciugano il sangue. Una guardia spara ai serpenti, ma Barrigen è già morto.',
        en: '[[marayam-hui-guo-rou|Marayam]]’s mother sends Barrigen to learn Nen in the given time, and he is glad to have been chosen. At [[kurapika|Kurapika]]’s class he introduces himself with the others. When [[loberry|Loberry]] points at a woman nobody else can see, Barrigen falls to the floor clutching his neck. Four snakes coil around him and drain his blood. A guard shoots at the snakes, but Barrigen is already dead.',
      },
    ),
  ],
  'belerainte': [
    told(
      370,
      { it: 'Un giudice per il corso', en: 'Judging the class' },
      {
        it: 'La madre di [[marayam-hui-guo-rou|Marayam]] incarica Belerainte di riferirle se il Nen verrà insegnato in modo scorretto. Quando [[kurapika|Kurapika]] chiede chi sappia già usarlo, solo lui e [[furykov|Furykov]] alzano la mano, e Kurapika dice che saranno loro a giudicare il suo insegnamento. Dopo la morte di [[barrigen|Barrigen]], Belerainte si avvicina al corpo e accusa la guardia che ha sparato ai serpenti di averlo ucciso. La guardia risponde che era già morto.',
        en: '[[marayam-hui-guo-rou|Marayam]]’s mother tells Belerainte to report back if Nen is taught incorrectly. When [[kurapika|Kurapika]] asks who can already use it, only he and [[furykov|Furykov]] raise their hands, and Kurapika says the two of them will judge his teaching. After [[barrigen|Barrigen]] dies, Belerainte approaches the body and claims that the guard who shot at the snakes killed him. The guard replies that Barrigen was already dead.',
      },
    ),
  ],
  'danjin': [
    told(
      370,
      { it: 'Trattenere il collega', en: 'Holding his colleague back' },
      {
        it: 'Danjin segue il corso di Nen con [[myuhan|Myuhan]], un’altra guardia di [[tserriednich-hui-guo-rou|Tserriednich]]. Il principe ha ordinato di uccidere tutti i presenti se non impareranno il Nen in due settimane, e Danjin avverte Myuhan che non può evitare di imparare apposta. Quando Myuhan oltrepassa la linea sul pavimento e poi si scaglia contro [[kurapika|Kurapika]], Danjin lo fa rispondere, lo trattiene e si scusa a nome suo.',
        en: 'Danjin attends the Nen class with [[myuhan|Myuhan]], another of [[tserriednich-hui-guo-rou|Tserriednich]]’s guards. The prince has ordered them to kill everyone involved if they fail to learn Nen in two weeks, and Danjin warns Myuhan that he cannot avoid learning on purpose. When Myuhan crosses the line on the floor and later lunges at [[kurapika|Kurapika]], Danjin makes him answer, holds him back and apologises on his behalf.',
      },
    ),
  ],
  'furykov': [
    told(
      370,
      { it: 'Leggere l’aura', en: 'Reading the aura' },
      {
        it: 'Furykov, soldato di [[benjamin-hui-guo-rou|Benjamin]], sa già usare il Nen e segue il corso per scoprire il tipo e le abilità del nemico. Sostiene di riconoscere chi usa il Nen dagli occhi visti di profilo, e conta quattro presenti che fingono di non saperlo usare. Osservando come [[kurapika|Kurapika]] impugna la pistola e la sua aura, lo giudica un materializzatore capace di costringere a confessare. Poi chiede a un altro soldato di Benjamin la sua valutazione e le contromisure.',
        en: 'Furykov, one of [[benjamin-hui-guo-rou|Benjamin]]’s soldiers, already uses Nen and attends the class to learn the enemy’s type and abilities. He claims to spot Nen users by their eyes in profile, and counts four attendees pretending they cannot use it. From the way [[kurapika|Kurapika]] holds his gun and from his aura, he judges him a Conjurer able to force confessions. He then asks another of Benjamin’s soldiers for his assessment and countermeasures.',
      },
    ),
  ],
  'illardia': [
    told(
      370,
      { it: 'Al corso per Fugetsu', en: 'At the class for Fugetsu' },
      {
        it: 'Illardia è una delle due domestiche di [[fugetsu-hui-guo-rou|Fugetsu]] mandate al corso di Nen di [[kurapika|Kurapika]], insieme a [[ladiolus|Ladiolus]]. Le due si chiedono perché si trovino lì. Si presentano con gli altri partecipanti, dopo che Kurapika ha segnato sul pavimento una linea da non oltrepassare. Durante la lezione [[loberry|Loberry]] grida di vedere una donna che nessuno vede, e subito dopo [[barrigen|Barrigen]] viene ucciso dai serpenti davanti a tutti.',
        en: 'Illardia is one of the two servants of [[fugetsu-hui-guo-rou|Fugetsu]] sent to [[kurapika|Kurapika]]’s Nen class, together with [[ladiolus|Ladiolus]]. The two wonder why they are there. They introduce themselves with the other attendees, after Kurapika has marked a line on the floor that no one may cross. During the lesson [[loberry|Loberry]] shouts about a woman nobody else can see, and moments later [[barrigen|Barrigen]] is killed by snakes in front of everyone.',
      },
    ),
  ],
  'ladiolus': [
    told(
      370,
      { it: 'Una lezione interrotta', en: 'An interrupted lesson' },
      {
        it: 'Ladiolus serve [[fugetsu-hui-guo-rou|Fugetsu]] e viene mandata con [[illardia|Illardia]] al corso di Nen negli alloggi di [[woble-hui-guo-rou|Woble]]. Nessuna delle due sa bene perché sia lì. Dopo le presentazioni [[kurapika|Kurapika]] chiede chi sappia già usare il Nen. Poco dopo [[loberry|Loberry]] indica una donna invisibile agli altri, e mentre tutti guardano da quella parte [[barrigen|Barrigen]] cade a terra e muore, avvolto dai serpenti.',
        en: 'Ladiolus serves [[fugetsu-hui-guo-rou|Fugetsu]] and is sent with [[illardia|Illardia]] to the Nen class in [[woble-hui-guo-rou|Woble]]’s quarters. Neither of them is sure why they are there. After the introductions, [[kurapika|Kurapika]] asks who can already use Nen. Soon after, [[loberry|Loberry]] points at a woman the others cannot see, and while everyone looks that way, [[barrigen|Barrigen]] falls to the floor and dies, wrapped in snakes.',
      },
    ),
  ],
  'loberry': [
    told(
      370,
      { it: 'La donna in fondo alla stanza', en: 'The woman at the back' },
      {
        it: 'Loberry, domestica di [[kacho-hui-guo-rou|Kachow]], è contenta di stare lontana dal suo principe per il corso di Nen di [[kurapika|Kurapika]]. Durante le presentazioni vede una donna in fondo alla stanza che [[yuri|Yuri]] non riesce a vedere, e la indica gridando. Mentre tutti guardano da quella parte, [[barrigen|Barrigen]] crolla, strangolato dai serpenti. Più tardi Loberry si guarda intorno e la donna non c’è più.',
        en: 'Loberry, a servant of [[kacho-hui-guo-rou|Kacho]], is glad to be away from her prince for [[kurapika|Kurapika]]’s Nen class. During the introductions she sees a woman at the back of the room whom [[yuri|Yuri]] cannot see, and shouts, pointing at her. While everyone looks that way, [[barrigen|Barrigen]] collapses, strangled by snakes. Afterwards Loberry looks around and the woman is no longer there.',
      },
    ),
  ],
  'yuri': [
    told(
      370,
      { it: 'Nessuna donna', en: 'No woman there' },
      {
        it: 'Anche Yuri serve [[kacho-hui-guo-rou|Kachow]] ed è contenta di allontanarsi dal principe per seguire il corso di Nen. Durante la lezione [[loberry|Loberry]] le chiede chi sia la donna in fondo alla stanza, ma Yuri non vede nessuno. Loberry grida e tutti si voltano, e in quel momento [[barrigen|Barrigen]] muore, strangolato dai serpenti. Dopo, Yuri chiede a Loberry della donna, ma Loberry non la vede più.',
        en: 'Yuri also serves [[kacho-hui-guo-rou|Kacho]] and is glad to get away from the prince to attend the Nen class. During the lesson [[loberry|Loberry]] asks her who the woman at the back of the room is, but Yuri sees nobody. Loberry shouts and everyone turns, and at that moment [[barrigen|Barrigen]] dies, strangled by snakes. Afterwards Yuri asks Loberry about the woman, but Loberry no longer sees her.',
      },
    ),
  ],
  'longhi': [
    told(
      370,
      { it: 'Un messaggio riservato', en: 'A private message' },
      {
        it: 'Longhi segue il corso di Nen con [[maor|Maor]]: [[tubeppa-hui-guo-rou|Tsubeppa]] li ha mandati a reclutare [[kurapika|Kurapika]] e, se possibile, l’intera scorta di [[woble-hui-guo-rou|Woble]]. I due ne discutono e concludono che una lettera è il modo migliore per trattare in segreto. Si presentano con gli altri partecipanti e assistono alla morte di [[barrigen|Barrigen]], ucciso dai serpenti durante la lezione.',
        en: 'Longhi attends the Nen class with [[maor|Maor]]: [[tubeppa-hui-guo-rou|Tubeppa]] has sent them to recruit [[kurapika|Kurapika]] and, if possible, all of [[woble-hui-guo-rou|Woble]]’s camp. The two discuss it and decide that a letter is the best way to negotiate in secret. They introduce themselves with the other attendees and witness the death of [[barrigen|Barrigen]], killed by snakes during the lesson.',
      },
    ),
  ],
  'maor': [
    told(
      370,
      { it: 'L’inviato di Tsubeppa', en: 'Tubeppa’s envoy' },
      {
        it: 'Per conto di [[tubeppa-hui-guo-rou|Tsubeppa]], Maor aveva già offerto a [[kurapika|Kurapika]] una tregua in cambio di informazioni sulle bestie guardiane, e aveva ascoltato la sua spiegazione. Ora segue il corso di Nen con [[longhi|Longhi]], con l’incarico di reclutare Kurapika. I due concludono che una lettera è il modo migliore per trattare in segreto. Durante la lezione [[barrigen|Barrigen]] viene ucciso dai serpenti.',
        en: 'On [[tubeppa-hui-guo-rou|Tubeppa]]’s behalf, Maor had already offered [[kurapika|Kurapika]] a truce in exchange for information about the guardian beasts, and listened to his explanation. Now he attends the Nen class with [[longhi|Longhi]], under orders to recruit Kurapika. The two decide that a letter is the best way to negotiate in secret. During the lesson [[barrigen|Barrigen]] is killed by snakes.',
      },
    ),
  ],
  'mushaho': [
    told(
      370,
      { it: 'Un incarico importante', en: 'An important assignment' },
      {
        it: 'Mushaho, guardia di [[sale-sale-hui-guo-rou|Saresare]], capisce quanto sia importante il suo incarico al corso di Nen. Negli alloggi di [[woble-hui-guo-rou|Woble]] [[kurapika|Kurapika]] segna una linea sul pavimento e promette di insegnare le basi in due settimane. Mushaho si presenta con gli altri partecipanti. Poco dopo assiste alla morte di [[barrigen|Barrigen]], a cui i serpenti prosciugano il sangue davanti a tutti.',
        en: 'Mushaho, a guard of [[sale-sale-hui-guo-rou|Salé-salé]], understands how important his assignment to the Nen class is. In [[woble-hui-guo-rou|Woble]]’s quarters, [[kurapika|Kurapika]] marks a line on the floor and promises to teach the basics in two weeks. Mushaho introduces himself with the other attendees. Soon after, he witnesses the death of [[barrigen|Barrigen]], whose blood is drained by snakes in front of everyone.',
      },
    ),
  ],
  'myuhan': [
    told(
      370,
      { it: 'Oltre la linea', en: 'Over the line' },
      {
        it: 'Myuhan, guardia di [[tserriednich-hui-guo-rou|Tserriednich]], è eccitato dall’ordine del principe di uccidere tutti se non impareranno il Nen in due settimane. All’inizio del corso oltrepassa apposta il nastro sul pavimento. [[kurapika|Kurapika]] gli chiede nome e incarico e lo avverte, e Myuhan torna indietro promettendo di non farlo più. Quando Kurapika definisce la sua ostilità un riflesso del suo capo, Myuhan scatta in avanti e [[danjin|Danjin]] lo ferma. Kurapika, pistola in mano, conclude che era un complimento.',
        en: 'Myuhan, a guard of [[tserriednich-hui-guo-rou|Tserriednich]], is excited by the prince’s order to kill everyone if they fail to learn Nen in two weeks. At the start of the class he deliberately steps over the tape on the floor. [[kurapika|Kurapika]] asks his name and post and warns him, and Myuhan steps back, promising not to do it again. When Kurapika calls his hostility a reflection of his leader, Myuhan lunges forward and [[danjin|Danjin]] stops him. Kurapika, gun drawn, finishes: it was a compliment.',
      },
    ),
  ],
  'satobi': [
    told(
      370,
      { it: 'Il timore della manipolazione', en: 'Fear of manipulation' },
      {
        it: 'Satobi, guardia di [[luzurus-hui-guo-rou|Loozlus]], è contento di poter parlare con le guardie degli altri principi al corso di Nen, ma teme che chi tiene la lezione li stia manipolando. Ascolta [[kurapika|Kurapika]] promettere di insegnare le basi in due settimane e si presenta con gli altri. Durante la lezione [[barrigen|Barrigen]] viene ucciso dai serpenti davanti ai partecipanti.',
        en: 'Satobi, a guard of [[luzurus-hui-guo-rou|Luzurus]], is glad of the chance to talk with other princes’ guards at the Nen class, but worries that whoever runs it is manipulating them. He hears [[kurapika|Kurapika]] promise to teach the basics in two weeks and introduces himself with the others. During the lesson [[barrigen|Barrigen]] is killed by snakes in front of the attendees.',
      },
    ),
  ],
  'shedule': [
    told(
      370,
      { it: 'Il segno della piuma', en: 'The feather mark' },
      {
        it: 'Shedule e [[yuhirai|Yuhirai]] sono guardie di [[halkenburg-hui-guo-rou|Harkenburg]], mandate dal principe al corso di Nen per capire cosa siano le bestie di Nen. Guardano i segni a forma di piuma che hanno sulle mani e pensano che vengano dalla bestia del principe e mostrino la sua determinazione. Quando [[barrigen|Barrigen]] viene ucciso dai serpenti restano sconvolti, e si chiedono se l’attacco servisse a impedire loro di imparare il Nen.',
        en: 'Shedule and [[yuhirai|Yuhirai]] are guards of [[halkenburg-hui-guo-rou|Halkenburg]], sent by the prince to the Nen class to learn what Nen beasts are. They look at the feather-shaped marks on their hands and think they come from the prince’s beast and show his resolve. When [[barrigen|Barrigen]] is killed by snakes they are stunned, and wonder whether the attack was meant to stop them learning Nen.',
      },
    ),
  ],
  'yuhirai': [
    told(
      370,
      { it: 'La bestia di un altro principe', en: 'Another prince’s beast' },
      {
        it: 'Yuhirai segue il corso di Nen con [[shedule|Shedule]]: [[halkenburg-hui-guo-rou|Harkenburg]] vuole sapere cosa siano le bestie di Nen. Sulle mani hanno un segno a forma di piuma, che attribuiscono alla bestia del principe. Dopo che [[barrigen|Barrigen]] muore, strangolato dai serpenti, i due si chiedono se a ucciderlo sia stata la bestia di un principe che non ha mandato nessuno al corso.',
        en: 'Yuhirai attends the Nen class with [[shedule|Shedule]]: [[halkenburg-hui-guo-rou|Halkenburg]] wants to know what Nen beasts are. They bear a feather-shaped mark on their hands, which they put down to the prince’s beast. After [[barrigen|Barrigen]] dies, strangled by snakes, the two wonder whether he was killed by the beast of a prince who sent no one to the class.',
      },
    ),
  ],
  'tenftory': [
    told(
      370,
      { it: 'Chi parla con l’insegnante', en: 'Who talks to the teacher' },
      {
        it: '[[zhang-lei-hui-guo-rou|Chowrai]] ordina a Tenftory di osservare chiunque parli con [[kurapika|Kurapika]], che considera il protagonista della situazione. Al corso di Nen Tenftory decide di tenere d’occhio soprattutto le guardie del primo, del quarto e del quinto principe. Si presenta con gli altri partecipanti e assiste alla morte di [[barrigen|Barrigen]], ucciso dai serpenti durante la lezione.',
        en: '[[zhang-lei-hui-guo-rou|Zhang Lei]] orders Tenftory to watch anyone who talks with [[kurapika|Kurapika]], whom he considers the key player. At the Nen class, Tenftory decides to be most wary of the First, Fourth and Fifth Princes. He introduces himself with the other attendees and witnesses the death of [[barrigen|Barrigen]], killed by snakes during the lesson.',
      },
    ),
  ],
} satisfies Record<string, Timeline<Story>>
