export function Partners() {
    const marqueeText = "Dalla Lead Generation alla gestione del cliente, automatizziamo i processi aziendali con l'AI per scalare il tuo business.";

    return (
      <section id="partners" className="bg-card py-12 overflow-hidden">
        <div className="relative flex whitespace-nowrap">
          <div className="animate-marquee flex items-center">
            {Array(2).fill(0).map((_, i) => (
              <p key={i} className="text-4xl font-bold font-headline mx-12 text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-white to-gray-400">
                {marqueeText}
              </p>
            ))}
          </div>
           <div className="animate-marquee flex items-center" aria-hidden="true">
            {Array(2).fill(0).map((_, i) => (
              <p key={i} className="text-4xl font-bold font-headline mx-12 text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-white to-gray-400">
                {marqueeText}
              </p>
            ))}
          </div>
        </div>
      </section>
    );
  }
  