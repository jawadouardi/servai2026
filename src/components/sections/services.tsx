import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Bot, BarChart, Zap } from 'lucide-react';

const services = [
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "LEAD GENERATION & OUTREACH",
    description: "Generiamo e gestiamo nuovi contatti con campagne personalizzate e follow-up intelligenti su email e WhatsApp."
  },
  {
    icon: <Bot className="w-8 h-8 text-primary" />,
    title: "ASSISTENTI VOCALI AI",
    description: "Gestiscono chiamate e messaggi in autonomia, migliorano servizio clienti e aumentano i lead generati."
  },
  {
    icon: <BarChart className="w-8 h-8 text-primary" />,
    title: "ANALYTICS AI PER VENDITE",
    description: "Analisi conversazioni di vendita con intelligenza artificiale, Identificazione automatica di opportunità nelle trattative."
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "AUTOMAZIONI PERSONALIZZATE",
    description: "Colleghiamo i tuoi strumenti aziendali in un ecosistema automatizzato per massimizzare l'efficienza."
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-headline text-sm uppercase tracking-widest text-primary mb-2">Servizi</p>
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Cosa offriamo</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="bg-card border-border/50 rounded-2xl text-center items-center flex flex-col p-6">
              <CardHeader className="items-center p-0">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  {service.icon}
                </div>
                <CardTitle className="font-headline text-lg h-16">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
