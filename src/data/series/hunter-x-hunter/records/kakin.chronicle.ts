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

/**
 * Kakin stories, chapters 340–370 (#1155), 371–400 (#1157) and 401–420 (#1159):
 * the Zodiacs, Heavens Arena, the Black Whale, its Mafia, Meteor City and
 * special martial law.
 */
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
    told(
      412,
      { it: 'Mille cause respinte', en: 'A thousand lawsuits thrown out' },
      {
        it: 'Nella sua cella al primo livello, Beyond chiede a [[kanzai|Kanzai]] un nuovo libro, poi carta e penna, che Kanzai gli nega per motivi di sicurezza; Beyond scherza sul tagliargli la testa con il libro, e gli chiede di organizzare un incontro con qualcuno con cui vuole parlare. Due giorni dopo [[cleapatro|Cleapatro]] arriva con scatoloni di documenti: tutte le 1.047 cause che ha intentato sono state respinte. Mentre Kanzai e [[saiyu|Saiyu]] controllano che tra le carte non ci sia niente di sospetto, Beyond e Cleapatro litigano sulla visione dei diritti umani di Cakin.',
        en: 'In his cell on Tier 1, Beyond asks [[kanzai|Kanzai]] for a new book, then for pen and paper, which Kanzai refuses for security reasons; Beyond jokes about taking his head off with the book, and asks him to arrange a meeting with someone he wants to talk to. Two days later [[cleapatro|Cleapatro]] arrives with boxes of documents: all 1,047 of the lawsuits he filed have been thrown out. While Kanzai and [[saiyu|Saiyu]] check the papers for anything suspicious, Beyond and Cleapatro argue over Kakin’s view of human rights.',
      },
    ),
    told(
      415,
      { it: 'Il padre di Furykov', en: 'Furykov’s father' },
      {
        it: 'Due mesi prima della partenza, [[furykov|Furykov]] chiama Beyond e gli chiede se c’è lui dietro la maledizione che ha addosso. Beyond ride e lo ammette: attaccata subito dopo la nascita di Furykov, da oltre vent’anni gli prende l’aura, e alla sua morte maledirà a morte un principe, dando anche la sua abilità a [[benjamin-hui-guo-rou|Benjamin]]. Beyond non rivelerà altro, si vanta di scontare gli arresti domiciliari in una villa di lusso e, per rispetto del loro legame di padre e figlio, gli consiglia: solo una successione con un unico superstite porta al successore la benedizione della bestia.',
        en: 'Two months before departure, [[furykov|Furykov]] calls Beyond and asks whether he is behind the curse on him. Beyond laughs and admits it: attached right after Furykov’s birth, it has fed on his aura for over twenty years, and at his death it will curse a prince to death and give his ability to [[benjamin-hui-guo-rou|Benjamin]]. Beyond will reveal nothing more, brags that his house arrest is in a luxurious mansion and, out of respect for their bond as father and son, advises that only a contest with one survivor brings the beast’s blessing to the successor.',
      },
    ),
  ],
  'zigg-zoldyck': [
    told(
      344,
      { it: 'La spedizione di Netero', en: 'Netero’s expedition' },
      {
        it: '[[ging-freecss|Ging]] racconta a tre membri della squadra di [[beyond-netero|Beyond]] un viaggio nel Continente Oscuro. Vi presero parte [[netero|Netero]], [[linne-horsdoeuvre|Rinne]] e Zigg, e secondo Netero il continente è immenso. Il racconto mostra i tre davanti a creature molto più grandi di loro. Per impedire a Beyond di tornarci, Netero e i V5 hanno poi vietato il viaggio.',
        en: '[[ging-freecss|Ging]] tells three members of [[beyond-netero|Beyond]]’s team about a journey to the Dark Continent. [[netero|Netero]], [[linne-horsdoeuvre|Linne]] and Zigg took part in it, and according to Netero the continent is gigantic. The account shows the three facing creatures much larger than themselves. To keep Beyond from going back there, Netero and the V5 later banned the journey.',
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
    told(
      376,
      { it: 'Uno Specializzatore', en: 'A Specialist' },
      {
        it: 'Tserriednich impara il Nen dalla sua guardia del corpo. Quando [[danjin|Danjin]] gli riferisce la morte di [[myuhan|Myuhan]], il principe ipotizza che [[kurapika|Kurapika]] sia un Manipolatore che deve insegnare il Nen per attivare la sua abilità, e la rapidità del suo ragionamento sbalordisce l’insegnante. Poi vuole fare l’esame dell’acqua: l’acqua bolle, diventa sporca e manda un odore putrido. È uno Specializzatore, e l’insegnante ne è inorridita.',
        en: 'Tserriednich is learning Nen from his bodyguard. When [[danjin|Danjin]] reports [[myuhan|Myuhan]]’s death to him, the prince suggests that [[kurapika|Kurapika]] may be a Manipulator who has to teach Nen to activate his ability, and the speed of his reasoning astonishes his teacher. Then he asks to take the water divination test: the water boils, turns filthy and gives off a putrid smell. He is a Specialist, and his teacher is horrified.',
      },
    ),
    told(
      387,
      { it: 'Dieci secondi avanti', en: 'Ten seconds ahead' },
      {
        it: 'Durante l’allenamento dello Zetsu, la guardia del corpo di Tserriednich vede formarsi alle sue spalle una seconda bestia, nata dall’istinto. Mentre suona la musica del banchetto gli spara, ma il corpo che vede svanisce e il principe le compare alle spalle, illeso. Con gli occhi chiusi nello Zetsu vede dieci secondi nel futuro e può agire diversamente da ciò che vedono gli altri: così si è scansato. La sua bestia la avverte di non ingannarlo più. Tserriednich invita [[melody|Melody]], di cui ha sentito la musica, e decide di padroneggiare l’abilità per dominare la successione e il mondo.',
        en: 'During Zetsu training, Tserriednich’s bodyguard sees a second beast take shape behind him, born of instinct. As the banquet’s music plays she shoots him, but the body she sees vanishes and the prince appears behind her, unharmed. With his eyes closed in Zetsu he sees ten seconds into the future and can act differently from what others see: so he stepped aside. His beast warns her not to deceive him again. Tserriednich invites [[melody|Melody]], whose music he heard, and resolves to master the ability to dominate the contest and the world.',
      },
    ),
    told(
      404,
      { it: 'Lo Zetsu in pochi secondi', en: 'Zetsu in seconds' },
      {
        it: 'Tserriednich si allena nello Zetsu con un’altra guardia del corpo, correndo sul tapis roulant e giocando al telefono. Scende sotto i dieci secondi e, in tre giorni, sotto i tre e mezzo: impara in un giorno ciò che al suo istruttore richiede sei mesi. L’istruttore, che usa lo Zetsu dalla nascita, sospetta che il principe attivi un’abilità mentre è in Zetsu. Tserriednich giura di scendere sotto il secondo anche a costo di metterci due settimane, e tra le sue mani si forma una grande sfera d’aura. Ordina anche a uno dei suoi uomini di continuare a incontrare [[melody|Melody]] per conquistarla prima di [[benjamin-hui-guo-rou|Benjamin]].',
        en: 'Tserriednich trains in Zetsu with another of his bodyguards, jogging on a treadmill and playing on his phone. He gets under ten seconds, and within three days under three and a half: he learns in a day what takes his trainer six months. The trainer, who has used Zetsu since birth, suspects that the prince activates an ability while in it. Tserriednich vows to get under one second even if it takes two weeks, and a large ball of aura forms between his hands. He also orders one of his men to keep meeting [[melody|Melody]] and win her over before [[benjamin-hui-guo-rou|Benjamin]] does.',
      },
    ),
    told(
      418,
      { it: 'Una morte messa in scena', en: 'A staged death' },
      {
        it: 'L’abilità di Tserriednich si attiva quando è in Zetsu con gli occhi chiusi: vede i dieci secondi successivi, e se apre gli occhi questi si svolgono davvero, mentre lui può muoversi senza essere visto finché resta in Zetsu. Prima che arrivi [[benjamin-hui-guo-rou|Benjamin]], ordina ai suoi uomini di non resistere e dice a una guardia che sta per morire. Benjamin gli spara, gli schiaccia la testa e lo lascia per morto; guardando da un lato, Tserriednich trova il tutto troppo sbrigativo. Gli altri continuano a vedere il suo cadavere. Scrive un testamento che vieta di vedere la salma, riempie la bara di pistole e se ne va, armato, con meno di quattro ore di abilità rimaste.',
        en: 'Tserriednich’s ability works when he is in Zetsu with his eyes shut: he sees the next ten seconds, and if he opens his eyes they play out, while he can move unseen as long as he stays in Zetsu. Before [[benjamin-hui-guo-rou|Benjamin]] arrives, he tells his men not to resist and tells a guard that he is going to die. Benjamin shoots him, crushes his head and leaves him for dead; watching from the side, Tserriednich finds it all too hasty. The others still see his corpse. He writes a last will forbidding any viewing, fills his coffin with guns and sets off, armed, with just under four hours of his ability left.',
      },
    ),
    told(
      419,
      { it: 'Fuori dal raggio', en: 'Out of range' },
      {
        it: 'Ancora invisibile, Tserriednich esce travestito dalla stanza 1004 e stima che la sua abilità abbia un raggio di circa trentasei metri. Oltre quel limite si spezza, in un corridoio pieno di soldati: ne uccide alcuni, ne prende uno in ostaggio e vede di nuovo i dieci secondi successivi, poi corre mentre alcuni soldati crollano credendo di essere stati colpiti. Provando le regole, scopre che chi entra nel raggio dopo l’attivazione non ne è toccato. Quando i soldati girano il suo “cadavere”, questo svanisce. Si dirige verso il secondo livello attraverso l’area dei divertimenti VVIP e arriva al casinò.',
        en: 'Still unseen, Tserriednich walks out of Room 1004 in disguise and estimates his ability’s range at about thirty-six metres. Past that edge it breaks, in a corridor full of soldiers: he kills several, takes one hostage and sees the next ten seconds again, then runs as some soldiers collapse believing they have been shot. Testing the rules, he learns that people who enter the sphere after it starts are not affected. When the soldiers flip his “corpse”, it vanishes. He heads for Tier 2 through the VVIP entertainment area and reaches the casino.',
      },
    ),
    told(
      420,
      { it: 'L’uomo alla slot', en: 'The man at the slot machine' },
      {
        it: 'Nel casinò deserto Tserriednich trova soldati morti con la gola tagliata e un uomo, [[hisoka|Hisoka]], che gioca a pachinko nonostante la legge marziale. Avvicinandosi in Zetsu lo perde di vista, poi lo sente alle sue spalle. Chiude gli occhi e vede i dieci secondi successivi: spara, Hisoka gli taglia la gola, lo smaschera ed è deluso che non sia un Ragno. Mentre la scena si svolge, Hisoka nota il punto in cui dovrebbe esserci la bestia del principe, guarda dritto verso il vero Tserriednich e se ne va. Esaltato, Tserriednich giura di superare quel livello di Nen e raggiunge il ponte esterno, dove i collegamenti con i livelli inferiori sono stati ritirati.',
        en: 'In the empty casino Tserriednich finds soldiers dead with their throats slit, and a man, [[hisoka|Hisoka]], playing pachinko despite martial law. Creeping closer in Zetsu, he loses sight of him, then senses him behind him. He shuts his eyes and sees the next ten seconds: he fires, Hisoka slits his throat, unmasks him and is disappointed that he is not a Spider. As the scene plays out, Hisoka notices where the prince’s beast should be, looks straight at the real Tserriednich and walks away. Thrilled, Tserriednich vows to surpass that level of Nen, and reaches the deck outside, where the bridges to the lower tiers are gone.',
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
    told(
      373,
      { it: 'L’eredità dei soldati', en: 'His soldiers’ legacy' },
      {
        it: 'Benjamin ordina alle sue guardie di lasciar passare [[camilla-hui-guo-rou|Camilla]] quando arriva ai suoi alloggi armata, dopo la morte di uno dei suoi soldati. Benjamin ordina di arrestarla; lei gli scarica addosso la pistola, e lui para i colpi con l’aura e non reagisce. Il suo Nen gli permette di ereditare a certe condizioni le abilità dei soldati fedeli: ora ha quella di [[vincent|Vincent]] e quella del soldato ucciso da Camilla, che gli mostra tutto ciò che lei fa.',
        en: 'Benjamin orders his guards to let [[camilla-hui-guo-rou|Camilla]] through when she arrives at his quarters armed, after the death of one of his soldiers. Benjamin calls for her arrest; she empties her gun at him, and he blocks the shots with his aura and does not strike back. His Nen lets him inherit, under certain conditions, the abilities of loyal soldiers: he now holds [[vincent|Vincent]]’s and that of the soldier Camilla killed, which shows him everything she does.',
      },
    ),
    told(
      382,
      { it: 'L’ordine contro Harkenburg', en: 'The order against Halkenburg' },
      {
        it: 'Un soldato di Benjamin gli comunica via radio che l’omicidio di [[sale-sale-hui-guo-rou|Saresare]] è riuscito. Quando [[halkenburg-hui-guo-rou|Harkenburg]] torna dal re con una nuova determinazione, Benjamin ordina al soldato che lo sorveglia di ucciderlo e prenderne l’abilità, ma la freccia del principe ha la meglio sul soldato.',
        en: 'A soldier of Benjamin’s radios him that the assassination of [[sale-sale-hui-guo-rou|Salé-salé]] has succeeded. When [[halkenburg-hui-guo-rou|Halkenburg]] returns from the king with new resolve, Benjamin orders the soldier posted with him to kill him and take his ability, but the prince’s arrow overpowers the soldier.',
      },
    ),
    told(
      389,
      { it: 'Separarlo dai suoi uomini', en: 'Cut off from his men' },
      {
        it: 'Dopo che uno dei suoi soldati si è sparato davanti agli alloggi di [[luzurus-hui-guo-rou|Loozlus]], Benjamin sente un nuovo tremito d’aura e un altro soldato, mandato da [[halkenburg-hui-guo-rou|Harkenburg]], urla alla radio, e Benjamin spegne il ricevitore. Capisce di aver sottovalutato il fratello. Su consiglio del capitano delle sue guardie fa arrestare Harkenburg per omicidio premeditato, separandolo dagli uomini di cui la sua abilità ha bisogno. Una squadra speciale prende il principe in custodia, e Benjamin decide di colpire al processo.',
        en: 'After one of his soldiers has shot himself outside [[luzurus-hui-guo-rou|Luzurus]]’s quarters, Benjamin feels a new rumbling of aura, and another soldier, sent to [[halkenburg-hui-guo-rou|Halkenburg]], screams over the radio, and Benjamin switches the receiver off. He realises he underestimated his brother. On the advice of his guard captain he has Halkenburg arrested for premeditated murder, cutting him off from the men his ability needs. A special task force takes the prince into custody, and Benjamin plans to strike at the trial.',
      },
    ),
    told(
      403,
      { it: 'Un attacco al suo capitano', en: 'An attack on his captain' },
      {
        it: 'Benjamin viene a sapere che il processo tra [[balsamilco|Balsamilco]] e [[halkenburg-hui-guo-rou|Harkenburg]] non è cominciato: Balsamilco ha avuto problemi con l’attrezzatura e il principe si è sentito male. Capisce che l’abilità di Harkenburg ha colpito il suo capitano e sospetta che ora sia manipolato, ma gli lascia decidere come agire e vuole solo risultati. Se Balsamilco lascerà l’Ufficio di Giustizia senza avvertire, dichiarerà la legge marziale, e mette in allerta i suoi uomini. Più tardi Balsamilco gli comunica che la missione è compiuta. Benjamin liquida come voci la lettera di [[kacho-hui-guo-rou|Kachow]] che gli porta [[fugetsu-hui-guo-rou|Fugetsu]].',
        en: 'Benjamin learns that [[balsamilco|Balsamilco]]’s trial against [[halkenburg-hui-guo-rou|Halkenburg]] has not started: Balsamilco had equipment trouble and the prince fell ill. He works out that Halkenburg’s ability struck his captain and suspects he is now manipulated, but lets him make the call and wants only results. If Balsamilco leaves the Justice Bureau without warning, he will declare martial law, and he puts his men on red alert. Later Balsamilco reports that the mission is complete. Benjamin dismisses as rumours the letter from [[kacho-hui-guo-rou|Kacho]] that [[fugetsu-hui-guo-rou|Fugetsu]] brings him.',
      },
    ),
    told(
      410,
      {
        it: 'Il comando all’Ufficio di Giustizia',
        en: 'Command at the Justice Bureau',
      },
      {
        it: 'Dopo la dichiarazione della legge marziale speciale, Benjamin viene a sapere che sembra trovato il covo degli Heil-Ly al terzo livello e ordina di cercare [[zhang-lei-hui-guo-rou|Chowrai]] e [[luzurus-hui-guo-rou|Loozlus]]. Calcola di avere circa nove ore e mezza prima di entrare in coma, e vuole eliminare i principi rimasti ed essere nominato ufficialmente successore prima di allora. All’Ufficio di Giustizia annuncia a [[mizaistom-nana|Mizaistom]], [[botobai-gigante|Botobai]] e [[kaiser|Kaiser]] che unirà i tre poteri dello Stato sotto l’esercito, accusando [[tserriednich-hui-guo-rou|Tserriednich]] e [[halkenburg-hui-guo-rou|Harkenburg]] di un attentato con un’arma biologica.',
        en: 'After special martial law is declared, Benjamin hears that the Heil-Ly hideout seems to have been found on Tier 3 and orders a search for [[zhang-lei-hui-guo-rou|Zhang Lei]] and [[luzurus-hui-guo-rou|Luzurus]]. He reckons he has about nine and a half hours before falling into a coma, and wants to eliminate the remaining princes and be officially named successor before then. At the Justice Bureau he tells [[mizaistom-nana|Mizaistom]], [[botobai-gigante|Botobai]] and [[kaiser|Kaiser]] that he will unite the three branches of government under the military, blaming [[tserriednich-hui-guo-rou|Tserriednich]] and [[halkenburg-hui-guo-rou|Halkenburg]] for a bioweapon plot.',
      },
    ),
    told(
      413,
      { it: 'Tradito dalla madre', en: 'Betrayed by his mother' },
      {
        it: 'Sentendo un forte tremore, Benjamin capisce che è morto solo il corpo di [[halkenburg-hui-guo-rou|Harkenburg]] e ordina di trattenere [[balsamilco|Balsamilco]] e i seguaci del fratello. Poi vomita e riconosce i sintomi dell’arma biologica. Dalla sua cassaforte manca solo la fiala presa da Balsamilco, e conclude che sua madre [[unma-hui-guo-rou|Unma]] lo ha tradito attraverso [[furykov|Furykov]]. Furykov lo ammette, e Benjamin, convinto dalle sue ragioni, gli ordina di continuare a servirlo. Fissa la legge marziale speciale per le 14:15: le guardie degli altri principi vanno uccise a vista, gli Hunter lasciati stare e i principi riuniti nella stanza 1001. Infila una fiala in una scarpa.',
        en: 'Feeling a strong rumbling, Benjamin realises that only [[halkenburg-hui-guo-rou|Halkenburg]]’s body has died, and orders his soldiers to detain [[balsamilco|Balsamilco]] and his brother’s followers. Then he vomits and recognises the bioweapon’s symptoms. Only the vial Balsamilco took is missing from his safe, so he concludes that his mother [[unma-hui-guo-rou|Unma]] has betrayed him through [[furykov|Furykov]]. Furykov admits it, and Benjamin, convinced by his reasons, orders him to keep serving him. He sets special martial law for 2:15 p.m.: the other princes’ guards are to be shot on sight, the Hunters left alone, and the princes gathered in Room 1001. He slips a vial into his shoe.',
      },
    ),
    told(
      416,
      { it: 'La maledizione di Camilla', en: 'Camilla’s curse' },
      {
        it: 'Sotto la legge marziale speciale, Benjamin irrompe nella stanza di [[camilla-hui-guo-rou|Camilla]] con [[furykov|Furykov]]. Quando lei gli spara, i proiettili rimbalzano sulla sua aura, e lui uccide le sue due domestiche, tra cui [[fukataki|Fukataki]]. Sa che l’abilità di Camilla colpisce chi la uccide, quindi non le spara. Colpito dalla maledizione di una soldatessa di Camilla morente, contagia Camilla in silenzio con l’arma biologica e le chiede chi potrebbe uccidere la sua abilità per riportarla in vita. Nella stanza 1004 nota l’aura di [[danjin|Danjin]] e lo fa portare via per interrogarlo.',
        en: 'Under special martial law, Benjamin storms into [[camilla-hui-guo-rou|Camilla]]’s room with [[furykov|Furykov]]. When she shoots at him, the bullets bounce off his aura, and he kills her two servants, [[fukataki|Fukataki]] among them. He knows that her ability strikes back if she is killed, so he does not shoot her. Cursed by one of Camilla’s soldiers as she dies, he silently infects Camilla with the bioweapon, and asks her whom her ability could kill to bring her back. In Room 1004 he notices [[danjin|Danjin]]’s aura and has him taken for questioning.',
      },
    ),
    told(
      417,
      { it: 'Contro sua madre', en: 'Against his mother' },
      {
        it: 'Benjamin calpesta il [[tserriednich-hui-guo-rou|Tserriednich]] a cui ha sparato e gli schiaccia la testa, mentre una guardia del principe si chiede se ciò che vede sia reale. Offre la grazia a chi testimonierà contro il fratello e carica una seconda dose dell’arma biologica nello stivale. Nella stanza 1001 contagia [[tubeppa-hui-guo-rou|Tsubeppa]] e [[tyson-hui-guo-rou|Tyson]], poi parte per l’Ufficio di Giustizia con [[balsamilco|Balsamilco]] e [[coventoba|Coventoba]]. Si scopre l’abilità della sua bestia: dopo la sua morte si fonderà con la sua abilità e diventerà la bestia di un suo consanguineo. Furioso perché sua madre [[unma-hui-guo-rou|Unma]] ha sfruttato la lealtà di [[furykov|Furykov]] per provocare la legge marziale, decide di affrontarla.',
        en: 'Benjamin stamps on the [[tserriednich-hui-guo-rou|Tserriednich]] he has shot and crushes his head, while one of the prince’s guards wonders whether what he sees is real. He offers pardons to anyone who will testify against his brother, and loads a second dose of the bioweapon into his boot. In Room 1001 he infects [[tubeppa-hui-guo-rou|Tubeppa]] and [[tyson-hui-guo-rou|Tyson]], then heads for the Justice Bureau with [[balsamilco|Balsamilco]] and [[coventoba|Coventoba]]. His beast’s ability is revealed: after his death it will fuse with his own ability and become the beast of a blood relative. Furious that his mother [[unma-hui-guo-rou|Unma]] used [[furykov|Furykov]]’s loyalty to provoke martial law, he decides to confront her.',
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
    told(
      403,
      { it: 'La vera madre', en: 'His real mother' },
      {
        it: 'Unma risponde a una telefonata e dice a suo figlio [[halkenburg-hui-guo-rou|Harkenburg]] che approva la sua scelta, che le è dispiaciuto non vederlo al banchetto e che è fiera di lui. In una lettera firmata da [[kacho-hui-guo-rou|Kachow]] e consegnata a [[benjamin-hui-guo-rou|Benjamin]] c’è scritto ciò che tutti tacciono: Unma è la vera madre di Harkenburg. Secondo una teoria diffusa online, lei lo avrebbe affidato a [[duazul-hui-guo-rou|Duazul]] per cambiarne il posto nella linea di successione e proteggerlo dai fratelli maggiori. Benjamin la liquida come una voce trovata su internet.',
        en: 'Unma takes a phone call and tells her son [[halkenburg-hui-guo-rou|Halkenburg]] that she supports his choice, that she was sorry not to see him at the banquet, and that she is proud of him. A letter signed by [[kacho-hui-guo-rou|Kacho]] and delivered to [[benjamin-hui-guo-rou|Benjamin]] says what everyone keeps quiet: Unma is Halkenburg’s real mother. According to a theory online, she gave him to [[duazul-hui-guo-rou|Duazul]] to change his place in the line of succession and protect him from his older siblings. Benjamin dismisses it as a rumour found online.',
      },
    ),
    told(
      413,
      { it: 'Una scelta tra i figli', en: 'Choosing between her sons' },
      {
        it: 'Unma ha minacciato [[furykov|Furykov]] con la maledizione sotto la sua lingua se non avesse contagiato suo figlio [[benjamin-hui-guo-rou|Benjamin]] entro quarantotto ore, per far vincere [[halkenburg-hui-guo-rou|Harkenburg]]: avrebbe fatto attivare la maledizione da [[beyond-netero|Beyond]]. Quando Benjamin si ammala, trova nella cassaforte una sola fiala mancante e capisce che sua madre ha scelto Harkenburg e ha passato l’informazione a Furykov, l’unico modo per superare le sue misure di sicurezza. Furykov conferma la minaccia, e Benjamin decide di non far conoscere l’abilità della sua bestia alla fazione di Unma.',
        en: 'Unma threatened [[furykov|Furykov]] with the curse under his tongue unless he infected her son [[benjamin-hui-guo-rou|Benjamin]] within forty-eight hours, to help [[halkenburg-hui-guo-rou|Halkenburg]] win: she would have [[beyond-netero|Beyond]] activate it. When Benjamin falls ill, he finds only one vial missing from his safe and realises that his mother has chosen Halkenburg and leaked it to Furykov, the only way past his security. Furykov confirms the threat, and Benjamin resolves to keep his beast’s ability hidden from Unma’s faction.',
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
    told(
      400,
      { it: 'Nascondere la morte', en: 'Hiding the death' },
      {
        it: 'Interrogata da [[kaiser|Kaiser]], investigatore dell’Ufficio di Giustizia, dopo la morte di [[barrigen|Barrigen]], Seiko si avvale del diritto di non rispondere. Dopo la fuga fallita, dei soldati vengono a isolare la sua stanza, e lei rifiuta finché non potrà vedere [[fugetsu-hui-guo-rou|Fugetsu]]. Dentro di sé vuole che tutti credano che [[kacho-hui-guo-rou|Kachow]] sia ancora viva. Perderla così presto è un duro colpo, ma Seiko odiava il modo in cui la figlia la guardava. Fugetsu invece può controllarla lei, anche se è troppo debole per affrontare da sola la successione, e spera che l’Ufficio di Giustizia continui a proteggerla.',
        en: 'Questioned by [[kaiser|Kaiser]], a Justice Bureau investigator, after [[barrigen|Barrigen]]’s death, Seiko invokes her right to remain silent. After the failed escape, soldiers come to seal off her room, and she refuses until she can see [[fugetsu-hui-guo-rou|Fugetsu]]. Privately she wants everyone to believe that [[kacho-hui-guo-rou|Kacho]] is still alive. Losing her so early is a heavy blow, but Seiko hated the way her daughter looked at her. Fugetsu she can control, though she is too weak to face the contest alone, and Seiko hopes the Justice Bureau keeps protecting her.',
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
    told(
      412,
      { it: 'Il bambino della stanza 1014', en: 'The baby in Room 1014' },
      {
        it: 'Il neonato che [[kurapika|Kurapika]] protegge nella stanza 1014 non è Woble. Interrogata con la catena di Kurapika dopo che [[bill|Bill]] l’ha sentita alternare la pronuncia maschile e quella femminile del nome, [[oito-hui-guo-rou|Oito]] ammette che il bambino è il figlio di sua sorella minore. Woble, sua figlia, ha partecipato alla cerimonia dell’urna ma è con la sorella, e Oito non sa dove; alla cerimonia di partenza c’era invece il nipote. Così nessuno dei due può partecipare alla successione. Oito ha finto che Woble partecipasse per paura di essere uccisa.',
        en: 'The baby [[kurapika|Kurapika]] has been guarding in Room 1014 is not Woble. Questioned with Kurapika’s chain after [[bill|Bill]] noticed her switching between the masculine and feminine pronunciations of the name, [[oito-hui-guo-rou|Oito]] admits that the boy is her younger sister’s son. Woble, her daughter, took part in the urn ceremony but is with the sister, and Oito does not know where; the nephew attended the departure ceremony instead. So neither child is eligible for the contest. Oito pretended that Woble was taking part for fear of being killed.',
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
    told(
      400,
      { it: 'Un libro per il re', en: 'A book for the king' },
      {
        it: 'Izunabi nota che un’altra guardia di [[tyson-hui-guo-rou|Tyson]] è diventata fin troppo calma da quando legge il suo libro, e intuisce che il libro è legato alla bestia del principe. Visto che predica l’amore, si chiede se potrebbe convincere il re a fermare la successione. Tyson lo ha dato ai principi minori e alle loro madri, ma per vedere il re le serve il permesso della madre. Izunabi la esorta a chiederle di far leggere il libro al re al prossimo banchetto, perché potrebbe cambiare il destino della nave.',
        en: 'Izunavi notices that another of [[tyson-hui-guo-rou|Tyson]]’s guards has become far too calm since reading her book, and guesses that the book is linked to the prince’s beast. Since it preaches love, he wonders whether it could persuade the king to stop the contest. Tyson has given it to the lower princes and their mothers, but she needs her mother’s permission to see the king. Izunavi urges her to ask her mother to have the king read the book at the next banquet, since it could change the fate of the ship.',
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
    told(
      404,
      { it: 'Allontanata dal paziente', en: 'Sent away from the patient' },
      {
        it: 'Con cinque assistenti, tra cui [[leorio-paradinight|Leorio]], Cheadle accompagna in barella [[halkenburg-hui-guo-rou|Harkenburg]] e pensa che possa aver battuto la testa cadendo. Ordina esami del sangue e una TAC, fa chiedere alle guardie del principe come è stato nell’ultima settimana e manda il vomito a [[gel|Gell]] della scientifica. Quando arrivano le équipe mediche reali e militari, lei e il suo staff devono lasciare il paziente.',
        en: 'With five assistants, [[leorio-paradinight|Leorio]] among them, Cheadle accompanies [[halkenburg-hui-guo-rou|Halkenburg]] on a stretcher and guesses that he may have hit his head when he fell. She orders a blood panel and a CT scan, has his guards asked about his condition over the past week, and sends his vomit to [[gel|Gel]] in forensics. When the royal and military medical teams arrive, she and her staff have to leave the patient.',
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
        it: 'Invece di combattere, Ging offre ai membri della squadra il doppio di quanto li paga [[beyond-netero|Beyond]]. Poi racconta a tre di loro le cinque minacce del Continente Oscuro, più forti delle formichimere, e il viaggio di [[netero|Netero]], [[linne-horsdoeuvre|Rinne]] e [[zigg-zoldyck|Zigg]]. Quando gli chiedono da dove vengano le sue informazioni, spiega che una sola persona ha esplorato il continente e ne ha scritto un libro trecento anni fa, e che quel libro è ancora in scrittura.',
        en: 'Instead of fighting, Ging offers the team members double what [[beyond-netero|Beyond]] pays them. He then tells three of them about the Five Threats of the Dark Continent, stronger than the Chimera Ants, and about the journey of [[netero|Netero]], [[linne-horsdoeuvre|Linne]] and [[zigg-zoldyck|Zigg]]. Asked where his information comes from, he explains that only one person explored the continent and wrote a book about it three hundred years ago, and that the book is still being written.',
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
    told(
      380,
      { it: 'Uccidere per desiderio', en: 'Killing out of desire' },
      {
        it: 'Dopo l’uccisione di venti passeggeri sul terzo livello, Mizaistom dice ai militari di Cakin che l’assassino ha agito per desiderio e che gli omicidi sono legati alla successione: i principi, che non sanno nulla del Nen, potrebbero credere che i loro poteri vengano da sacrifici umani. Chiede di spostare più soldati nei livelli inferiori. Durante il coprifuoco garantisce per [[illumi|Illumi]], che gli conferma che la Brigata è a bordo. Poi un clandestino senza documenti si rivela essere [[fugetsu-hui-guo-rou|Fugetsu]].',
        en: 'After twenty passengers are killed on Tier 3, Mizaistom tells Kakin’s military officials that the killer acted out of desire and that the murders are linked to the succession contest: the princes, who know nothing of Nen, may believe their powers come from human sacrifice. He urges moving more soldiers to the lower tiers. During the curfew he vouches for [[illumi|Illumi]], who confirms that the Troupe is aboard. Then a stowaway without ID turns out to be [[fugetsu-hui-guo-rou|Fugetsu]].',
      },
    ),
    told(
      383,
      { it: 'Un messaggio in codice', en: 'A coded message' },
      {
        it: 'Mizaistom interroga [[fugetsu-hui-guo-rou|Fugetsu]], che vuole solo vedere [[kacho-hui-guo-rou|Kachow]], e la riaccompagna al primo livello. Uno dei suoi uomini telefona poi a [[melody|Melody]]: le gemelle potrebbero tentare la fuga, e [[keeney|Keeney]] guiderà il tentativo di fermarle, con il suo aiuto. Il messaggio comincia con l’ora, e questo è il codice degli Hunter: un numero detto per primo indica quale parola leggere in ogni frase. Letto così, il messaggio dice di aiutare i principi a fuggire.',
        en: 'Mizaistom questions [[fugetsu-hui-guo-rou|Fugetsu]], who only wants to see [[kacho-hui-guo-rou|Kacho]], and escorts her back to Tier 1. One of his men then calls [[melody|Melody]]: the twins may try to escape, and [[keeney|Keeney]] will lead the effort to stop them, with her support. The message begins with the time, and that is the Hunters’ code: a number stated first tells a Hunter which word to read in each sentence. Read that way, it says to help the princes escape.',
      },
    ),
    told(
      410,
      { it: 'Su quali basi', en: 'On what grounds' },
      {
        it: 'Sotto la legge marziale speciale, Mizaistom aspetta all’Ufficio di Giustizia con [[botobai-gigante|Botobai]] e [[kaiser|Kaiser]], con le mani alzate, mentre [[benjamin-hui-guo-rou|Benjamin]] arriva per farne il suo centro di comando. Mizaistom chiede su quali basi abbia dichiarato la legge marziale e dov’è la lettera di autorizzazione del re. Benjamin parla di un attentato con un’arma biologica e dice che la lettera è in preparazione. Mizaistom capisce che vuole usare i principi come ostaggi e che quasi tutto ciò che dice sono mezze verità distorte. Botobai si avvicina, lo guarda negli occhi e gli chiede se sta bene, perché è pallido; Benjamin risponde che non c’è alcun problema.',
        en: 'Under special martial law, Mizaistom waits at the Justice Bureau with [[botobai-gigante|Botobai]] and [[kaiser|Kaiser]], hands raised, as [[benjamin-hui-guo-rou|Benjamin]] arrives to make it his command centre. Mizaistom asks for the grounds for martial law and the king’s letter of authorisation. Benjamin cites a bioweapon plot and says the letter is being written. Mizaistom judges that he means to use the princes as hostages, and that most of what he says is twisted half-truths. Botobai steps up, looks him in the eye and asks whether he is all right, since he looks pale; Benjamin says there is no problem.',
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
        en: 'In [[woble-hui-guo-rou|Woble]]’s quarters, five guards are found drained of blood. Kurapika holds the others at gunpoint, his Dowsing Chain drawn, reveals that the voyage is a succession war and finds two who already knew: like their dead colleagues, they report to other queens. Then guardian beasts, invisible to anyone without Nen, flood the room. Kurapika makes an emergency call on every channel, and [[biscuit-krueger|Biscuit]] confirms she has seen them too.',
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
        it: 'Dopo aver tenuto attivo Emperor Time per ore, Kurapika sviene, e con lui perde i sensi la madre di [[woble-hui-guo-rou|Woble]], che condivide l’abilità. Si risveglia nove ore dopo. Fa mandare dalla regina l’insetto verso gli alloggi di [[tserriednich-hui-guo-rou|Tserriednich]], ma nel condotto compaiono i volti della bestia del principe e l’insetto viene perso. Quando la regina gli chiede di insegnarle il Nen, Kurapika le rivela che la sua abilità lo ha già risvegliato in lei. Woble gli tende la mano.',
        en: 'After keeping Emperor Time active for hours, Kurapika faints, and [[woble-hui-guo-rou|Woble]]’s mother, who shares the ability, blacks out with him. He wakes nine hours later. He has the queen send the insect towards [[tserriednich-hui-guo-rou|Tserriednich]]’s quarters, but the faces of the prince’s beast appear in the vent and the insect is lost. When the queen asks him to teach her Nen, Kurapika reveals that his ability has already awakened it in her. Woble reaches out to him.',
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
    told(
      371,
      { it: 'Due ipotesi sulle bestie', en: 'Two ideas about the beasts' },
      {
        it: 'Dopo la morte di [[barrigen|Barrigen]], Kurapika chiede alle guardie rimaste di ripensare al corso di Nen. Con le sue catene verifica che né una domestica degli alloggi né un altro Hunter della scorta sia l’assassino. Spiega che le bestie dei principi sono invisibili alle persone comuni, mentre quelle evocate da chi usa il Nen si vedono da tutti. Si chiede se le bestie sparirebbero nel caso in cui un principe si ritirasse. Nessuna guardia si ritira, e Kurapika riprende la lezione con [[furykov|Furykov]] e [[belerainte|Belerainte]] come aiutanti.',
        en: 'After [[barrigen|Barrigen]]’s death, Kurapika asks the remaining guards to reconsider the Nen class. With his chains he checks that neither a maid in the quarters nor a fellow Hunter of the escort is the assassin. He explains that the princes’ beasts are invisible to ordinary people, while beasts conjured by a Nen user can be seen by anyone. He wonders whether the beasts would vanish if one prince withdrew. None of the guards withdraws, and Kurapika resumes teaching with [[furykov|Furykov]] and [[belerainte|Belerainte]] as his helpers.',
      },
    ),
    told(
      376,
      { it: 'Sospetti sul corso', en: 'Suspicion over the class' },
      {
        it: 'Il giorno dopo [[myuhan|Myuhan]] viene trovato morto, ucciso durante la lezione di Nen dall’assassino nascosto tra i presenti. [[maor|Maor]] e [[satobi|Satobi]] sostengono che il corso sia solo un piano di Kurapika per eliminare il personale degli altri principi, e lui non sa come difendersi, perché l’accusa è plausibile. [[belerainte|Belerainte]] lo difende: gli Hunter fanno soltanto il loro lavoro, e annullare il corso lascerebbe fuggire l’assassino. Kurapika lo ringrazia, e Belerainte lo incoraggia a continuare e a salvare più principi possibile.',
        en: 'The next day [[myuhan|Myuhan]] is found dead, killed during the Nen lesson by the assassin hidden among the attendees. [[maor|Maor]] and [[satobi|Satobi]] claim that the class is only Kurapika’s plan to eliminate the other princes’ staff, and he cannot defend himself, because the claim is plausible. [[belerainte|Belerainte]] defends him: the Hunters are only doing their job, and cancelling the class would let the assassin escape. Kurapika thanks him, and Belerainte encourages him to carry on and save as many princes as he can.',
      },
    ),
    told(
      386,
      { it: 'L’esame dell’acqua', en: 'Water divination' },
      {
        it: 'Kurapika e un altro Hunter della scorta avvertono di nuovo un tremito d’aura; dal modo in cui svanisce, Kurapika lo giudica un attacco di Emissione. Manca una settimana alla fine del corso e gli allievi sono inquieti, così presenta l’esame dell’acqua e mostra di essere uno Specializzatore. Indica [[ladiolus|Ladiolus]], che produce abbastanza aura da sostenere l’esame. Gli esami si faranno a porte chiuse: il tipo di Nen non va mai rivelato, e i risultati sono il prezzo del corso e compensano il suo rischio.',
        en: 'Kurapika and a fellow Hunter of the escort feel a rumbling of aura again; from the way it vanished, Kurapika judges it an Emitter attack. With a week of class left and the students restless, he introduces water divination and shows that he is a Specialist. He singles out [[ladiolus|Ladiolus]], who produces enough aura to take the test. The tests will take place behind closed doors: one’s Nen type should never be disclosed, and the results pay for the class and offset his risk.',
      },
    ),
    told(
      388,
      { it: 'Un’abilità in prestito', en: 'A borrowed ability' },
      {
        it: 'A porte chiuse Kurapika risveglia il Nen dei suoi allievi uno alla volta. Mostra a [[maor|Maor]] l’abilità di un altro Hunter della scorta, un Potenziatore che fa germogliare un seme in un bicchiere d’acqua avvicinando le mani. Kurapika prende in prestito quell’abilità e la presta a ogni allievo, aprendogli l’aura a forza. [[furykov|Furykov]] controlla che nessuno venga manipolato. Kurapika chiede a [[yuri|Yuri]] se altre persone di [[kacho-hui-guo-rou|Kachow]] potrebbero seguire un nuovo corso, e ringrazia l’Hunter di aver rivelato la sua abilità così apertamente.',
        en: 'Behind closed doors, Kurapika awakens his students’ Nen one by one. He shows [[maor|Maor]] the ability of a fellow Hunter of the escort, an Enhancer whose hands make a seed sprout in a glass of water. Kurapika borrows that ability and lends it to each student, forcing their aura open. [[furykov|Furykov]] checks that no one is being manipulated. Kurapika asks [[yuri|Yuri]] whether more of [[kacho-hui-guo-rou|Kacho]]’s people could join another round of classes, and thanks the Hunter for revealing his ability so openly.',
      },
    ),
    told(
      400,
      { it: 'Il contratto di Longhi', en: 'Longhi’s contract' },
      {
        it: 'Nella camera dove si svolgono gli esami, [[longhi|Longhi]] dice a Kurapika che non le serve l’esame dell’acqua, perché sa già usare il Nen, e gli chiede se accetterà il suo contratto dopo averla ascoltata. Con un altro Hunter della scorta al suo fianco, Kurapika accetta e dice che collaborerà con [[tubeppa-hui-guo-rou|Tsubeppa]]. Intanto [[melody|Melody]], trattenuta all’Ufficio di Giustizia, chiede a un funzionario di andare da Kurapika e raccontargli tutto, perché è l’unico di cui si fida.',
        en: 'In the room where the tests are held, [[longhi|Longhi]] tells Kurapika that she does not need water divination, because she can already use Nen, and asks whether he will agree to her contract once he has heard her out. With a fellow Hunter of the escort beside him, Kurapika agrees and says he will work with [[tubeppa-hui-guo-rou|Tubeppa]]. Meanwhile [[melody|Melody]], held at the Justice Bureau, asks an official to go to Kurapika and tell him everything, because he is the only one she trusts.',
      },
    ),
    told(
      404,
      { it: 'Nessuna scelta sicura', en: 'No safe choice' },
      {
        it: 'Dopo aver studiato le monete di [[zhang-lei-hui-guo-rou|Chowrai]], Kurapika sospetta che un soldato di [[benjamin-hui-guo-rou|Benjamin]] abbia nascosto la moneta del primo giorno per non dare informazioni al principe. Valuta i rischi dell’alleanza: Chowrai protegge una famiglia mafiosa con più di duecento uomini ai livelli inferiori, e se l’equilibrio tra lui, [[tserriednich-hui-guo-rou|Tserriednich]] e [[luzurus-hui-guo-rou|Loozlus]] si rompe, una guerra aperta permetterebbe a Benjamin di dichiarare la legge marziale speciale e confinare tutti i principi. Che restino nella stanza 1014 o con Chowrai, conclude che nessuna scelta è sicura.',
        en: 'After studying [[zhang-lei-hui-guo-rou|Zhang Lei]]’s coins, Kurapika suspects that one of [[benjamin-hui-guo-rou|Benjamin]]’s soldiers has hidden the coin of the first day to keep information from the prince. He weighs the risks of the alliance: Zhang Lei backs a Mafia family with over two hundred men on the lower tiers, and if the balance between him, [[tserriednich-hui-guo-rou|Tserriednich]] and [[luzurus-hui-guo-rou|Luzurus]] breaks, an all-out war would let Benjamin declare special martial law and put every prince under house arrest. Whether they stay in Room 1014 or with Zhang Lei, he concludes that neither choice is safe.',
      },
    ),
    told(
      412,
      {
        it: 'Woble fuori dalla successione',
        en: 'Woble is out of the contest',
      },
      {
        it: 'Alla seconda lezione di Nen, Kurapika spiega che la successione è la seconda di quattro fasi di un rituale di Cakin, legate da un voto: se nessun erede unico sopravvive al viaggio, gli Hoicoro perderanno il potere. Poi dichiara che [[woble-hui-guo-rou|Woble]] non partecipa. Due giorni prima, dopo che [[bill|Bill]] gli aveva sussurrato qualcosa, aveva interrogato [[oito-hui-guo-rou|Oito]] con la sua catena: il neonato è il figlio di sua sorella, e la figlia, Woble, è con la sorella, non sa dove. Oito aveva finto la partecipazione per paura. Dopo la pausa solo [[slakka|Slakka]] non torna, e Kurapika pensa di parlare con [[beyond-netero|Beyond]].',
        en: 'At the second Nen class, Kurapika explains that the contest is the second of four stages of a Kakin ritual, bound by a vow: if no single heir survives the voyage, the Hui Guo Rou will fall from power. Then he declares that [[woble-hui-guo-rou|Woble]] is not taking part. Two days earlier, after [[bill|Bill]] whispered something to him, he had questioned [[oito-hui-guo-rou|Oito]] with his chain: the baby is her sister’s son, and her daughter, Woble, is with the sister, she does not know where. Oito had faked the prince’s participation out of fear. After the break only [[slakka|Slakka]] does not return, and Kurapika thinks of talking to [[beyond-netero|Beyond]].',
      },
    ),
    told(
      414,
      { it: 'Amici di cui fidarsi', en: 'Friends he trusts' },
      {
        it: 'Con [[oito-hui-guo-rou|Oito]], [[bill|Bill]] e [[shimanu|Shimanu]], Kurapika affronta due problemi. Non sanno se la maledizione di [[beyond-netero|Beyond]] colpisca [[woble-hui-guo-rou|Woble]], e lui una volta ha sentito un’ondata di Nen vicino al bambino: chiederlo a Beyond sembra l’unico modo per saperlo. Inoltre i militari daranno per scontato che la vera Woble sia a bordo. Propone di risalire alla fonte della maledizione, cosa che serve anche al contratto di [[longhi|Longhi]], e chiede a Oito chi potrebbe contattare. Promettendo che i suoi amici proteggerebbero il principe, pensa a [[gon-freecss|Gon]] e [[killua|Killua]]. Oito parla di un parente che lavora in un ufficio postale a Yamato.',
        en: 'With [[oito-hui-guo-rou|Oito]], [[bill|Bill]] and [[shimanu|Shimanu]], Kurapika weighs two problems. They do not know whether [[beyond-netero|Beyond]]’s curse targets [[woble-hui-guo-rou|Woble]], and he once felt a surge of Nen near the baby: asking Beyond seems the only way to know. And the military will assume that the real Woble is somewhere aboard. He proposes tracing the curse to its source, which also serves [[longhi|Longhi]]’s contract, and asks Oito whom she could contact. Promising that his friends would protect the prince, he thinks of [[gon-freecss|Gon]] and [[killua|Killua]]. Oito names a relative who works at a post office in Yamato.',
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
    told(
      375,
      { it: 'Il vero aspetto', en: 'Her true form' },
      {
        it: 'Nella copia nascosta degli alloggi di [[marayam-hui-guo-rou|Marayam]], Biscuit riporta [[hanzo|Hanzo]] nel suo corpo, arrabbiata per la notte in bianco. Per convincere lo scettico [[vergei|Vergei]] torna al suo vero aspetto, muscoloso, e promette di raddoppiare in un mese la forza fisica del personale. Vergei le chiede di insegnargli. Quando [[belerainte|Belerainte]] esce e non riesce a rientrare, Biscuit spiega che si trovano in uno spazio di Nen a senso unico, probabilmente creato dalla bestia di Marayam, e comincia ad allenare il personale.',
        en: 'In the hidden copy of [[marayam-hui-guo-rou|Marayam]]’s quarters, Biscuit returns [[hanzo|Hanzo]] to his body, angry after a sleepless night. To convince the sceptical [[vergei|Vergei]], she returns to her true, muscular form and promises to double the staff’s physical strength within a month. Vergei asks her to teach him. When [[belerainte|Belerainte]] steps out and cannot get back in, Biscuit explains that they are inside a one-way Nen space, most likely created by Marayam’s beast, and starts training the staff.',
      },
    ),
    told(
      415,
      { it: 'Restare nascosti', en: 'Holing up' },
      {
        it: 'Nella stanza 1013 Biscuit intuisce dall’aura di [[saquelle|Saquelle]] che la legge marziale sta per essere dichiarata. Può obbedire e aspettare che venga revocata, oppure neutralizzare Saquelle e barricarsi, aspettandosi un’accusa di tradimento. Uscire dal loro spazio di Nen vorrebbe dire lasciare [[marayam-hui-guo-rou|Marayam]] alle sole guardie senza poteri di sua madre, e lo spazio probabilmente non si può creare due volte: la bestia del principe potrebbe azzerarsi, addormentarsi o sparire. Decide di restare dove sono e chiama [[vergei|Vergei]].',
        en: 'In Room 1013, Biscuit reads in [[saquelle|Saquelle]]’s aura that martial law is about to be declared. She can obey and wait for it to be lifted, or neutralise Saquelle and hole up, expecting to be charged with treason. Leaving their Nen space would mean leaving [[marayam-hui-guo-rou|Marayam]] with only his mother’s powerless guards, and the space probably cannot be made twice: the prince’s beast could reset, go dormant or vanish. She decides to stay put and calls [[vergei|Vergei]] over.',
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
    told(
      389,
      { it: 'Un sospetto di facciata', en: 'A feigned suspicion' },
      {
        it: 'Negli alloggi di [[luzurus-hui-guo-rou|Loozlus]] Basho sente un nuovo tremito d’aura dalla stanza di [[halkenburg-hui-guo-rou|Harkenburg]], poco prima che un soldato di [[benjamin-hui-guo-rou|Benjamin]] si spari davanti alla porta. Quando un altro soldato di Benjamin gli chiede aiuto, Basho indica gli uomini della regina [[duazul-hui-guo-rou|Duazul]]. In realtà crede che dietro ci siano gli uomini di Benjamin: un’abilità che agisce attraverso la morte del soldato, inscenata davanti alla porta di Loozlus come falsa pista.',
        en: 'In [[luzurus-hui-guo-rou|Luzurus]]’s quarters Basho feels a new rumbling of aura from [[halkenburg-hui-guo-rou|Halkenburg]]’s room, just before one of [[benjamin-hui-guo-rou|Benjamin]]’s soldiers shoots himself at the door. When another of Benjamin’s soldiers asks for his help, Basho points at Queen [[duazul-hui-guo-rou|Duazul]]’s men. In truth he believes Benjamin’s men are behind it: an ability that works through the soldier’s death, staged at Luzurus’s door as a false lead.',
      },
    ),
    told(
      402,
      { it: 'Un portafortuna per Fugetsu', en: 'A charm for Fugetsu' },
      {
        it: 'Quando [[kaiser|Kaiser]] e [[fugetsu-hui-guo-rou|Fugetsu]] escono dagli alloggi di [[luzurus-hui-guo-rou|Loozlus]], Basho li raggiunge e si presenta come un collega di [[melody|Melody]]. Pur dicendo che non sono affari suoi, dice a Fugetsu che sembra stanca e le regala un portafortuna con un haiku. Finché lo terrà con sé, gli spiriti maligni minori non le si avvicineranno per un po’, e per curarla conta su Melody. Kaiser si inchina alle sue spalle per ringraziarlo.',
        en: 'When [[kaiser|Kaiser]] and [[fugetsu-hui-guo-rou|Fugetsu]] leave [[luzurus-hui-guo-rou|Luzurus]]’s quarters, Basho catches up with them and introduces himself as a colleague of [[melody|Melody]]. Saying that it is none of his business, he tells Fugetsu she looks tired and gives her a good-luck charm with a haiku on it. While she keeps it, low-level evil spirits will not come near her for a while, and he counts on Melody to treat her. Kaiser bows to his back in thanks.',
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
    told(
      372,
      { it: 'L’assassino di Momoze', en: 'Momoze’s killer' },
      {
        it: 'Di guardia a [[marayam-hui-guo-rou|Marayam]], Hanzo e [[biscuit-krueger|Biscuit]] vedono la sua bestia crescere dopo la morte di [[momoze-hui-guo-rou|Momoze]]. Finito il turno, Hanzo manda un suo doppio di Nen nelle celle dei due sospettati. Ne sveglia uno con una finta offerta di lavoro da parte di [[benjamin-hui-guo-rou|Benjamin]], e l’uomo si tradisce chiedendogli come abbia capito che era lui. Hanzo lo uccide e simula un suicidio. Tornato negli alloggi di Marayam, li trova vuoti: il suo corpo e Biscuit sono spariti, e c’è solo una bestia più piccola e più minacciosa.',
        en: 'Guarding [[marayam-hui-guo-rou|Marayam]], Hanzo and [[biscuit-krueger|Biscuit]] see his beast grow after [[momoze-hui-guo-rou|Momoze]]’s death. Off duty, Hanzo sends a Nen double to the cells of the two suspects. He wakes one with a fake job offer from [[benjamin-hui-guo-rou|Benjamin]], and the man gives himself away by asking how Hanzo knew it was him. Hanzo kills him and stages a suicide. Back in Marayam’s quarters, he finds them empty: his own body and Biscuit are gone, and there is only a smaller, more menacing beast.',
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
        it: 'All’Arena Celeste Hisoka e [[chrollo|Quoll]] si affrontano come Maestri di piano in un incontro che entrambi vogliono fino alla morte. Quoll controlla l’arbitro con un’antenna dell’abilità di [[shalnark|Shalnark]] e lo manda contro Hisoka. Hisoka si difende con il Bungee Gum e ferisce l’arbitro alla gola, ma un’esplosione dal corpo dell’arbitro lo costringe a rifugiarsi sul soffitto: Quoll ha segnato l’arbitro con un’abilità che trasforma in bombe ciò che tocca.',
        en: 'At Heavens Arena, Hisoka and [[chrollo|Chrollo]] meet as Floor Masters in a match both want to be to the death. Chrollo controls the referee with an antenna from [[shalnark|Shalnark]]’s ability and sends him at Hisoka. Hisoka fights back with Bungee Gum and slashes the referee’s throat, but a blast from the referee’s body drives him up to the ceiling: Chrollo has marked the referee with an ability that turns what it touches into bombs.',
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
    told(
      405,
      { it: 'Il vero Hisoka', en: 'The real Hisoka' },
      {
        it: 'Nel casinò VIP del primo livello, Hisoka vince una mano di una variante del poker con cinque tre e due assi, poi fa tre sette alla slot machine e se ne va senza ritirare il premio. Pensa che il grande tremore che ha sentito più volte, un’abilità di gruppo sostenuta da una bestia nata da una cerimonia, lo abbia lasciato freddo: lui vuole stare a tu per tu con una persona, per amarsi fino alla morte. Travestito da lui, [[bonolenov|Bonolenov]] lo vede e si allontana.',
        en: 'In the VIP casino on Tier 1, Hisoka wins a hand of a poker variant with five threes and two aces, then rolls triple sevens at a slot machine and walks off without claiming the prize. He thinks that the great rumbling he felt several times, a group ability backed by a beast born of a ceremony, left him cold: what he wants is to be one on one with someone, loving each other to death. Disguised as him, [[bonolenov|Bonolenov]] spots him and slips away.',
      },
    ),
    told(
      420,
      { it: 'Un incontro al casinò', en: 'An encounter in the casino' },
      {
        it: 'Sotto la legge marziale speciale, Hisoka uccide tutti i soldati mandati a presidiare il casinò del primo livello e le scale che portano fuori, tagliando loro la gola prima che possano sparare, poi si siede a giocare a pachinko. Sentendo qualcuno in Zetsu, gli si porta alle spalle e lo attacca; ma [[tserriednich-hui-guo-rou|Tserriednich]] aveva visto la scena nei dieci secondi successivi, e ciò che Hisoka smaschera è un’illusione. Hisoka è deluso che non sia un Ragno. Poi nota qualcosa, guarda dritto verso il vero principe e se ne va.',
        en: 'Under special martial law, Hisoka kills every soldier sent to secure the Tier 1 casino and the stairs out of it, slitting their throats before any of them can fire, then sits down to play pachinko. Sensing someone in Zetsu, he gets behind him and attacks; but [[tserriednich-hui-guo-rou|Tserriednich]] had seen it in the next ten seconds, and what Hisoka unmasks is an illusion. Hisoka is disappointed that it is not a Spider. Then he notices something, looks straight at the real prince and walks off.',
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
      { it: 'Bombe tra il pubblico', en: 'Bombs in the crowd' },
      {
        it: 'Quoll riempie l’arena di copie degli spettatori, le segna come bombe e ordina loro di distruggere [[hisoka|Hisoka]]. Trasforma in una potente bomba il corpo di una marionetta decapitata da Hisoka e, con il telefono di [[shalnark|Shalnark]], la fa innescare da uno spettatore, così esplode anche la testa che Hisoka tiene in mano. Manda le marionette a farsi esplodere accanto a Hisoka e gli lancia contro i presenti per bloccarlo. Quando la folla lo circonda, un’enorme esplosione lo avvolge.',
        en: 'Chrollo fills the arena with copies of the audience, marks them as bombs and orders them to break [[hisoka|Hisoka]]. He turns the body of a puppet Hisoka beheaded into a powerful bomb and, through [[shalnark|Shalnark]]’s phone, has a bystander set it off, so the head Hisoka is holding explodes too. He sends puppets to blow themselves up next to Hisoka and throws bystanders at him to pin him down. As the crowd closes around him, an enormous explosion engulfs him.',
      },
    ),
    told(
      357,
      { it: 'Il tesoro della nave', en: 'The treasure on the ship' },
      {
        it: 'Dopo l’incontro, Quoll telefona a [[shalnark|Shalnark]]: la famiglia reale di Cakin invita passeggeri comuni sul suo viaggio verso il Nuovo Continente. Progetta che la Brigata rubi il tesoro a bordo e promette di restituire a Shalnark il telefono quando saliranno sulla nave. Shalnark è contento che la Brigata si riunisca al completo. Mentre parlano, [[hisoka|Hisoka]] ha già ucciso [[kortopi|Kortopi]], e subito dopo la telefonata uccide anche Shalnark.',
        en: 'After the match, Chrollo phones [[shalnark|Shalnark]]: the Kakin royal family is inviting ordinary passengers on its voyage to the New Continent. He plans for the Troupe to steal the treasure on board and promises to give Shalnark his phone back once they board. Shalnark is glad the whole Troupe will be together again. While they talk, [[hisoka|Hisoka]] has already killed [[kortopi|Kortopi]], and right after the call he kills Shalnark too.',
      },
    ),
    told(
      366,
      { it: 'Legami da recidere', en: 'Ties to sever' },
      {
        it: 'Quoll viaggia tra i passeggeri comuni dei livelli inferiori della nave. Sul quinto livello della Black Whale un passeggero nota che Quoll sembra sul punto di uccidere qualcuno e gli consiglia di dimenticare i suoi legami terreni. Quoll risponde che i legami non si dimenticano: si recidono.',
        en: 'Chrollo travels among the ordinary passengers on the ship’s lower tiers. On Tier 5 of the Black Whale, a passenger remarks that Chrollo looks as if he is about to kill someone and advises him to forget his worldly ties. Chrollo replies that ties are not forgotten: they are severed.',
      },
    ),
    told(
      377,
      { it: 'La testa di Hisoka', en: 'Hisoka’s head' },
      {
        it: 'Nella sala da pranzo del quinto livello la Brigata si riunisce, e Quoll fa presentare il suo nuovo membro, [[illumi|Illumi]]. Quando un gruppo dei Cha-R gli offre di entrare nella famiglia, Quoll rifiuta e chiede come raggiungere il primo livello, irritando il loro capo. Poi lascia ai Ragni piena libertà, purché gli portino la testa di [[hisoka|Hisoka]]. [[shizuku|Shizuku]] e [[bonolenov|Bonolenov]] chiedono di fare squadra con lui, e Quoll accetta a condizione di essere lui a uccidere Hisoka. A Shizuku dice che non può più leggere il loro futuro: quell’abilità è sparita dal suo libro.',
        en: 'In the Tier 5 dining hall the Troupe gathers, and Chrollo has its newest member, [[illumi|Illumi]], introduce himself. When a Cha-R group offers him a place in the family, Chrollo declines and asks how to reach Tier 1, angering their leader. He then gives the Spiders a free hand, as long as they bring him [[hisoka|Hisoka]]’s head. [[shizuku|Shizuku]] and [[bonolenov|Bonolenov]] ask to team up with him, and Chrollo agrees on condition that he is the one who kills Hisoka. He tells Shizuku he can no longer read their fortunes: that ability has vanished from his book.',
      },
    ),
    told(
      395,
      { it: 'Le videocassette di Meteor City', en: 'Meteor City’s videotapes' },
      {
        it: 'Anni prima, a Meteor City, il giovane Quoll cerca videocassette tra i rifiuti con [[franklin|Franklin]] e [[shalnark|Shalnark]] nel territorio di [[uvogin|Uborghin]]. Mentre Franklin affronta Uborghin, Quoll scappa e consegna a [[phinks|Phinks]] una cassetta qualunque, tenendo per sé quella vera. In chiesa impara le lingue straniere dalle cassette, e lì lo trova [[pakunoda|Pakunoda]]. Sul nastro c’è un cartone, i Power Cleaners: Quoll le chiede di aiutarlo a doppiarlo nella loro lingua insieme a [[sheila|Sheila]] e [[sarasa|Sarasa]].',
        en: 'Years earlier in Meteor City, young Chrollo searches the rubbish for videotapes with [[franklin|Franklin]] and [[shalnark|Shalnark]] in [[uvogin|Uvogin]]’s territory. While Franklin fights Uvogin, Chrollo escapes and hands [[phinks|Phinks]] a different tape, keeping the real one. At the church he learns foreign languages from tapes, and [[pakunoda|Pakunoda]] finds him there. The tape holds a cartoon, the Power Cleaners: Chrollo asks her to help him dub it into their own language with [[sheila|Sheila]] and [[sarasa|Sarasa]].',
      },
    ),
    told(
      396,
      { it: 'Tutte le voci', en: 'Every voice' },
      {
        it: 'Alla proiezione in chiesa i bambini esultano sentendo i Power Cleaners parlare la loro lingua. Quando il nastro dell’audio si aggroviglia, Quoll prende il microfono e, con le tre ragazze, recita dal vivo eroi e mostri, lasciando colpito perfino [[uvogin|Uborghin]]. Uborghin chiede di interpretare il mostro, e anche gli altri scelgono un ruolo. I ragazzi cominciano a provare insieme come un gruppo che decidono di chiamare compagnia. Uborghin dice che vuole girare il mondo con Quoll e diventare il più grande cattivo del mondo.',
        en: 'At the church screening the children cheer when they hear the Power Cleaners speak their own language. When the sound tape tangles, Chrollo takes the microphone and, with the three girls, voices the heroes and monsters live, leaving even [[uvogin|Uvogin]] impressed. Uvogin asks to play the monster, and the others pick roles too. The children start rehearsing together as a group they decide to call a troupe. Uvogin says he wants to tour the world with Chrollo and become the world’s greatest villain.',
      },
    ),
    told(
      397,
      { it: 'La nascita del Ragno', en: 'The Spider is born' },
      {
        it: 'Quando [[sarasa|Sarasa]] scompare, Quoll annulla lo spettacolo e si dà la colpa. Con [[uvogin|Uborghin]] trova il suo corpo in un sacco appeso a un albero a Uga Forest, con un biglietto che rifiuta di leggere ad alta voce. Dopo il funerale chiede a Uborghin di aspettare tre anni: la rivoluzione delle comunicazioni permetterà di creare a Meteor City un luogo che attiri criminali come gli assassini di Sarasa. Giura di vivere da cattivo e di far tremare il mondo. Uborghin e gli altri lo nominano loro capo, e anni dopo nasce il Ragno.',
        en: 'When [[sarasa|Sarasa]] goes missing, Chrollo cancels the show and blames himself. With [[uvogin|Uvogin]] he finds her body in a bag hanging from a tree in Uga Forest, with a note he refuses to read aloud. After the funeral he asks Uvogin to wait three years: the coming communication revolution will let them build a place in Meteor City that draws in criminals like Sarasa’s killers. He vows to live as a villain who makes the world shudder. Uvogin and the others name him their head, and years later the Spider is born.',
      },
    ),
    told(
      406,
      { it: 'I tre tesori sacri', en: 'The three sacred treasures' },
      {
        it: 'Tra la folla del funerale di [[halkenburg-hui-guo-rou|Harkenburg]], Quoll usa un telefono evocato dal suo libro per cercare qualcuno, ma la persona non è in zona. Ha messo gli occhi sui tre tesori sacri di Cakin: l’urna della cerimonia, una mummia sacra che veglia sulla successione e la spada che passa al prossimo re. Crede che siano il sistema che alimenta la successione e Cakin stessa, e che siano custoditi al primo livello. Rubare un oggetto paragonabile a un tesoro nazionale farebbe evolvere Skill Hunter e gli darebbe l’abilità per sconfiggere [[hisoka|Hisoka]] una volta per tutte. Se dovesse morire, il Ragno andrà avanti. Al secondo tentativo il telefono trova la persona fuori dalla portata del segnale, e Quoll conclude che è più in alto.',
        en: 'Among the crowd for [[halkenburg-hui-guo-rou|Halkenburg]]’s funeral, Chrollo uses a conjured phone from his book to search for someone, but the person is not in the area. He has set his sights on Kakin’s three sacred treasures: the ceremony’s urn, a sacred mummy that oversees the contest, and the sword passed on to the next king. He believes they are the system that powers the contest and Kakin itself, and that they are kept on Tier 1. Stealing something comparable to a national treasure would let Skill Hunter evolve and give him the ability to defeat [[hisoka|Hisoka]] once and for all. If he dies, the Spider will go on. On a second try the phone finds the person beyond the signal’s range, and Chrollo concludes they are up above.',
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
    told(
      397,
      { it: 'Il piano spiegato', en: 'The plan explained' },
      {
        it: 'Anni prima, a Meteor City, Shalnark cerca videocassette con [[franklin|Franklin]] e [[chrollo|Quoll]] e si sceglie un ruolo negli spettacoli doppiati dei ragazzi. Dopo la morte di [[sarasa|Sarasa]], quando [[uvogin|Uborghin]] non capisce il piano di Quoll, Shalnark glielo spiega: usare le nuove tecnologie della comunicazione per creare un rifugio per criminali e trovare tra loro i colpevoli. Dice che lo aiuteranno, e che tre anni passeranno in fretta, con tutto quello che c’è da preparare.',
        en: 'Years earlier in Meteor City, Shalnark searches for videotapes with [[franklin|Franklin]] and [[chrollo|Chrollo]] and picks a role in the children’s dubbed shows. After [[sarasa|Sarasa]]’s death, when [[uvogin|Uvogin]] fails to follow Chrollo’s plan, Shalnark explains it: using new communication technology to build a hideout for criminals and find the culprits among them. He says they will help, and that three years will pass quickly with so much to prepare.',
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
    told(
      371,
      { it: 'Una moneta per Hisoka', en: 'A coin for Hisoka' },
      {
        it: 'Sulla Black Whale Machi incontra [[chrollo|Quoll]] tra la folla e pretende di essere lei a uccidere [[hisoka|Hisoka]]. Quoll trova la richiesta irragionevole. Lei propone allora di decidere lanciando una moneta, ma Quoll risponde che il lancio della moneta vale solo tra due Ragni, mentre questo conflitto riguarda ogni membro della Brigata, lui compreso. È sicuro che Hisoka sia a bordo e che lo troveranno.',
        en: 'Aboard the Black Whale, Machi meets [[chrollo|Chrollo]] in a crowd and demands to be the one who kills [[hisoka|Hisoka]]. Chrollo finds this unreasonable. She then proposes settling it with a coin toss, but Chrollo answers that a coin toss is only for two Spiders, while this conflict concerns every member of the Troupe, himself included. He is certain that Hisoka is aboard and that they will find him.',
      },
    ),
    told(
      397,
      { it: 'Riportarla a casa', en: 'Taking her home' },
      {
        it: 'Anni prima, a Meteor City, Machi è tra i ragazzi che cercano [[sarasa|Sarasa]]. Quando [[uvogin|Uborghin]] fa per andarsene dopo che il corpo è stato trovato, Machi lo ferma: devono riportarla a casa, perché lasciarla lì sarebbe troppo triste, e deve aver sofferto e avuto paura. Al funerale chiede all’imbalsamatrice [[renko|Renko]] di insegnarle. Renko le chiede se vede l’aura e le dà un lasciapassare per andarla a trovare, e la parola aura resta nella mente di Machi.',
        en: 'Years earlier in Meteor City, Machi is among the children searching for [[sarasa|Sarasa]]. When [[uvogin|Uvogin]] starts to walk off after the body is found, Machi stops him: they must take her home, because leaving her would be too sad, and she must have been in pain and afraid. At the funeral she asks the embalmer [[renko|Renko]] to teach her. Renko asks whether she can see aura and gives her a pass to visit, and the word aura lingers in Machi’s mind.',
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
        it: 'Dopo il banchetto Kachow e la gemella [[fugetsu-hui-guo-rou|Fugetsu]] cercano di uscire insieme, ma devono andarsene una alla volta. Quando Fugetsu le chiede della successione, Kachow le dice di non abituarsi troppo: lavoreranno insieme per uccidere gli altri, e quando saranno rimaste solo loro convincerà il padre a risparmiare la sorella. Le ricorda di sorridere alle telecamere. Con le sue guardie è molto esigente, e [[melody|Melody]] si chiede se il principe stia ingannando se stessa.',
        en: 'After the banquet, Kacho and her twin [[fugetsu-hui-guo-rou|Fugetsu]] try to leave together, but they must go one at a time. When Fugetsu asks about the succession, Kacho tells her not to get too comfortable: they will work together to kill the others, and once only they are left she will persuade their father to spare her sister. She reminds her to smile for the cameras. With her own guards she is very demanding, and [[melody|Melody]] wonders whether the prince is fooling herself.',
      },
    ),
    told(
      383,
      { it: 'La fuga', en: 'The escape' },
      {
        it: 'Kachow prepara la fuga con [[melody|Melody]] fingendo di odiare le sue guardie, e una volta sola chiama sua madre vecchia strega. Al banchetto lei e [[fugetsu-hui-guo-rou|Fugetsu]] escono durante l’esibizione di Melody e salgono su una scialuppa. Vicino al mare aperto delle mani si stringono intorno a loro, e Kachow capisce che un principe che lascia la nave muore. Fa aprire a Fugetsu una porta verso la nave. Più tardi le gemelle sono a letto, una accanto all’altra, ma Kachow giace morta sulla scialuppa: la sua bestia ha preso il suo aspetto per proteggere la sorella.',
        en: 'Kacho plans the escape with [[melody|Melody]] behind a show of hating her guards, and once alone calls her mother an old hag. At the banquet she and [[fugetsu-hui-guo-rou|Fugetsu]] slip out during Melody’s performance and board a lifeboat. Near open water, hands close in around them, and Kacho realises that a prince who leaves the ship dies. She has Fugetsu open a door back to the ship. Later the twins lie side by side in bed, but Kacho lies dead on the lifeboat: her beast has taken her form to protect her sister.',
      },
    ),
    told(
      400,
      { it: 'Fare re Fugetsu', en: 'Making Fugetsu king' },
      {
        it: 'La bestia di Kachow, che ne ha preso l’aspetto alla sua morte, resta con [[fugetsu-hui-guo-rou|Fugetsu]] all’Ufficio di Giustizia. Pensa di essere tornata come spirito guardiano e teme che sia l’aura di Fugetsu a tenerla visibile. Dice a [[melody|Melody]] di non avere rimpianti: faranno re Fugetsu e terranno nascosta alla sorella la sua morte. Quando Fugetsu, pallida e debole, le dice che ora tocca a lei proteggerla, Kachow la prega di riposare e chiede aiuto a Melody.',
        en: 'Kacho’s beast, which took her form when she died, stays with [[fugetsu-hui-guo-rou|Fugetsu]] at the Justice Bureau. It believes it came back as a guardian spirit and fears that Fugetsu’s aura is keeping it visible. It tells [[melody|Melody]] it has no regrets: they will make Fugetsu king and keep her death secret from her sister. When Fugetsu, pale and weak, says it is now her turn to protect her, Kacho begs her to rest and turns to Melody for help.',
      },
    ),
    told(
      403,
      { it: 'Il piano delle lettere', en: 'The letter plan' },
      {
        it: 'La bestia di Kachow, che ne ha ancora l’aspetto, sospetta che dietro la debolezza di [[fugetsu-hui-guo-rou|Fugetsu]] ci sia [[luzurus-hui-guo-rou|Loozlus]], che vende droga, e vuole fermarlo subito. Con [[melody|Melody]] e [[kaiser|Kaiser]] progetta di far aprire a Fugetsu una porta nella camera del principe, dove però lei deve prima essere stata. Così Fugetsu consegna a ogni principe una lettera che Kachow avrebbe scritto prima di morire, piena di segreti che Kaiser ha passato alla bestia. Consegnate le lettere, la bestia annuncia che agiranno la notte seguente.',
        en: 'Kacho’s beast, which still has her form, suspects that [[luzurus-hui-guo-rou|Luzurus]], who sells drugs, is behind [[fugetsu-hui-guo-rou|Fugetsu]]’s weakness, and wants to stop him at once. With [[melody|Melody]] and [[kaiser|Kaiser]] it plans to have Fugetsu open a door into his bedroom, but she must first have been there. So Fugetsu delivers to each prince a letter that Kacho supposedly wrote before dying, filled with secrets Kaiser leaked to the beast. Once the letters are delivered, the beast announces that they will act the following night.',
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
    told(
      376,
      { it: 'La porta del gioco', en: 'The playset door' },
      {
        it: 'Una notte sulla parete di Fugetsu compare una porta: è quella del tunnel giocattolo che lei e [[kacho-hui-guo-rou|Kachow]] usavano da bambine, fingendo di poter andare ovunque. La porta la fa sbucare dal letto di Kachow, che la rimanda indietro. Quel giorno Fugetsu non riesce a farla ricomparire, ma il giorno dopo sì: funziona una volta al giorno. Ne studia le regole, sperando di usare i suoi “poteri magici” per fuggire dalla nave con Kachow.',
        en: 'One night a door appears on Fugetsu’s wall: the door of the tunnel playset she and [[kacho-hui-guo-rou|Kacho]] used as children, pretending they could go anywhere. It brings her out of Kacho’s bed, and her sister sends her back. That day Fugetsu cannot make it appear again, but the next day she can: it works once a day. She studies its rules, hoping to use her “magic powers” to escape the ship with Kacho.',
      },
    ),
    told(
      381,
      { it: 'Trovata al terzo livello', en: 'Found on Tier 3' },
      {
        it: 'Fugetsu finisce sul terzo livello, dove [[mizaistom-nana|Mizaistom]] la trova senza documenti durante il coprifuoco. Alla stazione di polizia vuole parlare solo con [[kacho-hui-guo-rou|Kachow]]. Mizaistom la riporta al primo livello, dove la madre [[seiko-hui-guo-rou|Seiko]] la accoglie felice. Un funzionario dell’Ufficio di Giustizia le evita la reclusione, ma sarà sorvegliata per 72 ore e parlare con Kachow sarà più difficile. Fugetsu promette di esercitarsi per il banchetto.',
        en: 'Fugetsu ends up on Tier 3, where [[mizaistom-nana|Mizaistom]] finds her without ID during the curfew. At the police station she will only talk about seeing [[kacho-hui-guo-rou|Kacho]]. Mizaistom brings her back to Tier 1, where her mother [[seiko-hui-guo-rou|Seiko]] welcomes her happily. A Justice Bureau official spares her confinement, but she will be watched for 72 hours and talking to Kacho will be harder. Fugetsu promises to practise for the banquet.',
      },
    ),
    told(
      383,
      { it: 'La porta verso la nave', en: 'The door back to the ship' },
      {
        it: 'Al banchetto Fugetsu e [[kacho-hui-guo-rou|Kachow]] escono durante l’esibizione di [[melody|Melody]], e [[keeney|Keeney]] le guida fino a una scialuppa. Vicino al mare aperto delle mani si stringono intorno a loro, e Kachow le dice di aprire una porta verso la nave. La porta si chiude lasciando Fugetsu sola nel tunnel, finché non arriva Kachow. Le gemelle sono a letto una accanto all’altra, sorridenti, ma Kachow giace morta sulla scialuppa: la sua bestia ne ha preso l’aspetto.',
        en: 'At the banquet Fugetsu and [[kacho-hui-guo-rou|Kacho]] slip out during [[melody|Melody]]’s performance, and [[keeney|Keeney]] leads them to a lifeboat. Near open water, hands close in around them, and Kacho tells her to open a door back to the ship. The door shuts with Fugetsu alone in the tunnel, until Kacho comes through. The twins lie side by side in bed, smiling, but Kacho lies dead on the lifeboat: her beast has taken her form.',
      },
    ),
    told(
      400,
      { it: 'Più forte a ogni uso', en: 'Stronger with every use' },
      {
        it: 'All’Ufficio di Giustizia Fugetsu esce dalla sua porta tutta eccitata: ora può usare la sua abilità più volte al giorno, e la porta di ritorno compare anche quando è sola. Pallida e in lacrime, dice a [[kacho-hui-guo-rou|Kachow]] che ora tocca a lei proteggerla, poi perde i sensi. Quando [[melody|Melody]] la incrocia in un corridoio, trova la sua aura debole come lo Zetsu, il battito instabile e degli spiriti maligni attirati da lei.',
        en: 'At the Justice Bureau, Fugetsu comes out of her door full of excitement: she can now use her ability several times a day, and the return door appears even when she is alone. Pale and in tears, she tells [[kacho-hui-guo-rou|Kacho]] that it is now her turn to protect her, then passes out. When [[melody|Melody]] passes her in a corridor, she finds her aura as weak as Zetsu, her heartbeat unstable, and evil spirits drawn to her.',
      },
    ),
    told(
      402,
      { it: 'Lettere per i principi', en: 'Letters for the princes' },
      {
        it: 'Debole e circondata da spiriti maligni, Fugetsu gira il primo livello con [[kaiser|Kaiser]] per consegnare a ogni principe una lettera che Kaiser presenta come l’ultimo messaggio di sua sorella [[kacho-hui-guo-rou|Kachow]]. Il verso della bestia di [[benjamin-hui-guo-rou|Benjamin]] scaccia gli spiriti intorno a lei, e lui pensa che non durerà altri dieci giorni. [[luzurus-hui-guo-rou|Loozlus]] prende la lettera senza alzarsi e le fa le condoglianze per Kachow. Mentre lei esce dai suoi alloggi, [[basho|Basho]] le regala un portafortuna con un haiku, che per un po’ terrà lontani gli spiriti.',
        en: 'Weak and surrounded by evil spirits, Fugetsu goes around Tier 1 with [[kaiser|Kaiser]] to hand each prince a letter that Kaiser presents as the last message of her sister [[kacho-hui-guo-rou|Kacho]]. [[benjamin-hui-guo-rou|Benjamin]]’s beast screeches and drives away the spirits around her, and he thinks she will not last ten more days. [[luzurus-hui-guo-rou|Luzurus]] takes his letter without getting up and apologises to her about Kacho. As she leaves his quarters, [[basho|Basho]] gives her a good-luck charm with a haiku, which will keep the spirits away for a while.',
      },
    ),
  ],
  'melody': [
    told(
      350,
      { it: 'Al servizio di Kachow', en: 'Hired by Kacho' },
      {
        it: 'Melody è uno dei cinque Hunter che [[kurapika|Kurapika]] recluta perché si candidino come guardie del corpo dei principi e raccolgano informazioni su [[tserriednich-hui-guo-rou|Tserriednich]]. Quando [[basho|Basho]] osserva che i principi più ingenui offrono denaro come ricompensa, Melody ribatte che in quel caso sarà tutto più facile. Viene assunta da [[kacho-hui-guo-rou|Kachow]].',
        en: 'Melody is one of the five Hunters [[kurapika|Kurapika]] recruits to apply as bodyguards to the princes and gather information on [[tserriednich-hui-guo-rou|Tserriednich]]. When [[basho|Basho]] remarks that the naive princes offer money as a reward, Melody argues that this will make things easier. She is hired by [[kacho-hui-guo-rou|Kacho]].',
      },
    ),
    told(
      360,
      { it: 'Una zona tranquilla', en: 'A clear section' },
      {
        it: 'A bordo [[kacho-hui-guo-rou|Kachow]] è molto esigente con le sue guardie, e Melody, che è una di loro, si chiede se il principe non stia ingannando se stessa. Quando le bestie guardiane invadono gli alloggi di [[woble-hui-guo-rou|Woble]], [[kurapika|Kurapika]] lancia una chiamata d’emergenza e Melody risponde che nella sua zona non c’è nulla.',
        en: 'On board, [[kacho-hui-guo-rou|Kacho]] is very demanding with her guards, and Melody, one of them, wonders whether the prince is fooling herself. When guardian beasts flood [[woble-hui-guo-rou|Woble]]’s quarters, [[kurapika|Kurapika]] makes an emergency call and Melody reports that her section is clear.',
      },
    ),
    told(
      377,
      {
        it: 'Messaggi che gli adulti non sentono',
        en: 'Messages adults cannot hear',
      },
      {
        it: 'Sentendo il cuore di [[kacho-hui-guo-rou|Kachow]] accelerare la notte in cui [[fugetsu-hui-guo-rou|Fugetsu]] compare nel suo letto, Melody capisce quanto il principe sia forte e decide di parlarle del Nen. Kachow le parla allora in codice Morse con un dispositivo dal suono acuto che gli adulti non sentono, e gliene lascia un secondo in cucina. Insieme preparano un concerto per il prossimo banchetto, trasmesso in tutto il primo livello. Melody capisce che Kachow finge di odiare le sue guardie perché salvino Fugetsu al suo posto, e giura che entrambe lasceranno la nave.',
        en: 'Hearing [[kacho-hui-guo-rou|Kacho]]’s heart race the night [[fugetsu-hui-guo-rou|Fugetsu]] appears in her bed, Melody sees how strong the prince is and decides to tell her about Nen. Kacho then talks to her in Morse code through a high-pitched device adults cannot hear, and leaves a second one for her in the kitchen. Together they plan a concert for the next banquet, broadcast across Tier 1. Melody realises that Kacho pretends to hate her guards so that they will save Fugetsu instead, and swears both twins will leave the ship.',
      },
    ),
    told(
      383,
      { it: 'Tre minuti', en: 'Three minutes' },
      {
        it: 'Al banchetto della domenica Melody suona il flauto dopo l’assolo di pianoforte di [[keeney|Keeney]]. Suonata con sincerità, la sua musica incanta chiunque la ascolti per tre minuti, e gli altoparlanti la portano in tutto il primo livello: chi la sente vede montagne, fiori e farfalle. Intanto Keeney guida [[kacho-hui-guo-rou|Kachow]] e [[fugetsu-hui-guo-rou|Fugetsu]] fino a una scialuppa. Melody aveva sentito il suo battito quando le aveva detto che cercava un posto dove morire, e non era riuscita a dissuaderlo.',
        en: 'At the Sunday banquet Melody plays her flute after [[keeney|Keeney]]’s piano solo. Played sincerely, her music holds everyone who hears it for three minutes, and the loudspeakers carry it across Tier 1: those who hear it see mountains, flowers and butterflies. Meanwhile Keeney leads [[kacho-hui-guo-rou|Kacho]] and [[fugetsu-hui-guo-rou|Fugetsu]] to a lifeboat. Melody had heard his heartbeat when he told her he was looking for a place to die, and could not talk him out of it.',
      },
    ),
    told(
      400,
      { it: 'Un piano per Fugetsu', en: 'A plan for Fugetsu' },
      {
        it: 'Trattenuta all’Ufficio di Giustizia, Melody si dà la colpa per la morte di [[kacho-hui-guo-rou|Kachow]], ma la bestia del principe, che ne ha preso l’aspetto, le ordina di riprendersi: faranno re [[fugetsu-hui-guo-rou|Fugetsu]]. [[kaiser|Kaiser]] propone di avvelenare i principi di rango più alto durante la sua prossima esibizione, e lei accetta pur sospettando di lui. Incrociando Fugetsu in un corridoio, trova la sua aura debole come lo Zetsu e spiriti maligni attirati da lei. [[zhang-lei-hui-guo-rou|Chowrai]] le regala una moneta, e Melody chiede a Kaiser di raccontare tutto a [[kurapika|Kurapika]].',
        en: 'Held at the Justice Bureau, Melody blames herself for [[kacho-hui-guo-rou|Kacho]]’s death, but the prince’s beast, which has taken her form, orders her to pull herself together: they will make [[fugetsu-hui-guo-rou|Fugetsu]] king. [[kaiser|Kaiser]] proposes poisoning the higher princes during her next performance, and she agrees while suspecting him. Passing Fugetsu in a corridor, she finds her aura as weak as Zetsu and evil spirits drawn to her. [[zhang-lei-hui-guo-rou|Zhang Lei]] gives her a coin, and Melody asks Kaiser to tell [[kurapika|Kurapika]] everything.',
      },
    ),
    told(
      402,
      { it: 'Il segno sulla schiena', en: 'The mark on her back' },
      {
        it: 'All’Ufficio di Giustizia, la bestia di [[kacho-hui-guo-rou|Kachow]] mostra a Melody la foto di un segno sulla schiena di [[fugetsu-hui-guo-rou|Fugetsu]]. Melody pensa a un segno del Nen: Fugetsu è caduta in una trappola, e ora, quando usa la sua abilità, compare anche una porta del nemico. Il suo bisogno di usarla sembra una dipendenza, e se continua non arriverà al prossimo fine settimana. Con [[kaiser|Kaiser]] progettano di fermare il sospettato, [[luzurus-hui-guo-rou|Loozlus]], passando dalla porta di Fugetsu. Mentre Kaiser dice di essere pronto a rischiare tutto, Melody ascolta il suo battito senza notare cambiamenti, e per proteggere Fugetsu decide di tenerselo vicino.',
        en: 'At the Justice Bureau, [[kacho-hui-guo-rou|Kacho]]’s beast shows Melody a photo of a mark on [[fugetsu-hui-guo-rou|Fugetsu]]’s back. Melody guesses that it is a Nen mark: Fugetsu has fallen into a trap, and now an enemy’s door appears whenever she uses her ability. Her urge to use it looks like addiction, and if she goes on, she will not last until next weekend. With [[kaiser|Kaiser]] they plan to stop the suspect, [[luzurus-hui-guo-rou|Luzurus]], through Fugetsu’s door. As Kaiser says he will risk everything, Melody listens to his heartbeat and finds no change, and to protect Fugetsu she decides to keep him close.',
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
        it: 'Dopo aver annunciato al padre che vuole ritirarsi, Harkenburg trova tutte e undici le sue guardie del corpo a terra, prive di sensi, e ne resta sconvolto. Quando si sveglia nel suo letto le trova invece vive e al lavoro, e si chiede se abbia soltanto sognato. Poi nota sul dorso della mano sinistra un segno a forma di piuma: qualcosa è successo davvero.',
        en: 'After telling his father he wants to withdraw, Halkenburg finds all eleven of his bodyguards lying unconscious and is horrified. When he wakes in his bed he finds them alive and at work, and wonders whether he only dreamed it. Then he notices a feather-shaped mark on the back of his left hand: something really did happen.',
      },
    ),
    told(
      382,
      { it: 'Davanti al re', en: 'Before the king' },
      {
        it: 'Per quattro giorni Harkenburg porta lettere alla porta del re, finché i soldati abbassano la guardia. Poi lui e cinque guardie estraggono le armi e raggiungono il padre. Spara, e il proiettile si ferma a mezz’aria: il re gli dice che ormai fa parte del rito e non può morire finché non sarà finito. Quando Harkenburg punta l’arma contro se stesso, la sua bestia ferma anche quel proiettile. Il re gli dice che solo un re può cambiare il paese. Harkenburg torna con una nuova determinazione, e una freccia fatta dell’aura dei suoi seguaci trafigge il soldato che [[benjamin-hui-guo-rou|Benjamin]] aveva messo tra le sue guardie e a cui aveva ordinato di ucciderlo, che si rialza ai suoi ordini.',
        en: 'For four days Halkenburg brings letters to the king’s door until the soldiers lower their guard. Then he and five guards draw their guns and reach their father. He fires, and the bullet stops in midair: the king tells him he is now part of the ritual and cannot die until it ends. When Halkenburg turns the gun on himself, his beast stops that bullet too. The king tells him only a king can change the country. Halkenburg returns with new resolve, and an arrow of his followers’ aura pierces the soldier [[benjamin-hui-guo-rou|Benjamin]] had posted among his guards and ordered to kill him, who rises to take his orders.',
      },
    ),
    told(
      386,
      { it: 'Lo scambio delle anime', en: 'Exchanged souls' },
      {
        it: 'Harkenburg studia la sua nuova abilità. La guardia che ha sacrificato giace priva di sensi, e la sua anima sembra vivere nel corpo del soldato di [[benjamin-hui-guo-rou|Benjamin]]. Harkenburg dice che l’abilità si è risvegliata quando, dopo aver parlato con il padre, ha deciso di vincere la successione. Il soldato posseduto accetta di fare ciò che serve per capire l’abilità: davanti alla porta di [[luzurus-hui-guo-rou|Loozlus]] grida la sua fedeltà a Benjamin e si spara. La guardia si risveglia nel proprio corpo, e Harkenburg verifica che la sua anima sia tornata.',
        en: 'Halkenburg studies his new ability. The guard he sacrificed lies unconscious, and his soul seems to live in the body of [[benjamin-hui-guo-rou|Benjamin]]’s soldier. Halkenburg says the ability awoke when, after speaking with his father, he resolved to win the contest. The possessed soldier agrees to do what is needed to understand the ability: at [[luzurus-hui-guo-rou|Luzurus]]’s door he shouts his loyalty to Benjamin and shoots himself. The guard wakes up in his own body, and Halkenburg checks that his soul has returned.',
      },
    ),
    told(
      389,
      { it: 'In custodia', en: 'In custody' },
      {
        it: 'L’abilità di Harkenburg fa tremare l’aura una quarta volta, e un soldato che [[benjamin-hui-guo-rou|Benjamin]] gli aveva mandato grida alla radio che non funziona e che Harkenburg con il suo arco è invincibile. Benjamin, convinto che ogni freccia costi uno degli uomini di Harkenburg, lo fa arrestare con l’accusa di omicidio premeditato per separarlo dalle sue guardie. Cinque uomini di una squadra speciale lo prendono in custodia, e fino al processo non potrà mettersi in contatto con i suoi uomini.',
        en: 'Halkenburg’s ability makes the aura rumble a fourth time, and a soldier [[benjamin-hui-guo-rou|Benjamin]] had sent to him cries over the radio that it does not work and that Halkenburg and his bow are invincible. Benjamin, convinced that each arrow costs one of Halkenburg’s men, has him arrested on suspicion of premeditated murder to cut him off from his guards. Five members of a special task force take him into custody, and until the trial he cannot contact his men.',
      },
    ),
    told(
      403,
      { it: 'Nel corpo di Balsamilco', en: 'In Balsamilco’s body' },
      {
        it: 'La mattina del processo, Harkenburg è con dodici sostenitori civili mentre un soldato di [[benjamin-hui-guo-rou|Benjamin]] distrae [[balsamilco|Balsamilco]] in un corridoio. Un uomo al portatile gli indica la distanza, e Harkenburg scocca una freccia d’aura attraverso il muro. Poi crolla, e il processo viene rinviato mentre lui riposa in infermeria. La sua anima però ora possiede il corpo di Balsamilco, e con la sua voce annuncia a Benjamin che la missione è compiuta.',
        en: 'On the morning of his trial, Halkenburg stands with twelve civilian supporters while one of [[benjamin-hui-guo-rou|Benjamin]]’s soldiers distracts [[balsamilco|Balsamilco]] in a corridor. A man at a laptop signals the distance, and Halkenburg fires an arrow of aura through the wall. Then he collapses, and the trial is postponed while he rests in the sick bay. His soul, however, now possesses Balsamilco’s body, and in Balsamilco’s voice he tells Benjamin that the mission is complete.',
      },
    ),
    told(
      404,
      { it: 'La morte del nono principe', en: 'The Ninth Prince’s death' },
      {
        it: 'Nel corpo di [[balsamilco|Balsamilco]], Harkenburg guarda [[cheadle-yorkshire|Cheadle]] portare via in barella il suo vero corpo, e dice a [[benjamin-hui-guo-rou|Benjamin]] che la missione sarà compiuta in circa dodici ore. La sua abilità scambia la mente di chi è colpito dalla freccia con quella di uno degli uomini che la alimentano, scelto a caso. Prima che il suo corpo muoia prenderà un sonnifero, che dovrebbe dargli circa dieci ore nel corpo di Balsamilco. Quella notte i medici non riescono a rianimare Harkenburg, e la sua morte viene annunciata. Nei panni di Balsamilco organizza con Benjamin un corteo funebre, e Benjamin fa ritirare tutte le accuse perché le sue guardie possano raggiungerlo.',
        en: 'In [[balsamilco|Balsamilco]]’s body, Halkenburg watches [[cheadle-yorkshire|Cheadle]] wheel his own body past, and tells [[benjamin-hui-guo-rou|Benjamin]] that the mission will be complete in about twelve hours. His ability swaps the mind of whoever the arrow strikes with that of one of the men who power it, chosen at random. Before his body dies he will take a sleeping pill, which should give him about ten more hours in Balsamilco’s body. That night the doctors fail to revive Halkenburg, and his death is announced. As Balsamilco, he arranges a funeral procession with Benjamin, who has all charges dropped so that the prince’s guards can join him.',
      },
    ),
    told(
      413,
      { it: 'Ancora in gara', en: 'Still fighting' },
      {
        it: 'La bara di Harkenburg viene portata negli alloggi del re e deposta nella camera funeraria tra [[sale-sale-hui-guo-rou|Saresare]] e [[kacho-hui-guo-rou|Kachow]]. A differenza dei loro, il suo fuoco della vita non si è acceso: il re dice che il suo diritto alla successione non è perduto finché la sua anima risiede in un corpo, e che sta ancora combattendo. Legato a una sedia nella stanza 1009 nel corpo di [[balsamilco|Balsamilco]], Harkenburg ha smesso di fingersi lui e, con gli stessi seguaci, ha scoccato una freccia contro [[benjamin-hui-guo-rou|Benjamin]] per verificare una nuova ipotesi.',
        en: 'Halkenburg’s casket is carried into the king’s quarters and laid in the burial chamber between [[sale-sale-hui-guo-rou|Salé-salé]] and [[kacho-hui-guo-rou|Kacho]]. Unlike theirs, his flame of life has not been lit: the king says that his right of succession is not lost while his soul resides in a body, and that he is still fighting. Bound to a chair in Room 1009 in [[balsamilco|Balsamilco]]’s body, Halkenburg has stopped impersonating him and, powered by the same followers, has fired an arrow at [[benjamin-hui-guo-rou|Benjamin]] to test a new hypothesis.',
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
    told(
      388,
      { it: 'Il prossimo bersaglio', en: 'The next target' },
      {
        it: '[[maor|Maor]] e [[longhi|Longhi]] riferiscono a Tsubeppa che il campo di [[woble-hui-guo-rou|Woble]] è alleato soprattutto con [[zhang-lei-hui-guo-rou|Chowrai]] e che l’addestramento di [[kurapika|Kurapika]] funziona. Lei dice di continuare a trattare l’alleanza e di mandare altre guardie ai corsi. Poiché [[sale-sale-hui-guo-rou|Saresare]] ha saltato il banchetto, conclude che è stato ucciso, e che il prossimo bersaglio dei soldati di [[benjamin-hui-guo-rou|Benjamin]] è lei. Decide di scoprire come è morto, e pensa di aver bisogno di un compagno esperto come Kurapika.',
        en: '[[maor|Maor]] and [[longhi|Longhi]] report to Tubeppa that [[woble-hui-guo-rou|Woble]]’s camp is most closely allied with [[zhang-lei-hui-guo-rou|Zhang Lei]] and that [[kurapika|Kurapika]]’s training works. She tells them to keep negotiating the alliance and to send more guards to the classes. Since [[sale-sale-hui-guo-rou|Salé-salé]] missed the banquet, she concludes that he has been killed, and that she is the next target of [[benjamin-hui-guo-rou|Benjamin]]’s soldiers. She sets out to learn how he died, and thinks she needs an experienced partner like Kurapika.',
      },
    ),
    told(
      402,
      { it: 'Un’alleanza con Woble', en: 'An alliance with Woble' },
      {
        it: '[[maor|Maor]] e [[longhi|Longhi]] riferiscono a Tsubeppa che [[kurapika|Kurapika]] è entrato nella tregua e ha accettato l’alleanza, a condizione che [[woble-hui-guo-rou|Woble]] e sua madre [[oito-hui-guo-rou|Oito]] vengano con lui nella stanza 1005. Tsubeppa non avrebbe nulla in contrario a vivere con loro. Poiché i soldati di [[benjamin-hui-guo-rou|Benjamin]] la prendono di mira, spera che la notizia dell’accordo sposti l’attenzione di Benjamin su [[zhang-lei-hui-guo-rou|Chowrai]], e chiede ai due di mostrare la loro intesa con Chowrai alla prossima lezione. Poi la sua bestia compare alle sue spalle davanti al soldato di Benjamin, che la ritiene di tipo condizionale.',
        en: '[[maor|Maor]] and [[longhi|Longhi]] tell Tubeppa that [[kurapika|Kurapika]] has joined the truce and accepted the alliance, on condition that [[woble-hui-guo-rou|Woble]] and her mother [[oito-hui-guo-rou|Oito]] come with him to Room 1005. Tubeppa would not even mind living with them. Since [[benjamin-hui-guo-rou|Benjamin]]’s soldiers are targeting her, she hopes that news of the deal will turn his attention to [[zhang-lei-hui-guo-rou|Zhang Lei]], and tells the two to show their closeness to Zhang Lei at the next class. Then her beast appears behind her, facing Benjamin’s soldier, who guesses that it is a conditional type.',
      },
    ),
    told(
      417,
      { it: 'Nella stanza 1001', en: 'In Room 1001' },
      {
        it: 'Sotto la legge marziale speciale, Tsubeppa va nella stanza 1001 solo con guardie dell’esercito reale, lasciando ai suoi scienziati dei test da fare. Lì lei e [[tyson-hui-guo-rou|Tyson]] sentono [[benjamin-hui-guo-rou|Benjamin]] incolpare un soldato che ha rubato un’arma, e citare l’ipotesi di [[kurapika|Kurapika]] secondo cui la monarchia potrebbe cadere senza che nessuno di loro muoia. Intanto lui libera di nascosto l’arma biologica nell’aria. Quando sente che non potranno lasciare i propri alloggi, Tsubeppa sospetta che Benjamin colpirà durante le ispezioni e che nasconda qualcos’altro, e non si fiderà delle sue parole finché lui e [[camilla-hui-guo-rou|Camilla]] saranno vivi.',
        en: 'Under special martial law, Tubeppa goes to Room 1001 with Royal Army guards only, leaving her scientists to run tests. There she and [[tyson-hui-guo-rou|Tyson]] hear [[benjamin-hui-guo-rou|Benjamin]] blame a soldier who stole a weapon, and raise [[kurapika|Kurapika]]’s hypothesis that the monarchy could fall while all of them survive. Meanwhile he secretly releases the bioweapon into the air. Told that they may not leave their quarters, Tubeppa suspects that he will strike during the inspections and is hiding something else, and will not trust his words while he and [[camilla-hui-guo-rou|Camilla]] are alive.',
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
    told(
      373,
      { it: 'Il gatto', en: 'The cat' },
      {
        it: 'Camilla dice a un soldato di [[benjamin-hui-guo-rou|Benjamin]] che ucciderà Benjamin e gli ordina di aiutarla. Lui le spara e la uccide, ma compare un grosso gatto che lo schiaccia e la riporta in vita con una goccia dalla coda. Camilla va agli alloggi di Benjamin e lungo la strada spara a due guardie. Benjamin para i colpi con l’aura e non reagisce. [[furykov|Furykov]] la arresta, e quando lei minaccia la sua famiglia, lui risponde che la sua unica famiglia è Benjamin. Camilla viene messa in isolamento.',
        en: 'Camilla tells one of [[benjamin-hui-guo-rou|Benjamin]]’s soldiers that she will kill Benjamin and orders him to help. He shoots her dead, but a large cat appears, crushes him and brings her back to life with a drop from its tail. Camilla sets out for Benjamin’s quarters, shooting two guards on the way. Benjamin blocks her shots with his aura and does not strike back. [[furykov|Furykov]] arrests her, and when she threatens his family, he answers that Benjamin is his only family. Camilla is placed in solitary confinement.',
      },
    ),
    told(
      376,
      { it: 'Il processo', en: 'The trial' },
      {
        it: '[[benjamin-hui-guo-rou|Benjamin]] e Camilla compaiono davanti al giudice supremo. Il rappresentante di Camilla sostiene che lei è stata aggredita da un soldato di Benjamin e ha sparato a Benjamin per difendersi; quello di Benjamin, che è stata lei ad attaccarlo. Entrambe le parti chiedono che si perquisisca la stanza dell’altro principe, e il processo viene rinviato. Fino alla ripresa entrambi restano sotto sorveglianza. Benjamin non se ne preoccupa: grazie all’abilità del soldato morto può continuare a osservarla.',
        en: '[[benjamin-hui-guo-rou|Benjamin]] and Camilla stand trial before the Supreme Magistrate. Camilla’s representative claims that she was attacked by one of Benjamin’s soldiers and shot Benjamin in self-defence; Benjamin’s says that she attacked him. Both sides demand that the other prince’s room be searched, and the trial is postponed. Until it resumes, both princes are kept under surveillance. Benjamin is unconcerned: through the dead soldier’s ability he can keep watching her.',
      },
    ),
    told(
      416,
      { it: 'La maledizione su Benjamin', en: 'The curse on Benjamin' },
      {
        it: 'Quando [[benjamin-hui-guo-rou|Benjamin]] irrompe nella sua stanza durante un massaggio, Camilla gli spara; i proiettili rimbalzano sulla sua aura, e lui uccide le sue due domestiche, tra cui [[fukataki|Fukataki]]. Sapendo che la sua abilità colpisce chi la uccide, non le spara. Una delle sue soldatesse emarginate entra barcollando con un coltello nella gola, lo estrae e muore, e la sua morte libera una maledizione che annerisce il corpo di Benjamin. Camilla dice che la maledizione è compiuta dopo dieci anni di piani, e pensa di rallentare il metabolismo per sopravvivergli. Prima di andarsene, Benjamin le chiede cosa succederebbe se prendesse una malattia incurabile, e la contagia in silenzio.',
        en: 'When [[benjamin-hui-guo-rou|Benjamin]] storms into her room during a massage, Camilla shoots at him; the bullets bounce off his aura, and he kills her two servants, [[fukataki|Fukataki]] among them. Knowing that her ability strikes back if she is killed, he does not shoot her. One of her outcast soldiers staggers in with a knife in her throat, pulls it out and dies, and her death releases a curse that darkens Benjamin’s body. Camilla says the curse is complete after ten years of planning, and means to slow her metabolism to outlast him. Before leaving, Benjamin asks what would happen if she caught an incurable disease, and silently infects her.',
      },
    ),
  ],
  'zhang-lei-hui-guo-rou': [
    told(
      363,
      { it: 'Le guardie di Woble', en: 'Woble’s guards' },
      {
        it: 'Chowrai viene a sapere che quasi tutte le guardie di [[woble-hui-guo-rou|Woble]] sono morte e si stupisce che sia stata colpita per prima la più giovane. Poi ricorda che le guardie di Woble sono scelte dalle altre regine. Una delle sue guardie solleva la questione delle bestie di Nen. Quando arriva un soldato di [[benjamin-hui-guo-rou|Benjamin]] come guardia reale, Chowrai capisce il piano del fratello e vede l’occasione di saperne di più sulle bestie.',
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
    told(
      376,
      { it: 'Monete dalla bestia', en: 'Coins from the beast' },
      {
        it: 'A colazione una moneta con un disegno floreale e il numero 1 cade alle spalle di Chowrai. Un soldato di [[benjamin-hui-guo-rou|Benjamin]] gliela porge, nascondendo che è caduta dalla bocca della bestia di Chowrai e che un’altra era caduta il giorno prima. Quando compare una terza moneta, Chowrai capisce che viene dalla sua bestia. Il soldato ragiona che una moneta conferisca delle abilità a chi la possiede, una volta soddisfatte certe condizioni.',
        en: 'At breakfast a coin with a floral design and the number 1 drops behind Zhang Lei. One of [[benjamin-hui-guo-rou|Benjamin]]’s soldiers hands it to him, hiding that it fell from the mouth of Zhang Lei’s beast and that another had fallen the day before. When a third coin appears, Zhang Lei realises it comes from his beast. The soldier reasons that a coin grants abilities to whoever holds it once certain conditions are met.',
      },
    ),
    told(
      390,
      { it: 'Dal capo degli Xi-Yu', en: 'Visiting the Xi-Yu boss' },
      {
        it: 'Chowrai premia [[tenftory|Tenftory]], che ora vede le bestie, con la prima moneta che consegna, e sogna di distribuirne al popolo una volta re. Poi va a trovare il capo degli Xi-Yu, un fratellastro illegittimo del re, che resta indifferente alla morte di tre principi. Il capo non sa nulla del Nen né delle bestie, ma promette di chiedere ai membri più giovani della famiglia che lo conoscono. Intanto il soldato di [[benjamin-hui-guo-rou|Benjamin]] nota che la moneta che ha tenuto per sé ora porta il numero 10.',
        en: 'Zhang Lei rewards [[tenftory|Tenftory]], who can now see the beasts, with the first coin he hands out, and dreams of giving them to the people once he is king. He then visits the Xi-Yu boss, an illegitimate half-brother of the king, who is unmoved that three princes have died. The boss knows nothing of Nen or the beasts, but promises to ask the younger members of his family who do. Meanwhile [[benjamin-hui-guo-rou|Benjamin]]’s soldier notices that the coin he kept now shows the number 10.',
      },
    ),
    told(
      404,
      { it: 'Il valore delle monete', en: 'What the coins are worth' },
      {
        it: 'Una delle monete di Chowrai è passata da 1 a 10, e le ipotesi delle sue guardie non lo convincono, così manda a chiamare [[kurapika|Kurapika]]. Su richiesta di Kurapika, [[tenftory|Tenftory]] nota che la sua moneta ha un rovescio diverso, e quando Chowrai porge a Kurapika una moneta da 10, questa prende il numero e il disegno di quella di Tenftory. Kurapika ipotizza un’abilità cumulativa: le monete tenute a lungo accumulano Nen, e in circa sei mesi potrebbero aprire i nodi di chi le possiede. Lusingato, Chowrai gli regala la moneta del giorno. Kurapika tiene per sé il sospetto che le monete creino anche fedeltà.',
        en: 'One of Zhang Lei’s coins has changed from 1 to 10, and his guards’ ideas do not satisfy him, so he sends for [[kurapika|Kurapika]]. At Kurapika’s prompting, [[tenftory|Tenftory]] notices that his coin has a different back, and when Zhang Lei hands Kurapika a 10 coin, it takes on the number and design of Tenftory’s. Kurapika suggests a cumulative ability: coins held long enough store Nen, and in about six months they could open the holder’s nodes. Pleased with the praise, Zhang Lei gives him that day’s coin. Kurapika keeps to himself the suspicion that the coins also breed loyalty.',
      },
    ),
    told(
      410,
      { it: 'Fuga al secondo livello', en: 'Down to Tier 2' },
      {
        it: 'Poco prima che venga dichiarata la legge marziale speciale, Chowrai scende al secondo livello attraverso un ponte che parte dall’interno della residenza di [[onior|Onior]], il capo degli Xi-Yu. [[benjamin-hui-guo-rou|Benjamin]], che non trova né lui né [[luzurus-hui-guo-rou|Loozlus]], pensa che si sia rifugiato all’Ufficio di Giustizia o che sia sceso ancora più in basso per unirsi alla mafia, e gli mette alle calcagna una squadra di ricognizione.',
        en: 'Just before special martial law is declared, Zhang Lei goes down to Tier 2 over a bridge from inside the residence of [[onior|Onior]], the Xi-Yu boss. [[benjamin-hui-guo-rou|Benjamin]], who cannot account for him or [[luzurus-hui-guo-rou|Luzurus]], guesses that he has sought refuge at the Justice Bureau or gone farther down to join the Mafia, and puts a reconnaissance team on his trail.',
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
    told(
      389,
      { it: 'Il libro di Tyson', en: 'The Book of Tyson' },
      {
        it: 'Tyson predica alle sue guardie il potere dell’amore con il suo libro. La sua bestia, un cuore alato con un grande occhio, mette dei piccoli esseri con un occhio su chiunque riceva il libro: prendono aura in cambio di felicità, di più a chi lo legge con attenzione, e chi infrange l’unico tabù del libro subisce una punizione severa. Tyson organizza una festa di compleanno a sorpresa per una sua guardia in un giorno che non è il suo compleanno, perché tra due mesi dovranno salutarsi, e lui si commuove.',
        en: 'Tyson preaches the power of love to her guards with her book. Her beast, a winged heart with one giant eye, puts small eyed creatures on everyone who receives the book: they collect aura in exchange for happiness, more from those who read it closely, and whoever breaks the book’s one taboo suffers severe punishment. Tyson throws a surprise birthday party for one of her guards on a day that is not his birthday, because they will have to say goodbye in two months, and he is moved to tears.',
      },
    ),
    told(
      400,
      { it: 'Il potere dell’amore', en: 'The power of love' },
      {
        it: 'Tyson fa presentare i suoi dipendenti a una guardia del corpo, ognuno in uno dei suoi ruoli preferiti: [[madwig|Madwig]] l’assassino senza memoria, [[himonce|Himoncé]] la star, [[anzel|Anzel]] il fratello segreto e [[hyuga|Hyuga]] il tutor. Dice che sono rinati, e che lo sarà anche lui. A [[izunavi|Izunabi]] racconta che sua madre, [[katrono-hui-guo-rou|Katrono]], vuole vendicarsi delle regine che la compativano, mentre lei combatte solo con l’amore, e promette di chiederle di far leggere il suo libro al re.',
        en: 'Tyson has her employees introduce themselves to a bodyguard, each in one of her favourite roles: [[madwig|Madwig]] the amnesiac hitman, [[himonce|Himoncé]] the star, [[anzel|Anzel]] the secret brother and [[hyuga|Hyuga]] the tutor. She says they have been reborn, and that he will be too. She tells [[izunavi|Izunavi]] that her mother, [[katrono-hui-guo-rou|Katrono]], wants revenge on the queens who pitied her, while Tyson fights only with love, and promises to ask her to have the king read her book.',
      },
    ),
    told(
      417,
      { it: 'Contagiata senza saperlo', en: 'Infected unawares' },
      {
        it: 'Alla dichiarazione della legge marziale speciale, Tyson saltella allegra lungo i corridoi verso la stanza 1001, scortata dalle sue guardie. Lì [[benjamin-hui-guo-rou|Benjamin]] ringrazia lei e [[tubeppa-hui-guo-rou|Tsubeppa]] per la collaborazione e spiega che un traditore ha rubato un’arma portata a bordo contro le creature del Nuovo Continente. Mentre parla, libera di nascosto l’arma biologica nell’aria. Dice loro che non potranno lasciare i propri alloggi finché la legge marziale non sarà revocata. Secondo i suoi calcoli, entrambe moriranno più o meno insieme a [[camilla-hui-guo-rou|Camilla]].',
        en: 'When special martial law is declared, Tyson skips merrily along the corridors to Room 1001, escorted by her guards. There [[benjamin-hui-guo-rou|Benjamin]] thanks her and [[tubeppa-hui-guo-rou|Tubeppa]] for their cooperation and explains that a traitor has stolen a weapon brought aboard against the creatures of the New Continent. As he speaks, he secretly releases the bioweapon into the air. He tells them that they may not leave their quarters until martial law is lifted. By his reckoning, both princes will die around the same time as [[camilla-hui-guo-rou|Camilla]].',
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
    told(
      402,
      { it: 'Una lettera sconvolgente', en: 'A mind-blowing letter' },
      {
        it: 'Loozlus lascia entrare [[kaiser|Kaiser]] e [[fugetsu-hui-guo-rou|Fugetsu]] nella stanza 1007 in cambio della garanzia dell’Ufficio di Giustizia che i suoi alloggi sono puliti. Legge la lettera di [[kacho-hui-guo-rou|Kachow]], che tra l’altro dice di non volere [[tserriednich-hui-guo-rou|Tserriednich]] sul trono, e la trova sconvolgente. Sospetta che ogni principe abbia ricevuto una lettera diversa, forse per metterlo contro Tserriednich, e decide che agire con leggerezza sarebbe pericoloso. Dice che non gli importa sapere se sia vero e lascia la lettera a Kaiser.',
        en: 'Luzurus lets [[kaiser|Kaiser]] and [[fugetsu-hui-guo-rou|Fugetsu]] into Room 1007 in exchange for the Justice Bureau vouching that his quarters are clean. He reads [[kacho-hui-guo-rou|Kacho]]’s letter, which says among other things that she would not want [[tserriednich-hui-guo-rou|Tserriednich]] on the throne, and calls it mind-blowing. He suspects that each prince received a different letter, perhaps to set him against Tserriednich, and decides that acting carelessly would be dangerous. He says he does not care whether any of it is true and tells Kaiser to keep the letter.',
      },
    ),
    told(
      417,
      { it: 'Loozlus sparisce', en: 'Luzurus slips away' },
      {
        it: 'Quando le sue guardie gli riferiscono di due uomini di [[benjamin-hui-guo-rou|Benjamin]] fuori dalla stanza 1009, Loozlus prevede che la legge marziale speciale sta per cominciare. Ordina alle guardie di non opporre resistenza e di riunire le armi, fa bruciare la droga nella sua camera e manda una guardia Hunter a tenere occupato il soldato di Benjamin, [[kanjidol|Kanjidol]]. Alla dichiarazione della legge marziale Loozlus non è più nei suoi alloggi, e Benjamin viene a sapere che un Hunter ha aggredito Kanjidol prima di aiutarlo a fuggire.',
        en: 'When his guards report two of [[benjamin-hui-guo-rou|Benjamin]]’s men outside Room 1009, Luzurus predicts that special martial law is about to begin. He orders his guards to put up no resistance and to gather their weapons in one place, has the drugs in his bedroom burned, and sends a Hunter guard to keep Benjamin’s soldier, [[kanjidol|Kanjidol]], busy. When martial law is declared, Luzurus is missing from his quarters, and Benjamin learns that a Hunter assaulted Kanjidol before helping Luzurus escape.',
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
    told(
      382,
      { it: 'La morte di Saresare', en: 'Salé-salé’s death' },
      {
        it: 'Un soldato di [[benjamin-hui-guo-rou|Benjamin]] studia la bestia di Saresare: il suo fumo fa provare affetto per il principe a chi lo respira, abbastanza da trasformare il regno in una dittatura. Il Nen del soldato crea un predatore che divora la bestia in un solo boccone. Un altro soldato, abile negli omicidi, prende il suo posto. Più tardi Saresare giace a letto senza respirare mentre una delle sue donne cerca di rianimarlo, e il soldato comunica a Benjamin via radio che l’omicidio è riuscito.',
        en: 'One of [[benjamin-hui-guo-rou|Benjamin]]’s soldiers studies Salé-salé’s beast: its smoke makes whoever breathes it feel goodwill toward the prince, enough to turn the kingdom into a dictatorship. The soldier’s Nen creates a predator that devours the beast in a single bite. Another soldier, skilled at assassination, takes his place. Later Salé-salé lies in bed not breathing while one of his women tries to revive him, and the soldier radios Benjamin that the assassination has succeeded.',
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
        it: 'Duazul, la seconda regina, ha quattro figli tra i principi: [[camilla-hui-guo-rou|Camilla]], [[tubeppa-hui-guo-rou|Tsubeppa]], [[luzurus-hui-guo-rou|Loozlus]] e [[halkenburg-hui-guo-rou|Harkenburg]]. A bordo della Black Whale, Camilla le ordina di avvicinarsi ad Harkenburg perché lei possa ucciderlo, e di fare lo stesso con [[benjamin-hui-guo-rou|Benjamin]]. Una guardia di Benjamin ascolta di nascosto e raccoglie prove del complotto con il Nen.',
        en: 'Duazul, the Second Queen, has four children among the princes: [[camilla-hui-guo-rou|Camilla]], [[tubeppa-hui-guo-rou|Tubeppa]], [[luzurus-hui-guo-rou|Luzurus]] and [[halkenburg-hui-guo-rou|Halkenburg]]. Aboard the Black Whale, Camilla orders her to get close to Halkenburg so that Camilla can kill him, and to do the same with [[benjamin-hui-guo-rou|Benjamin]]. One of Benjamin’s guards overhears and gathers evidence of the plot with his Nen.',
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
    told(
      412,
      { it: 'Il solo a non tornare', en: 'The only one who does not return' },
      {
        it: 'Alla seconda lezione di Nen, Slakka si presenta come legato a [[duazul-hui-guo-rou|Duazul]], dice di essere stato assegnato a [[zhang-lei-hui-guo-rou|Chowrai]] ma di preferire imparare il Nen che restare ad aspettare, e chiede di entrare nel corso introduttivo. Sorride della rabbia di [[sakata|Sakata]], sperando di strappare informazioni sul Nen. Quando [[kurapika|Kurapika]] dichiara che [[woble-hui-guo-rou|Woble]] non partecipa alla successione, Slakka ride e lo accusa di mentire e di sommergerli di informazioni. Tra tutti i partecipanti a cui viene dato tempo per riflettere, è l’unico a non tornare.',
        en: 'At the second Nen class, Slakka introduces himself as affiliated with [[duazul-hui-guo-rou|Duazul]], says he was assigned to [[zhang-lei-hui-guo-rou|Zhang Lei]] but would rather learn Nen than wait around, and asks to join the introductory class. He grins at [[sakata|Sakata]]’s anger, hoping to force out information on Nen. When [[kurapika|Kurapika]] declares that [[woble-hui-guo-rou|Woble]] is not taking part in the contest, Slakka laughs and accuses him of lying and of drowning them in information. Of all the participants given time to think it over, he is the only one who does not come back.',
      },
    ),
  ],
  // The Nen class of chapter 370: every attendee is named there.
  'barrigen': [
    told(
      370,
      { it: 'I serpenti', en: 'The snakes' },
      {
        it: 'La madre di [[marayam-hui-guo-rou|Marayam]] manda Barrigen a imparare il Nen nel tempo stabilito, e lui è contento di essere stato scelto. Al corso di [[kurapika|Kurapika]] si presenta con gli altri. Quando [[loberry|Loberry]] indica una donna che nessuno vede, Barrigen crolla a terra con le mani alla gola. Dei serpenti avvolti intorno al collo e alle braccia gli prosciugano il sangue. Una guardia spara ai serpenti, ma Barrigen è già morto.',
        en: '[[marayam-hui-guo-rou|Marayam]]’s mother sends Barrigen to learn Nen in the given time, and he is glad to have been chosen. At [[kurapika|Kurapika]]’s class he introduces himself with the others. When [[loberry|Loberry]] points at a woman nobody else can see, Barrigen falls to the floor clutching his neck. Snakes wrapped around his neck and arms drain his blood. A guard shoots at the snakes, but Barrigen is already dead.',
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
    told(
      376,
      { it: 'Fuori dallo spazio', en: 'Outside the space' },
      {
        it: 'Per tornare al corso di [[kurapika|Kurapika]], Belerainte esce dagli alloggi di [[marayam-hui-guo-rou|Marayam]] e non riesce più a rientrare: il personale è chiuso in uno spazio di Nen a senso unico. Al corso, quando [[maor|Maor]] e [[satobi|Satobi]] parlano di un complotto, lui risponde che gli Hunter fanno solo il loro lavoro e che annullare il corso farebbe fuggire l’assassino. Poi informa [[hanzo|Hanzo]] e [[vergei|Vergei]] parlando con un altro Hunter della scorta davanti alla loro porta.',
        en: 'To return to [[kurapika|Kurapika]]’s class, Belerainte steps out of [[marayam-hui-guo-rou|Marayam]]’s quarters and can no longer get back in: the staff are shut inside a one-way Nen space. At the class, when [[maor|Maor]] and [[satobi|Satobi]] talk of a plot, he answers that the Hunters are only doing their job and that cancelling the class would let the assassin escape. He then reports to [[hanzo|Hanzo]] and [[vergei|Vergei]] by talking with a fellow Hunter of the escort in front of their door.',
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
    told(
      376,
      { it: 'Un regalo per il principe', en: 'A present for the prince' },
      {
        it: 'Danjin riferisce a [[tserriednich-hui-guo-rou|Tserriednich]] la morte di [[myuhan|Myuhan]]. Crede che [[kurapika|Kurapika]] dica la verità e vuole continuare a seguire il corso, perché gli Hunter sono a bordo per proteggere i principi. Il principe sospetta che il corso sia la condizione di un’abilità di manipolazione, e ordina a Danjin di portargli un “regalo” l’ultimo giorno, per dimostrare di non essere manipolato. Danjin accetta a malincuore.',
        en: 'Danjin reports [[myuhan|Myuhan]]’s death to [[tserriednich-hui-guo-rou|Tserriednich]]. He believes [[kurapika|Kurapika]] is telling the truth and wants to keep attending the class, since the Hunters are aboard to protect the princes. The prince suspects that the class may be the condition of a manipulation ability, and orders Danjin to bring him a “present” on the last day to prove that he is not being manipulated. Danjin reluctantly agrees.',
      },
    ),
    told(
      416,
      { it: 'Portato via per l’interrogatorio', en: 'Taken for questioning' },
      {
        it: 'Sotto la legge marziale speciale, Danjin è inginocchiato contro il muro con gli altri uomini di [[tserriednich-hui-guo-rou|Tserriednich]] quando [[benjamin-hui-guo-rou|Benjamin]] sfonda la porta della stanza 1004. Benjamin nota la sua aura e gli chiede se segue la lezione della stanza 1014. Quando Danjin conferma, Benjamin lo fa portare all’Ufficio di Giustizia centrale per interrogarlo, e pensa di arruolare [[kurapika|Kurapika]] come istruttore per il suo esercito.',
        en: 'Under special martial law, Danjin kneels facing the wall with the rest of [[tserriednich-hui-guo-rou|Tserriednich]]’s men when [[benjamin-hui-guo-rou|Benjamin]] kicks in the door of Room 1004. Benjamin notices his aura and asks whether he attends the class in Room 1014. When Danjin says he does, Benjamin has him taken to the central Justice Bureau for questioning, and considers recruiting [[kurapika|Kurapika]] as an instructor for his army.',
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
    told(
      373,
      { it: 'La sua unica famiglia', en: 'His only family' },
      {
        it: '[[camilla-hui-guo-rou|Camilla]] arriva agli alloggi di [[benjamin-hui-guo-rou|Benjamin]] dicendo di cercare il soldato che le ha sparato. Benjamin ordina alle guardie di lasciarla passare, e lei spara a Furykov e a un’altra guardia; il Nen di Furykov lo salva. Dopo che Camilla spara a Benjamin, Furykov la arresta. Quando lei minaccia di torturare e uccidere la sua famiglia, lui risponde che la sua unica famiglia è Benjamin. Sorveglia Camilla in isolamento finché non gli viene permesso di andare.',
        en: '[[camilla-hui-guo-rou|Camilla]] comes to [[benjamin-hui-guo-rou|Benjamin]]’s quarters, claiming to be looking for the soldier who shot her. Benjamin orders his guards to let her pass, and she shoots Furykov and another guard; Furykov’s Nen saves him. After Camilla fires at Benjamin, Furykov arrests her. When she threatens to torture and kill his family, he answers that Benjamin is his only family. He guards Camilla in solitary confinement until he is allowed to leave.',
      },
    ),
    told(
      413,
      { it: 'Il figlio di Beyond', en: 'Beyond’s son' },
      {
        it: 'Furykov ammette con [[benjamin-hui-guo-rou|Benjamin]] di averlo contagiato con l’arma biologica. Rivela di essere figlio di [[beyond-netero|Beyond]]: sotto la lingua ha un segno, una maledizione che si libererà alla sua morte, e [[unma-hui-guo-rou|Unma]] ha minacciato di farla attivare se non avesse contagiato Benjamin entro quarantotto ore. Temeva che la sua maledizione potesse distruggere l’abilità della bestia di Benjamin; fingendo di cedere a Unma la protegge, perché se Benjamin muore la maledizione ricadrà su Furykov, e lui non potrebbe chiedere destino migliore. Convinto, Benjamin gli dà dello sciocco per non essersi fidato di lui e gli chiede di continuare ad aiutarlo. Furykov si inginocchia.',
        en: 'Furykov admits to [[benjamin-hui-guo-rou|Benjamin]] that he infected him with the bioweapon. He reveals that he is [[beyond-netero|Beyond]]’s son: under his tongue is a mark, a curse to be released at his death, and [[unma-hui-guo-rou|Unma]] threatened to have it activated unless he infected Benjamin within forty-eight hours. He feared that his curse might destroy the ability of Benjamin’s beast; by pretending to yield to Unma he protects it, since if Benjamin dies the curse will be reflected back onto Furykov, and he could ask for no better fate. Convinced, Benjamin calls him a fool for not trusting him and asks him to keep helping him. Furykov kneels.',
      },
    ),
    told(
      415,
      { it: 'La telefonata con Beyond', en: 'The call with Beyond' },
      {
        it: 'Due mesi prima della partenza, il portatile evocato dall’abilità di Furykov lo avverte di una maledizione su di lui. Capisce che a innescarla è stata la cerimonia dell’urna di quel giorno, e che solo [[beyond-netero|Beyond]] poteva nascondere chi altri la condivide. Al telefono Beyond lo ammette: la maledizione, attaccata a lui subito dopo la nascita, colpirà un principe quando Furykov morirà, e darà anche la sua abilità a [[benjamin-hui-guo-rou|Benjamin]]. Il portatile calcola 365 giorni per decifrarla e circa 700 per un antidoto. Beyond gli consiglia, da padre, che solo una successione con un unico superstite porta la benedizione della bestia al successore.',
        en: 'Two months before departure, the laptop Furykov’s ability conjures warns him of a curse on him. He works out that the urn ceremony that day was the trigger, and that only [[beyond-netero|Beyond]] could have hidden who else shares it. On the phone Beyond admits it: the curse, attached right after his birth, will strike a prince when Furykov dies, and would also give his ability to [[benjamin-hui-guo-rou|Benjamin]]. The laptop reckons 365 days to decipher it and about 700 more for an antidote. Beyond advises him, as his father, that only a contest with one survivor brings the beast’s blessing to the successor.',
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
    told(
      388,
      { it: 'La prima allieva', en: 'The first student' },
      {
        it: 'Al corso di [[kurapika|Kurapika]], Ladiolus, una delle domestiche di [[fugetsu-hui-guo-rou|Fugetsu]], viene indicata come capace di produrre abbastanza aura per l’esame dell’acqua. È la prima a sostenerlo a porte chiuse. Ne esce con molta più aura, quanta, dice [[furykov|Furykov]], ne avrebbe dopo un anno di pratica quotidiana, eppure lui non vede segni di manipolazione. Ad altri servitori che le chiedono dell’esame risponde che non può parlarne, per l’obbligo di silenzio imposto da Kurapika.',
        en: 'At [[kurapika|Kurapika]]’s class, Ladiolus, one of [[fugetsu-hui-guo-rou|Fugetsu]]’s servants, is singled out as able to produce enough aura for the water test. She is the first to take it behind closed doors. She comes out with far more aura, as much, [[furykov|Furykov]] says, as a year of daily practice would give, yet he sees no sign of manipulation. When other servants ask about the test, she says she cannot talk about it, under Kurapika’s gag order.',
      },
    ),
  ],
  'loberry': [
    told(
      370,
      { it: 'La donna in fondo alla stanza', en: 'The woman at the back' },
      {
        it: 'Loberry, domestica di [[kacho-hui-guo-rou|Kachow]], è contenta di stare lontana dal suo principe per il corso di Nen di [[kurapika|Kurapika]]. Dopo le presentazioni, mentre [[kurapika|Kurapika]] chiede chi sappia già usare il Nen, vede in fondo alla stanza una donna che [[yuri|Yuri]] non riesce a vedere, e la indica gridando. Mentre tutti guardano da quella parte, [[barrigen|Barrigen]] crolla, strangolato dai serpenti. Più tardi Loberry si guarda intorno e la donna non c’è più.',
        en: 'Loberry, a servant of [[kacho-hui-guo-rou|Kacho]], is glad to be away from her prince for [[kurapika|Kurapika]]’s Nen class. After the introductions, as [[kurapika|Kurapika]] asks who already uses Nen, she sees a woman at the back of the room whom [[yuri|Yuri]] cannot see, and shouts, pointing at her. While everyone looks that way, [[barrigen|Barrigen]] collapses, strangled by snakes. Afterwards Loberry looks around and the woman is no longer there.',
      },
    ),
    told(
      372,
      { it: 'In custodia', en: 'Taken into custody' },
      {
        it: 'Dopo la morte di [[barrigen|Barrigen]], due guardie di [[zhang-lei-hui-guo-rou|Chowrai]] accusano Loberry dell’omicidio e la bloccano. Chiedono alla Corte Suprema di accusare anche la regina [[seiko-hui-guo-rou|Seiko]] di aver tramato contro [[woble-hui-guo-rou|Woble]], ma il giudice rifiuta e manda solo un investigatore a sorvegliare la regina per 72 ore. Loberry viene presa in custodia dall’esercito. Usa il Nen senza saperlo: un risveglio provocato dall’abilità dell’assassino nascosto, che l’aveva usata come ospite a sua insaputa.',
        en: 'After [[barrigen|Barrigen]]’s death, two of [[zhang-lei-hui-guo-rou|Zhang Lei]]’s guards accuse Loberry of the murder and restrain her. They ask the Supreme Court to charge Queen [[seiko-hui-guo-rou|Seiko]] as well for plotting against [[woble-hui-guo-rou|Woble]], but the judge refuses and only sends an investigator to watch the queen for 72 hours. Loberry is taken into custody by the royal army. She uses Nen without knowing it: an awakening caused by the hidden assassin’s ability, which had used her as its host without her knowing.',
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
    told(
      388,
      { it: 'Un’aura in prestito', en: 'Borrowed aura' },
      {
        it: 'Yuri è la successiva tra i servitori di [[kacho-hui-guo-rou|Kachow]] a essere risvegliata. [[kurapika|Kurapika]] le presta l’abilità di un altro Hunter della scorta e le spiega che l’aura è presa in prestito, quindi l’abilità non è sua: quando avrà imparato Ten e Hatsu potrà fare da sola l’esame dell’acqua e tenere per sé il risultato. Spera che la successione non faccia altre vittime e le chiede di sentire se Kachow e la madre manderebbero altre persone a un nuovo corso.',
        en: 'Yuri is the next of [[kacho-hui-guo-rou|Kacho]]’s servants to be awakened. [[kurapika|Kurapika]] lends her a fellow Hunter’s ability and explains that the aura is borrowed, so the ability is not her own: once she learns Ten and Hatsu, she can take the water test on her own and keep the result to herself. He hopes the contest claims no more victims and asks her to find out whether Kacho and her mother would send more people to another round of classes.',
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
    told(
      400,
      { it: 'Una proposta a porte chiuse', en: 'An offer behind closed doors' },
      {
        it: 'Longhi e [[maor|Maor]] riferiscono a [[tubeppa-hui-guo-rou|Tsubeppa]] che l’addestramento di [[kurapika|Kurapika]] funziona, e lei permette ad altre guardie di partecipare. Quando arriva il suo turno per l’esame, Longhi dice a Kurapika che non le serve, perché sa già usare il Nen, e gli chiede se accetterà il suo contratto dopo averla ascoltata. Kurapika accetta e dice che collaborerà con Tsubeppa.',
        en: 'Longhi and [[maor|Maor]] report to [[tubeppa-hui-guo-rou|Tubeppa]] that [[kurapika|Kurapika]]’s training works, and she lets more guards take part. When her turn for the test comes, Longhi tells Kurapika that she does not need it, because she can already use Nen, and asks whether he will agree to her contract once he has heard her out. Kurapika agrees and says he will work with Tubeppa.',
      },
    ),
    told(
      401,
      { it: 'Figlia di Beyond', en: 'Beyond’s daughter' },
      {
        it: 'A porte chiuse Longhi mostra a [[kurapika|Kurapika]] il suo Nen: penna e carta d’aura per contratti con cui presta la sua abilità e limita chi firma, validi solo se la firma è volontaria. Il potere dei serpenti non è suo. È figlia di [[beyond-netero|Beyond]], uno dei figli che lui ha fatto crescere da ufficiali di Cakin, e un sigillo sotto la lingua la segna come vittima sacrificale di una maledizione forte, che si libererà alla sua morte. Convinta che anche uno dei principi sia figlio di Beyond, propone una tregua con [[tubeppa-hui-guo-rou|Tsubeppa]] e una ricompensa se Kurapika troverà quel figlio. Se quel figlio è uno dei principi, lo ucciderà con le sue mani. La catena di Kurapika non rileva bugie.',
        en: 'Behind closed doors, Longhi shows [[kurapika|Kurapika]] her Nen: a pen and paper of aura for contracts that lend her ability and restrict the signer, valid only if signed freely. The snake ability is not hers. She is [[beyond-netero|Beyond]]’s daughter, one of the children he had raised by Kakin officers, and a seal under her tongue marks her as a strong curse sacrifice, whose curse is released when she dies. Believing that one of the princes is Beyond’s child too, she offers a truce with [[tubeppa-hui-guo-rou|Tubeppa]], and a reward if Kurapika finds that child. If that child is one of the princes, she will kill them herself. Kurapika’s chain detects no lie.',
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
    told(
      388,
      { it: 'Il risveglio', en: 'Awakened' },
      {
        it: 'A porte chiuse [[kurapika|Kurapika]] dice a Maor che la sua priorità è proteggere [[woble-hui-guo-rou|Woble]] e la madre, e Maor capisce che vuole davvero uno stallo tra i principi. Un altro Hunter della scorta fa germogliare un seme in un bicchiere d’acqua, e Kurapika presta quell’abilità a Maor per risvegliarne il Nen. Maor esce circondato dall’aura, pieno di vitalità, e cerca di controllare il respiro. Poi lui e [[longhi|Longhi]] riferiscono a [[tubeppa-hui-guo-rou|Tsubeppa]] che l’addestramento funziona.',
        en: 'Behind closed doors, [[kurapika|Kurapika]] tells Maor that his priority is protecting [[woble-hui-guo-rou|Woble]] and her mother, and Maor realises he truly wants a stalemate among the princes. A fellow Hunter of the escort makes a seed sprout in a glass of water, and Kurapika lends that ability to Maor to awaken his Nen. Maor comes out surrounded by aura, full of vitality, and works on controlling his breathing. He and [[longhi|Longhi]] then report to [[tubeppa-hui-guo-rou|Tubeppa]] that the training works.',
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
    told(
      376,
      { it: 'Ucciso durante il corso', en: 'Killed during the class' },
      {
        it: 'Myuhan, la guardia di [[tserriednich-hui-guo-rou|Tserriednich]] che aveva sfidato [[kurapika|Kurapika]] al corso di Nen, viene trovato morto il giorno dopo, ucciso durante la lezione dall’assassino nascosto tra i presenti. Kurapika teme che la sua morte faccia crescere i sospetti su di lui, e infatti [[maor|Maor]] e [[satobi|Satobi]] accusano il corso di essere una trappola. [[danjin|Danjin]] riferisce la morte al principe.',
        en: 'Myuhan, the guard of [[tserriednich-hui-guo-rou|Tserriednich]] who had challenged [[kurapika|Kurapika]] at the Nen class, is found dead the next day, killed during the lesson by the assassin hidden among the attendees. Kurapika fears that the death will make people suspect him even more, and indeed [[maor|Maor]] and [[satobi|Satobi]] call the class a trap. [[danjin|Danjin]] reports the death to the prince.',
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
    told(
      386,
      { it: 'Un piano contro il personale', en: 'A plot against the staff' },
      {
        it: 'Dopo che [[myuhan|Myuhan]] viene ucciso durante il corso, Satobi e [[maor|Maor]] sostengono che le lezioni siano solo un piano di [[kurapika|Kurapika]] per eliminare il personale degli altri principi, e Maor cita la voce secondo cui l’Associazione Hunter vuole avvicinarsi ai reali di Cakin. [[belerainte|Belerainte]] risponde che gli Hunter fanno solo il loro lavoro. Quando Kurapika annuncia che gli esami dell’acqua si faranno a porte chiuse, Satobi protesta subito.',
        en: 'After [[myuhan|Myuhan]] is killed during the class, Satobi and [[maor|Maor]] claim that the lessons are only [[kurapika|Kurapika]]’s plan to eliminate the other princes’ staff, and Maor cites the rumour that the Hunter Association wants to get close to Kakin’s royals. [[belerainte|Belerainte]] replies that the Hunters are only doing their job. When Kurapika announces that the water tests will take place behind closed doors, Satobi objects at once.',
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
    told(
      372,
      { it: 'Nen senza saperlo', en: 'Nen without knowing' },
      {
        it: 'Al corso di [[kurapika|Kurapika]], [[furykov|Furykov]] e Kurapika notano che Shedule e [[yuhirai|Yuhirai]] usano già bene il Nen, e ne sospettano. I due negano di saperne qualcosa e chiedono di parlare con Kurapika in privato. Furykov capisce che li costringono a usarlo senza saperlo, e comincia a pensare all’assassino nascosto nella stanza. Le guardie di [[halkenburg-hui-guo-rou|Harkenburg]] sono solo in parte risvegliate: usano il Nen in modo limitato, senza controllarlo.',
        en: 'At [[kurapika|Kurapika]]’s class, [[furykov|Furykov]] and Kurapika notice that Shedule and [[yuhirai|Yuhirai]] already use Nen well, which makes them suspicious. The two deny knowing anything about it and ask to speak with Kurapika in private. Furykov realises that they are being made to use it without knowing, and starts thinking about the assassin hiding in the room. [[halkenburg-hui-guo-rou|Halkenburg]]’s guards are only half awakened: they use Nen in a limited way, without controlling it.',
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
    told(
      372,
      { it: 'Una richiesta di Harkenburg', en: 'Halkenburg’s request' },
      {
        it: 'Dopo la lezione Yuhirai dice a [[kurapika|Kurapika]] che [[halkenburg-hui-guo-rou|Harkenburg]] vuole sapere delle bestie di Nen: le sue guardie sono svenute, si sono svegliate con un segno a forma di piuma e non ricordano nulla. Kurapika spiega che è una Manipolazione che lascia ai bersagli la libertà di scegliere, e che il principe ne condivide i rischi. Gli chiede di capire come funziona l’abilità, promettendo una contromisura. Lui, Yuhirai e una guardia di [[zhang-lei-hui-guo-rou|Chowrai]] concordano di mettere al primo posto la protezione dei principi.',
        en: 'After the lesson Yuhirai tells [[kurapika|Kurapika]] that [[halkenburg-hui-guo-rou|Halkenburg]] wants to know about Nen beasts: his guards fainted, woke with a feather-shaped mark and remember nothing. Kurapika explains that it is a Manipulation ability that leaves its targets free to choose, and that the prince shares its risks. He asks him to work out how the ability works, promising a countermeasure. He, Yuhirai and one of [[zhang-lei-hui-guo-rou|Zhang Lei]]’s guards agree to put the princes’ protection first.',
      },
    ),
  ],
  'tenftory': [
    told(
      370,
      { it: 'Chi parla con l’insegnante', en: 'Who talks to the teacher' },
      {
        it: '[[zhang-lei-hui-guo-rou|Chowrai]] ordina a Tenftory di osservare chiunque parli con [[kurapika|Kurapika]], che considera il protagonista della situazione. Al corso di Nen Tenftory decide di diffidare soprattutto del primo, del quarto e del quinto principe. Si presenta con gli altri partecipanti e assiste alla morte di [[barrigen|Barrigen]], ucciso dai serpenti durante la lezione.',
        en: '[[zhang-lei-hui-guo-rou|Zhang Lei]] orders Tenftory to watch anyone who talks with [[kurapika|Kurapika]], whom he considers the key player. At the Nen class, Tenftory decides to be most wary of the First, Fourth and Fifth Princes. He introduces himself with the other attendees and witnesses the death of [[barrigen|Barrigen]], killed by snakes during the lesson.',
      },
    ),
    told(
      389,
      { it: 'La prima moneta', en: 'The first coin' },
      {
        it: 'Tenftory riferisce a [[zhang-lei-hui-guo-rou|Chowrai]] che l’addestramento ha funzionato: ora vede la bestia del principe. Chowrai lo premia con una delle monete prodotte dalla sua bestia, dicendo che è il primo a riceverne una. Al corso di [[kurapika|Kurapika]] Tenftory doveva sostenere l’esame per ultimo. Un soldato di [[benjamin-hui-guo-rou|Benjamin]] presente sa di essere stato in realtà il primo ad avere una moneta, e vede il numero sulla sua passare da 1 a 10.',
        en: 'Tenftory reports to [[zhang-lei-hui-guo-rou|Zhang Lei]] that the training worked: he can now see the prince’s beast. Zhang Lei rewards him with one of the coins his beast produces, saying he is the first to receive one. At [[kurapika|Kurapika]]’s class, Tenftory was to take the test last. One of [[benjamin-hui-guo-rou|Benjamin]]’s soldiers standing by knows that he was in fact the first to get a coin, and sees the number on his own change from 1 to 10.',
      },
    ),
    told(
      402,
      { it: 'Una resa per iscritto', en: 'A surrender in writing' },
      {
        it: 'Tenftory riferisce a [[zhang-lei-hui-guo-rou|Chowrai]] che, se lui, [[tubeppa-hui-guo-rou|Tsubeppa]] e [[woble-hui-guo-rou|Woble]] saranno gli ultimi tre principi rimasti, gli altri due rinunceranno al trono in suo favore, e che hanno accettato di metterlo per iscritto. In cambio la parte di Woble chiede che [[sakata|Sakata]] e [[hashito|Hashito]] continuino a sostenerla a tempo indeterminato. Chowrai premia Tenftory con una seconda moneta e gli dice di portare sempre con sé le monete, perché gli porteranno fortuna.',
        en: 'Tenftory tells [[zhang-lei-hui-guo-rou|Zhang Lei]] that if he, [[tubeppa-hui-guo-rou|Tubeppa]] and [[woble-hui-guo-rou|Woble]] are the last three princes left, the other two will give up the throne in his favour, and that they have agreed to put it in writing. In return, Woble’s side asks for [[sakata|Sakata]] and [[hashito|Hashito]] to keep supporting them indefinitely. Zhang Lei rewards Tenftory with a second coin and tells him to carry his coins at all times, since they will bring him fortune.',
      },
    ),
  ],
  // New in phases 3 and 4 (chapters 371–400).
  'vergei': [
    told(
      374,
      { it: 'Una telefonata diffidente', en: 'A suspicious call' },
      {
        it: 'Mentre [[hanzo|Hanzo]] trova vuoti gli alloggi del principe, Vergei, capitano delle guardie della madre di [[marayam-hui-guo-rou|Marayam]], telefona a [[kurapika|Kurapika]]. Insiste che sono ancora nella loro stanza e che le domande le farà lui. Vuole notizie sui sei sospettati dell’omicidio di [[momoze-hui-guo-rou|Momoze]], perché la sua regina non ha accesso al personale delle regine di rango più alto. Quando Kurapika gli chiede di fidarsi e di unirsi a una coalizione dei principi più giovani, Vergei insinua che dietro le morti negli alloggi di [[woble-hui-guo-rou|Woble]] ci sia lui, e che l’Associazione Hunter usi il rito per distruggere Cakin dall’interno.',
        en: 'While [[hanzo|Hanzo]] finds the prince’s quarters empty, Vergei, captain of the guards of [[marayam-hui-guo-rou|Marayam]]’s mother, calls [[kurapika|Kurapika]]. He insists that they are still in their room and that he will be the one asking questions. He wants news of the six suspects in [[momoze-hui-guo-rou|Momoze]]’s murder, since his queen has no access to the higher queens’ staff. When Kurapika asks him to trust him and join a coalition of the younger princes, Vergei suggests that Kurapika is behind the deaths in [[woble-hui-guo-rou|Woble]]’s quarters, and that the Hunter Association is using the ritual to destroy Kakin from within.',
      },
    ),
    told(
      375,
      { it: 'La prova di Biscuit', en: 'Biscuit’s demonstration' },
      {
        it: 'Vergei non vuole rimandare [[belerainte|Belerainte]] al corso di Nen dopo la morte di [[barrigen|Barrigen]], e definisce il Nen un superpotere assurdo. [[biscuit-krueger|Biscuit]] allora torna al suo vero aspetto per mostrargli quanto il Nen sia versatile, e promette che in un mese il personale raddoppierà le proprie capacità fisiche. Sbalordito dai suoi muscoli, Vergei le chiede di insegnargli e lascia andare Belerainte. Quando Belerainte esce e prova a rientrare, il suo braccio scompare: gli alloggi sono uno spazio di Nen a senso unico.',
        en: 'Vergei does not want to send [[belerainte|Belerainte]] back to the Nen class after [[barrigen|Barrigen]]’s death, and calls Nen an absurd superpower. [[biscuit-krueger|Biscuit]] then returns to her true form to show him how versatile Nen is, and promises that within a month the staff will double their physical abilities. Stunned by her muscles, Vergei asks her to teach him and lets Belerainte go. When Belerainte steps out and tries to come back in, his arm vanishes: the quarters are a one-way Nen space.',
      },
    ),
  ],
  'cashew': [
    told(
      379,
      { it: 'La testimone', en: 'The witness' },
      {
        it: 'Dopo che venti passeggeri vengono uccisi con una lama sul terzo livello, [[mizaistom-nana|Mizaistom]] interroga l’unica testimone. Lei racconta che l’assassino ha ucciso alla porta un’amica appena conosciuta, l’ha fatta uscire dal bagno e poi vi si è chiuso dentro, sparendo prima che l’esercito lo aprisse. Piange un’amica che non ha fatto in tempo a conoscere. In realtà è Cashew, una degli Heil-Ly e complice dell’assassino: insieme hanno deciso di mescolare verità e bugie per ostacolare l’indagine. Lei decide di procedere con calma e di pensare a salire di livello.',
        en: 'After twenty passengers are killed with a blade on Tier 3, [[mizaistom-nana|Mizaistom]] questions the only witness. She says the killer murdered a friend she had just met at the door, ordered her out of the bathroom, then locked himself inside and vanished before the army opened it. She cries over a friend she never got to know. She is in fact Cashew, a Heil-Ly member and the killer’s accomplice: together they chose to mix truth and lies to obstruct the investigation. She decides to take it slowly and focus on raising her level.',
      },
    ),
  ],
  'ken-i-wang': [
    told(
      379,
      { it: 'Una proposta ai Ragni', en: 'An offer to the Spiders' },
      {
        it: 'Il capo dei Cha-R ordina al suo sottocapo, Ken’i Wang, di trovare [[hisoka|Hisoka]] prima della Brigata Fantasma. Ken’i offre dieci milioni a chi lo trova e altrettanti al responsabile della zona. Sa che Hisoka era un Floor Master dell’Arena Celeste e che ha un conto in sospeso con il capo della Brigata. Nel magazzino della famiglia incontra [[phinks|Phinks]], [[nobunaga|Nobunaga]] e [[feitan|Feitan]] e chiede se siano stati loro ad aggredire i custodi. Dopo un aggiornamento via radio si scusa. Dentro di sé decide di schiacciare la Brigata, ma ad alta voce propone di collaborare.',
        en: 'The Cha-R boss orders his underboss, Ken’i Wang, to find [[hisoka|Hisoka]] before the Phantom Troupe. Ken’i offers ten million to whoever finds him and as much again to the leader of that area. He knows that Hisoka was a Floor Master at Heavens Arena with a score to settle with the Troupe’s leader. In the family’s warehouse he meets [[phinks|Phinks]], [[nobunaga|Nobunaga]] and [[feitan|Feitan]] and asks whether they attacked his keepers. After a radio update he apologises. Privately he decides to crush the Troupe, but aloud he proposes working together.',
      },
    ),
    told(
      393,
      { it: 'Tutti muoiono', en: 'Everyone dies' },
      {
        it: 'Ken’i Wang vuole trovare per primo [[hisoka|Hisoka]], per usarlo contro gli Heil-Ly e la Brigata e mantenere l’equilibrio. Sul terzo livello trova il caporale [[maizan|Maizan]] che aspetta il sottocapo degli Xi-Yu, e pareggia la sua offerta di cinquanta milioni per il covo degli Heil-Ly. Gli spiega che le due famiglie collaborano con l’approvazione di [[tserriednich-hui-guo-rou|Tserriednich]] e promette denaro per ogni membro degli Heil-Ly segnalato. Quando il caporale chiede se muoia chiunque riceva il suo sorriso, Ken’i lo chiama un pettegolezzo scortese: tutti muoiono, prima o poi.',
        en: 'Ken’i Wang wants [[hisoka|Hisoka]] found first, to use him against both the Heil-Ly and the Troupe and keep the balance. On Tier 3 he finds Corporal [[maizan|Maizan]] waiting for the Xi-Yu underboss and matches his offer of fifty million for the Heil-Ly hideout. He tells him that the two families are working together with [[tserriednich-hui-guo-rou|Tserriednich]]’s approval, and promises money for every Heil-Ly member reported. When the corporal asks whether everyone he smiles at dies, Ken’i calls it a rude rumour: everyone dies eventually.',
      },
    ),
    told(
      405,
      { it: 'Il jolly', en: 'The joker' },
      {
        it: 'Quando [[nobunaga|Nobunaga]] si chiede se gli Heil-Ly siano davvero gli Heil-Ly, Ken’i domanda se intenda che il vecchio capo è stato manipolato con il Nen e ucciso, e dice di conoscere appena la nuova capa, [[morena|Morena]]. Dopo che [[tajao|Tajao]] promette alla Brigata il pieno appoggio dei Cha-R e degli Xi-Yu, Ken’i resta in silenzio e accetta di mandare qualcuno a chiamare gli altri Ragni. Nei suoi pensieri si rivolge a Morena per nome: hanno un problema, i Ragni potrebbero trovarla molto prima del previsto, i tempi si accorciano e forse dovranno usare il loro “jolly”.',
        en: 'When [[nobunaga|Nobunaga]] wonders whether the Heil-Ly are really the Heil-Ly, Ken’i asks whether he means that the old boss was manipulated with Nen and killed, and says he barely knows the new boss, [[morena|Morena]]. After [[tajao|Tajao]] promises the Troupe the full support of the Cha-R and Xi-Yu, Ken’i stays silent and agrees to send someone for the other Spiders. In his thoughts he addresses Morena by name: they have a problem, the Spiders may find her much sooner than expected, the schedule speeds up, and they may have to use their “joker”.',
      },
    ),
  ],
  'keeney': [
    told(
      383,
      { it: 'Il posto dove morire', en: 'A place to die' },
      {
        it: 'Keeney, uno degli Hunter di guardia a [[kacho-hui-guo-rou|Kachow]], ha percepito con l’En qualcuno comparire nel letto del principe, quasi certamente la gemella [[fugetsu-hui-guo-rou|Fugetsu]], e lascia la cosa a [[melody|Melody]]. Al banchetto della domenica suona un assolo di pianoforte. Mentre il flauto di Melody incanta i presenti, guida le gemelle oltre i soldati storditi fino a una scialuppa e dice loro di usare la loro abilità solo come ultima risorsa. Poi si spara. Due anni prima la moglie e la figlia erano morte in un incidente, e da allora cercava un posto dove morire. Così nessun complice potrà ricondurre la fuga all’Associazione Hunter.',
        en: 'Keeney, one of [[kacho-hui-guo-rou|Kacho]]’s Hunter guards, has sensed with En someone appear in the prince’s bed, most likely her twin [[fugetsu-hui-guo-rou|Fugetsu]], and leaves the matter to [[melody|Melody]]. At the Sunday banquet he plays a piano solo. While Melody’s flute holds the listeners, he leads the twins past the stunned soldiers to a lifeboat and tells them to use their ability only as a last resort. Then he shoots himself. Two years earlier his wife and daughter had died in an accident, and since then he had been looking for a place to die. This way no accomplice can tie the escape to the Hunter Association.',
      },
    ),
  ],
  'tajao': [
    told(
      384,
      { it: 'Le regole della mafia', en: 'The Mafia’s rules' },
      {
        it: 'Tajao, vicecapo dei Cha-R e consigliere militare dell’esercito di [[luzurus-hui-guo-rou|Loozlus]], incontra [[phinks|Phinks]], [[nobunaga|Nobunaga]] e [[feitan|Feitan]] tramite [[ken-i-wang|Ken’i Wang]]. Oltre trecento lavoratori sono scomparsi. Phinks si offre di uccidere il sicario degli Heil-Ly se Tajao otterrà per loro l’accesso al quarto livello. Tajao spiega la regola per un colpo contro un’altra famiglia: i capi devono accordarsi entro un giorno, e solo se il capo era lontano dal proprio territorio, nei due livelli superiori. Se la nuova capa degli Heil-Ly era sotto, ci sarà guerra. Nobunaga si offre di ucciderla lui stesso.',
        en: 'Tajao, the Cha-R vice boss and military adviser to [[luzurus-hui-guo-rou|Luzurus]]’s army, meets [[phinks|Phinks]], [[nobunaga|Nobunaga]] and [[feitan|Feitan]] through [[ken-i-wang|Ken’i Wang]]. Over three hundred workers have gone missing. Phinks offers to kill the Heil-Ly hitman if Tajao gets them into Tier 4. Tajao explains the rule for a hit on another family: the bosses must settle it within a day, and only if the boss was away from home turf, in the two upper tiers. If the new Heil-Ly boss was below, there will be war. Nobunaga offers to kill her himself.',
      },
    ),
    told(
      406,
      { it: 'Un cittadino modello', en: 'A model citizen' },
      {
        it: 'Tajao trova folle l’idea della Brigata che gli Heil-Ly uccidano per ottenere potere, poi ammette che sono qualcosa di diverso dalla mafia di Cakin, per cui i civili sono clienti. Apre il passaggio dei Cha-R verso l’alto e chiede ai Ragni di schiacciare gli Heil-Ly con il sostegno di entrambe le famiglie. Guidando [[phinks|Phinks]], [[nobunaga|Nobunaga]] e [[feitan|Feitan]] tra le tubature verso il secondo livello, avverte Nobunaga che i giovani soldati potrebbero sparargli per la sua spada. Quando Nobunaga ipotizza che gli Heil-Ly si spaccino per appaltatori dei rifiuti, Tajao ci arriva, e dice che accanto a loro tre si sente un cittadino modello.',
        en: 'Tajao calls the Troupe’s idea that the Heil-Ly kill to gain power crazy, then admits that they are something other than the Kakin Mafia, for whom civilians are customers. He opens the Cha-R route upstairs and asks the Spiders to crush the Heil-Ly with the support of both families. Leading [[phinks|Phinks]], [[nobunaga|Nobunaga]] and [[feitan|Feitan]] through the pipes toward Tier 2, he warns Nobunaga that young soldiers might shoot him over his sword. When Nobunaga suggests that the Heil-Ly may pose as waste contractors, Tajao sees it, and says that being around the three makes him feel like a model citizen.',
      },
    ),
  ],
  'famule': [
    told(
      389,
      { it: 'Uno sparo nel corridoio', en: 'A shot in the corridor' },
      {
        it: 'Famule è uno dei soldati della regina [[duazul-hui-guo-rou|Duazul]] assegnati a [[luzurus-hui-guo-rou|Loozlus]]. È nel salotto del principe con [[basho|Basho]] quando un soldato di [[benjamin-hui-guo-rou|Benjamin]] suona alla porta, grida la sua fedeltà a Benjamin e si spara. Pistola in mano, Famule dice a Basho che il colpo è venuto dal corridoio, poi perlustra la zona con le altre guardie. Più tardi un altro soldato di Benjamin, presente nella stanza, lo elenca tra i testimoni e comincia a sospettare delle guardie della regina.',
        en: 'Famule is one of Queen [[duazul-hui-guo-rou|Duazul]]’s soldiers assigned to [[luzurus-hui-guo-rou|Luzurus]]. He is in the prince’s sitting room with [[basho|Basho]] when one of [[benjamin-hui-guo-rou|Benjamin]]’s soldiers rings at the door, shouts his loyalty to Benjamin and shoots himself. Gun in hand, Famule tells Basho that the shot came from the corridor, then searches the area with the other guards. Later another of Benjamin’s soldiers, who was in the room, lists him among those present and begins to suspect the queen’s guards.',
      },
    ),
  ],
  'fukataki': [
    told(
      389,
      { it: 'I tempi della maledizione', en: 'How long a curse takes' },
      {
        it: 'Fukataki è la maggiordoma del personale di [[camilla-hui-guo-rou|Camilla]]. L’esercito privato del principe comprende assassini maledicenti presi dalla casta più bassa di Cakin, uno per ogni principe rivale, che si tolgono la vita per rafforzare la maledizione. Quando la soldatessa che li guida le chiede quale principe colpire, Fukataki spiega quanto tempo servirebbe a ciascuna maledizione. Per [[kacho-hui-guo-rou|Kachow]] e [[fugetsu-hui-guo-rou|Fugetsu]], che risultano in custodia, servirebbero sei mesi. Avverte che le bestie proteggono i principi: l’unica possibilità è uccidersi davanti a uno di loro, guardandolo negli occhi.',
        en: 'Fukataki is the majordomo of [[camilla-hui-guo-rou|Camilla]]’s staff. The prince’s private army includes curse assassins drawn from Kakin’s lowest caste, one for each rival prince, who take their own lives to strengthen the curse. When the soldier who leads them asks which prince to target, Fukataki explains how long each curse would take. For [[kacho-hui-guo-rou|Kacho]] and [[fugetsu-hui-guo-rou|Fugetsu]], reported to be in custody, it would take six months. She warns that the beasts protect the princes: the only chance is suicide in front of one, looking into the prince’s eyes.',
      },
    ),
    told(
      416,
      { it: 'Uccisa da Benjamin', en: 'Shot by Benjamin' },
      {
        it: '[[camilla-hui-guo-rou|Camilla]] manda la capitana delle guardie alla lezione di [[kurapika|Kurapika]] travestita da cameriera, per maledire [[woble-hui-guo-rou|Woble]], e Fukataki, la sua maggiordoma, le chiede se il piano regge ancora dopo la morte di [[halkenburg-hui-guo-rou|Harkenburg]]. Quando viene dichiarata la legge marziale speciale, Fukataki sta massaggiando Camilla con un’altra domestica. [[benjamin-hui-guo-rou|Benjamin]] irrompe e ordina a Camilla di non muoversi; lei si alza e gli spara. I proiettili rimbalzano sulla sua aura, e Benjamin spara un colpo a ciascuna delle due domestiche, uccidendole sul colpo.',
        en: 'Fukataki, [[camilla-hui-guo-rou|Camilla]]’s majordomo, asks the captain of the guards, disguised as a maid to curse [[woble-hui-guo-rou|Woble]] at [[kurapika|Kurapika]]’s class, whether the plan still holds after [[halkenburg-hui-guo-rou|Halkenburg]]’s death. When special martial law is declared, Fukataki is giving Camilla a massage with another servant. [[benjamin-hui-guo-rou|Benjamin]] storms in and orders Camilla not to move; she sits up and shoots at him. The bullets bounce off his aura, and Benjamin fires one shot into each of the two servants, killing them instantly.',
      },
    ),
  ],
  'taler': [
    told(
      389,
      { it: 'Mandato contro Marayam', en: 'Sent after Marayam' },
      {
        it: 'Taler è uno dei soldati di [[camilla-hui-guo-rou|Camilla]]. Il principe ha accolto nel suo esercito i reietti di Cakin, un tempo scelti per essere sepolti con i principi che non diventavano re, e ora la servono come assassini maledicenti: ognuno porta con sé qualcosa di un principe rivale e lo maledice ogni giorno, prima di togliersi la vita. Poiché [[kacho-hui-guo-rou|Kachow]] e [[fugetsu-hui-guo-rou|Fugetsu]] risultano in custodia, la loro capa manda Taler contro [[marayam-hui-guo-rou|Marayam]], anche se [[fukataki|Fukataki]] avverte che le bestie dei principi rendono molto difficile maledirli.',
        en: 'Taler is one of [[camilla-hui-guo-rou|Camilla]]’s soldiers. The prince took Kakin’s outcasts, once chosen to be buried with princes who never became king, into her army, and they now serve her as curse assassins: each carries something of a rival prince and curses them every day before taking their own life. Since [[kacho-hui-guo-rou|Kacho]] and [[fugetsu-hui-guo-rou|Fugetsu]] are reported to be in custody, their leader sends Taler after [[marayam-hui-guo-rou|Marayam]], although [[fukataki|Fukataki]] warns that the princes’ beasts make cursing them very difficult.',
      },
    ),
  ],
  'zakuro-custard': [
    told(
      390,
      { it: 'Il sangue che si muove', en: 'Blood that moves' },
      {
        it: 'Il sottocapo degli Xi-Yu manda Zakuro Custard e [[lynch-fullbokko|Lynch Fullbokko]] sul terzo livello a cercare [[hisoka|Hisoka]] e a dare la caccia agli Heil-Ly. In un fast food affrontano un membro degli Heil-Ly, e un terzo uomo ferisce profondamente Zakuro al collo. Zakuro mette fuori combattimento il suo avversario con il sangue che muove grazie al Nen, e lo ringrazia per il taglio, che da solo non riusciva a farsi. Il sottocapo li ferma: gli Heil-Ly sono registrati come civili, e uno scontro tra mafia e civili sarebbe un disastro.',
        en: 'The Xi-Yu underboss sends Zakuro Custard and [[lynch-fullbokko|Lynch Fullbokko]] to Tier 3 to look for [[hisoka|Hisoka]] and hunt the Heil-Ly. In a burger joint they confront a Heil-Ly member, and a third man slashes deep into Zakuro’s neck. Zakuro subdues his opponent with the blood he moves through Nen, and thanks him for the cut, which he could not make himself. The underboss then stops them: the Heil-Ly are registered as civilians, and a fight between the Mafia and civilians would be a disaster.',
      },
    ),
    told(
      393,
      { it: 'Un invito al cinema', en: 'An invitation to the cinema' },
      {
        it: 'Le gocce di sangue di Zakuro individuano tra la folla del terzo livello un uomo alto, con i capelli sciolti e senza trucco. Quando [[lynch-fullbokko|Lynch]] lo colpisce, è lei a crollare, e l’uomo dice che il suo è stato un riflesso. Dalla sua aura un tremante Zakuro si convince che sia [[hisoka|Hisoka]] e gli dice che la mafia lo sta cercando. Più tardi si risveglia accanto a un mucchio di rifiuti: l’uomo lo aveva invitato al cinema e gli aveva chiesto quale film volesse vedere, e Zakuro ha perso i sensi appena ha distolto lo sguardo. Riferiscono tutto al sottocapo, e Zakuro riparte con Lynch per cercare il capo della Brigata.',
        en: 'Zakuro’s drops of blood pick out a tall man in a crowd on Tier 3, his hair down and without make-up. When [[lynch-fullbokko|Lynch]] punches him, she is the one who collapses, and the man says it was a reflex. His aura convinces a trembling Zakuro that he is [[hisoka|Hisoka]], and Zakuro tells him that the Mafia is looking for him. Later he wakes up beside a pile of rubbish: the man had invited him to the cinema and asked which film he wanted to see, and Zakuro passed out the moment he looked away. They report to their underboss, and Zakuro sets off with Lynch to find the Troupe’s leader.',
      },
    ),
    told(
      406,
      { it: 'La Lynch che lo ha svegliato', en: 'The Lynch who woke him' },
      {
        it: 'Zakuro e [[hinrigh|Hinrigh]] vedono il corpo di [[lynch-fullbokko|Lynch]], con il collo torto e spezzato. Zakuro obietta prima che [[hisoka|Hisoka]] avrebbe ucciso anche lui, poi ricorda che la Lynch che lo ha svegliato era stranamente calma e si preoccupava per lui, cosa che non era da lei. Dubita che qualcuno possa cambiare altezza per sembrare lei e pensa a una manipolazione, ma ricorda che lei insisteva che fosse sicuramente Hisoka. Hinrigh conclude che il colpevole voleva farglielo credere. Con l’aura che gli cresce intorno, Zakuro dice che, se l’assassino è un Ragno, dovranno scontrarsi con i Cha-R, e chiede a Hinrigh se la vendicheranno. Hinrigh risponde che lo faranno di sicuro.',
        en: 'Zakuro and [[hinrigh|Hinrigh]] are shown [[lynch-fullbokko|Lynch]]’s body, her neck twisted and broken. Zakuro first argues that [[hisoka|Hisoka]] would have killed him too, then remembers that the Lynch who woke him was strangely calm and worried about him, unlike herself. He doubts that anyone could change height to pass as her and thinks of manipulation, but recalls her insisting that it was definitely Hisoka. Hinrigh concludes that the killer wanted them to believe it. Aura swelling around him, Zakuro says that if the killer is a Spider they will have to fight the Cha-R, and asks Hinrigh whether they will avenge her. Hinrigh says they absolutely will.',
      },
    ),
  ],
  'lynch-fullbokko': [
    told(
      390,
      { it: 'Pugni che fanno parlare', en: 'Punches that make people talk' },
      {
        it: 'Lynch Fullbokko degli Xi-Yu cerca [[hisoka|Hisoka]] sul terzo livello insieme a [[zakuro-custard|Zakuro Custard]]. Quando affrontano un membro degli Heil-Ly in un fast food, lui la colpisce con un calcio allo stomaco e lo scontro comincia. Lynch risponde con il suo Nen: i suoi pugni fanno rispondere alle domande la voce interiore di chi li riceve. Dal suo avversario scopre le basi dell’obiettivo degli Heil-Ly e dell’abilità della loro capa. Il loro sottocapo li ferma poco dopo, perché gli Heil-Ly sono registrati come civili.',
        en: 'Lynch Fullbokko of the Xi-Yu searches Tier 3 for [[hisoka|Hisoka]] with [[zakuro-custard|Zakuro Custard]]. When they confront a Heil-Ly member in a burger joint, he kicks her in the stomach and the fight begins. Lynch hits back with her Nen: her punches make the target’s inner voice answer her questions. From her opponent she learns the basics of the Heil-Ly’s goal and of their boss’s ability. Soon after, their underboss stops them, because the Heil-Ly are registered as civilians.',
      },
    ),
    told(
      393,
      { it: 'Il pugno che non funziona', en: 'A punch that fails' },
      {
        it: 'Sul terzo livello le gocce di sangue di [[zakuro-custard|Zakuro]] indicano uomini alti, e Lynch colpisce ciascuno perché la sua voce interiore dica se è [[hisoka|Hisoka]]. Uno di loro è un uomo alto con i capelli sciolti. Quando Lynch lo colpisce è lei a crollare, e l’uomo dice che il suo contrattacco è stato un riflesso. Al risveglio l’uomo non c’è più, e anche Zakuro ha perso i sensi. Sicura che fosse lui, Lynch propone di riferire tutto al sottocapo, perché sono chiaramente in svantaggio.',
        en: 'On Tier 3, [[zakuro-custard|Zakuro]]’s drops of blood pick out tall men, and Lynch punches each one so that his inner voice says whether he is [[hisoka|Hisoka]]. One of them is a tall man with his hair down. When Lynch punches him, she is the one who collapses, and the man says his counter was a reflex. When she wakes, the man is gone, and Zakuro has passed out too. Sure that it was him, Lynch suggests reporting to their underboss, since they are clearly outmatched.',
      },
    ),
    told(
      405,
      {
        it: 'Il pugno che ha scoperto il falso',
        en: 'The punch that exposed a fake',
      },
      {
        it: 'L’Hisoka che Lynch ha colpito al terzo livello era [[bonolenov|Bonolenov]] della Brigata, travestito da [[hisoka|Hisoka]]. Il suo pugno ha fatto ammettere alla voce interiore di lui che stava solo fingendo, prima che un suo riflesso la stordisse. Al risveglio Bonolenov, con l’aspetto di [[zakuro-custard|Zakuro]], le ha fatto dire che sapeva che quell’Hisoka era falso. Furiosa, lei ha giurato di farlo mettere da [[hinrigh|Hinrigh]] in cima alla lista dei bersagli. Bonolenov l’ha uccisa e ne ha preso l’aspetto: la Lynch che ha svegliato Zakuro dicendogli che era sicuramente Hisoka era lui.',
        en: 'The Hisoka Lynch punched on Tier 3 was [[bonolenov|Bonolenov]] of the Troupe, disguised as [[hisoka|Hisoka]]. Her punch made his inner voice admit that he was only pretending, before his reflex knocked her out. When she woke, Bonolenov, in [[zakuro-custard|Zakuro]]’s form, got her to say that she knew this Hisoka was a fake. Angry, she swore to have [[hinrigh|Hinrigh]] put him at the top of the hit list. Bonolenov killed her and took her form: the Lynch who woke Zakuro and told him it was definitely Hisoka was him.',
      },
    ),
  ],
  'tevelares': [
    told(
      391,
      { it: 'L’agguato', en: 'The ambush' },
      {
        it: 'Sul terzo livello tre membri degli Heil-Ly vedono il sottocapo degli Xi-Yu da solo. Tevelares, ingegnere civile e Potenziatore al livello 24, partecipa all’attacco con [[quorolle|Quorolle]] e [[padaille|Padaille]], pensando ai dieci livelli che vale un utilizzatore del Nen. Padaille colpisce per primo, ma i piccioni del sottocapo si trasformano in manette, e i proiettili degli altri due non riescono a fermarli. Dopo che il sottocapo uccide Padaille, Tevelares e Quorolle fuggono. Tevelares non vuole essere torturato per rivelare il covo e propone di chiedere istruzioni alla loro capa.',
        en: 'On Tier 3, three Heil-Ly members spot the Xi-Yu underboss alone. Tevelares, a civil engineer and Enhancer at level 24, joins the attack with [[quorolle|Quorolle]] and [[padaille|Padaille]], thinking of the ten levels a Nen user is worth. Padaille strikes first, but the underboss’s pigeons turn into handcuffs, and the other two’s bullets cannot stop them. After the underboss kills Padaille, Tevelares and Quorolle flee. Tevelares does not want to be tortured over the hideout’s location and suggests asking their boss for instructions.',
      },
    ),
  ],
  'quorolle': [
    told(
      393,
      { it: 'Il consiglio della capa', en: 'The boss’s advice' },
      {
        it: 'Quorolle, riparatore ed Emettitore al livello 22, sfugge al sottocapo degli Xi-Yu con [[tevelares|Tevelares]] dopo la morte di [[padaille|Padaille]]. Nel covo degli Heil-Ly chiede se qualcuno sappia lanciare proiettili capaci di fermare delle manette trasformate in piccioni. Con Tevelares e [[gelato|Gelato]] fa rapporto alla loro capa. Lei li invita a studiare gli avversari e a usare la creatività: non serve un Emettitore se si riesce a limitare il nemico o la sua abilità. Quorolle capisce perché sia lei a condurre il gioco.',
        en: 'Quorolle, a repairman and Emitter at level 22, escapes the Xi-Yu underboss with [[tevelares|Tevelares]] after [[padaille|Padaille]]’s death. Back in the Heil-Ly hideout he asks whether anyone can fire projectiles able to stop handcuffs turned into pigeons. With Tevelares and [[gelato|Gelato]] he reports to their boss. She tells them to study their opponents and be creative: they do not need an Emitter if they can restrict the enemy or the enemy’s ability. Quorolle understands why she is the game master.',
      },
    ),
  ],
  'padaille': [
    told(
      391,
      { it: 'Rinascere come arma', en: 'Reborn as a weapon' },
      {
        it: 'Padaille, operaio delle demolizioni degli Heil-Ly al livello 29, vorrebbe rinascere come un’arma per sentire la carne delle sue prede, e il suo Nen gli permette di trasformare le mani in armi. Si lancia contro il sottocapo degli Xi-Yu con un martello, ma un piccione gli si chiude intorno al polso come una manetta. Si libera con un trapano, che trafigge la mano del sottocapo, e poi con un’ascia. Il sottocapo lo ferma e gli spinge lentamente l’ascia nella nuca. Padaille muore mentre i compagni scappano.',
        en: 'Padaille, a Heil-Ly demolition worker at level 29, wishes he could be reborn as a weapon to feel his prey’s flesh, and his Nen lets him turn his hands into weapons. He charges the Xi-Yu underboss with a hammer, but a pigeon closes around his wrist as a handcuff. He frees himself with a drill, which pierces the underboss’s hand, and then with an axe. The underboss stops him and slowly pushes the axe into the back of his head. Padaille dies while his companions run.',
      },
    ),
  ],
  'misha-hao': [
    told(
      392,
      { it: 'Il corpo che se ne va', en: 'The body that walks away' },
      {
        it: 'Dopo uno scontro sul terzo livello, i soldati assicurano alla folla che l’autore delle uccisioni precedenti è già stato arrestato. Poi [[padaille|Padaille]], ucciso dal sottocapo degli Xi-Yu, si rimette in piedi, dice che la questione è chiusa e se ne va ferito. Sulla sua schiena c’è una donna con un foro di proiettile in testa: Misha Hao, la defunta becchina della famiglia Xi-Yu. Anche dopo la morte il suo Nen compare per far sparire senza dare nell’occhio chiunque venga ucciso da un membro degli Xi-Yu, e svanisce quando il corpo non c’è più.',
        en: 'After a fight on Tier 3, the soldiers assure the crowd that the culprit of the earlier killings has already been arrested. Then [[padaille|Padaille]], killed by the Xi-Yu underboss, gets back on his feet, says the matter is settled, and walks away wounded. On his back rides a woman with a bullet hole in her head: Misha Hao, the Xi-Yu family’s late undertaker. Even after death her Nen appears to dispose inconspicuously of anyone a Xi-Yu member kills, and vanishes once the body is gone.',
      },
    ),
  ],
  'maizan': [
    told(
      393,
      { it: 'Un’informazione da cinquanta milioni', en: 'A fifty-million tip' },
      {
        it: 'Un caporale dell’esercito offre al sottocapo degli Xi-Yu, per cinquanta milioni, un’informazione su dove si trovi la capa degli Heil-Ly: quando ha chiesto al responsabile dei cablaggi della nave di alcuni operai messi a tacere, gli è stato ordinato di tacere, perché avevano cablato una stanza assente dai progetti. Mentre aspetta il denaro, arriva [[ken-i-wang|Ken’i Wang]] e pareggia l’offerta. Il caporale, Maizan, guida le due famiglie fino alla stanza 3101 e bussa annunciando una perquisizione. Un anziano apre. Maizan gli ordina di sedersi sul letto ed entra, e scompare.',
        en: 'An army corporal offers the Xi-Yu underboss information on the Heil-Ly boss’s whereabouts for fifty million: when he asked the head of the ship’s wiring about some workers who had been silenced, he was told to keep quiet, because they had wired a room missing from the plans. While he waits for the money, [[ken-i-wang|Ken’i Wang]] arrives and matches the offer. The corporal, Maizan, leads both families to Room 3101 and knocks, announcing a search. An old man opens. Maizan orders him to sit on the bed and steps inside, and vanishes.',
      },
    ),
  ],
  'daemon': [
    told(
      393,
      { it: 'Una perdita per la famiglia', en: 'A loss for the family' },
      {
        it: 'Nel covo degli Heil-Ly alcuni membri guardano metà del corpo del compagno ucciso da [[nobunaga|Nobunaga]], che con il suo Nen apriva passaggi nei muri. Daemon, operaio edile al livello 20, fa notare quanto costerà loro quella perdita: grazie a lui potevano cacciare le prede direttamente dal covo. [[gelato|Gelato]] aggiunge che ora l’esercito è in allerta, e [[perigord|Perigord]] propone di ricreare l’abilità perduta. Il gruppo discute di chi potrebbe diventare Emettitore e di come continuare a salire di livello.',
        en: 'In the Heil-Ly hideout, members look at half the body of the comrade [[nobunaga|Nobunaga]] killed, whose Nen opened passages through walls. Daemon, a construction worker at level 20, points out how much that loss will cost them: thanks to him they could hunt prey straight from the hideout. [[gelato|Gelato]] adds that the army is now on high alert, and [[perigord|Perigord]] proposes recreating the lost ability. The group discusses who might become an Emitter and how to keep raising their levels.',
      },
    ),
  ],
  'gelato': [
    told(
      393,
      { it: 'Una sorpresa', en: 'A surprise' },
      {
        it: 'Gelato, giocatrice professionista al livello 19, avverte gli altri Heil-Ly che cacciare è ormai pericoloso perché l’esercito è in allerta, e ricorda che devono capire come salire fino al livello 21. Con [[tevelares|Tevelares]] e [[quorolle|Quorolle]] va a fare rapporto alla loro capa, che come esempio propone un’abilità capace di dire quanti colpi servono per battere un nemico, come in un videogioco. Gelato promette di ricordarsene se si rivelerà una Materializzatrice. Quando la capa le offre di dirle il suo tipo, Gelato risponde che vuole che sia una sorpresa.',
        en: 'Gelato, a professional gamer at level 19, warns the other Heil-Ly members that hunting is now dangerous because the army is on high alert, and reminds them that they need to work out how to reach level 21. With [[tevelares|Tevelares]] and [[quorolle|Quorolle]] she reports to their boss, who suggests as an example an ability that tells you how many hits it takes to beat an enemy, as in a game. Gelato says she will remember it if she turns out to be a Conjurer. When the boss offers to tell her her type, Gelato replies that she wants it to be a surprise.',
      },
    ),
  ],
  'perigord': [
    told(
      393,
      { it: 'Ricreare un’abilità', en: 'Recreating an ability' },
      {
        it: 'Perigord, assistente di un investigatore al livello 18, propone che qualcuno ricrei l’abilità del compagno ucciso da [[nobunaga|Nobunaga]], che permetteva agli Heil-Ly di raggiungere le prede dal loro covo. Ricorda agli altri che, secondo la loro capa, ognuno ha un tipo innato, ed è sicuro che il compagno morto fosse un Emettitore. [[bille|Bille]], che ha già deciso quale abilità sviluppare, risponde che serve un Emettitore, mentre [[gelato|Gelato]] osserva che prima devono salire di livello.',
        en: 'Perigord, an investigator’s assistant at level 18, proposes that someone recreate the ability of the comrade [[nobunaga|Nobunaga]] killed, which let the Heil-Ly reach prey from their hideout. He reminds the others that, according to their boss, everyone has an innate type, and he is sure the dead man was an Emitter. [[bille|Bille]], who has already chosen the ability he wants, answers that it takes an Emitter, while [[gelato|Gelato]] points out that they first need to raise their levels.',
      },
    ),
    told(
      399,
      { it: 'L’organo', en: 'The organ' },
      {
        it: 'Quando il sottocapo degli Xi-Yu irrompe con [[nobunaga|Nobunaga]] nel covo degli Heil-Ly e lancia coltelli, Perigord tende con calma la mano verso una lama, chiedendosi quanto ci metterebbe a guarire la ferita. Un compagno ferma il coltello con una rivista e lo rimprovera: Perigord è già stato scelto come “organo”, e la loro capa gli ha detto di non esporsi. Perigord se ne ricorda e si scusa. Il sottocapo nota quella parola e più tardi si chiede che cosa significhi.',
        en: 'When the Xi-Yu underboss breaks into the Heil-Ly hideout with [[nobunaga|Nobunaga]] and throws knives, Perigord calmly holds out his hand to a blade, wondering how long the wound would take to heal. A comrade stops the knife with a magazine and scolds him: Perigord has already been chosen as the “organ”, and their boss told him to keep his head down. Perigord remembers and apologises. The underboss notes the word and later wonders what it means.',
      },
    ),
  ],
  'bille': [
    told(
      394,
      { it: 'Il livello 21', en: 'Level 21' },
      {
        it: 'Bille, impiegato in una sala giochi, al livello 20 aveva detto agli altri Heil-Ly di aver già scelto la sua abilità. Quando [[tassi|Tassi]] degli Xi-Yu entra in una stanza trappola per recuperare un coltello, si ritrova davanti a una porta chiusa, e Bille lo pugnala al collo alle spalle. Raggiunto il livello 21, festeggia. [[matvere|Matvere]] gli porge un bicchiere per l’esame dell’acqua. Bille sperava di essere un Emettitore, ma risulta un Materializzatore.',
        en: 'Bille, an arcade employee, had already told the other Heil-Ly members at level 20 that he had chosen his ability. When [[tassi|Tassi]] of the Xi-Yu walks into a trapped room to fetch a knife, he finds himself in front of a closed door, and Bille stabs him in the neck from behind. Reaching level 21, he celebrates. [[matvere|Matvere]] hands him a glass for the water test. Bille hoped to be an Emitter, but he turns out to be a Conjurer.',
      },
    ),
  ],
  'voconte': [
    told(
      394,
      { it: 'Una porta per le prede', en: 'A door for prey' },
      {
        it: 'Voconte, trafficante di esseri umani ed Emettitore al livello 26, propone agli Heil-Ly di usare la sua abilità della porta per catturare le prede che finiscono nella trappola, e dice che hanno modi per attirarle. Poco dopo un caporale, [[maizan|Maizan]], e un membro degli Xi-Yu, [[tassi|Tassi]], spariscono entrando in una stanza degli Heil-Ly, e [[bille|Bille]] uccide il secondo. Portando il corpo nella stanza dove vengono smembrati i morti, [[terebellum|Terebellum]] dice che Voconte l’ha collegata direttamente alla lavorazione.',
        en: 'Voconte, a human trafficker and Emitter at level 26, proposes that the Heil-Ly use his door ability to catch prey that wander into the trap, and says they have ways to lure them. Soon after, a corporal, [[maizan|Maizan]], and a Xi-Yu member, [[tassi|Tassi]], vanish on entering a Heil-Ly room, and [[bille|Bille]] kills the second. Carrying the body to the room where the dead are dismembered, [[terebellum|Terebellum]] says that Voconte has connected it directly to processing.',
      },
    ),
  ],
  'matvere': [
    told(
      394,
      { it: 'Un’arma di Nen', en: 'A Nen firearm' },
      {
        it: 'Matvere, studente universitario al livello 18, dice tutto contento agli altri Heil-Ly che vuole essere un Emettitore e creare un’arma da fuoco con il Nen, e [[gelato|Gelato]] gli ricorda che non può scegliere. Quando [[quorolle|Quorolle]] gli chiede se saprebbe fermare delle manette trasformate in piccioni, risponde che dovrebbe provare. Lui risulta un Trasformatore, e porge a [[bille|Bille]] il bicchiere per l’esame dell’acqua. Più tardi, al livello 21, dice alla capa che preferirebbe essere l’“organo”.',
        en: 'Matvere, a college student at level 18, happily tells the other Heil-Ly members that he wants to be an Emitter and create a firearm with Nen, and [[gelato|Gelato]] reminds him that he does not get to choose. When [[quorolle|Quorolle]] asks whether he could stop handcuffs turned into pigeons, he says he would have to try. He turns out to be a Transmuter, and hands [[bille|Bille]] the glass for the water test. Later, at level 21, he tells their boss that he would rather be the “organ”.',
      },
    ),
  ],
  'tassi': [
    told(
      394,
      { it: 'Il coltello', en: 'The knife' },
      {
        it: 'Tassi è un membro degli Xi-Yu, piccolo di statura. Davanti alla stanza 3101 vede sparire un anziano, che lascia a terra il coltello piantatogli nella coscia dal sottocapo. Prima che gli altri possano avvertirlo, Tassi entra a riprenderlo e scompare. Si ritrova confuso davanti a una porta chiusa, e [[bille|Bille]] degli Heil-Ly lo pugnala al collo alle spalle. [[terebellum|Terebellum]] porta poi via il suo corpo, che viene spogliato e smembrato.',
        en: 'Tassi is a short Xi-Yu member. Outside Room 3101 he watches an old man vanish, leaving behind on the floor the knife the underboss had thrown into his thigh. Before the others can warn him, Tassi walks in to pick it up and disappears. He finds himself, confused, in front of a closed door, and [[bille|Bille]] of the Heil-Ly stabs him in the neck from behind. [[terebellum|Terebellum]] then carries his body away to be stripped and dismembered.',
      },
    ),
  ],
  'terebellum': [
    told(
      399,
      { it: 'Spostare il danno', en: 'Moving the damage' },
      {
        it: 'Terebellum, contrabbandiere, sicario ed Emettitore degli Heil-Ly, porta le vittime nella zona del covo dove vengono smaltite. Quando il sottocapo degli Xi-Yu e [[nobunaga|Nobunaga]] irrompono, un coltello gli trafigge la testa, ma lui lo estrae e la lama ricompare nella sua lattina. Poi protegge [[yokotani|Yokotani]] dalla spada di Nobunaga. La sua abilità prende il danno di ciò che tocca con la mano destra e lo passa a ciò che tocca con la sinistra; altrimenti il danno resta a lui, e il suo braccio sinistro comincia a sanguinare.',
        en: 'Terebellum, a smuggler, hitman and Emitter of the Heil-Ly, carries victims to the part of the hideout where they are disposed of. When the Xi-Yu underboss and [[nobunaga|Nobunaga]] break in, a knife pierces his head, but he pulls it out and the blade turns up in his drink can. He then shields [[yokotani|Yokotani]] from Nobunaga’s sword. His ability takes the damage of whatever his right hand touches and passes it to whatever his left hand touches; otherwise he takes the damage himself, and his left arm starts to bleed.',
      },
    ),
  ],
  'chiffon-toto': [
    told(
      394,
      { it: 'I vestiti del morto', en: 'The dead man’s clothes' },
      {
        it: 'Chiffon Toto, sarta e operaia in una fabbrica di ornamenti, è una Materializzatrice degli Heil-Ly al livello 6. In una stanza piena di vestiti riceve il corpo di [[tassi|Tassi]], che [[terebellum|Terebellum]] porta dalla trappola. Lui dice a lei e a [[montblanc-toto|Montblanc Toto]] che la stanza ora è collegata direttamente alla lavorazione, e che presto raggiungeranno tutti il livello 21. Chiffon comincia allegra a togliere i vestiti al morto, mentre Montblanc si prepara a smembrarlo.',
        en: 'Chiffon Toto, a seamstress and ornament factory worker, is a Heil-Ly Conjurer at level 6. In a room full of clothes she receives the body of [[tassi|Tassi]], which [[terebellum|Terebellum]] brings from the trap. He tells her and [[montblanc-toto|Montblanc Toto]] that the room is now connected directly to processing, and that they will all reach level 21 soon. Chiffon happily starts removing the dead man’s clothes, while Montblanc prepares to dismember him.',
      },
    ),
  ],
  'montblanc-toto': [
    told(
      394,
      { it: 'Lo smaltimento', en: 'Disposal' },
      {
        it: 'Montblanc Toto lavora in una fabbrica di mangimi e si occupa di far sparire i corpi per gli Heil-Ly. È una Materializzatrice, ancora al livello 3. Quando [[terebellum|Terebellum]] lascia il corpo di [[tassi|Tassi]] in una stanza piena di vestiti, dice a lei e a [[chiffon-toto|Chiffon Toto]] che presto raggiungeranno tutti il livello 21. Mentre Chiffon spoglia allegramente il corpo, Montblanc si prepara a farlo a pezzi.',
        en: 'Montblanc Toto works in an animal feed factory and handles the disposal of bodies for the Heil-Ly. She is a Conjurer, still at level 3. When [[terebellum|Terebellum]] drops off [[tassi|Tassi]]’s body in a room full of clothes, he tells her and [[chiffon-toto|Chiffon Toto]] that they will all reach level 21 soon. While Chiffon cheerfully strips the body, Montblanc gets ready to cut it up.',
      },
    ),
  ],
  'sodom': [
    told(
      394,
      { it: 'Una guardia da catturare', en: 'A guard to capture' },
      {
        it: 'Il collegamento degli Heil-Ly con [[tserriednich-hui-guo-rou|Tserriednich]] non risponde più, e la loro capa intuisce che il principe ha capito qualcosa. Vuole contagiare con la sua abilità uno dei suoi soldati personali per seguirne le mosse, e cerca un volontario che vada con un altro membro a catturare una guardia. [[matvere|Matvere]] preferirebbe essere l’“organo”, così Sodom, medico clandestino, sicario e Manipolatore al livello 31, si offre per la missione.',
        en: 'The Heil-Ly’s liaison to [[tserriednich-hui-guo-rou|Tserriednich]] has gone silent, and their boss guesses that the prince is on to them. She wants to infect one of his personal soldiers with her ability so that she can track his moves, and asks for a volunteer to go with another member and capture a guard. [[matvere|Matvere]] would rather be the “organ”, so Sodom, a back-alley doctor, hitman and Manipulator at level 31, volunteers for the mission.',
      },
    ),
  ],
  'borksen': [
    told(
      394,
      { it: 'Trasferita al terzo livello', en: 'Transferred to Tier 3' },
      {
        it: 'Borksen, soldatessa scelta dell’esercito reale e Hunter provvisoria di guardia agli alloggi reali, ha parlato del Nen a [[otocin|Otocin]]: un potere pericoloso che si sta diffondendo sul primo livello. Per questo il caporale [[gipper|Gipper]] la fa trasferire sul terzo livello come consulente. Lì rivela ai vecchi compagni, avvertendoli che chi ne parla sarà degradato, che il principe sta imparando il Nen dalla sua guardia del corpo. Non sa cosa sia il Nen, ma dalle reazioni delle guardie sembra un’arma segretissima. Propone di cercare l’appoggio degli Xi-Yu o dei Cha-R.',
        en: 'Borksen, a private first class in the royal army and a provisional Hunter on the security detail of the royal living quarters, told [[otocin|Otocin]] about Nen, a dangerous power spreading on Tier 1. Because of this, Corporal [[gipper|Gipper]] has her transferred to Tier 3 as an adviser. There, warning that anyone who leaks it will be demoted, she tells her old comrades that the prince is learning Nen from his bodyguard. She does not know what Nen is, but from the bodyguards’ reactions it seems like a top-secret weapon. She suggests seeking support from the Xi-Yu or the Cha-R.',
      },
    ),
    told(
      407,
      { it: 'Una partita a carte', en: 'A card game' },
      {
        it: 'Borksen si sveglia nel covo degli Heil-Ly, slegata e disarmata, con sei nemici intorno e nessun ricordo di come ci sia arrivata; sospetta un’abilità del Nen. [[morena|Morena]], che lei riconosce come Morena Prudo, la vuole come alleata e le propone di decidere con una partita di negoziazione. Se rifiuta di giocare, potrà solo dire sì o no. Borksen tiene cinque carte coperte: Sì, No, R, che recupera una carta scartata, un jolly e X, che le permetterebbe di andarsene senza rispondere. Morena ha sette carte sue. Borksen vede delle trappole nel sistema e chiede di scegliere lei quale carta coperta scoprire; Morena accetta, e la partita comincia.',
        en: 'Borksen wakes in the Heil-Ly hideout, unbound and disarmed, with six enemies around her and no memory of getting there; she suspects a Nen ability. [[morena|Morena]], whom she identifies as Morena Prudo, wants her as an ally and offers to settle it with a negotiation game. If she refuses to play, she will be left only the freedom to say yes or no. Borksen holds five face-down cards: Yes, No, R, which returns a discarded card, a Joker, and X, which would let her leave without answering. Morena has seven cards of her own. Borksen sees traps in the system, and asks to choose which face-down card she reveals; Morena agrees, and the game begins.',
      },
    ),
    told(
      410,
      { it: 'Costretta a dire sì', en: 'Forced to say yes' },
      {
        it: 'Quando viene dichiarata la legge marziale speciale, Borksen continua a giocare per andarsene con la X. Usa la carta dell’accordo per riprenderla, al prezzo di un bacio di [[morena|Morena]], una delle tre condizioni per entrare negli Heil-Ly, ma la X viene scartata di nuovo. Con le sue domande scopre che il covo è tra il secondo e il terzo livello, ha cinque porte e ventuno membri. Le resta la R, ma poi sceglie il Sì. Morena rivela che Borksen ha barato segnando la R, e che la sua abilità, attivata dall’imbroglio, l’ha costretta a scegliere. Borksen entra negli Heil-Ly al livello 0, viene liberata e torna dai suoi, non prima di chiedere a Morena di mostrarle il covo.',
        en: 'When special martial law is declared, Borksen keeps playing to leave with the X card. She uses the Deal card to take it back, at the price of a kiss from [[morena|Morena]], one of three conditions for joining the Heil-Ly, but X is discarded again. With her questions she learns that the hideout lies between Tiers 2 and 3 and has five doors and twenty-one members. She is left with R, but then picks Yes. Morena reveals that Borksen cheated by marking the R card, and that her ability, triggered by cheating, forced her to choose. Borksen joins the Heil-Ly at level 0, is released and goes back to her people, first asking Morena to show her around.',
      },
    ),
  ],
  'otocin': [
    told(
      394,
      { it: 'Il soprannome del principe', en: 'The prince’s nickname' },
      {
        it: 'Otocin è uno dei soldati di [[tserriednich-hui-guo-rou|Tserriednich]], suo compagno all’accademia militare, e cerca la capa degli Heil-Ly sul terzo livello. Chiede al caporale [[gipper|Gipper]] come difendersi dal Nen, rivela di averne sentito parlare da [[borksen|Borksen]] e ottiene così il suo trasferimento. Gipper lo minaccia per aver abbreviato il nome del principe. Otocin critica il carattere irascibile di Tserriednich, e pensa che preferirebbe restare in basso e chiedergli a voce alta se è davvero questo che vuole.',
        en: 'Otocin is one of [[tserriednich-hui-guo-rou|Tserriednich]]’s soldiers, his schoolmate at the military academy, and is searching Tier 3 for the Heil-Ly boss. He asks Corporal [[gipper|Gipper]] how to defend against Nen, reveals that he heard about it from [[borksen|Borksen]], and so gets her transferred. Gipper threatens him for shortening the prince’s name. Otocin criticises Tserriednich’s short temper, and thinks that he would rather stay at the bottom and ask him out loud whether this is really what he wants.',
      },
    ),
  ],
  'gipper': [
    told(
      394,
      { it: 'Consegnarla al principe', en: 'Handing her to the prince' },
      {
        it: 'Gipper è un caporale dell’esercito di [[tserriednich-hui-guo-rou|Tserriednich]]. I suoi soldati sfondano la porta dell’ufficio degli Heil-Ly sul terzo livello e trovano un membro dei Cha-R morto. Ordina di riferire che un membro degli Heil-Ly ha resistito all’arresto, così l’irruzione sembrerà giustificata, e insiste che devono catturare la capa degli Heil-Ly e consegnarla al principe prima che debba occuparsene lui. Sentito del Nen da [[otocin|Otocin]], fa trasferire [[borksen|Borksen]] e poi chiede il trasferimento per se stesso.',
        en: 'Gipper is a corporal in [[tserriednich-hui-guo-rou|Tserriednich]]’s army. His soldiers break into the Heil-Ly’s office on Tier 3 and find a dead Cha-R member. He orders them to report that a Heil-Ly member resisted arrest, so that the break-in looks justified, and insists that they must capture the Heil-Ly boss and hand her over to the prince before he has to deal with her himself. Hearing about Nen from [[otocin|Otocin]], he has [[borksen|Borksen]] transferred, then puts in a transfer request for himself.',
      },
    ),
  ],
  'momolly': [
    told(
      394,
      { it: 'Se fosse sua amica', en: 'If he were her friend' },
      {
        it: 'Momolly è una soldatessa di [[tserriednich-hui-guo-rou|Tserriednich]] che ha frequentato l’accademia militare con lui. Durante le ricerche sul terzo livello sostiene che il principe rimanderebbe la vendetta contro una traditrice solo se avesse trovato un nuovo giocattolo. Propone di aspettare [[borksen|Borksen]] per confermare i fatti e le chiede un piano per il caso in cui uno di loro venga catturato. Tra sé pensa che, se Tserriednich fosse suo amico, dovrebbe stargli accanto e tenergli testa.',
        en: 'Momolly is a soldier of [[tserriednich-hui-guo-rou|Tserriednich]] who attended the military academy with him. While searching Tier 3, she argues that the prince would delay revenge on a traitor only if he had found a new toy. She suggests waiting for [[borksen|Borksen]] to confirm the facts, and asks her for a plan in case one of them is caught. To herself she thinks that, if Tserriednich were her friend, she should be at his side and getting on his case.',
      },
    ),
    told(
      407,
      { it: 'Borksen scomparsa', en: 'Borksen is missing' },
      {
        it: 'Alle 13 al terzo livello, Momolly e altri quattro soldati amici di [[tserriednich-hui-guo-rou|Tserriednich]] si accorgono che [[borksen|Borksen]] è sparita da una trentina di minuti, da quando il corteo funebre le è passato davanti. Momolly dice che devono pensare al peggio, un rapimento, e che una squadra potrebbe averla drogata e nascosta tra la folla. [[otocin|Otocin]] pensa al Nen, e al fatto che gli Heil-Ly potrebbero usarla contro il principe. Ricordano che Borksen si chiedeva se fosse davvero giusto non trattare e non tentare un salvataggio se uno di loro fosse catturato, e decidono di pensarci ognuno per conto suo.',
        en: 'At 1 p.m. on Tier 3, Momolly and four other soldier friends of [[tserriednich-hui-guo-rou|Tserriednich]] realise that [[borksen|Borksen]] has been missing for about thirty minutes, since the funeral procession passed her. Momolly says they must assume the worst, an abduction, and that a team could have drugged her and hidden her in the crowd. [[otocin|Otocin]] suggests Nen, and that the Heil-Ly may want to use her against the prince. They remember Borksen asking whether they should really refuse to negotiate or attempt a rescue if one of them was captured, and decide to think it over on their own.',
      },
    ),
  ],
  'lisores': [
    told(
      395,
      { it: 'Il prete della chiesa', en: 'The church’s priest' },
      {
        it: 'Anni prima, a Meteor City, padre Lisores accoglie il giovane [[chrollo|Quoll]] di ritorno in chiesa, dove il ragazzo studia videocassette in lingue straniere, e lo avverte di non andare da solo in periferia: i bambini vengono rapiti, e fuori ci sono sempre più tombe piccole. I ragazzi evitano le sue prediche, ma lui lascia a Quoll la sala video. Nel seminterrato dice a una persona anziana che il ragazzo promette molto e si chiede se le sue idee possano essere utili agli anziani della città.',
        en: 'Years earlier in Meteor City, Father Lisores welcomes young [[chrollo|Chrollo]] back to the church, where the boy studies videotapes in foreign languages, and warns him not to visit the outskirts alone: children are being abducted, and there are more and more small graves outside. The children avoid his lectures, but he lets Chrollo use the video room. In the basement he tells an older figure that the boy has great promise and wonders whether his ideas could be of use to the city’s elders.',
      },
    ),
  ],
  'sarasa': [
    told(
      396,
      { it: 'La voce di Orange', en: 'Orange’s voice' },
      {
        it: 'Sarasa, la più piccola dei ragazzi intorno a [[chrollo|Quoll]] a Meteor City, accetta subito di dare la voce all’Orange Cleaner nel cartone che lui vuole doppiare. Alla proiezione costringe [[phinks|Phinks]] a distribuire gli snack e promette di occuparsi di [[uvogin|Uborghin]]. Dopo lo spettacolo finge di parlare con la voce di Uborghin per lodare la recitazione di Quoll. Più tardi si incammina da sola tra i rifiuti, decisa a sorprendere gli altri con nuove cassette prese in una discarica vicino a Uga Forest.',
        en: 'Sarasa, the youngest of the children around [[chrollo|Chrollo]] in Meteor City, agrees at once to voice the Orange Cleaner in the cartoon he wants to dub. At the screening she makes [[phinks|Phinks]] hand out snacks and promises to deal with [[uvogin|Uvogin]]. After the show she pretends to speak in Uvogin’s voice to praise Chrollo’s performance. Later she sets off alone through the rubbish, determined to surprise the others with new tapes from a dump near Uga Forest.',
      },
    ),
    told(
      397,
      { it: 'Scomparsa', en: 'Missing' },
      {
        it: 'Sarasa non arriva alla proiezione successiva, e chi si occupa di lei non la vede dal giorno prima. [[chrollo|Quoll]] annulla lo spettacolo, si dà la colpa per averla lasciata tornare a casa da sola, e i bambini di Meteor City si uniscono alle ricerche. Vicino a Uga Forest Quoll trova il suo borsellino e tracce di pneumatici. Nella foresta un sacco dei rifiuti pende da un albero, con un biglietto. Dentro c’è il corpo smembrato di Sarasa. Gli amici la riportano a casa, e un’imbalsamatrice la ricompone prima della sepoltura.',
        en: 'Sarasa does not come to the next screening, and her caretakers have not seen her since the day before. [[chrollo|Chrollo]] cancels the show, blames himself for letting her go home alone, and the children of Meteor City join the search. Near Uga Forest Chrollo finds her pouch and tyre tracks. In the forest a rubbish bag hangs from a tree, with a note. Inside is Sarasa’s dismembered body. Her friends take her home, and an embalmer restores her before she is buried.',
      },
    ),
  ],
  'sheila': [
    told(
      395,
      { it: 'Il libro del cacciatore', en: 'The Hunter book' },
      {
        it: 'Sheila è una delle ragazze di Meteor City che [[pakunoda|Pakunoda]] coinvolge nel doppiaggio di un cartone con [[chrollo|Quoll]]. Accetta se accetta anche [[sarasa|Sarasa]]. Legge sempre lo stesso libro di avventure su un Hunter, perché vuole diventarlo, e nessun ragionamento la fa cambiare idea. Leggendo mentre cammina continua a inciampare. Vedendo il copione che Quoll ha scritto così in fretta, dice che è nato nel posto sbagliato.',
        en: 'Sheila is one of the Meteor City girls [[pakunoda|Pakunoda]] brings in to dub a cartoon with [[chrollo|Chrollo]]. She agrees if [[sarasa|Sarasa]] does. She always reads the same adventure book about a Hunter, because she wants to become one, and no sound argument will change her mind. Reading as she walks, she keeps tripping over. Seeing the script Chrollo wrote so quickly, she says he was born in the wrong place.',
      },
    ),
    told(
      397,
      { it: 'Lontano dal gruppo', en: 'Away from the group' },
      {
        it: 'Quando [[sarasa|Sarasa]] scompare, Sheila aiuta [[chrollo|Quoll]] a cercarla, perché conosce chi si occupa di lei. Quando il corpo di Sarasa viene trovato nella foresta, Sheila piange con [[pakunoda|Pakunoda]]. Dopo la sepoltura, mentre Quoll e gli altri progettano di attirare a Meteor City gli assassini come quelli di Sarasa e di ucciderli, Sheila si allontana da sola nella foresta: non vuole seguirli su quella strada.',
        en: 'When [[sarasa|Sarasa]] goes missing, Sheila helps [[chrollo|Chrollo]] look for her, since she knows who looks after her. When Sarasa’s body is found in the forest, Sheila cries with [[pakunoda|Pakunoda]]. After the burial, while Chrollo and the others plan to draw killers like Sarasa’s into Meteor City and kill them, Sheila walks away alone into the forest: she will not follow them down that path.',
      },
    ),
  ],
  'renko': [
    told(
      397,
      { it: 'L’imbalsamatrice', en: 'The embalmer' },
      {
        it: 'Renko è una donna vestita di nero, con un cappello a punte simili a orecchie. Imbalsama il corpo di [[sarasa|Sarasa]] così bene che nella bara i bambini dicono che sembra viva, e padre [[lisores|Lisores]] lo chiama un miracolo. Quando [[machi|Machi]] chiede di imparare, Renko risponde che è un’abilità speciale e le chiede se veda l’aura. Invidiosa dei suoi occhi, le dà un foglietto: mostrandolo sull’ultimo autobus per Kirimori Valley potrà andare a trovarla gratis, se chi si occupa di lei glielo permette.',
        en: 'Renko is a woman dressed in black, with a hat that has pointed ears. She embalms [[sarasa|Sarasa]]’s body so well that, in the coffin, the children say she looks alive, and Father [[lisores|Lisores]] calls it a miracle. When [[machi|Machi]] asks to learn, Renko says it is a special ability and asks whether she can see aura. Envious of her eyes, she gives Machi a slip of paper: shown on the last bus to Kirimori Valley, it will take her there for free, if her caretakers allow it.',
      },
    ),
  ],
  'yokotani': [
    told(
      399,
      { it: 'L’avvocato degli Heil-Ly', en: 'The Heil-Ly’s lawyer' },
      {
        it: 'Yokotani, l’avvocato corrotto degli Heil-Ly, è nel covo quando vi irrompono il sottocapo degli Xi-Yu e [[nobunaga|Nobunaga]]. Li accusa di violazione di domicilio e lesioni. Quando la lama di Nobunaga gli raggiunge la testa, [[terebellum|Terebellum]] prende su di sé il danno. Yokotani, che si è già presentato agli intrusi, attiva allora la sua abilità: guardie evocate che non possono ferirli ma che i loro colpi non scalfiscono, e che crescono con la gravità del reato. Le guardie afferrano Nobunaga, lo espellono dal covo e poi inseguono il sottocapo.',
        en: 'Yokotani, the Heil-Ly’s corrupt lawyer, is in the hideout when the Xi-Yu underboss and [[nobunaga|Nobunaga]] break in. He charges them with trespassing and bodily harm. When Nobunaga’s blade reaches his head, [[terebellum|Terebellum]] takes the damage for him. Yokotani, who has already introduced himself to the intruders, then activates his ability: conjured guards that cannot harm them but cannot be hurt by them either, and that grow stronger with the seriousness of the crime. The guards seize Nobunaga, expel him from the hideout, and then go after the underboss.',
      },
    ),
  ],
  'madwig': [
    told(
      400,
      { it: 'L’assassino senza memoria', en: 'The hitman without a memory' },
      {
        it: 'Negli alloggi di [[tyson-hui-guo-rou|Tyson]] i dipendenti del principe si presentano a una delle sue guardie del corpo, ognuno in un ruolo. Madwig interpreta un bell’assassino che ha perso la memoria: ricorda solo come si usa una pistola, eppure Tyson lo ha assunto lo stesso. La guardia capisce che ognuno di loro recita uno dei personaggi preferiti del principe. Tyson risponde che sono tutti rinati, e che succederà anche a lui.',
        en: 'In [[tyson-hui-guo-rou|Tyson]]’s quarters the prince’s employees introduce themselves to one of her bodyguards, each in a role. Madwig plays a handsome hitman who has lost his memory: he remembers only how to use a handgun, yet Tyson hired him anyway. The bodyguard realises that each of them is playing one of the prince’s favourite characters. Tyson replies that they have all been reborn, and that the same will happen to him.',
      },
    ),
  ],
  'himonce': [
    told(
      400,
      { it: 'La stella più grande', en: 'The biggest star' },
      {
        it: 'Himoncé è uno dei dipendenti di [[tyson-hui-guo-rou|Tyson]]. Quando il personale si presenta a una delle guardie del corpo del principe, ognuno in un ruolo, lui si dice la più grande star del mondo e racconta che Tyson è la prima ragazza ad avergli detto che non è il suo tipo. Dopo di lui si presentano [[anzel|Anzel]] e [[hyuga|Hyuga]]. Tyson dice alla guardia che sono tutti rinati, e dà un ruolo anche a lui: una guardia che sembra un seduttore ma ha il cuore puro.',
        en: 'Himoncé is one of [[tyson-hui-guo-rou|Tyson]]’s employees. When the staff introduce themselves to one of the prince’s bodyguards, each in a role, he calls himself the biggest star in the world and says that Tyson is the first girl who told him he was not her type. After him come [[anzel|Anzel]] and [[hyuga|Hyuga]]. Tyson tells the bodyguard that they have all been reborn, and gives him a role too: a guard who looks flirtatious but is pure at heart.',
      },
    ),
  ],
  'anzel': [
    told(
      400,
      { it: 'Il fratello minore', en: 'The little brother' },
      {
        it: 'Anzel lavora per [[tyson-hui-guo-rou|Tyson]]. Quando i dipendenti del principe si presentano a una delle sue guardie del corpo, lui dice di essere il fratello minore di Tyson, e che lo sanno solo loro due. Gli altri interpretano un assassino senza memoria, la più grande star del mondo e un tutor leggendario. La guardia capisce che stanno recitando i ruoli preferiti del principe. Tyson dice che sono rinati e gli chiede di stare al gioco, e lui accetta.',
        en: 'Anzel works for [[tyson-hui-guo-rou|Tyson]]. When the prince’s employees introduce themselves to one of her bodyguards, he says he is Tyson’s little brother, and that only the two of them know it. The others play a hitman with no memory, the biggest star in the world and a legendary tutor. The bodyguard realises they are playing the prince’s favourite roles. Tyson says they have been reborn and asks him to play along, and he does.',
      },
    ),
  ],
  'hyuga': [
    told(
      400,
      { it: 'Il tutor leggendario', en: 'The legendary tutor' },
      {
        it: 'Hyuga è uno dei dipendenti di [[tyson-hui-guo-rou|Tyson]]. Si presenta a una guardia del corpo del principe come un tutor leggendario, capace di far entrare chiunque nella scuola dei suoi sogni, per quanto negato sia. Dopo di lui l’ultimo dipendente dice di essere un principe di un altro pianeta in cerca di una sposa. [[izunavi|Izunabi]] osserva la scena e sospetta che il libro di Tyson, legato alla sua bestia, abbia reso la guardia fin troppo calma.',
        en: 'Hyuga is one of [[tyson-hui-guo-rou|Tyson]]’s employees. He introduces himself to one of the prince’s bodyguards as a legendary tutor who can get anyone into their dream school, however hopeless they are. After him, the last employee claims to be a prince from another planet looking for a bride. [[izunavi|Izunavi]] watches and suspects that Tyson’s book, linked to her beast, has made the bodyguard far too calm.',
      },
    ),
  ],
  'kaiser': [
    told(
      400,
      { it: 'Innamorato di Melody', en: 'In love with Melody' },
      {
        it: 'Kaiser, funzionario dell’Ufficio di Giustizia, ha sorvegliato [[seiko-hui-guo-rou|Seiko]] per tre giorni e ha interrogato [[melody|Melody]] dopo la fuga fallita delle gemelle. Ora le dice che cinque principi vogliono che suoni per loro e usano come leva il rischio di un’accusa di complicità. Propone di eliminare i principi di rango più alto versando un veleno lento nelle loro bocche mentre la sua musica li lascia privi di sensi, e le confessa di essere innamorato di lei. Il suo battito è regolare come un orologio atomico: Melody sospetta che sia manipolato, ma accetta.',
        en: 'Kaiser, a Justice Bureau official, has watched [[seiko-hui-guo-rou|Seiko]] for three days and questioned [[melody|Melody]] after the twins’ failed escape. Now he tells her that five princes want her to perform for them and are using the threat of an accomplice charge as leverage. He proposes wiping out the higher princes by pouring a slow-acting poison into their mouths while her music leaves them unconscious, and confesses that he is in love with her. His heartbeat is as steady as an atomic clock: Melody suspects he is being manipulated, but agrees.',
      },
    ),
    told(
      402,
      { it: 'Una domanda per Benjamin', en: 'A question for Benjamin' },
      {
        it: 'Kaiser si offre di aiutare [[melody|Melody]] e la bestia di [[kacho-hui-guo-rou|Kachow]] contro [[luzurus-hui-guo-rou|Loozlus]]: dice di volere [[fugetsu-hui-guo-rou|Fugetsu]] sul trono perché cambi il sistema, e di essere entrato all’Ufficio di Giustizia per avvicinare il mondo al suo ideale. Accompagna Fugetsu a consegnare le lettere di Kachow. Quando [[benjamin-hui-guo-rou|Benjamin]] gli chiede delle ricerche di [[musse|Musse]], Kaiser lo porta a dire che la situazione non basta per la legge marziale, e ne deduce che Benjamin aspetta il momento giusto per dichiararla. Negli alloggi di Loozlus legge ad alta voce la lettera e ne liquida il contenuto come semplici voci.',
        en: 'Kaiser volunteers to help [[melody|Melody]] and [[kacho-hui-guo-rou|Kacho]]’s beast against [[luzurus-hui-guo-rou|Luzurus]]: he says he wants [[fugetsu-hui-guo-rou|Fugetsu]] on the throne to change the system, and that he joined the Justice Bureau to bring the world closer to his ideal. He escorts Fugetsu to deliver Kacho’s letters. When [[benjamin-hui-guo-rou|Benjamin]] asks about the search for [[musse|Musse]], Kaiser leads him to say that the situation does not call for martial law, and concludes that Benjamin is waiting for the right moment to declare it. In Luzurus’s quarters he reads the letter aloud and dismisses its contents as mere rumours.',
      },
    ),
  ],
  // Returning characters, chapters 371–400.
  'phinks': [
    told(
      371,
      { it: 'La mafia del quinto livello', en: 'The Mafia on Tier 5' },
      {
        it: 'Sul quinto livello tre uomini pretendono un pedaggio da chi vuole andare in mensa. Alle loro spalle compaiono [[nobunaga|Nobunaga]], [[franklin|Franklin]], [[feitan|Feitan]] e Phinks; Phinks ordina loro di spostarsi, e quando reagiscono vengono battuti senza fatica. I tre spiegano come le tre famiglie mafiose di Cakin siano legate a [[zhang-lei-hui-guo-rou|Chowrai]], [[tserriednich-hui-guo-rou|Tserriednich]] e [[luzurus-hui-guo-rou|Loozlus]], e che la più potente è quella degli Xi-Yu. Phinks chiede allora di un uomo alto più di 190 centimetri: trovarlo è il loro compito, ora.',
        en: 'On Tier 5, three men demand payment from anyone heading to the canteen. Behind them appear [[nobunaga|Nobunaga]], [[franklin|Franklin]], [[feitan|Feitan]] and Phinks; Phinks orders them to move, and when they fight back they are easily beaten. The three explain how Kakin’s three Mafia families are tied to [[zhang-lei-hui-guo-rou|Zhang Lei]], [[tserriednich-hui-guo-rou|Tserriednich]] and [[luzurus-hui-guo-rou|Luzurus]], and that the Xi-Yu are the most powerful. Phinks then asks about a man over 190 cm tall: finding him is their job now.',
      },
    ),
    told(
      380,
      { it: 'Al servizio dei Cha-R', en: 'Working for the Cha-R' },
      {
        it: 'Il sottocapo dei Cha-R [[ken-i-wang|Ken’i Wang]] si scusa con Phinks, [[nobunaga|Nobunaga]] e [[feitan|Feitan]] per averli sospettati e li porta nell’ufficio dei Cha-R al quinto livello. Mostra loro le riprese dell’uomo entrato nel magazzino. In cambio della caccia all’uomo che ha ucciso i custodi del magazzino, li fa passare dalla porta interna dell’ufficio e li affianca a una squadra dei Cha-R.',
        en: 'The Cha-R underboss [[ken-i-wang|Ken’i Wang]] apologises to Phinks, [[nobunaga|Nobunaga]] and [[feitan|Feitan]] for suspecting them and takes them to the Cha-R office on Tier 5. He shows them footage of the man who entered the warehouse. In exchange for hunting down the man who killed the warehouse guards, he lets them through the office’s inner door and pairs them with a Cha-R squad.',
      },
    ),
    told(
      398,
      { it: 'La trappola della stanza', en: 'The room’s trap' },
      {
        it: 'Nelle cabine di prima classe del terzo livello Phinks, [[nobunaga|Nobunaga]] e [[feitan|Feitan]] usano un ostaggio per studiare la trappola degli Heil-Ly. Passare dal bagno è sicuro, ma l’uomo sparisce quando rientra dalla porta principale. Per Nobunaga è una trappola a mina, e su proposta di Phinks un secondo ostaggio dimostra che si attiva ogni volta. Mentre Feitan si offre di entrare per primo, arriva [[ken-i-wang|Ken’i Wang]] con il sottocapo degli Xi-Yu, che trasforma un trasmettitore in un’ostrica, la inghiotte e si lascia prendere dalla trappola. Phinks tiene il ricevitore.',
        en: 'In the first-class cabins on Tier 3, Phinks, [[nobunaga|Nobunaga]] and [[feitan|Feitan]] use a hostage to study the Heil-Ly’s trap. Going through the bathroom is safe, but the man vanishes when he walks back in through the front door. Nobunaga reads it as a land-mine trap, and at Phinks’s suggestion a second hostage shows that it triggers every time. As Feitan volunteers to go in first, [[ken-i-wang|Ken’i Wang]] arrives with the Xi-Yu underboss, who turns a transmitter into an oyster, swallows it and lets the trap take him. Phinks keeps the receiver.',
      },
    ),
    told(
      406,
      { it: 'La strada per il secondo livello', en: 'The way to Tier 2' },
      {
        it: '[[tajao|Tajao]] guida Phinks, [[nobunaga|Nobunaga]] e [[feitan|Feitan]] per passaggi stretti e su una scala traballante tra le tubature della nave, verso il secondo livello; l’odore ricorda a Phinks i pozzi neri di casa. Quando Tajao spiega che i Cha-R e gli Xi-Yu controllano il trattamento dei rifiuti tra il quarto e il quinto livello, Nobunaga ipotizza che gli Heil-Ly si spaccino per ditte appaltatrici, e Phinks osserva che lì potrebbero uccidere quanto vogliono. Nobunaga torna indietro e avverte Phinks e Feitan che la guardia del covo ha un’abilità di contrattacco che espelle chi la attacca.',
        en: '[[tajao|Tajao]] leads Phinks, [[nobunaga|Nobunaga]] and [[feitan|Feitan]] through cramped passages and up a rickety staircase among the ship’s pipes toward Tier 2; the smell reminds Phinks of the cesspools back home. When Tajao explains that the Cha-R and Xi-Yu control the waste processing between Tiers 4 and 5, Nobunaga guesses that the Heil-Ly may pose as subcontractors there, and Phinks remarks that they could kill as much as they like. Nobunaga turns back, and warns Phinks and Feitan that the hideout’s guard has a counter ability that expels attackers.',
      },
    ),
  ],
  'nobunaga': [
    told(
      378,
      { it: 'Il magazzino', en: 'The warehouse' },
      {
        it: 'Nobunaga, [[phinks|Phinks]] e [[feitan|Feitan]] vanno al magazzino dei Cha-R sul quinto livello a recuperare le armi che hanno portato a bordo di nascosto, prima di cercare [[hisoka|Hisoka]] al quarto livello. La loro guida scompare dall’En di Nobunaga dietro un angolo e viene trovata morta, con la gola tagliata. Feitan vuole ignorarla e prendere la spada di Nobunaga e il proprio ombrello, e Phinks trova strana la preoccupazione di Nobunaga per quell’uomo. Dal soffitto, delle mani allargano un’apertura sopra di loro.',
        en: 'Nobunaga, [[phinks|Phinks]] and [[feitan|Feitan]] go to the Cha-R warehouse on Tier 5 to retrieve the weapons they smuggled aboard, before searching Tier 4 for [[hisoka|Hisoka]]. Their guide vanishes from Nobunaga’s En around a corner and is found dead, his throat slit. Feitan wants to ignore him and fetch Nobunaga’s sword and his own umbrella, and Phinks finds Nobunaga’s concern for the man strange. From the ceiling, hands widen an opening above them.',
      },
    ),
    told(
      393,
      { it: 'La fine del sicario', en: 'The end of the hitman' },
      {
        it: 'Un sicario degli Heil-Ly capace di aprire passaggi nei muri compare nell’ufficio dei Cha-R sul quinto livello e invita i Ragni a tradire i Cha-R per uccidere i ricchi e distruggere il mondo con lui. Nobunaga gli pianta la katana nella testa, definisce inutili le sue trovate al magazzino e lo colpisce ancora. Quando la squadra dei Cha-R rientra, Nobunaga mostra la testa del sicario e annuncia che la Brigata distruggerà gli Heil-Ly.',
        en: 'A Heil-Ly hitman who can open passages through walls appears at the Cha-R office on Tier 5 and urges the Spiders to betray the Cha-R and kill the rich and destroy the world with him. Nobunaga drives his katana into the man’s head, calls his antics at the warehouse pointless and strikes him again. When the Cha-R team returns, Nobunaga shows them the hitman’s head and announces that the Troupe will destroy the Heil-Ly.',
      },
    ),
    told(
      395,
      { it: 'Com’erano all’inizio', en: 'How they began' },
      {
        it: 'Sul terzo livello Nobunaga, [[phinks|Phinks]] e [[feitan|Feitan]] aprono un varco nel muro di un bagno accanto alla stanza trappola degli Heil-Ly e trovano la stanza nascosta appena abbandonata. Phinks si chiede perché gli Heil-Ly abbiano mandato un dilettante contro di loro senza avvertirlo. Nobunaga pensa che lo abbiano sacrificato per tenere all’erta gli altri, e dice che somigliano alla Brigata. Quando Phinks obietta che i Ragni non accettano dilettanti e non vogliono distruggere il mondo, Nobunaga ricorda che all’inizio erano così anche loro, spinti dalla rassegnazione e dalla rabbia.',
        en: 'On Tier 3, Nobunaga, [[phinks|Phinks]] and [[feitan|Feitan]] cut through a bathroom wall next to the Heil-Ly’s trapped room and find the hidden room recently abandoned. Phinks wonders why the Heil-Ly sent an amateur against them without warning him. Nobunaga thinks they sacrificed him to keep the others on their toes, and says they resemble the Troupe. When Phinks objects that the Spiders do not accept amateurs and do not want to destroy the world, Nobunaga reminds him that they were like that at first, driven by resignation and anger.',
      },
    ),
    told(
      399,
      { it: 'Espulso', en: 'Expelled' },
      {
        it: 'Nobunaga segue il sottocapo degli Xi-Yu attraverso la trappola fino al covo degli Heil-Ly. Non riesce a tagliarne i muri e ne deduce che chi lo ha creato è dentro. Nella sala principale nove membri li ignorano. I suoi attacchi vengono deviati, e quando l’avvocato [[yokotani|Yokotani]] attiva la sua abilità, delle guardie evocate e invulnerabili afferrano Nobunaga, gli prendono la spada e lo espellono nella stanza 3101. Lì capisce che la trappola funziona anche da passaggio segreto, e il sottocapo torna dopo aver nascosto il trasmettitore.',
        en: 'Nobunaga follows the Xi-Yu underboss through the trap to the Heil-Ly hideout. He cannot cut its walls and concludes that whoever made it is inside. In the main room, nine members ignore them. His attacks are deflected, and when the lawyer [[yokotani|Yokotani]] activates his ability, invulnerable conjured guards seize Nobunaga, take his sword and expel him to Room 3101. There he works out that the trap is also a secret passage, and the underboss returns having hidden the transmitter.',
      },
    ),
    told(
      405,
      { it: 'Non i veri Heil-Ly', en: 'Not the real Heil-Ly' },
      {
        it: 'Nel covo dei Cha-R al quinto livello, Nobunaga chiede a [[ken-i-wang|Ken’i]] e [[tajao|Tajao]] se gli Heil-Ly sulla nave siano davvero gli Heil-Ly. Ken’i spiega che la nuova capa, la giovane [[morena|Morena]], è una discendente reale senza diritti di successione. Nobunaga osserva che gli Heil-Ly lasciano ai membri la scelta della tattica dentro un’unica strategia, come fa la Brigata, e che uccidono civili, non mafiosi: crede che vogliano uccidere tutti a bordo, famiglia reale compresa, e distruggere Cakin. [[phinks|Phinks]] e [[feitan|Feitan]] aggiungono che uccidere potrebbe essere un limite per ottenere un Nen potente. Tajao chiede ai tre di schiacciare gli Heil-Ly con il pieno sostegno dei Cha-R e degli Xi-Yu.',
        en: 'In the Cha-R hideout on Tier 5, Nobunaga asks [[ken-i-wang|Ken’i]] and [[tajao|Tajao]] whether the Heil-Ly on the ship are really the Heil-Ly. Ken’i says that their young new boss, [[morena|Morena]], is a royal descendant without succession rights. Nobunaga notes that the Heil-Ly let members choose their own tactics under one strategy, as the Troupe does, and that they kill civilians, not Mafia: he believes they want to kill everyone aboard, the royal family included, and destroy Kakin. [[phinks|Phinks]] and [[feitan|Feitan]] add that killing could be a limitation to gain powerful Nen. Tajao asks the three to crush the Heil-Ly with the full support of the Cha-R and Xi-Yu.',
      },
    ),
  ],
  'feitan': [
    told(
      400,
      { it: 'Il ricevitore', en: 'The receiver' },
      {
        it: 'Feitan e [[phinks|Phinks]] seguono il ricevitore attraverso il terzo livello. Quando il segnale diventa instabile, Feitan ricorda che il trasmettitore deve trovarsi esattamente sopra o sotto di loro. [[nobunaga|Nobunaga]] li raggiunge, e scendendo verso il quarto livello vedono il segnale allontanarsi: il covo degli Heil-Ly è al secondo livello. Feitan vuole andare subito al covo dei Cha-R, ma Nobunaga vuole portare anche [[franklin|Franklin]]. Quando Nobunaga ammette che un membro degli Heil-Ly gli è sembrato interessante, Feitan gli dice che il nemico gli piace troppo.',
        en: 'Feitan and [[phinks|Phinks]] follow the receiver across Tier 3. When the signal becomes unstable, Feitan remembers that the transmitter must be directly above or below them. [[nobunaga|Nobunaga]] rejoins them, and heading down to Tier 4 they see the signal move away: the Heil-Ly hideout is on Tier 2. Feitan wants to go straight to the Cha-R’s hideout, but Nobunaga wants to bring [[franklin|Franklin]] too. When Nobunaga admits that one Heil-Ly member seemed interesting, Feitan tells him he likes the enemy too much.',
      },
    ),
  ],
  'franklin': [
    told(
      379,
      { it: 'Aspettare Hisoka', en: 'Waiting for Hisoka' },
      {
        it: 'Franklin mangia da solo nella sala da pranzo del quinto livello quando il consigliere dei Cha-R gli si avvicina. Franklin dice che non darà la caccia a [[hisoka|Hisoka]]: Hisoka vuole uccidere tutti i Ragni, quindi lo aspetterà. Sa che nessun Ragno ha aggredito i custodi del magazzino dei Cha-R. Quando gli viene chiesto se Hisoka sia l’unico motivo per cui sono a bordo, risponde che sono anche ladri, ma Hisoka viene prima, e la Brigata non comincerà scontri inutili se non li comincia qualcun altro.',
        en: 'Franklin is eating alone in the Tier 5 dining hall when the Cha-R’s consigliere approaches. Franklin says he will not hunt [[hisoka|Hisoka]]: Hisoka plans to kill every Spider, so he will wait for him. He knows that no Spider attacked the Cha-R’s warehouse keepers. Asked whether Hisoka is the only reason they boarded, he answers that they are thieves too, but Hisoka comes first, and the Troupe will not start pointless fights unless someone else does.',
      },
    ),
  ],
  'shizuku': [
    told(
      377,
      { it: 'In squadra con il capo', en: 'Teaming up with the boss' },
      {
        it: 'Dopo che [[chrollo|Quoll]] lascia ai Ragni piena libertà per portargli la testa di [[hisoka|Hisoka]], Shizuku e [[bonolenov|Bonolenov]] chiedono di fare squadra con lui. Lei ammette che entrambi sono impotenti contro l’abilità di Hisoka, e propone di cercarlo travestita. Quando chiede a Quoll di leggere ancora il loro futuro, lui risponde che quell’abilità è sparita dal suo libro. Shizuku intuisce il motivo e conclude che il suo libro è come un “Death Note”.',
        en: 'After [[chrollo|Chrollo]] gives the Spiders a free hand to bring him [[hisoka|Hisoka]]’s head, Shizuku and [[bonolenov|Bonolenov]] ask to team up with him. She admits that both of them are powerless against Hisoka’s ability, and plans to search for him in disguise. When she asks Chrollo to read their fortunes again, he answers that the ability has vanished from his book. Shizuku guesses why and concludes that his book is like a “Death Note”.',
      },
    ),
  ],
  'bonolenov': [
    told(
      377,
      { it: 'Metamorfosi', en: 'Metamorphosis' },
      {
        it: 'Bonolenov e [[shizuku|Shizuku]] fanno squadra con [[chrollo|Quoll]] per trovare [[hisoka|Hisoka]], contro cui entrambi sono impotenti. Bonolenov rivela una nuova abilità che gli permette di trasformarsi in varie cose, ma non sa ancora usarla e chiede aiuto al capo. Quoll accetta e in cambio vuole che facciano qualcosa per lui. Quando Shizuku fantastica sul libro di Quoll, Bonolenov le consiglia di tenere certi pensieri per sé.',
        en: 'Bonolenov and [[shizuku|Shizuku]] team up with [[chrollo|Chrollo]] to find [[hisoka|Hisoka]], against whom both are powerless. Bonolenov reveals a new ability that lets him transform into various things, but he does not yet know how to use it and asks the boss for help. Chrollo agrees and in return wants them to do something for him. When Shizuku muses about Chrollo’s book, Bonolenov advises her to keep such thoughts to herself.',
      },
    ),
    told(
      405,
      { it: 'Il falso Hisoka', en: 'The fake Hisoka' },
      {
        it: 'Per ordine di [[chrollo|Quoll]], Bonolenov si è finto [[hisoka|Hisoka]], perché la mafia lo nascondesse ai livelli superiori e lasciasse quello vero alla Brigata. Quando un pugno di [[lynch-fullbokko|Lynch]] ha fatto confessare il travestimento alla sua voce interiore, lui l’ha stordita d’istinto, poi ha stordito [[zakuro-custard|Zakuro]] e ne ha preso l’aspetto per scoprire cosa sapesse lei. L’ha uccisa, ha preso il suo aspetto per ingannare Zakuro e ha condotto gli Xi-Yu al cinema, dove, di nuovo nei panni di Hisoka, ha stretto un accordo con [[hinrigh|Hinrigh]] per una stanza VVIP ai piani alti. Ora, nel casinò del primo livello, vede il vero Hisoka e si trasforma in [[owl|Civetta]]: la sua abilità copia le persone con cui ha parlato, per tanto tempo quanto ne ha passato con loro.',
        en: 'On [[chrollo|Chrollo]]’s orders, Bonolenov has posed as [[hisoka|Hisoka]], so that the Mafia would hide him on the upper tiers and leave the real one to the Troupe. When [[lynch-fullbokko|Lynch]]’s punch made his inner voice admit the disguise, he knocked her out by reflex, then knocked out [[zakuro-custard|Zakuro]] and took his form to learn what she knew. He killed her, took her form to fool Zakuro, and led the Xi-Yu to the cinema, where, as Hisoka again, he struck a deal with [[hinrigh|Hinrigh]] for a VVIP room upstairs. Now, in the Tier 1 casino, he spots the real Hisoka and turns into [[owl|Owl]]: his ability copies people he has talked to, for as long as he spent with them.',
      },
    ),
  ],
  'illumi': [
    told(
      377,
      { it: 'Il nuovo Ragno', en: 'The new Spider' },
      {
        it: 'Nella sala da pranzo del quinto livello [[chrollo|Quoll]] chiede al membro più recente della Brigata di presentarsi. Illumi dice di essere il primogenito degli Zoldick e fratello di [[killua|Killua]] e [[kalluto|Carte]], e che è stato [[hisoka|Hisoka]] a chiedergli di entrare. Lui e Hisoka sapevano che un giorno uno dei due avrebbe ucciso l’altro: Hisoka lo ha ingaggiato per uccidere se stesso, e Illumi riceverà la ricompensa se il contratto andrà a buon fine.',
        en: 'In the Tier 5 dining hall, [[chrollo|Chrollo]] asks the Troupe’s newest member to introduce himself. Illumi says he is the eldest son of the Zoldyck family and brother of [[killua|Killua]] and [[kalluto|Kalluto]], and that it was [[hisoka|Hisoka]] who asked him to join. He and Hisoka knew that one day one of them would kill the other: Hisoka hired Illumi to kill him, and Illumi gets his reward if the contract succeeds.',
      },
    ),
    told(
      380,
      { it: 'Un Hunter sul terzo livello', en: 'A Hunter on Tier 3' },
      {
        it: 'Durante il coprifuoco sul terzo livello, alcuni soldati trovano Illumi e [[kalluto|Carte]] e si chiedono perché un passeggero VVIP sia lì. [[mizaistom-nana|Mizaistom]] e [[botobai-gigante|Botobai]] intervengono e garantiscono per lui come Hunter. Quando Mizaistom gli chiede se la Brigata Fantasma sia a bordo, Illumi conferma che ci sono tutti i membri, tra la rabbia di Carte, e non dice altro. Mizaistom offre ai due un posto dove stare e li affida a [[ginta|Ginta]] e Botobai.',
        en: 'During the curfew on Tier 3, soldiers find Illumi and [[kalluto|Kalluto]] and wonder why a VVIP passenger is down there. [[mizaistom-nana|Mizaistom]] and [[botobai-gigante|Botobai]] step in and vouch for him as a Hunter. When Mizaistom asks whether the Phantom Troupe is aboard, Illumi confirms that every member is, to Kalluto’s anger, and says nothing more. Mizaistom offers the two a place to stay and leaves them with [[ginta|Ginta]] and Botobai.',
      },
    ),
  ],
  'uvogin': [
    told(
      397,
      { it: 'Fino alla morte', en: 'Until he dies' },
      {
        it: 'Anni prima, a Meteor City, Uborghin regna su una discarica che chiama il suo regno e si batte con [[franklin|Franklin]] per una cassetta rubata. Alla proiezione in chiesa le voci di [[chrollo|Quoll]] lo colpiscono più di qualsiasi pugno, e sogna di girare il mondo come il più grande dei cattivi. Quando [[sarasa|Sarasa]] viene uccisa, vuole partire per vendicarla. Quoll gli chiede di aspettare tre anni e di guidare la Brigata, ma Uborghin risponde che il capo è Quoll, e che lo seguirà fino alla morte.',
        en: 'Years earlier in Meteor City, Uvogin rules a rubbish heap he calls his kingdom and fights [[franklin|Franklin]] over a stolen tape. At the church screening, [[chrollo|Chrollo]]’s voices hit him harder than any punch, and he dreams of touring the world as the greatest villain. When [[sarasa|Sarasa]] is killed, he wants to leave to avenge her. Chrollo asks him to wait three years and to lead the Troupe, but Uvogin answers that Chrollo is the head, and that he will follow him until he dies.',
      },
    ),
  ],
  'pakunoda': [
    told(
      396,
      { it: 'Il fratellino', en: 'Her little brother' },
      {
        it: 'Anni prima, a Meteor City, Pakunoda trova [[chrollo|Quoll]] a studiare videocassette in chiesa e lo aiuta a doppiare un cartone: presta la voce alla Pink Cleaner e coinvolge [[sheila|Sheila]] e [[sarasa|Sarasa]]. Lo chiama il suo fratellino, anche se lui insiste di essere più grande. Prima della proiezione gli dice che le piace così com’è, un ragazzo che ogni giorno porta fiori alle tombe, e dietro le quinte loda il modo in cui ha dato la voce a tutti i personaggi maschili. Propone di chiamare il loro gruppo compagnia.',
        en: 'Years earlier in Meteor City, Pakunoda finds [[chrollo|Chrollo]] studying videotapes at the church and helps him dub a cartoon: she voices the Pink Cleaner and brings in [[sheila|Sheila]] and [[sarasa|Sarasa]]. She calls him her little brother, though he insists he is older. Before the screening she tells him she likes him just as he is, a boy who brings flowers to the graves every day, and backstage she praises how he voiced every male character. She suggests calling their group a troupe.',
      },
    ),
  ],
  'neon-nostrade': [
    told(
      377,
      { it: 'Una capacità scomparsa', en: 'A vanished ability' },
      {
        it: 'Sulla Black Whale [[shizuku|Shizuku]] chiede a [[chrollo|Quoll]] di leggere di nuovo il futuro dei Ragni, come faceva con l’abilità di predizione rubata a Neon a Yorknew. Quoll risponde che quell’abilità è sparita dal suo libro. Shizuku ne intuisce il motivo e paragona il libro a un “Death Note”, e Quoll non la smentisce. L’abilità scomparsa lascia intendere che Neon sia morta.',
        en: 'Aboard the Black Whale, [[shizuku|Shizuku]] asks [[chrollo|Chrollo]] to read the Spiders’ fortunes again, as he did with the fortune-telling ability he stole from Neon in Yorknew. Chrollo answers that the ability has vanished from his book. Shizuku guesses why and compares the book to a “Death Note”, and Chrollo does not deny it. The vanished ability implies that Neon is dead.',
      },
    ),
  ],
  // New in phase 5 (chapters 401–420).
  'makaha': [
    told(
      401,
      { it: 'La sorellastra di Longhi', en: 'Longhi’s half-sister' },
      {
        it: 'Makaha è una soldatessa di Cakin e la sorellastra di [[longhi|Longhi]]: come lei è figlia di [[beyond-netero|Beyond]], cresciuta da una coppia di ufficiali. Doveva servire [[camilla-hui-guo-rou|Camilla]], ma ha perso l’occasione quando Camilla ha preso degli emarginati come soldati personali. I suoi genitori, che le avevano sempre parlato con entusiasmo di unificare il mondo con Beyond, sono rimasti indifferenti alla sua delusione, e questo l’ha insospettita. Al servizio di [[duazul-hui-guo-rou|Duazul]] ha scoperto Longhi, e dopo la cerimonia dell’urna le due hanno notato un sigillo che hanno in comune con i loro fratelli. Un famoso esperto di Nen ha spiegato loro che è una maledizione, destinata a liberarsi alla loro morte.',
        en: 'Makaha is a Kakin soldier and [[longhi|Longhi]]’s half-sister: like her, she is a child of [[beyond-netero|Beyond]], raised by a couple of officers. She was meant to serve [[camilla-hui-guo-rou|Camilla]], but lost her chance when Camilla made outcasts her personal soldiers. Her parents, who had always talked eagerly of unifying the world with Beyond, were indifferent to her disappointment, and that made her suspicious. Serving under [[duazul-hui-guo-rou|Duazul]], she found Longhi, and after the urn ceremony the two noticed a seal they share with their siblings. A renowned Nen user told them that it is a curse, to be released when they die.',
      },
    ),
  ],
  'oito-hui-guo-rou': [
    told(
      401,
      {
        it: 'Solo i figli delle mogli legittime',
        en: 'Only the legal wives’ children',
      },
      {
        it: 'Oito è l’ottava regina di Cakin e la madre di [[woble-hui-guo-rou|Woble]]. Nella stanza 1014, dove [[kurapika|Kurapika]] la protegge, è presente quando [[longhi|Longhi]] rivela di essere figlia di [[beyond-netero|Beyond]] e sospetta che anche uno dei principi sia suo figlio. Quando Kurapika glielo chiede, Oito conferma con nervosismo che alla successione partecipano soltanto i figli delle mogli legittime del re. Vede la scappatoia, ma non riesce a crederci.',
        en: 'Oito is the Eighth Queen of Kakin and the mother of [[woble-hui-guo-rou|Woble]]. In Room 1014, where [[kurapika|Kurapika]] guards her, she is present when [[longhi|Longhi]] reveals that she is [[beyond-netero|Beyond]]’s daughter and suspects that one of the princes is his child too. When Kurapika asks her, Oito nervously confirms that only the children of the king’s legal wives may take part in the contest. She sees the loophole, but cannot believe it.',
      },
    ),
    told(
      412,
      { it: 'La catena non si muove', en: 'The chain does not move' },
      {
        it: 'Interrogata con la catena di [[kurapika|Kurapika]], dopo che [[bill|Bill]] ha notato che pronuncia il nome di [[woble-hui-guo-rou|Woble]] in due modi, Oito ammette che il bambino è il figlio di sua sorella minore. Sua figlia Woble, che ha partecipato alla cerimonia dell’urna, è con la sorella, e lei non sa dove. Nessuno dei due può partecipare; ha finto per paura di essere uccisa. La catena non si muove.',
        en: 'Questioned with [[kurapika|Kurapika]]’s chain after [[bill|Bill]] notices her saying [[woble-hui-guo-rou|Woble]]’s name both ways, Oito admits that the baby is her younger sister’s son. Her daughter Woble, who took part in the urn ceremony, is with her sister, and she does not know where. Neither child is eligible; she feigned taking part for fear of being killed. The chain does not move.',
      },
    ),
    told(
      415,
      { it: 'Una cartolina per la sorella', en: 'A postcard for her sister' },
      {
        it: 'Oito spiega a [[kurapika|Kurapika]] che un suo parente lavora in un ufficio postale a Yamato, da cui si può spedire una lettera in codice senza mittente. Con un servizio di consegne scrive in codice una cartolina alla sorella, e Kurapika le consiglia di non nominare persone né luoghi. Un soldato di [[benjamin-hui-guo-rou|Benjamin]] consegna le cartoline al fattorino senza controllarle. Venti minuti dopo la dichiarazione della legge marziale speciale, lo stesso soldato le comunica che Benjamin ha graziato il principe sostituto, ma che lei è in stato di fermo, con l’incriminazione rinviata finché non si troverà la vera [[woble-hui-guo-rou|Woble]]: non deve lasciare la camera.',
        en: 'Oito tells [[kurapika|Kurapika]] that a relative of hers works at a post office in Yamato, from where a coded letter can be sent without a return address. Through a delivery service she writes her sister a coded postcard, and Kurapika advises her to name no people or places. One of [[benjamin-hui-guo-rou|Benjamin]]’s soldiers hands the postcards to the deliveryman without inspecting them. Twenty minutes after special martial law is declared, the same soldier tells her that Benjamin has pardoned the stand-in prince, but that she is under detention, her indictment deferred until the real [[woble-hui-guo-rou|Woble]] is found: she must not leave the bedroom.',
      },
    ),
  ],
  'hashito': [
    told(
      404,
      { it: 'Le ipotesi di Hashito', en: 'Hashito’s guesses' },
      {
        it: 'Hashito è una delle guardie che [[zhang-lei-hui-guo-rou|Chowrai]] ha prestato alla stanza 1014, e la parte di [[woble-hui-guo-rou|Woble]] ha chiesto che lui e [[sakata|Sakata]] restino a tempo indeterminato. [[kurapika|Kurapika]] annuncia a loro e a un soldato di [[benjamin-hui-guo-rou|Benjamin]] che il secondo ciclo di lezioni di Nen comincia la mattina dopo, e che vi parteciperà anche una guardia di [[camilla-hui-guo-rou|Camilla]]. Sakata pensa che Camilla abbia voluto verificare le affermazioni di Kurapika, e Hashito elenca i possibili motivi: raccogliere informazioni, un assassinio o un’alleanza.',
        en: 'Hashito is one of the guards [[zhang-lei-hui-guo-rou|Zhang Lei]] lent to Room 1014, and [[woble-hui-guo-rou|Woble]]’s side has asked for him and [[sakata|Sakata]] to stay on indefinitely. [[kurapika|Kurapika]] tells them and one of [[benjamin-hui-guo-rou|Benjamin]]’s soldiers that the second round of Nen classes starts the next morning, and that one of [[camilla-hui-guo-rou|Camilla]]’s guards will join it. Sakata guesses that Camilla was checking Kurapika’s claims, and Hashito lists the possible reasons: gathering information, an assassination or an alliance.',
      },
    ),
  ],
  'sakata': [
    told(
      412,
      { it: 'La mossa di Slakka', en: 'Slakka’s move' },
      {
        it: 'Alla seconda lezione di Nen nella stanza 1014, Sakata osserva i partecipanti con [[kurapika|Kurapika]] e [[hashito|Hashito]]. Quando [[slakka|Slakka]] rivela di essere stato assegnato a [[zhang-lei-hui-guo-rou|Chowrai]] e chiede di unirsi al corso, Sakata fatica a nascondere la rabbia, temendo che divulghi informazioni e rovini il rapporto con Kurapika. Vedendo il sorriso di Slakka, capisce che la mossa era calcolata. Quando Kurapika si offre di condividere informazioni importanti sul Nen, Sakata lo interrompe. Due giorni prima era stato invitato, con un soldato di [[benjamin-hui-guo-rou|Benjamin]], ad assistere alle risposte di [[oito-hui-guo-rou|Oito]] alla catena di Kurapika.',
        en: 'At the second Nen class in Room 1014, Sakata watches the participants with [[kurapika|Kurapika]] and [[hashito|Hashito]]. When [[slakka|Slakka]] reveals that he was assigned to [[zhang-lei-hui-guo-rou|Zhang Lei]] and asks to join the class, Sakata struggles to hide his anger, fearing that he will hand out information and ruin their relationship with Kurapika. Seeing Slakka grin, he realises that the move was calculated. When Kurapika offers to share important information on Nen, Sakata cuts him off. Two days earlier, he had been invited with one of [[benjamin-hui-guo-rou|Benjamin]]’s soldiers to witness [[oito-hui-guo-rou|Oito]] answering Kurapika’s chain.',
      },
    ),
  ],
  'musse': [
    told(
      413,
      { it: 'La finestra segreta', en: 'The Secret Window' },
      {
        it: 'Musse era un soldato di [[benjamin-hui-guo-rou|Benjamin]], ucciso dall’abilità di [[camilla-hui-guo-rou|Camilla]]. Quando Benjamin chiede a [[kaiser|Kaiser]] se lo hanno trovato, Kaiser risponde che le ricerche al primo livello non hanno dato risultati. Ora Benjamin usa l’abilità di Musse, Secret Window, per osservare Camilla. Potenziata dal lungo uso, gli mostra anche ciò che Musse ha visto prima di morire, e così Benjamin sa che Camilla usa un Nen di contrattacco.',
        en: 'Musse was one of [[benjamin-hui-guo-rou|Benjamin]]’s soldiers, killed by [[camilla-hui-guo-rou|Camilla]]’s ability. When Benjamin asks [[kaiser|Kaiser]] whether he has been found, Kaiser answers that the search on Tier 1 has failed. Now Benjamin uses Musse’s ability, Secret Window, to watch Camilla. Levelled up by long use, it also shows him what Musse saw before he died, so Benjamin knows that Camilla is a counteractive-type Nen user.',
      },
    ),
  ],
  'balsamilco': [
    told(
      403,
      { it: 'La freccia nel corridoio', en: 'The arrow in the corridor' },
      {
        it: 'Balsamilco, capitano delle guardie di [[benjamin-hui-guo-rou|Benjamin]], nasconde in una scarpa una fiala di un’arma biologica militare mai riuscita, che uccide in mezza giornata senza lasciare tracce: vuole contagiare [[halkenburg-hui-guo-rou|Harkenburg]] mentre lo interroga al processo. In un corridoio dell’Ufficio di Giustizia, un soldato di Benjamin assegnato al principe gli comunica a gesti di aver scoperto il segreto della sua abilità. Poi una freccia d’aura attraversa il muro e lo colpisce: nel suo corpo ora c’è l’anima di Harkenburg. Parlando come Balsamilco, Harkenburg dice a Benjamin che la freccia lo ha mancato, e più tardi che la missione è compiuta.',
        en: 'Balsamilco, captain of [[benjamin-hui-guo-rou|Benjamin]]’s guards, hides in his shoe a vial of a failed military bioweapon that kills in half a day and leaves no trace, meaning to infect [[halkenburg-hui-guo-rou|Halkenburg]] while he cross-examines him at their trial. In a corridor of the Justice Bureau, one of Benjamin’s soldiers posted with the prince signs to him that he has found the secret of the prince’s ability. Then an arrow of aura flies through the wall and hits him: Halkenburg’s soul now possesses his body. Speaking as Balsamilco, Halkenburg tells Benjamin that the arrow missed, and later that the mission is complete.',
      },
    ),
    told(
      417,
      { it: 'Di nuovo se stesso', en: 'Himself again' },
      {
        it: 'Balsamilco viene trovato privo di sensi nella stanza 1009, viene messo in sicurezza e si risveglia come se stesso; la sua identità viene verificata. [[benjamin-hui-guo-rou|Benjamin]] conclude che [[halkenburg-hui-guo-rou|Harkenburg]] è riuscito in qualche modo a lasciare il suo corpo. Balsamilco chiede di restare sotto sorveglianza, incerto sugli effetti dell’attacco. Con il Gyo vede le condizioni di Benjamin: maledetto dagli emarginati di [[camilla-hui-guo-rou|Camilla]], contagiato con mezza giornata da vivere, e forse bersaglio della maledizione di [[beyond-netero|Beyond]] su [[furykov|Furykov]]. Ricordato che serve nella prima unità dell’esercito reale, riprende le armi e si offre di cercare i seguaci di Harkenburg dalle piume sul dorso delle mani.',
        en: 'Balsamilco is found unconscious in Room 1009, secured, and wakes up as himself; his identity is verified. [[benjamin-hui-guo-rou|Benjamin]] concludes that [[halkenburg-hui-guo-rou|Halkenburg]] has somehow left his body. Balsamilco asks to be kept under guard, unsure of the attack’s effects. With Gyo he sees Benjamin’s condition: cursed by [[camilla-hui-guo-rou|Camilla]]’s outcasts, infected with half a day to live, and perhaps the target of [[beyond-netero|Beyond]]’s curse on [[furykov|Furykov]]. Reminded that he serves in the Royal Army’s first unit, he takes up arms, and offers to find Halkenburg’s followers by the feathers on the backs of their hands.',
      },
    ),
  ],
  'worio-bay': [
    told(
      403,
      { it: 'Il messaggio di Harkenburg', en: 'Halkenburg’s message' },
      {
        it: 'Worio Bay, un impiegato dell’Ufficio di Giustizia, è svenuto durante le visite a [[halkenburg-hui-guo-rou|Harkenburg]], in un momento e in un luogo diversi dai sostenitori del principe. [[kaiser|Kaiser]] lo interroga nel suo alloggio, spiegandogli che i principi usano poteri sovrannaturali e che lui sostiene Harkenburg finché [[fugetsu-hui-guo-rou|Fugetsu]] è al sicuro. Worio gli mostra un segno a forma di piuma sul dorso della mano sinistra: Harkenburg gli ha detto di raccontare tutto a Kaiser se fosse stato lui a parlare del Nen, perché si aspettava la sua visita. Poi gli dice che Harkenburg morirà presto.',
        en: 'Worio Bay, a Justice Bureau staff member, passed out during the visits to [[halkenburg-hui-guo-rou|Halkenburg]], at a different time and place from the prince’s supporters. [[kaiser|Kaiser]] questions him in his quarters, explaining that the princes use supernatural abilities and that he supports Halkenburg as long as [[fugetsu-hui-guo-rou|Fugetsu]] is safe. Worio shows him a feather-shaped mark on the back of his left hand: Halkenburg told him to tell Kaiser everything if Kaiser raised Nen himself, since he expected him to come. Then Worio tells Kaiser that Halkenburg is going to die soon.',
      },
    ),
  ],
  'vict': [
    told(
      404,
      { it: 'Il primo esperimento', en: 'The earlier test' },
      {
        it: 'Vict è un soldato di [[benjamin-hui-guo-rou|Benjamin]] assegnato a [[halkenburg-hui-guo-rou|Harkenburg]]. In un corridoio dell’Ufficio di Giustizia compare alle spalle di [[balsamilco|Balsamilco]] e gli comunica con il linguaggio dei segni militare di aver scoperto il segreto dell’abilità del principe, poco prima che la freccia di Harkenburg venga scoccata. Più tardi Harkenburg rivela che i suoi avevano già fatto un esperimento su Vict, e che per questo era pronto anche all’ipotesi di finire lui stesso nel corpo di Balsamilco.',
        en: 'Vict is one of [[benjamin-hui-guo-rou|Benjamin]]’s soldiers, posted with [[halkenburg-hui-guo-rou|Halkenburg]]. In a corridor of the Justice Bureau he appears behind [[balsamilco|Balsamilco]] and tells him in military sign language that he has found the secret of the prince’s ability, just before Halkenburg’s arrow is fired. Halkenburg later reveals that his side had already experimented on Vict, which is why he was ready even for the chance of ending up in Balsamilco’s body himself.',
      },
    ),
  ],
  'shikaku': [
    told(
      404,
      { it: 'La prova con Sumidori', en: 'The test with Sumidori' },
      {
        it: 'Shikaku è il soldato che [[benjamin-hui-guo-rou|Benjamin]] ha assegnato a [[halkenburg-hui-guo-rou|Harkenburg]] con l’ordine di ucciderlo. La freccia del principe lo ha colpito, e da allora il suo corpo è stato mosso dalla mente di [[sumidori|Sumidori]], uno degli uomini di Harkenburg, finché si è sparato davanti agli alloggi di [[luzurus-hui-guo-rou|Loozlus]]. Ora Harkenburg spiega cosa ha dimostrato quella prova. Dopo lo sparo il corpo di Sumidori si è svegliato e ha recitato il numero di matricola di Shikaku: dentro c’era la mente di Shikaku, rimasta addormentata. Solo una delle due menti scambiate può essere sveglia alla volta, e di solito ha la precedenza quella dei suoi.',
        en: 'Shikaku is the soldier [[benjamin-hui-guo-rou|Benjamin]] posted with [[halkenburg-hui-guo-rou|Halkenburg]] and ordered to kill him. The prince’s arrow struck him, and from then on his body was moved by the mind of [[sumidori|Sumidori]], one of Halkenburg’s men, until it shot itself outside [[luzurus-hui-guo-rou|Luzurus]]’s quarters. Now Halkenburg explains what that test proved. After the shot, Sumidori’s body woke up and recited Shikaku’s service number: Shikaku’s mind had been asleep inside it. Only one of two swapped minds can be awake at a time, and his own side’s generally comes first.',
      },
    ),
  ],
  'sumidori': [
    told(
      404,
      { it: 'Nel corpo di Shikaku', en: 'In Shikaku’s body' },
      {
        it: 'Sumidori è uno degli uomini di [[halkenburg-hui-guo-rou|Harkenburg]]. Quando la freccia del principe ha colpito [[shikaku|Shikaku]], la mente di Sumidori ha preso il controllo del corpo del soldato, mentre il suo corpo sembrava addormentato. Ora Harkenburg dice che l’esperimento con Shikaku e Sumidori ha confermato la sua ipotesi: dopo lo sparo il corpo di Sumidori si è svegliato e ha recitato il numero di matricola di Shikaku, perché dentro c’era la mente di Shikaku, rimasta addormentata. Solo una delle due menti scambiate può essere sveglia alla volta: finché la mente di Sumidori è cosciente, quella di Shikaku non può svegliarsi.',
        en: 'Sumidori is one of [[halkenburg-hui-guo-rou|Halkenburg]]’s men. When the prince’s arrow struck [[shikaku|Shikaku]], Sumidori’s mind took over the soldier’s body, while his own body seemed to sleep. Now Halkenburg says that the experiment with Shikaku and Sumidori proved his hypothesis: after the shot, Sumidori’s body woke up and recited Shikaku’s service number, because Shikaku’s mind had been asleep inside it. Only one of two swapped minds can be awake at a time: while Sumidori’s mind is conscious, Shikaku’s cannot wake.',
      },
    ),
  ],
  'cleapatro': [
    told(
      412,
      { it: 'Le cause di Beyond', en: 'Beyond’s lawsuits' },
      {
        it: 'Cleapatro presiede la Corte suprema della nave. Dopo la morte di [[halkenburg-hui-guo-rou|Harkenburg]], [[benjamin-hui-guo-rou|Benjamin]] ordina di farle sapere che tutte le accuse contro il principe vengono ritirate. Più tardi lei visita la cella di [[beyond-netero|Beyond]] al primo livello con alcuni funzionari dell’Ufficio di Giustizia e una pila di scatoloni, e gli comunica che tutte le 1.047 cause che ha intentato sono state respinte. [[kanzai|Kanzai]] e [[saiyu|Saiyu]] non li lasciano soli. Lei e Beyond discutono della visione dei diritti umani di Cakin, e lei si lamenta che le fa perdere tempo.',
        en: 'Cleapatro is the ship’s Supreme Magistrate. After [[halkenburg-hui-guo-rou|Halkenburg]]’s death, [[benjamin-hui-guo-rou|Benjamin]] orders that she be told that all charges against the prince are dropped. Later she visits [[beyond-netero|Beyond]]’s cell on Tier 1 with Justice Bureau officials and a stack of boxes, and tells him that all 1,047 of his lawsuits have been thrown out. [[kanzai|Kanzai]] and [[saiyu|Saiyu]] refuse to leave them alone. She and Beyond argue over Kakin’s view of human rights, and she complains that he is wasting her time.',
      },
    ),
  ],
  'hinrigh': [
    told(
      406,
      { it: 'Vendicare Lynch', en: 'Avenging Lynch' },
      {
        it: 'Hinrigh, il vicecapo degli Xi-Yu, guida la ricerca di [[hisoka|Hisoka]] per la sua famiglia. Tra la folla del funerale di [[halkenburg-hui-guo-rou|Harkenburg]], dei soldati mostrano a lui e a [[zakuro-custard|Zakuro]] il corpo di [[lynch-fullbokko|Lynch]], con il collo spezzato da un professionista. Hinrigh dà del denaro al soldato e porta via il corpo. Interrogando Zakuro capisce che la vera Lynch era già morta e che la Lynch che lo ha svegliato era qualcun altro: lei aveva scoperto che quell’Hisoka era falso, e Zakuro è stato risparmiato perché riferisse che Hisoka era lì. Giurano di vendicarla, chiunque sia il colpevole. Intanto il trasmettitore che Hinrigh ha nascosto come ostrica nel covo degli Heil-Ly torna a essere un trasmettitore.',
        en: 'Hinrigh, the Xi-Yu underboss, leads his family’s search for [[hisoka|Hisoka]]. Among the crowd for [[halkenburg-hui-guo-rou|Halkenburg]]’s funeral, soldiers show him and [[zakuro-custard|Zakuro]] the body of [[lynch-fullbokko|Lynch]], her neck broken by a professional. Hinrigh tips the soldier and takes the body. Questioning Zakuro, he works out that the real Lynch was already dead and that the Lynch who woke Zakuro was someone else: she had found out that this Hisoka was a fake, and Zakuro was spared to report that Hisoka was there. They vow to avenge her, whoever the killer is. Meanwhile the transmitter Hinrigh hid as an oyster in the Heil-Ly hideout turns back into a transmitter.',
      },
    ),
  ],
  'morena': [
    told(
      405,
      { it: 'L’inizio della fine', en: 'The beginning of the end' },
      {
        it: 'Morena è la giovane capa degli Heil-Ly; i Cha-R la descrivono come una discendente reale senza diritti di successione. In un covo segreto al secondo livello viene a sapere che il corteo funebre di [[halkenburg-hui-guo-rou|Harkenburg]] attirerà la folla: un’occasione perfetta. Un membro degli Heil-Ly che ora fiuta i tipi di Nen cercherà tra la gente le persone che vogliono, con [[sodom|Sodom]] al suo fianco per rapirle. Se le troverà, dice lei, avranno via libera, e sarà l’inizio della fine. Intanto [[tevelares|Tevelares]], [[daemon|Daemon]] e [[quorolle|Quorolle]] salgono di livello nella zona di trattamento, tra mucchi di cadaveri, prima di dare la caccia ai mafiosi.',
        en: 'Morena is the young head of the Heil-Ly; the Cha-R describe her as a royal descendant without succession rights. In a secret hideout on Tier 2 she hears that [[halkenburg-hui-guo-rou|Halkenburg]]’s funeral procession will draw a crowd, a perfect opportunity. A Heil-Ly member who can now sniff out Nen types will look in the crowd for the people they want, with [[sodom|Sodom]] at his side to kidnap them. If he finds them, she says, they have a green light, and it is the beginning of the end. Meanwhile [[tevelares|Tevelares]], [[daemon|Daemon]] and [[quorolle|Quorolle]] level up in the processing area, among piles of corpses, before hunting Mafia members.',
      },
    ),
    told(
      408,
      { it: 'Un’orfana del carnevale', en: 'A carnival orphan' },
      {
        it: 'Con la carta dello scopo, [[borksen|Borksen]] sente l’obiettivo di Morena: distruggere l’impero di Cakin, e poi l’umanità intera. Morena non è la vera Morena Prudo, sepolta in una tomba con il suo nome, ma un’orfana del carnevale: sua madre fu costretta a “intrattenere” i reali durante una festa segreta e morì quando Morena aveva due anni. Cresciuta in un istituto della tratta gestita dagli Heil-Ly, è stata classificata come “carne” e ha vissuto così per una ventina d’anni, finché è diventata capa. La sua abilità dà il Nen a un massimo di ventidue seguaci che condividono il suo obiettivo; lei è una Specializzatrice, come Borksen, e un membro che fiuta i tipi di Nen ne cerca altri a bordo.',
        en: 'With the Aim card, [[borksen|Borksen]] hears Morena’s goal: to destroy the Kakin Empire, then all of humanity. Morena is not the real Morena Prudo, who lies in a grave under her name, but a carnival orphan: her mother was forced to “entertain” royals during a secret feast and died when Morena was two. Raised in an institution of a trafficking ring run by the Heil-Ly, she was sorted as “flesh” and lived that way for about twenty years, until she became boss. Her ability gives Nen to up to twenty-two followers who share her goal; she is a Specialist, as Borksen is, and a member who sniffs out Nen types is looking for others aboard.',
      },
    ),
    told(
      410,
      { it: 'Le tre condizioni', en: 'The three conditions' },
      {
        it: 'Morena spiega a [[borksen|Borksen]] le tre condizioni per entrare: la partita deve finire con il Sì, un bacio che le trasmette la sua abilità e assistere a un omicidio commesso da un membro degli Heil-Ly. Rispondendo alle sue domande ammette che il covo è tra il secondo e il terzo livello e che la famiglia conta ventuno membri. Quando Borksen segna una carta per vincere, l’abilità di Morena, attivata dall’imbroglio, le lascia solo il Sì o il No; Borksen sceglie il Sì ed entra negli Heil-Ly al livello 0. Da quel momento Morena conosce sempre il suo livello, i suoi punti e dove si trova.',
        en: 'Morena tells [[borksen|Borksen]] the three conditions for joining: the game ends on Yes, a kiss that passes on her ability, and witnessing a murder by a Heil-Ly member. Answering her questions, she admits that the hideout lies between Tiers 2 and 3 and that the family has twenty-one members. When Borksen marks a card to win, Morena’s ability, triggered by the cheat, leaves her only Yes or No; Borksen chooses Yes and joins the Heil-Ly at level 0. From then on Morena always knows her level, her points and where she is.',
      },
    ),
  ],
  'risnorth': [
    told(
      405,
      { it: 'Dieci anni dall’omicidio', en: 'Ten years since the murder' },
      {
        it: 'Risnorth era il presidente di Mom’s Help, una fondazione benefica per l’infanzia. Su un grande schermo della Black Whale, un programma ricorda i dieci anni dal suo omicidio: nessun sospettato è mai stato arrestato, e il conduttore parla di una crescente protesta pubblica perché l’assassino venga identificato e arrestato. Mentre intorno qualcuno mette in dubbio il servizio, [[chrollo|Quoll]] si allontana dallo schermo, dandogli le spalle.',
        en: 'Risnorth was the chairman of Mom’s Help, a charity foundation for children. On a large screen aboard the Black Whale, a programme marks ten years since his murder: no suspect has ever been caught, and the presenter speaks of a growing public outcry for the killer to be identified and arrested. As people around question the report, [[chrollo|Chrollo]] walks away from the screen with his back to it.',
      },
    ),
  ],
  'onior': [
    told(
      417,
      { it: 'Il capo degli Xi-Yu', en: 'The Xi-Yu boss' },
      {
        it: 'Onior è il capo degli Xi-Yu, un fratellastro illegittimo del re. Quando [[zhang-lei-hui-guo-rou|Chowrai]] lo aveva visitato, non sapeva nulla del Nen né delle bestie, e aveva promesso di chiedere ai membri più giovani della famiglia. Poco prima della legge marziale speciale Chowrai scende al secondo livello attraverso un ponte che parte dall’interno della sua residenza. Sotto la legge marziale, i soldati prendono in custodia i capi degli Xi-Yu e dei Cha-R e li portano all’Ufficio di Giustizia.',
        en: 'Onior is the boss of the Xi-Yu, an illegitimate half-brother of the king. When [[zhang-lei-hui-guo-rou|Zhang Lei]] visited him, he knew nothing of Nen or the beasts, and promised to ask the younger members of his family. Just before special martial law, Zhang Lei goes down to Tier 2 over a bridge from inside his residence. Under martial law, soldiers secure the bosses of the Xi-Yu and the Cha-R and take them to the Justice Bureau.',
      },
    ),
  ],
  'kako': [
    told(
      411,
      { it: 'Al posto della capitana', en: 'Taking over for the captain' },
      {
        it: 'Kako è una delle guardie di [[camilla-hui-guo-rou|Camilla]]. Nella stanza di Camilla nell’area VVIP, la capitana delle guardie si trucca e indossa parrucca e divisa da cameriera per seguire inosservata la lezione di Nen di [[kurapika|Kurapika]]. Dice a [[fukataki|Fukataki]] che deve scoprire se c’è un esorcista, e che con un po’ di fortuna potrebbe uccidere [[woble-hui-guo-rou|Woble]] sul posto, o in una settimana se non riesce a vederla. Prima di uscire chiede a Fukataki di far prendere a Kako il suo posto.',
        en: 'Kako is one of [[camilla-hui-guo-rou|Camilla]]’s guards. In Camilla’s room in the VVIP area, the captain of the guards puts on make-up, a wig and a maid’s outfit to attend [[kurapika|Kurapika]]’s Nen class unnoticed. She tells [[fukataki|Fukataki]] that she must find out whether there is an exorcist, and that with luck she could kill [[woble-hui-guo-rou|Woble]] on the spot, or within a week if she cannot see her. Before leaving, she asks Fukataki to have Kako take over for her.',
      },
    ),
  ],
  'bill': [
    told(
      412,
      { it: 'Due pronunce', en: 'Two pronunciations' },
      {
        it: 'Bill è un Hunter che protegge la stanza 1014 con [[kurapika|Kurapika]]. Era presente quando [[longhi|Longhi]] ha rivelato la maledizione, e ha ipotizzato che [[beyond-netero|Beyond]] ne controlli l’attivazione o la lasci scattare da sola come limite. Quando [[shimanu|Shimanu]] corregge Kurapika sulla pronuncia del suo nome, Bill gli spiega la differenza tra nomi maschili e femminili in lingua di Cakin. Poi gli sussurra ciò che ha notato: da quando sono salpati, proprio quando Kurapika ha usato per la prima volta la catena, [[oito-hui-guo-rou|Oito]] pronuncia il nome di [[woble-hui-guo-rou|Woble]] in entrambi i modi.',
        en: 'Bill is a Hunter who guards Room 1014 with [[kurapika|Kurapika]]. He was present when [[longhi|Longhi]] revealed the curse, and suggested that [[beyond-netero|Beyond]] either controls its activation or lets it trigger on its own as a limitation. When [[shimanu|Shimanu]] corrects Kurapika’s pronunciation of her name, Bill explains the Kakin language’s masculine and feminine names to him. Then he whispers what he has noticed: since they set sail, right when Kurapika first used his chain, [[oito-hui-guo-rou|Oito]] has been saying [[woble-hui-guo-rou|Woble]]’s name both ways.',
      },
    ),
    told(
      414,
      { it: 'Una trappola per Beyond', en: 'A trap for Beyond' },
      {
        it: 'Bill concorda che trattare con [[beyond-netero|Beyond]] sia il modo più realistico per capire come funziona la sua maledizione, e propone di intrappolarlo con un contratto grazie all’abilità di [[longhi|Longhi]], in cambio di una grazia dell’Associazione Hunter. Quando [[kurapika|Kurapika]] gli chiede perché, visto che dovrebbe stare dalla parte di Beyond, Bill risponde che dopo aver sentito dei suoi piani non gli è più fedele: ora vuole proteggere la regina e il principe, e pensa di fermare la successione, con tutta l’Associazione unita contro la maledizione.',
        en: 'Bill agrees that negotiating with [[beyond-netero|Beyond]] is the most realistic way to learn how his curse works, and proposes trapping him in a contract through [[longhi|Longhi]]’s ability, in exchange for a pardon from the Hunter Association. When [[kurapika|Kurapika]] asks why, since he was meant to be on Beyond’s side, Bill answers that after hearing about his plans he is no longer loyal to him: he now wants to protect the queen and the prince, and has been thinking of stopping the contest, with the whole Association united against the curse.',
      },
    ),
  ],
  'shimanu': [
    told(
      414,
      { it: 'Il primo cambio di pannolino', en: 'The first nappy change' },
      {
        it: 'Shimanu è la domestica della regina [[oito-hui-guo-rou|Oito]]. Due giorni prima della legge marziale corregge [[kurapika|Kurapika]], che continua a chiamarla Shimano, un nome maschile. Nella camera della stanza 1014 rivela di aver scoperto che il bambino era un maschio la prima volta che gli ha cambiato il pannolino, quando Oito e Kurapika erano svenuti insieme; confusa, ha deciso comunque di continuare a prendersi cura di madre e figlio, e ora chiede cosa ne sarà del bambino. Kurapika le aveva già chiesto di restare con Oito e il piccolo prima che con le faccende.',
        en: 'Shimanu is Queen [[oito-hui-guo-rou|Oito]]’s maid. Two days before martial law she corrects [[kurapika|Kurapika]], who keeps calling her Shimano, a masculine name. In the bedroom of Room 1014 she reveals that she found out the baby was a boy the first time she changed his nappy, when Oito and Kurapika had fainted together; flustered, she still chose to keep looking after mother and child, and now asks what will become of the baby. Kurapika had already asked her to stay with Oito and the baby before housekeeping.',
      },
    ),
  ],
  'rihan': [
    told(
      415,
      { it: 'Ordini nella stanza 1005', en: 'Orders in Room 1005' },
      {
        it: 'Rihan è un soldato di [[benjamin-hui-guo-rou|Benjamin]] assegnato a [[tubeppa-hui-guo-rou|Tsubeppa]]; il decimo giorno ha visto la bestia del principe comparire subito dopo l’alleanza con la parte di [[woble-hui-guo-rou|Woble]] e l’ha ritenuta di tipo condizionale. Quando viene dichiarata la legge marziale speciale, ordina al personale della stanza 1005 di restare in attesa, punta la pistola alla testa di uno scienziato che scherza e dice a Tsubeppa di andare nella stanza 1001 solo con guardie dell’esercito reale. Annuncia una tregua temporanea e nota che la bestia non si è mossa, forse perché [[kurapika|Kurapika]] non le è accanto.',
        en: 'Rihan is one of [[benjamin-hui-guo-rou|Benjamin]]’s soldiers, posted with [[tubeppa-hui-guo-rou|Tubeppa]]; on the tenth day he saw her beast appear right after her alliance with [[woble-hui-guo-rou|Woble]]’s side and guessed it was a conditional type. When special martial law is declared, he orders the staff of Room 1005 to stand by, presses his gun to the head of a scientist who jokes, and tells Tubeppa to go to Room 1001 with Royal Army guards only. He announces a temporary ceasefire, and notes that her beast has not moved, perhaps because [[kurapika|Kurapika]] is not beside her.',
      },
    ),
  ],
  'saquelle': [
    told(
      415,
      { it: 'L’aura che cambia', en: 'A change in his aura' },
      {
        it: 'Saquelle è un soldato di [[benjamin-hui-guo-rou|Benjamin]] assegnato a [[marayam-hui-guo-rou|Marayam]]: Benjamin non sa dove sia il principe e lascia la questione a lui. Un quarto d’ora prima della legge marziale speciale, nella stanza 1013, Saquelle riceve degli ordini alla radio. [[biscuit-krueger|Biscuit]] nota il cambiamento nella sua aura e intuisce che la legge marziale sta per essere dichiarata.',
        en: 'Saquelle is one of [[benjamin-hui-guo-rou|Benjamin]]’s soldiers, posted with [[marayam-hui-guo-rou|Marayam]]: Benjamin does not know where the prince is and leaves the matter to him. Fifteen minutes before special martial law, in Room 1013, Saquelle acknowledges orders over his radio. [[biscuit-krueger|Biscuit]] notices the change in his aura and guesses that martial law is about to be declared.',
      },
    ),
  ],
  'kanjidol': [
    told(
      415,
      { it: 'Prima della legge marziale', en: 'Before martial law' },
      {
        it: 'Kanjidol è un soldato di [[benjamin-hui-guo-rou|Benjamin]] assegnato a [[luzurus-hui-guo-rou|Loozlus]]. Un quarto d’ora prima della legge marziale speciale estrae un coltello e uccide due guardie del principe che dormono negli alloggi della servitù, eccitato all’idea di uccidere senza dover pensare. Quando una guardia Hunter di Loozlus lo trova chino su un corpo, Kanjidol dice di essersi difeso, e i due si lanciano l’uno contro l’altro. Alla dichiarazione della legge marziale Kanjidol è seduto, legato e pieno di lividi, e sorride: i dettagli si possono aggiustare a suo favore.',
        en: 'Kanjidol is one of [[benjamin-hui-guo-rou|Benjamin]]’s soldiers, posted with [[luzurus-hui-guo-rou|Luzurus]]. Fifteen minutes before special martial law he pulls out a knife and kills two of the prince’s guards asleep in the servants’ quarters, excited at the thought of killing without having to think. When a Hunter guarding Luzurus finds him over a body, Kanjidol claims self-defence, and the two leap at each other. When martial law is declared, Kanjidol sits bound and bruised, smirking: the details can be twisted in his favour.',
      },
    ),
  ],
  'coventoba': [
    told(
      417,
      { it: 'Una moneta da 10', en: 'A coin worth 10' },
      {
        it: 'Coventoba è un soldato di [[benjamin-hui-guo-rou|Benjamin]] assegnato a [[zhang-lei-hui-guo-rou|Chowrai]]; [[kurapika|Kurapika]] sospettava che avesse nascosto la moneta del primo giorno. Alla dichiarazione della legge marziale speciale va nel panico nella stanza 1003, chiedendosi se sia colpa della moneta del principe. Un soldato riferisce a Benjamin che la bestia di Chowrai lo ha manipolato e che ha chiesto di essere trattenuto, ma Benjamin rifiuta. Con il Gyo, Coventoba vede le condizioni di Benjamin e riprende le armi con lui, gli spiega cosa possono fare le monete arrivate a 10, e gli viene detto di tenere la sua.',
        en: 'Coventoba is one of [[benjamin-hui-guo-rou|Benjamin]]’s soldiers, posted with [[zhang-lei-hui-guo-rou|Zhang Lei]]; [[kurapika|Kurapika]] suspected him of hiding the coin of the first day. When special martial law is declared he panics in Room 1003, wondering whether holding the prince’s coin has caused his situation. A soldier reports to Benjamin that Zhang Lei’s beast manipulated him and that he asked to be detained, but Benjamin refuses. With Gyo, Coventoba sees Benjamin’s condition and takes up arms with him, tells him what the coins can do at 10, and is told to keep his.',
      },
    ),
  ],
} satisfies Record<string, Timeline<Story>>
