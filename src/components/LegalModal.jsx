import { X } from 'lucide-react';

export default function LegalModal({ isOpen, onClose, type }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-charcoal/80 backdrop-blur-sm">
      <div className="bg-cream w-full max-w-4xl max-h-[90vh] rounded-[2rem] shadow-2xl overflow-hidden flex flex-col relative">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-charcoal/50 hover:bg-clay hover:text-cream rounded-full transition-colors z-10"
          aria-label="Chiudi"
        >
          <X size={24} />
        </button>
        
        <div className="p-8 md:p-12 overflow-y-auto font-sans text-charcoal/80 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4 [&_li]:mb-2">
          {type === 'privacy' ? <PrivacyText /> : <CookieText />}
        </div>
      </div>
    </div>
  );
}

function PrivacyText() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-drama text-charcoal mb-8">Informativa sulla Privacy</h2>
      <p className="text-sm text-charcoal/50">Ultimo aggiornamento: Marzo 2026</p>
      
      <section>
        <h3 className="text-xl font-bold text-charcoal mb-2">1. Titolare del Trattamento</h3>
        <p>Il Titolare del trattamento dei dati è: <br/>
        <strong>DE NARDIS MARIANNA</strong><br/>
        Frazione Garrano Alto, 16 – 64100 Teramo (TE) – Italia<br/>
        P.IVA: 01722800677 | Email: info@fattoriadenardis.it</p>
      </section>

      <section>
        <h3 className="text-xl font-bold text-charcoal mb-2">2. Tipologia dei dati raccolti</h3>
        <p>Il nostro sito raccoglie le seguenti tipologie di dati personali:</p>
        <ul className="list-disc pl-5">
          <li><strong>Dati di navigazione:</strong> Gli indirizzi IP o i nomi a dominio dei computer utilizzati dagli utenti, gli indirizzi in notazione URI, l'orario della richiesta, il metodo utilizzato nel sottoporre la richiesta al server, la dimensione del file ottenuto in risposta, ecc.</li>
          <li><strong>Dati forniti volontariamente:</strong> Nome, email, numero di telefono e altre informazioni fornite compilando moduli di contatto o inviando richieste alla nostra email.</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-bold text-charcoal mb-2">3. Finalità del trattamento</h3>
        <p>I Dati dell'Utente sono raccolti per consentire al Titolare di fornire i propri Servizi, nonché per le seguenti finalità:</p>
        <ul className="list-disc pl-5">
          <li>Gestione delle richieste inoltrate tramite il sito (informazioni su prodotti, preventivi per bomboniere, ecc.)</li>
          <li>Adempimento di obblighi di legge o richieste dell'Autorità.</li>
          <li>Esecuzione di statistiche anonime sull'utilizzo del sito.</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-bold text-charcoal mb-2">4. Base Giuridica del trattamento</h3>
        <p>Il Titolare tratta Dati Personali relativi all'Utente in caso sussista una delle seguenti condizioni:</p>
        <ul className="list-disc pl-5">
          <li>L'Utente ha prestato il consenso per una o più finalità specifiche;</li>
          <li>Il trattamento è necessario all'esecuzione di un contratto con l'Utente e/o all'esecuzione di misure precontrattuali (es. richiesta info o preventivi);</li>
          <li>Il trattamento è necessario per adempiere un obbligo legale al quale è soggetto il Titolare.</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-bold text-charcoal mb-2">5. Modalità di trattamento e conservazione</h3>
        <p>Il trattamento viene effettuato mediante strumenti informatici e/o telematici, con modalità organizzative e con logiche strettamente correlate alle finalità indicate.</p>
        <p>I Dati sono trattati presso le sedi operative del Titolare e conservati per il tempo strettamente necessario al conseguimento delle finalità per cui sono stati raccolti, o per adempiere a specifici obblighi normativi.</p>
      </section>

      <section>
        <h3 className="text-xl font-bold text-charcoal mb-2">6. Diritti dell'interessato</h3>
        <p>Gli Utenti possono esercitare determinati diritti con riferimento ai Dati trattati dal Titolare. In particolare, ai sensi del GDPR (Regolamento UE 2016/679), l'Utente ha il diritto di:</p>
        <ul className="list-disc pl-5">
          <li>Revocare il consenso in ogni momento;</li>
          <li>Opporsi al trattamento dei propri Dati;</li>
          <li>Accedere ai propri Dati;</li>
          <li>Verificare e chiedere la rettificazione;</li>
          <li>Ottenere la limitazione del trattamento;</li>
          <li>Ottenere la cancellazione o rimozione dei propri Dati Personali;</li>
          <li>Ricevere i propri Dati o farli trasferire ad altro titolare (portabilità);</li>
          <li>Proporre reclamo all'autorità di controllo competente (Garante della Privacy).</li>
        </ul>
        <p className="mt-2">Le richieste di esercizio dei diritti possono essere indirizzate al Titolare all'indirizzo email <strong>info@fattoriadenardis.it</strong>.</p>
      </section>
    </div>
  );
}

