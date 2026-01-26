import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { placeholderImages } from "@/lib/placeholder-images";

const steps = [
  {
    step: "01",
    title: "Audit & Strategia",
    description: "Iniziamo con un'analisi approfondita dei tuoi processi per identificare le migliori opportunità di automazione e definire una strategia su misura.",
    image: placeholderImages[0],
  },
  {
    step: "02",
    title: "Sviluppo e Integrazione",
    description: "Sviluppiamo e integriamo le soluzioni AI nei tuoi sistemi esistenti (CRM, calendari, gestionali) per un'operatività fluida e senza interruzioni.",
    image: placeholderImages[1],
  },
  {
    step: "03",
    title: "Ottimizzazione & Supporto",
    description: "Formiamo il tuo team, monitoriamo le performance del sistema e ottimizziamo costantemente i flussi per garantire il massimo risultato nel tempo.",
    image: placeholderImages[2],
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-headline text-sm uppercase tracking-widest text-primary mb-2">Processo</p>
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Il Nostro Processo</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <Card key={step.step} className="bg-card border-border/50 rounded-2xl overflow-hidden flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-5xl font-bold font-headline text-primary/30">{step.step}</span>
                </div>
                <CardTitle className="font-headline text-xl h-16">{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <CardDescription className="mb-6">{step.description}</CardDescription>
                 <div className="relative aspect-square w-full rounded-lg overflow-hidden mt-auto">
                   <Image 
                    src={step.image.imageUrl} 
                    alt={step.image.description} 
                    fill
                    className="object-cover"
                    data-ai-hint={step.image.imageHint} />
                 </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
