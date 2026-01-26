import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Bot, BarChart, Zap } from 'lucide-react';

const services = [
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Outreach & Lead Generation",
    description: "Automatizza l'acquisizione di nuovi clienti con campagne multicanale e sistemi di qualificazione lead intelligenti."
  },
  {
    icon: <Bot className="w-8 h-8 text-primary" />,
    title: "Assistenti Vocali AI",
    description: "Un assistente vocale attivo 24/7 per gestire prenotazioni, rispondere a domande frequenti e non perdere mai più una chiamata."
  },
  {
    icon: <BarChart className="w-8 h-8 text-primary" />,
    title: "Sales & Data Analytics",
    description: "Trasforma le conversazioni di vendita in dati. Analizza le performance, identifica le migliori strategie e ottimizza i risultati."
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "Automazioni su Misura",
    description: "Integriamo i tuoi software (CRM, gestionali, calendari) in un unico ecosistema intelligente che automatizza i task ripetitivi."
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-headline text-sm uppercase tracking-widest text-primary mb-2">Servizi</p>
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Le Nostre Soluzioni</h2>
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
