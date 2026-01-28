import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-headline text-4xl sm:text-5xl font-bold mb-12 text-center">Privacy Policy</h1>
          <div className="space-y-8 text-lg text-muted-foreground">
            <div className="space-y-4">
              <h2 className="font-headline text-2xl font-bold text-foreground">1. Titolare del Trattamento</h2>
              <p>
                Il Titolare del trattamento dei dati è SERV AI S.R.L., con sede legale in Via IV Novembre, 26, 38121 Trento (TN), P.IVA 02814790222, email PEC: Servai@pec.servai.it.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="font-headline text-2xl font-bold text-foreground">2. Dati Personali Raccolti</h2>
              <p>
                Raccogliamo diversi tipi di informazioni per vari scopi al fine di fornire e migliorare il nostro servizio. I dati raccolti possono includere, ma non sono limitati a:
              </p>
              <ul className="list-disc list-inside pl-4 space-y-2">
                <li>Dati di contatto (es. nome, cognome, indirizzo email, numero di telefono, ragione sociale) forniti volontariamente tramite form di contatto.</li>
                <li>Dati di utilizzo (es. indirizzi IP, tipo di browser, pagine visitate) raccolti automaticamente durante l'utilizzo del sito.</li>
                <li>Cookie e tecnologie di tracciamento simili per monitorare l'attività sul nostro servizio e conservare determinate informazioni.</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h2 className="font-headline text-2xl font-bold text-foreground">3. Finalità del Trattamento</h2>
              <p>
                Utilizziamo i dati raccolti per le seguenti finalità:
              </p>
              <ul className="list-disc list-inside pl-4 space-y-2">
                <li>Per fornire e mantenere il nostro Servizio.</li>
                <li>Per contattare l'utente in risposta a una sua richiesta.</li>
                <li>Per fornire analisi o informazioni preziose in modo da poter migliorare il Servizio.</li>
                <li>Per monitorare l'utilizzo del Servizio.</li>
                <li>Per rilevare, prevenire e affrontare problemi tecnici.</li>
                <li>Per adempiere a obblighi di legge.</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h2 className="font-headline text-2xl font-bold text-foreground">4. Diritti dell'Interessato</h2>
              <p>
                In conformità con il GDPR, l'utente ha il diritto di accedere ai propri dati, richiederne la rettifica, la cancellazione (diritto all'oblio), la limitazione del trattamento, la portabilità dei dati e di opporsi al loro trattamento. Per esercitare tali diritti, è possibile contattare il Titolare del Trattamento all'indirizzo email indicato.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="font-headline text-2xl font-bold text-foreground">5. Conservazione dei Dati</h2>
              <p>
                I dati personali saranno conservati solo per il tempo strettamente necessario a conseguire gli scopi per cui sono stati raccolti, o come richiesto dalla legge.
              </p>
            </div>
             <div className="space-y-4">
              <h2 className="font-headline text-2xl font-bold text-foreground">6. Sicurezza dei Dati</h2>
              <p>
                La sicurezza dei vostri dati è importante per noi, ma ricordate che nessun metodo di trasmissione su Internet o metodo di archiviazione elettronica è sicuro al 100%. Pertanto, anche se ci sforziamo di utilizzare mezzi commercialmente accettabili per proteggere i vostri Dati Personali, non possiamo garantirne l'assoluta sicurezza.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="font-headline text-2xl font-bold text-foreground">7. Modifiche a questa Privacy Policy</h2>
              <p>
                Potremmo aggiornare la nostra Privacy Policy di tanto in tanto. Vi informeremo di eventuali modifiche pubblicando la nuova Privacy Policy su questa pagina. Si consiglia di consultare periodicamente questa Privacy Policy per eventuali modifiche.
              </p>
            </div>
             <p className="pt-8">
              Ultimo aggiornamento: 26 Luglio 2024
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
