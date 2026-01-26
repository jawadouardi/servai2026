import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
    {
        question: "Qual è l'investimento per una soluzione AI?",
        answer: "Ogni soluzione è su misura. Partiamo da un audit gratuito per definire un preventivo chiaro e trasparente, sempre focalizzato sul massimo ritorno dell'investimento per la tua azienda."
    },
    {
        question: "Quali sono i tempi di implementazione?",
        answer: "I tempi variano: alcune automazioni sono operative in pochi giorni, altre richiedono qualche settimana. La nostra priorità è la rapidità e l'efficienza, senza compromettere la qualità."
    },
    {
        question: "L'AI è adatta anche per la mia PMI?",
        answer: "Assolutamente sì. Le nostre soluzioni sono progettate specificamente per le PMI, per renderle competitive e permettergli di crescere sfruttando le stesse tecnologie delle grandi aziende."
    },
    {
        question: "Come viene gestita la possibilità di errore dell'AI?",
        answer: "Ogni sistema viene addestrato e testato rigorosamente. Implementiamo protocolli di sicurezza per cui, in caso di incertezza, l'AI passa la richiesta a un operatore umano. Nessuna richiesta viene persa."
    },
    {
        question: "Cosa succede dopo l'implementazione?",
        answer: "Il nostro non è un semplice 'installa e dimentica'. Offriamo supporto continuo, monitoraggio delle performance e ottimizzazioni costanti per garantire che la tua soluzione AI cresca insieme al tuo business."
    },
    {
        question: "In quali settori operate?",
        answer: "Le nostre soluzioni sono versatili e portano benefici a svariati settori: retail, sanità, immobiliare, servizi professionali, e-commerce e molti altri. L'automazione è un vantaggio competitivo per chiunque."
    },
    {
        question: "Dovrò cambiare i software che uso già?",
        answer: "No, affatto. Le nostre soluzioni si integrano perfettamente con gli strumenti che la tua azienda usa ogni giorno (CRM, gestionali, calendari), potenziandoli senza interrompere i flussi di lavoro."
    }
]

export function Faq() {
  return (
    <section id="faqs" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-left mb-12">
            <p className="font-headline text-sm uppercase tracking-widest text-primary mb-2">Le tue domande</p>
            <h2 className="font-headline text-4xl md:text-5xl font-bold">Domande Frequenti</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
                <AccordionTrigger className="text-left font-headline text-lg hover:no-underline">{item.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
