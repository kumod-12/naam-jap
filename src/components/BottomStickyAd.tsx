'use client';

import { useEffect, useState } from 'react';

export default function BottomStickyAd() {
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isClient) {
      setTimeout(() => {
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (err) {
          console.log('AdSense error:', err);
        }
      }, 100);
    }
  }, [isClient, isMobile]);

  if (!isClient) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      height: isMobile ? '60px' : '100px',
      backgroundColor: '#ffffff',
      borderTop: '1px solid #e5e5e5',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 50
    }}>
      <div style={{ fontSize: '10px', color: '#666', marginBottom: '2px' }}>
        Advertisement
      </div>
      <ins 
        className="adsbygoogle"
        style={{ 
          display: 'block',
          width: isMobile ? '300px' : '728px',
          height: isMobile ? '50px' : '90px'
        }}
        data-ad-client="ca-pub-2243677965278567"
        data-ad-slot={isMobile ? "9592063681" : "5130074497"}
      />
    </div>
  );
}