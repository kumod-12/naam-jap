'use client';

import { useEffect, useState } from 'react';

export default function BottomFixedAd() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log('AdSense error:', err);
    }
  }, [isMobile]);

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-lg"
      style={{
        height: isMobile ? '60px' : '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5px'
      }}
    >
      <div className="ad-container">
        {isMobile ? (
          // Mobile Bottom_fixed-ad 300x50
          <ins 
            className="adsbygoogle"
            style={{ 
              display: 'block',
              width: '300px', 
              height: '50px'
            }}
            data-ad-client="ca-pub-2243677965278567"
            data-ad-slot="9592063681"
          ></ins>
        ) : (
          // Desktop bottom-sticky-desktop 728x90
          <ins 
            className="adsbygoogle"
            style={{ 
              display: 'block',
              width: '728px', 
              height: '90px'
            }}
            data-ad-client="ca-pub-2243677965278567"
            data-ad-slot="5130074497"
          ></ins>
        )}
      </div>
    </div>
  );
}