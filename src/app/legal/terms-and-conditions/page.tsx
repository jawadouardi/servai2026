import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function TermsAndConditionsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-headline text-4xl sm:text-5xl font-bold mb-12 text-center">Termini e Condizioni</h1>
          <div className="space-y-8 text-lg text-muted-foreground">
            <div className="space-y-4">
              <h2 className="font-headline text-2xl font-bold text-foreground">1. Introduzione</h2>
              <p>
                Benvenuti in SERV AI. I presenti Termini e Condizioni disciplinano l'utilizzo del nostro sito web (www.servai.it) e dei servizi di automazione e intelligenza artificiale da noi offerti. Accedendo o utilizzando il nostro sito e i nostri servizi, l'utente accetta di essere vincolato senza riserve da questi termini. Se non si è d'accordo con una qualsiasi parte dei termini, non si è autorizzati ad accedere al servizio.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="font-headline text-2xl font-bold text-foreground">2. Utilizzo dei Servizi</h2>
              <p>
                I nostri servizi sono destinati esclusivamente a scopi professionali e aziendali. L'utente si impegna a utilizzare i nostri servizi in conformità con tutte le leggi e i regolamenti applicabili. È vietato utilizzare i nostri servizi per scopi illegali, fraudolenti o non autorizzati. Ci riserviamo il diritto di sospendere o interrompere l'accesso ai servizi a nostra discrezione in caso di violazione di questi termini.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="font-headline text-2xl font-bold text-foreground">3. Proprietà Intellettuale</h2>
              <p>
                Il sito web, il marchio SERV AI, e tutti i contenuti originali, le caratteristiche e le funzionalità (inclusi, ma non limitati a, testi, grafiche, loghi, icone, immagini, e software) sono e rimarranno di proprietà esclusiva di SERV AI S.R.L. e dei suoi licenziatari. I nostri marchi e la nostra immagine commerciale non possono essere utilizzati in relazione a nessun prodotto o servizio senza il previo consenso scritto di SERV AI S.R.L.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="font-headline text-2xl font-bold text-foreground">4. Limitazione di Responsabilità</h2>
              <p>
                In nessun caso SERV AI S.R.L., né i suoi direttori, dipendenti, partner, agenti, fornitori o affiliati, saranno responsabili per eventuali danni indiretti, incidentali, speciali, consequenziali o punitivi, inclusi, senza limitazione, perdita di profitti, dati, utilizzo, avviamento o altre perdite intangibili, derivanti da (i) l'accesso o l'utilizzo o l'impossibilità di accedere o utilizzare il servizio; (ii) qualsiasi condotta o contenuto di terze parti sul servizio; (iii) qualsiasi contenuto ottenuto dal servizio.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="font-headline text-2xl font-bold text-foreground">5. Legge Applicabile e Foro Competente</h2>
              <p>
                I presenti Termini saranno regolati e interpretati in conformità con le leggi dello Stato Italiano, senza riguardo alle sue disposizioni in materia di conflitto di leggi. Per qualsiasi controversia derivante da o in connessione con i presenti termini, sarà esclusivamente competente il Foro di Trento, Italia.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="font-headline text-2xl font-bold text-foreground">6. Modifiche ai Termini</h2>
              <p>
                Ci riserviamo il diritto, a nostra esclusiva discrezione, di modificare o sostituire i presenti Termini in qualsiasi momento. In caso di revisione materiale, cercheremo di fornire un preavviso di almeno 30 giorni prima che i nuovi termini entrino in vigore. Continuando ad accedere o utilizzare il nostro Servizio dopo l'entrata in vigore di tali revisioni, l'utente accetta di essere vincolato dai termini rivisti.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="font-headline text-2xl font-bold text-foreground">7. Contatti</h2>
              <p>
                Per qualsiasi domanda sui presenti Termini, si prega di contattarci tramite posta elettronica certificata all'indirizzo: <a href="mailto:Servai@pec.servai.it" className="text-primary hover:underline">Servai@pec.servai.it</a>.
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
