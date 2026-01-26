import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons/arrow-right";

const caseStudies = [
  {
    category: "Medico",
    title: "Questo studio dentistico non perde neanche una chiamata con assistente vocale AI 24/7",
    description: "L'assistente vocale gestisce prenotazioni, conferme appuntamenti e FAQ sui trattamenti. Libera il personale alla poltrona e garantisce risposta immediata anche fuori orario, eliminando appuntamenti mancati.",
    metrics: [
      { value: "85%", label: "Tasso risposta chiamate" },
      { value: "-55%", label: "No-show appuntamenti" },
    ],
    imageSrc: "https://framerusercontent.com/images/vy51tWsQc14L2UHE2GS2AyYyQpM.png",
    imageAlt: "Studio Dentistico AI Assistant",
    link: "/case-studies/studio-dentistico-assistente-vocale-ai",
  },
  {
    category: "Retail",
    title: "Come una catena palestre riattiva oltre 2.400 iscritti inattivi con campagne AI",
    description: "Sistema di chiamate outbound automatizzate contatta ex-membri con offerte personalizzate basate su storico allenamenti. Promuove nuovi corsi e abbonamenti, recuperando fatturato da database dormiente senza agenti umani.",
    metrics: [
      { value: "+28%", label: "Tasso riattivazione" },
      { value: "€47.000", label: "Fatturato recuperato/mese" },
    ],
    imageSrc: "https://framerusercontent.com/images/55bxPeXMH4LeZyWmb0JOSJJJkSY.png",
    imageAlt: "Catena Palestre AI Campaign",
    link: "/case-studies/catena-palestre-riattivazione-lead-ai",
  },
  {
    category: "Agenzia",
    title: "Come una agenzia immobiliare qualifica 340 lead mensili con chatbot intelligente",
    description: "Chatbot sul sito conversa con visitatori, identifica budget e preferenze immobili, filtra curiosi da acquirenti seri. Sincronizza automaticamente dati qualificati nel CRM per follow-up mirato da agenti.",
    metrics: [
      { value: "73%", label: "Lead qualificati" },
      { value: "-65%", label: "Tempo agenti su prospect freddi" },
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
          <p className="font-headline text-sm uppercase tracking-widest text-primary mb-2">Case Studies</p>
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Casi di Applicazione</h2>
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
