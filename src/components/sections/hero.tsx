import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden py-32 sm:py-48">
        <div className="absolute inset-0 bg-black -z-10">
            <div className="absolute inset-0 bg-grid-white/[0.07]"></div>
             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
        </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <Card className="inline-block p-1 px-3 mb-6 rounded-full bg-primary/10 border-primary/20">
            <CardContent className="p-0">
                <p className="text-sm font-medium text-primary">"Abbiamo ridotto i costi del 70% e liberato il nostro team per la crescita."</p>
            </CardContent>
          </Card>
          
          <h1 className="font-headline text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
            Intelligenza Artificiale per Piccole e Medie Imprese.
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-lg text-gray-300">
            Sistemi AI su misura per automatizzare le vendite, il marketing e il servizio clienti. Riduci i costi e aumenta l'efficienza.
          </p>
          <div className="mt-10">
            <Button asChild size="lg" className="bg-primary text-primary-foreground font-bold hover:bg-primary/90 text-lg px-8 py-6 rounded-full">
              <a href="#services">
                Scopri come
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
