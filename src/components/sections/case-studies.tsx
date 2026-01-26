import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons/arrow-right";

const caseStudies = [
  {
    category: "Medico",
    title: "Studio dentistico aumenta le prenotazioni con un Assistente Vocale AI",
    description: "L'assistente AI gestisce prenotazioni e FAQ 24/7, riducendo il carico di lavoro del personale e garantendo che ogni potenziale paziente riceva una risposta immediata.",
    metrics: [
      { value: "+35%", label: "Nuovi appuntamenti" },
      { value: "-90%", label: "Chiamate perse" },
    ],
    imageSrc: "https://framerusercontent.com/images/vy51tWsQc14L2UHE2GS2AyYyQpM.png",
    imageAlt: "Studio Dentistico AI Assistant",
    link: "/case-studies/studio-dentistico-assistente-vocale-ai",
  },
  {
    category: "Retail",
    title: "Catena di palestre riattiva 2.400+ membri con campagne di Outreach AI",
    description: "Abbiamo implementato un sistema di chiamate automatiche per contattare ex-membri con offerte personalizzate, recuperando un'importante fetta di fatturato da un database inattivo.",
    metrics: [
      { value: "+28%", label: "Tasso di riattivazione" },
      { value: "€47k+", label: "Fatturato mensile recuperato" },
    ],
    imageSrc: "https://framerusercontent.com/images/55bxPeXMH4LeZyWmb0JOSJJJkSY.png",
    imageAlt: "Catena Palestre AI Campaign",
    link: "/case-studies/catena-palestre-riattivazione-lead-ai",
  },
  {
    category: "Agenzia",
    title: "Agenzia immobiliare qualifica il 73% dei lead con un Chatbot AI",
    description: "Il chatbot qualifica i visitatori del sito in base a budget e preferenze, sincronizzando i lead migliori direttamente nel CRM e permettendo agli agenti di concentrarsi solo sulle trattative più promettenti.",
    metrics: [
      { value: "+73%", label: "Lead qualificati al mese" },
      { value: "-65%", label: "Tempo speso su lead non qualificati" },
    ],
    imageSrc: "https://framerusercontent.com/images/qWNcpodz7MNhjnkcfpqjtk10.png",
    imageAlt: "Agenzia Immobiliare Chatbot",
    link: "/case-studies/agenzia-immobiliare-chatbot-qualificazione-lead",
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-headline text-sm uppercase tracking-widest text-primary mb-2">Casi di Successo</p>
          <h2 className="font-headline text-4xl md:text-5xl font-bold">I Risultati dei Nostri Clienti</h2>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {caseStudies.map((study, index) => (
            <div
              key={study.title}
              className="relative mb-8"
              style={{ top: `${index * 2}rem`, zIndex: index }}
            >
              <Link href={study.link}>
                <Card className="bg-card border-border/50 rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 group">
                  <div className="grid md:grid-cols-2">
                    <div className="p-8 flex flex-col justify-between">
                      <div>
                        <p className="text-muted-foreground text-sm mb-2">{study.category}</p>
                        <CardTitle className="font-headline text-2xl mb-4">{study.title}</CardTitle>
                        <CardDescription className="mb-6">{study.description}</CardDescription>
                      </div>
                      <div className="flex space-x-8">
                        {study.metrics.map(metric => (
                          <div key={metric.label}>
                            <p className="text-3xl font-bold font-headline text-primary">{metric.value}</p>
                            <p className="text-sm text-muted-foreground">{metric.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="relative min-h-[300px] overflow-hidden">
                      <Image
                        src={study.imageSrc}
                        alt={study.imageAlt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-4 right-4 bg-card/50 backdrop-blur-sm p-2 rounded-full text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <ArrowRightIcon className="w-5 h-5"/>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
