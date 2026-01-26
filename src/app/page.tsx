import { Header } from '@/components/layout/header';
import { Hero } from '@/components/sections/hero';
import { HowItWorks } from '@/components/sections/how-it-works';
import { Services } from '@/components/sections/services';
import { CaseStudies } from '@/components/sections/case-studies';
import { Faq } from '@/components/sections/faq';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/layout/footer';
import { Partners } from '@/components/sections/partners';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <Partners />
        <HowItWorks />
        <Services />
        <CaseStudies />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