function CookieText() {
  return (
     <div className="space-y-6">
      <h2 className="text-3xl font-drama text-charcoal mb-8">Cookie Policy</h2>
      <p className="text-sm text-charcoal/50">Ultimo aggiornamento: Marzo 2026</p>
      
      <section>
        <h3 className="text-xl font-bold text-charcoal mb-2">1. Cosa sono i Cookie?</h3>
        <p>I Cookie sono costituiti da porzioni di codice installate all'interno del browser che assistono il Titolare nell'erogazione del Servizio in base alle finalità descritte. Alcune delle finalità di installazione dei Cookie potrebbero, inoltre, necessitare del consenso dell'Utente.</p>
      </section>

      <section>
        <h3 className="text-xl font-bold text-charcoal mb-2">2. Cookie tecnici e di statistica aggregata</h3>
        <p>Questo sito web utilizza cookie per salvare la sessione dell'Utente e per svolgere altre attività strettamente necessarie al funzionamento dello stesso, ad esempio per ricordare le preferenze di lingua (se applicabile).</p>
        <ul className="list-disc pl-5 mt-2">
          <li><strong>Cookie di navigazione o sessione:</strong> Garantiscono la normale navigazione e fruizione del sito web.</li>
          <li><strong>Cookie di funzionalità:</strong> Permettono all'utente la navigazione in funzione di una serie di criteri selezionati (es. la lingua) al fine di migliorare il servizio reso.</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-bold text-charcoal mb-2">3. Servizi di terze parti (Statistica, Video, ecc.)</h3>
        <p>Alcuni dei servizi analitici o di visualizzazione contenuti di terze parti potrebbero raccogliere statistiche in forma aggregata e potrebbero non richiedere il consenso dell'Utente o potrebbero essere gestiti direttamente da terzi – in aggiunta a quanto specificato ed anche all'insaputa del Titolare.</p>
        <p>Ad esempio, l'uso di Google Maps, video YouTube, o metriche di Analytics basiche (anonimizzate). Per informazioni dettagliate ai cookie rilasciati da questi servizi, si consiglia l'Utente di consultare le privacy policy dei servizi terzi elencati.</p>
      </section>

      <section>
        <h3 className="text-xl font-bold text-charcoal mb-2">4. Come gestire o disabilitare i Cookie?</h3>
        <p>In aggiunta a quanto indicato in questo documento, l'Utente può gestire le preferenze relative ai Cookie direttamente all'interno del proprio browser ed impedire – ad esempio – che terze parti possano installarne. Tramite le preferenze del browser è inoltre possibile eliminare i Cookie installati in passato. È importante notare che disabilitando tutti i Cookie, il funzionamento di questo sito potrebbe essere compromesso.</p>
        <p>È possibile trovare informazioni su come gestire i Cookie nei browser più diffusi ai seguenti indirizzi:</p>
        <ul className="list-disc pl-5">
          <li>Google Chrome</li>
          <li>Mozilla Firefox</li>
          <li>Apple Safari</li>
          <li>Microsoft Edge</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-bold text-charcoal mb-2">5. Riferimenti Legali</h3>
        <p>La presente informativa è redatta sulla base di molteplici ordinamenti legislativi, incluso gli artt. 13 e 14 del Regolamento (UE) 2016/679 (GDPR).</p>
      </section>
    </div>
  );
}
