'use client';

import { useEffect } from 'react';

export default function AdSenseScript() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2243677965278567';
    script.async = true;
    script.crossOrigin = 'anonymous';
    
    // Check if script is already loaded
    if (!document.querySelector(`script[src="${script.src}"]`)) {
      document.head.appendChild(script);
    }
    
    return () => {
      // Cleanup if needed
      const existingScript = document.querySelector(`script[src="${script.src}"]`);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return null;
}