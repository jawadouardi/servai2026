"use client";

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { 'agent-id': string }, HTMLElement>;
    }
  }
}

export function ElevenLabsWidget() {
  const pathname = usePathname();
  const [showWidget, setShowWidget] = useState(false);

  useEffect(() => {
    if (pathname !== "/materassi-in-linea-demo") {
      setShowWidget(true);
    } else {
      setShowWidget(false);
    }
  }, [pathname]);

  if (!showWidget) {
    return null;
  }

  return (
    <>
      <elevenlabs-convai agent-id="agent_9001k92q8svve0082zyn606c7k76"></elevenlabs-convai>
      <Script
        src="https://unpkg.com/@elevenlabs/convai-widget-embed"
        strategy="lazyOnload"
      />
    </>
  );
}
