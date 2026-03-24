const fs = require('fs');
const path = require('path');

const translations = {
  it: {
    privacy: {
      title: 'Informativa sulla Privacy',
      updated: 'Ultimo aggiornamento: Marzo 2026',
      sections: [
        {
          title: '1. Titolare del Trattamento',
          paragraphs: ['Il Titolare del trattamento dei dati è: <br/><strong>DE NARDIS MARIANNA</strong><br/>Frazione Garrano Alto, 16 – 64100 Teramo (TE) – Italia<br/>P.IVA: 01722800677 | Email: info@fattoriadenardis.it']
        },
        {
          title: '2. Tipologia dei dati raccolti',
          paragraphs: ['Il nostro sito raccoglie le seguenti tipologie di dati personali:'],
          list: [
            '<strong>Dati di navigazione:</strong> Gli indirizzi IP o i nomi a dominio dei computer utilizzati dagli utenti, gli indirizzi in notazione URI, l\'orario della richiesta, il metodo utilizzato nel sottoporre la richiesta al server, la dimensione del file ottenuto in risposta, ecc.',
            '<strong>Dati forniti volontariamente:</strong> Nome, email, numero di telefono e altre informazioni fornite compilando moduli di contatto o inviando richieste alla nostra email.'
          ]
        },
        {
          title: '3. Finalità del trattamento',
          paragraphs: ['I Dati dell\'Utente sono raccolti per consentire al Titolare di fornire i propri Servizi, nonché per le seguenti finalità:'],
          list: [
            'Gestione delle richieste inoltrate tramite il sito (informazioni su prodotti, preventivi per bomboniere, ecc.)',
            'Adempimento di obblighi di legge o richieste dell\'Autorità.',
            'Esecuzione di statistiche anonime sull\'utilizzo del sito.'
          ]
        },
        {
          title: '4. Base Giuridica del trattamento',
          paragraphs: ['Il Titolare tratta Dati Personali relativi all\'Utente in caso sussista una delle seguenti condizioni:'],
          list: [
            'L\'Utente ha prestato il consenso per una o più finalità specifiche;',
            'Il trattamento è necessario all\'esecuzione di un contratto con l\'Utente e/o all\'esecuzione di misure precontrattuali (es. richiesta info o preventivi);',
            'Il trattamento è necessario per adempiere un obbligo legale al quale è soggetto il Titolare.'
          ]
        },
        {
          title: '5. Modalità di trattamento e conservazione',
          paragraphs: [
            'Il trattamento viene effettuato mediante strumenti informatici e/o telematici, con modalità organizzative e con logiche strettamente correlate alle finalità indicate.',
            'I Dati sono trattati presso le sedi operative del Titolare e conservati per il tempo strettamente necessario al conseguimento delle finalità per cui sono stati raccolti, o per adempiere a specifici obblighi normativi.'
          ]
        },
        {
          title: '6. Diritti dell\'interessato',
          paragraphs: ['Gli Utenti possono esercitare determinati diritti con riferimento ai Dati trattati dal Titolare. In particolare, ai sensi del GDPR (Regolamento UE 2016/679), l\'Utente ha il diritto di:'],
          list: [
            'Revocare il consenso in ogni momento;',
            'Opporsi al trattamento dei propri Dati;',
            'Accedere ai propri Dati;',
            'Verificare e chiedere la rettificazione;',
            'Ottenere la limitazione del trattamento;',
            'Ottenere la cancellazione o rimozione dei propri Dati Personali;',
            'Ricevere i propri Dati o farli trasferire ad altro titolare (portabilità);',
            'Proporre reclamo all\'autorità di controllo competente (Garante della Privacy).'
          ]
        },
        {
          title: '',
          paragraphs: ['Le richieste di esercizio dei diritti possono essere indirizzate al Titolare all\'indirizzo email <strong>info@fattoriadenardis.it</strong>.']
        }
      ]
    },
    cookie: {
      title: 'Cookie Policy',
      updated: 'Ultimo aggiornamento: Marzo 2026',
      sections: [
        {
          title: '1. Cosa sono i Cookie?',
          paragraphs: ['I Cookie sono costituiti da porzioni di codice installate all\'interno del browser che assistono il Titolare nell\'erogazione del Servizio in base alle finalità descritte. Alcune delle finalità di installazione dei Cookie potrebbero, inoltre, necessitare del consenso dell\'Utente.']
        },
        {
          title: '2. Cookie tecnici e di statistica aggregata',
          paragraphs: ['Questo sito web utilizza cookie per salvare la sessione dell\'Utente e per svolgere altre attività strettamente necessarie al funzionamento dello stesso, ad esempio per ricordare le preferenze di lingua (se applicabile).'],
          list: [
            '<strong>Cookie di navigazione o sessione:</strong> Garantiscono la normale navigazione e fruizione del sito web.',
            '<strong>Cookie di funzionalità:</strong> Permettono all\'utente la navigazione in funzione di una serie di criteri selezionati (es. la lingua) al fine di migliorare il servizio reso.'
          ]
        },
        {
          title: '3. Servizi di terze parti (Statistica, Video, ecc.)',
          paragraphs: [
            'Alcuni dei servizi analitici o di visualizzazione contenuti di terze parti potrebbero raccogliere statistiche in forma aggregata e potrebbero non richiedere il consenso dell\'Utente o potrebbero essere gestiti direttamente da terzi – in aggiunta a quanto specificato ed anche all\'insaputa del Titolare.',
            'Ad esempio, l\'uso di Google Maps, video YouTube, o metriche di Analytics basiche (anonimizzate). Per informazioni dettagliate ai cookie rilasciati da questi servizi, si consiglia l\'Utente di consultare le privacy policy dei servizi terzi elencati.'
          ]
        },
        {
          title: '4. Come gestire o disabilitare i Cookie?',
          paragraphs: [
            'In aggiunta a quanto indicato in questo documento, l\'Utente può gestire le preferenze relative ai Cookie direttamente all\'interno del proprio browser ed impedire – ad esempio – che terze parti possano installarne. Tramite le preferenze del browser è inoltre possibile eliminare i Cookie installati in passato. È importante notare che disabilitando tutti i Cookie, il funzionamento di questo sito potrebbe essere compromesso.',
            'È possibile trovare informazioni su come gestire i Cookie nei browser più diffusi ai seguenti indirizzi:'
          ],
          list: [
            'Google Chrome',
            'Mozilla Firefox',
            'Apple Safari',
            'Microsoft Edge'
          ]
        },
        {
          title: '5. Riferimenti Legali',
          paragraphs: ['La presente informativa è redatta sulla base di molteplici ordinamenti legislativi, incluso gli artt. 13 e 14 del Regolamento (UE) 2016/679 (GDPR).']
        }
      ]
    }
  },
  en: {
    privacy: {
      title: 'Privacy Policy',
      updated: 'Last updated: March 2026',
      sections: [
        {
          title: '1. Data Controller',
          paragraphs: ['The Data Controller is: <br/><strong>DE NARDIS MARIANNA</strong><br/>Frazione Garrano Alto, 16 – 64100 Teramo (TE) – Italy<br/>VAT: 01722800677 | Email: info@fattoriadenardis.it']
        },
        {
          title: '2. Types of Data Collected',
          paragraphs: ['Our website collects the following types of personal data:'],
          list: [
            '<strong>Browsing data:</strong> IP addresses or domain names of the computers used by users, URI notation addresses, time of request, method used to submit the request to the server, size of the file obtained in response, etc.',
            '<strong>Data provided voluntarily:</strong> Name, email, phone number and other information provided by filling out contact forms or sending requests to our email.'
          ]
        },
        {
          title: '3. Purpose of Processing',
          paragraphs: ['User Data is collected to allow the Controller to provide its Services, as well as for the following purposes:'],
          list: [
            'Handling requests forwarded through the site (information on products, quotes for event favors, etc.)',
            'Fulfillment of legal obligations or requests from Authorities.',
            'Execution of anonymous statistics on site usage.'
          ]
        },
        {
          title: '4. Legal Basis of Processing',
          paragraphs: ['The Controller processes Personal Data relating to the User if one of the following conditions exists:'],
          list: [
            'The User has given consent for one or more specific purposes;',
            'Processing is necessary for the performance of a contract with the User and/or for the performance of pre-contractual measures;',
            'Processing is necessary to comply with a legal obligation to which the Controller is subject.'
          ]
        },
        {
          title: '5. Processing Methods and Retention',
          paragraphs: [
            'Processing is carried out using IT and/or telematic tools, with organizational methods and with logic strictly related to the purposes indicated.',
            'Data is processed at the operating offices of the Controller and stored for the time strictly necessary to achieve the purposes for which it was collected, or to fulfill specific regulatory obligations.'
          ]
        },
        {
          title: '6. User Rights',
          paragraphs: ['Users may exercise certain rights regarding Data processed by the Controller. In particular, pursuant to the GDPR (EU Regulation 2016/679), the User has the right to:'],
          list: [
            'Withdraw consent at any time;',
            'Object to the processing of their Data;',
            'Access their Data;',
            'Verify and seek rectification;',
            'Obtain the restriction of processing;',
            'Obtain the erasure or removal of their Personal Data;',
            'Receive their Data or have it transferred to another controller (portability);',
            'Lodge a complaint with the competent supervisory authority.'
          ]
        },
        {
          title: '',
          paragraphs: ['Requests to exercise rights can be directed to the Controller at the email address <strong>info@fattoriadenardis.it</strong>.']
        }
      ]
    },
    cookie: {
      title: 'Cookie Policy',
      updated: 'Last updated: March 2026',
      sections: [
        {
          title: '1. What are Cookies?',
          paragraphs: ['Cookies are small portions of code installed within the browser that assist the Controller in providing the Service according to the described purposes. Some of the purposes of cookie installation may also require the User\'s consent.']
        },
        {
          title: '2. Technical and Aggregated Statistics Cookies',
          paragraphs: ['This website uses cookies to save the User\'s session and to perform other activities strictly necessary to operate the site, for example to remember language preferences.'],
          list: [
            '<strong>Browsing or session cookies:</strong> They guarantee the normal navigation and use of the website.',
            '<strong>Functionality cookies:</strong> They allow the user to navigate according to a set of selected criteria (e.g., language) in order to improve the service provided.'
          ]
        },
        {
          title: '3. Third-party Services (Statistics, Videos, etc.)',
          paragraphs: [
            'Some third-party analytical or content display services may collect aggregated statistics and may not require User consent, or may be managed directly by third parties.',
            'For example, the use of Google Maps, YouTube videos, or basic (anonymized) Analytics metrics. For detailed information on cookies released by these services, the User is advised to consult the privacy policies of the listed third-party services.'
          ]
        },
        {
          title: '4. How to manage or disable Cookies?',
          paragraphs: [
            'In addition to what is stated in this document, the User can manage cookie preferences directly within their browser and prevent – for example – third parties from installing them. It is important to note that by disabling all Cookies, the functioning of this site may be compromised.',
            'You can find information on how to manage Cookies in the most popular browsers at the following addresses:'
          ],
          list: [
            'Google Chrome',
            'Mozilla Firefox',
            'Apple Safari',
            'Microsoft Edge'
          ]
        },
        {
          title: '5. Legal References',
          paragraphs: ['This information is prepared on the basis of multiple legislative systems, including articles 13 and 14 of Regulation (EU) 2016/679 (GDPR).']
        }
      ]
    }
  },
  fr: {
    privacy: {
      title: 'Politique de Confidentialité',
      updated: 'Dernière mise à jour: Mars 2026',
      sections: [
        {
          title: '1. Responsable du Traitement',
          paragraphs: ['Le Responsable du traitement des données est : <br/><strong>DE NARDIS MARIANNA</strong><br/>Frazione Garrano Alto, 16 – 64100 Teramo (TE) – Italie<br/>TVA : 01722800677 | Email : info@fattoriadenardis.it']
        },
        {
          title: '2. Types de données collectées',
          paragraphs: ['Notre site web collecte les types de données personnelles suivants :'],
          list: [
            '<strong>Données de navigation :</strong> Adresses IP ou noms de domaine des ordinateurs utilisés par les utilisateurs, adresses en notation URI, heure de la demande, etc.',
            '<strong>Données fournies volontairement :</strong> Nom, email, numéro de téléphone et autres informations fournies en remplissant les formulaires de contact.'
          ]
        },
        {
          title: '3. Objectif du traitement',
          paragraphs: ['Les Données de l\'Utilisateur sont collectées pour permettre au Responsable de fournir ses Services, ainsi que pour :'],
          list: [
            'Gérer les demandes transmises via le site (informations sur les produits, devis d\'événements, etc.)',
            'Respecter les obligations légales.',
            'Établir des statistiques anonymes d\'utilisation du site.'
          ]
        },
        {
          title: '4. Base Juridique du Traitement',
          paragraphs: ['Le Responsable traite les Données Personnelles si l\'une des conditions suivantes est remplie :'],
          list: [
            'L\'Utilisateur a consenti pour une ou plusieurs finalités spécifiques;',
            'Le traitement est nécessaire à l\'exécution d\'un contrat ou de mesures précontractuelles;',
            'Le traitement est nécessaire pour respecter une obligation légale.'
          ]
        },
        {
          title: '5. Méthodes de traitement et de conservation',
          paragraphs: [
            'Le traitement s\'effectue au moyen d\'outils informatiques, avec des méthodes organisationnelles strictement liées aux finalités indiquées.',
            'Les Données sont conservées pendant le temps strictement nécessaire à la réalisation des objectifs pour lesquels elles ont été collectées.'
          ]
        },
        {
          title: '6. Droits de l\'Utilisateur',
          paragraphs: ['Les Utilisateurs peuvent exercer certains droits. Conformément au RGPD (Règlement UE 2016/679), l\'Utilisateur a le droit de :'],
          list: [
            'Retirer son consentement;','S\'opposer au traitement;','Accéder à ses Données;','Demander la rectification;','Obtenir la limitation du traitement;','Obtenir l\'effacement de ses Données;','Recevoir ses Données ou les faire transférer (portabilité);','Déposer une plainte auprès de l\'autorité de contrôle.'
          ]
        },
        {
          title: '',
          paragraphs: ['Les demandes peuvent être adressées au Responsable à <strong>info@fattoriadenardis.it</strong>.']
        }
      ]
    },
    cookie: {
      title: 'Politique relative aux Cookies',
      updated: 'Dernière mise à jour: Mars 2026',
      sections: [
        {
          title: '1. Que sont les Cookies ?',
          paragraphs: ['Les Cookies sont de petites portions de code installées dans le navigateur qui assistent le Responsable dans la fourniture du Service.']
        },
        {
          title: '2. Cookies techniques et statistiques agrégées',
          paragraphs: ['Ce site utilise des cookies pour sauvegarder la session de l\'Utilisateur et pour mémoriser les préférences (ex. langue).'],
          list: [
            '<strong>Cookies de navigation ou de session :</strong> Ils garantissent la navigation normale sur le site.',
            '<strong>Cookies de fonctionnalité :</strong> Ils permettent à l\'utilisateur de naviguer selon une série de critères sélectionnés.'
          ]
        },
        {
          title: '3. Services tiers',
          paragraphs: [
            'Certains services tiers peuvent collecter des statistiques agrégées ou utiliser des cookies pour fournir des fonctionnalités (ex. Google Maps, YouTube).',
            'Pour plus d\'informations, il est conseillé de consulter les politiques de confidentialité des services tiers.'
          ]
        },
        {
          title: '4. Comment gérer les Cookies ?',
          paragraphs: [
            'L\'Utilisateur peut gérer les préférences relatives aux Cookies directement dans son navigateur (Chrome, Firefox, Safari, Edge). En désactivant tous les Cookies, le fonctionnement du site peut être compromis.'
          ]
        },
        {
          title: '5. Références légales',
          paragraphs: ['Cette politique a été rédigée conformément au Règlement (UE) 2016/679 (RGPD).']
        }
      ]
    }
  }
};

for (const [lang, data] of Object.entries(translations)) {
  const filePath = path.join(process.cwd(), `src/locales/${lang}/translation.json`);
  let fileData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  fileData.legal = data;
  fs.writeFileSync(filePath, JSON.stringify(fileData, null, 2));
}
console.log('Translations inserted successfully!');
