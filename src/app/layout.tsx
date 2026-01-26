import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Script from 'next/script';
import { ElevenLabsWidget } from '@/components/elevenlabs-widget';

export const metadata: Metadata = {
  title: 'SERV AI | Assistenti Vocali, Chatbot e Automazioni AI',
  description: "SERV AI trasforma le PMI con intelligenza artificiale: assistenti vocali che rispondono 24/7, chatbot intelligenti e automazioni che riducono i costi fino al 70%. Supporto completo incluso.",
  openGraph: {
    title: 'SERV AI | Assistenti Vocali, Chatbot e Automazioni AI',
    description: "SERV AI trasforma le PMI con intelligenza artificiale: assistenti vocali che rispondono 24/7, chatbot intelligenti e automazioni che riducono i costi fino al 70%. Supporto completo incluso.",
    images: ['https://framerusercontent.com/images/pMXKf6x6AtcW9rYP62btrv6kpnk.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SERV AI | Assistenti Vocali, Chatbot e Automazioni AI',
    description: "SERV AI trasforma le PMI con intelligenza artificiale: assistenti vocali che rispondono 24/7, chatbot intelligenti e automazioni che riducono i costi fino al 70%. Supporto completo incluso.",
    images: ['https://framerusercontent.com/images/pMXKf6x6AtcW9rYP62btrv6kpnk.png'],
  },
  icons: {
    icon: [
      { url: 'https://framerusercontent.com/images/xojCokHwui7gf335Ah6JvZIzI.png', media: '(prefers-color-scheme: light)' },
      { url: 'https://framerusercontent.com/images/ftvnVsvP5wQAjlC7iDH3QJH5wqY.png', media: '(prefers-color-scheme: dark)' },
    ],
    apple: 'https://framerusercontent.com/images/mtbxR8bcvJsfNOfd4v0Z2t21o.png',
  },
  metadataBase: new URL('https://www.servai.it/'),
  alternates: {
    canonical: '/',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it-IT" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
        <Script
          id="gtag"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-S2DN7LEJS1"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-S2DN7LEJS1');
            `,
          }}
        />
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KMQGT2GD');
            `,
          }}
        />
        <ElevenLabsWidget />
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KMQGT2GD" height="0" width="0" style={{display: 'none', visibility: 'hidden'}}></iframe>
        </noscript>
      </body>
    </html>
  );
}
