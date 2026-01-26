import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
    {
        question: "Quanto costa davvero implementare l'AI?",
        answer: "I costi variano in base alla complessità. Partiamo con un audit gratuito per fornirti un preventivo trasparente e su misura, focalizzato sul massimo ritorno sull’investimento."
    },
    {
        question: "Quanto tempo richiede l'implementazione?",
        answer: "Dipende dalla soluzione. Alcune automazioni sono operative in pochi giorni, altre richiedono alcune settimane. Lavoriamo sempre per essere veloci ed efficienti."
    },
    {
        question: "La mia azienda è troppo piccola per l'AI?",
        answer: "Assolutamente no. Le nostre soluzioni sono pensate per le PMI. L'AI non è solo per le grandi corporation; è uno strumento potente per competere e crescere a qualsiasi dimensione."
    },
    {
        question: "E se l'AI fa errori o non capisce i clienti?",
        answer: "Il nostro processo include una fase di addestramento e test accurati. Inoltre, implementiamo protocolli per cui l'AI, in caso di dubbio, passa la conversazione a un operatore umano."
    },
    {
        question: "Offrite supporto dopo l'implementazione?",
        answer: "Sì, il nostro supporto è continuo. Monitoriamo le performance, ottimizziamo i sistemi e forniamo assistenza per garantire che la soluzione funzioni sempre al meglio."
    },
    {
        question: "Quali settori servite?",
        answer: "Lavoriamo con una vasta gamma di settori, tra cui retail, sanità, immobiliare, servizi professionali e molti altri. L’automazione AI può portare benefici a quasi ogni tipo di business."
    },
    {
        question: "Devo cambiare i miei software attuali?",
        answer: "No. Le nostre soluzioni si integrano con gli strumenti che già utilizzi (CRM, gestionali, calendari, etc.), potenziandoli senza costringerti a stravolgere i tuoi processi."
    }
]

export function Faq() {
  return (
    <section id="faqs" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-left mb-12">
            <p className="font-headline text-sm uppercase tracking-widest text-primary mb-2">Risposte</p>
            <h2 className="font-headline text-4xl md:text-5xl font-bold">FAQs</h2>
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
