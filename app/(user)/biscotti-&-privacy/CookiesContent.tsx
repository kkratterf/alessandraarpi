'use client';

// Import core
// Import third parts
import { motion } from 'framer-motion';
// Import customs
import PageContainer from '../../../components/PageContainer';

function CookiesContent() {
  return (
    <motion.section
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0 }}
      className="relative z-40"
    >
      <PageContainer>
        <h1 className="font-bold text-4xl pb-6">Biscotti & Privacy</h1>
        <div className="relative z-40 text-lg cursor-default space-y-4 text-black">
          <div className="space-y-2">
            <h6 className="text-xl font-bold">
              0.1 - Di cosa parla questa pagina?
            </h6>
            <p>
              Questa pagina è pensata per dirti quali dati raccolgo, perché lo
              faccio e come puoi aggiornare, gestire, esportare ed eliminare le
              informazioni che ti riguardano. Ecco come mi prendo cura della tua
              privacy, nel rispetto del d. lgs. 196/2003 e del GDPR (Reg. UE
              679/2016).
            </p>
          </div>
          <div className="space-y-2">
            <h6 className="text-xl font-bold">
              0.2 - Il mio ruolo – Titolare del trattamento
            </h6>
            <p>
              I dati che raccolgo attraverso questo sito web sono trattati da
              me, <b>Alessandra Arpi, p. Iva IT01702610096</b>, con sede a
              Genova, in via Ausonia 2, e sono titolare del trattamento dei dati
              che vengono raccolti dal mio sito web{' '}
              <a
                href="www.alessandraarpi.it"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-2 text-red"
              >
                www.alessandraarpi.it
              </a>
            </p>
            <p>
              Nel caso volessi maggiori informazioni rispetto a quelle che
              troverai in questa privacy policy, puoi contattarmi al seguente
              indirizzo e-mail: 
              <a
                href="mailto:ciao@alessandraarpi.it?subject=Say Una mail al volo!"
                className="underline underline-offset-2 text-red"
              >
                ciao@alessandraarpi.it
              </a>
            </p>
          </div>
          <div className="space-y-2">
            <h6 className="text-xl font-bold">
              1 - Quali informazioni raccolgo e che dati tratto?
            </h6>
            <p>
              Il mio sito web è pensato come un contenitore. Raccolgo storie,
              suggerimenti, “caramelle” e tanti altri contenuti che voglio
              condividere con te che leggi. Per farlo, ho bisogno di{' '}
              <b>raccogliere alcune informazioni e trattare alcuni dati</b>.
              <br /> Ecco quali. <br />
              <b>Tratto i dati di contatto</b>: sono quelli che tu mi fornisci
              compilando il form dedicato ai contatti, iscrivendoti alla
              newsletter, scaricando le guide che ti metto a disposizione,
              iscrivendoti a corsi e webinar, prenotando consulenze online, o
              facendo operazioni analoghe.
              <br /> Si tratta di dati come <b>nome, cognome e e-mail</b> che mi
              permettono di rispondere alle tue richieste di informazioni o di
              inoltrarti la newsletter periodica <b>Caramelle</b>, appunto.
              <br /> In mancanza di questi dati non posso rispondere alle tue
              domande, inserirti nella mia mailing list e darti i prodotti e i
              servizi che mi hai richiesto.
              <br /> Il canale principale grazie al quale raccolgo questi dati è
              la mia <b>mailing list</b>. Si tratta dei contatti interessati a
              ricevere periodicamente i contenuti, le storie e le “caramelle”
              che voglio condividere perché penso siano utili e coinvolgenti.
              Scrivere contenuti interessanti, però, non basta. Per far
              funzionare al meglio la mailng list occorre uno strumento che
              gestisca da un lato i contenuti da mandare e dall’altro le persone
              interessate a riceverli.
              <br />
              In questo mi aiuta <b>Substack</b>: ti spiego meglio come funziona
              passo passo. Nel momento in cui decidi di iscriverti alla mia
              newsletter, <b>Caramelle</b>, ti chiedo di indicarmi i tuoi dati
              di contatto che mi servono per personalizzare la comunicazione.
              <br /> Fatto questo, <b>Substack</b> inoltra al mio account i tuoi
              dati, la data e l’ora di registrazione e il metodo che hai usato
              per iscriverti, insieme al tuo consenso ad usare la tua e-mail per
              la pubblicità su Facebook (di cui ti dico più avanti).
              <br /> E poi?
              <br /> A questo punto i tuoi dati di contatto sono inseriti nella
              mailing list che è la mia cartina tornasole dei contatti
              interessati a ciò che scrivo. Così posso inoltrarti periodicamente
              pochi contenuti scelti con cura.
              <br /> Avere a disposizione il tuo indirizzo mail mi consente di
              bussare alla tua casella di posta ogni volta che ho una novità per
              te, una storia da raccontarti o uno spunto da condividere.
            </p>
          </div>
          <div className="space-y-2">
            <h6 className="text-xl font-bold">
              1.1 - Quali informazioni gestisce Substack?
            </h6>
            <p>
              Sul mio server <b>Substack</b> conserva tue informazioni come
              nome, cognome, indirizzo e-mail e indirizzo IP.
              <br /> Queste informazioni sono conservate da Substack sui suoi
              server, ma per sicurezza anch’io ne conservo un <b>backup</b>{' '}
              giornaliero in formato Excel che tengo in un luogo sicuro, al
              riparo da occhi indiscreti.
              <br /> Per completezza, ecco la privacy policy di{' '}
              <a
                href="https://substack.com/privacy#:~:text=These%20cookies%20collect%20information%20on,individual%20identity%20can%20be%20established."
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-2 text-red"
              >
                Substack
              </a>
              :
              <br /> <b>Chi può accedere a questi dati?</b>
              <br /> In questo momento solo io, <b>Alessandra Arpi</b>, ho
              accesso al mio account Substack, per questo nessun altro può
              vedere le informazioni che lì sono contenute.
              <br /> <b>Come cancellare questi dati?</b>
              <br /> Se non vuoi più ricevere la mia newsletter, puoi
              cancellarti in ogni momento. Per farlo, ti è sufficiente cliccare
              sul footer che trovi in ogni mail.
              <br /> Se invece vuoi la cancellazione di tutti i dati dal server
              di Substack, scrivimi sempre a:{' '}
              <a
                href="mailto:ciao@alessandraarpi.it?subject=Say Una mail al volo!"
                className="underline underline-offset-2 text-red"
              >
                alessandra.arpi@gmail.com
              </a>
            </p>
          </div>
          <div className="space-y-2">
            <h6 className="text-xl font-bold">
              1.2 Quali sono i dati di utilizzo essenziali?
            </h6>
            <p>
              Tornado alle informazioni che raccolgo ci sono anche i dati di
              utilizzo essenziali, ossia solo quelli che mi consentono di
              sapere, in forma anonima e a scopo statistico, cosa funziona e
              cosa no sul mio sito. Ecco allora che per capire quali argomenti
              vanno per la maggiore e quali invece proprio non piacciono,
              uso Google Analytics. Ecco qui la sua politica sul trattamento dei
              dati personali:  Durante la tua navigazione Google
              Analytics raccoglie dati come: • indirizzo IP,  • nome a dominio
              del dispositivo che utilizzi, • browser usato, • data e ora della
              visita, • indirizzi in notazione URI (Uniform Resource Identifier)
              delle risorse richieste o il metodo utilizzato nel sottoporre la
              richiesta al server. Queste informazioni mi consentono di
              conoscere aspetti molto utili, garantendoti l’anonimato: in
              pratica non conosco il nome di chi ha visto date pagine, ma so
              solo quante persone le hanno visitate, per quanto tempo, cliccando
              dove. Grazie a Google Analytics posso sapere che lingua parlano i
              visitatori del mio sito, da quale nazione arrivano, che
              dispositivo (PC/mobile o tablet) stanno utilizzando, quale browser
              e sistema operativo hanno installato.  Ma soprattutto grazie alle
              informazioni raccolte da Google Analytics riesco a capire quali
              temi vanno per la maggiore.  Come? Attraverso la collezione di
              dati come il tempo medio speso su di una pagina, la classifica
              delle pagine più lette (e quindi anche di quelle meno
              interessanti). Grazie ai dati raccolti da Google Analytics,
              infine, posso capire quali canali è meglio usare per veicolare i
              contenuti. Questo perché fra le informazioni di questo servizio ci
              sono i referrals, ossia l’indicazione della provenienza dei
              visitatori rispetto a social, newsletter e così via. Le
              informazioni anonime mi vengono fornite in forma aggregata, ossia
              che un tot di persone ha visitato un tot di pagine del mio sito in
              un determinato momento da determinati posti nel mondo, ecc. In
              mancanza di queste informazioni, non posso sapere cosa interessa
              davvero a te che leggi e non posso quindi erogare i miei servizi
              al meglio. Dove si trovano queste informazioni? Le informazioni
              raccolte da Google Analytics rimangono nella disponibilità di
              Google Analytics. Questo significa che io non archivio questi
              dati, né digitalmente, né su carta. L’unica via attraverso la
              quale accedo a tali informazioni è proprio il mio account di 
              Google Analytics. Chi può accedere a questi dati? In questo
              momento solo io, Alessandra Arpi, ho accesso al mio account di
              Google Analytics, per questo solo io posso analizzare le
              informazioni che lì sono contenute.  Come impedire a Google
              Analytics di raccogliere questi dati? Se non hai piacere che
              Google Analytics raccolga queste informazioni, puoi scegliere di
              bloccare la sua operatività.  Cosa succede se blocchi Google
              Analytics? Nel caso volessi bloccare le funzionalità di Google
              Analytics, i tuoi dati di traffico non mi arriveranno, ma va bene
              comunque.
            </p>
          </div>
          <div className="space-y-2">
            <h6 className="text-xl font-bold">
              2. Devi sapere che fra i dati che raccolgo e tratto ci sono anche
              i Cookies.
            </h6>
            <p>
              Cosa sono? Un cookie è una stringa di testo inoltrata al tuo
              dispositivo da parte dei siti che visiti. Questa stringa viene
              memorizzata dal tuo PC/tablet o smartphone. A ogni visita
              successiva che fai sul sito, i cookie memorizzati dal dispositivo
              vengono reinviati al sito web che li ha originati (cookie di prime
              parti) o ad un altro sito, o social media, che li riconosce
              (cookie di terze parti). A cosa servono? Lo scopo dei cookies è
              quello di rendere più comoda la tua navigazione automatizzando
              alcune procedure (come il login) e, al contempo, analizzare l’uso
              che fai del sito. A seconda della funzione, esistono diversi tipi
              di cookies, eccoli. 1. Cookie tecnici Come dice il nome, i cookie
              tecnici sono necessari per il corretto funzionamento del sito e
              non sono strumentali alla raccolta di dati personali con cui
              identificare l’utente. Si tratta, ad esempio, dei cookie di
              navigazione e di funzionalità, che garantiscono la normale
              navigazione e fruizione del sito web. Questi cookie ti permettono,
              ad esempio, di accedere ad aree riservate senza dover procedere
              all’autenticazione o di vedere il sito in italiano senza dover
              ogni volta impostare la lingua. La durata di questi cookie è
              limitata alla sessione e il loro utilizzo non è richiesto il tuo
              consenso. 2. Cookies di terze parti: Il sito per performare al
              meglio si avvale delle funzionalità messe a disposizione da terze
              parti. Partiamo da quelle primarie, come la piattaforma WordPress
              (ecco la sua privacy policy) grazie a cui ho realizzato questo
              sito Per funzionare, WordPress utilizza dei cookies. Ecco la sua
              cookie policy.  Tra i plugin installati su WordPress
              c’è Jetpack che mi aiuta a monitorare le attività degli utenti del
              sito.  Fra le varie funzionalità del sito c’è la possibilità di
              condividere i suoi contenuti su alcuni social network
              come Facebook, Instagram, LinkedIn e Twitter. Questi ultimi, per
              funzionare, utilizzano dei cookies. Ecco allora che quando
              utilizzi i pulsanti dei social network per la condivisione, alcune
              informazioni personali potrebbero essere acquisite da queste
              piattaforme e da loro raccolte. Per l’utilizzo di questo tipo di
              cookie è necessario il tuo consenso. Perchè tu abbia
              un’informativa completa, di seguito puoi trovare le cookie policy
              delle piattaforme di condivisione presenti sul sito:
              Facebook Instagram LinkedIn Twitter Tra i cookie di terze parti
              presenti su questo sito ci sono anche quelli relativi al servizio
              di organizzazione e distribuzione di newsletter, di cui ti parlavo
              poco più su. Si tratta di Mailchimp, e qui puoi consultare la sua
              cookie policy   Come ti dicevo, MailChimp mi permette di gestire
              la newsletter, ma anche di monitorare il tuo interesse – sempre in
              forma anonima – rispetto ai contenuti che ti mando, per esempio
              attraverso il monitoraggio del tasso d’apertura della posta. Fra
              le varie funzionalità digitali che metto a disposizione c’è la
              possibilità di fare consulenza su Zoom, ecco la sua privacy
              policy. 
            </p>
          </div>
          <div className="space-y-2">
            <h6 className="text-xl font-bold">
              4. Hai prestato il tuo consenso?
            </h6>
            <p>
              Sappi che puoi cambiare idea! Se hai dato il tuo consenso al
              trattamento dei dati personali, sappi che puoi revocarlo in
              qualsiasi momento. Questa libera scelta non pregiudica la
              legittimità del trattamento effettuato prima della tua revoca.
              Puoi farlo per una o più delle finalità indicate in questa privacy
              policy. Per farlo scrivimi a: ciao@alessandraarpi.it e sono certa
              che troveremo la tua soluzione ideale. Così facendo, i tuoi dati
              non saranno più oggetto di trattamento, a meno che non esista una
              base giuridica diversa dal tuo consenso liberamente prestato (come
              l’esistenza di un obbligo contrattuale o di legge).
            </p>
          </div>
          <div className="space-y-2">
            <h6 className="text-xl font-bold">
              6. Quali sono i tuoi diritti rispetto al trattamento dei dati?
            </h6>
            <p>
              Per gestire i flussi di mail, comunicare con i clienti e, in
              generale, per erogare al meglio i servizi online, lavoro con terze
              parti che reputo essere i migliori nel loro campo. Ecco allora
              che, talvolta, mi è necessario condividere con loro i tuoi
              dati. Quando strettamente necessario e per le finalità che ti ho
              indicato, i tuoi dati potranno essere condivisi con: • soggetti
              esterni che mi consentono di erogare i servizi presenti sul sito
              come fornitori di servizi tecnici terzi, hosting provider, società
              informatiche e agenzie di comunicazione, che sono autorizzati al
              trattamento. Fra questi mi avvalgo dell’hosting provider
              Serverplan (ecco la sua privacy policy) e di Nicoletta Biticchi
              che si occupa dell’aggiornamento • soggetti pubblici o privati che
              possono accedere ai dati in osservanza di obblighi di legge •
              soggetti esterni quali partner nell’organizzazione di iniziative
              ed eventi da me promossi o patrocinati ed ai quali la
              comunicazione dei dati mi è necessaria per ragioni organizzative
              Trasferimento dei tuoi dati in un paese al di fuori dell’Unione
              Europea Come sicuramente saprai, la maggior parte dei server che
              permettono al web di funzionare si trovano negli Stati Uniti, come
              nel caso di Google. Per questo ti informo che per il funzionamento
              del sito, i tuoi dati potranno essere elaborati, e quindi
              trasferiti, in un paese terzo, esterno all’Unione Europea. Questo
              trasferimento si basa su una decisione di adeguatezza della
              Commissione europea. Luogo del trattamento I Dati sono trattati
              presso la mia sede operativa in Genova, Via Ausonia 2. Per
              ulteriori informazioni puoi scrivere a alessandra.arpi@gmail.com
              Ulteriori informazioni sul trattamento Qualora avessi necessità di
              chiarimenti o di maggiori informazioni in relazione al trattamento
              dei dati personali effettuati dal presente sito, potrai rivolgerti
              in qualsiasi momento al Titolare del Trattamento utilizzando le
              informazioni di contatto. Nel caso in cui uno o più link sopra
              riportati non siano funzionanti, potrai accedere alle relative
              normative direttamente dal sito proprietario richiamato dal link
              stesso. Privacy policy e Cookie policy aggiornate a ottobre 2020
            </p>
          </div>
        </div>
      </PageContainer>
    </motion.section>
  );
}

export default CookiesContent;
