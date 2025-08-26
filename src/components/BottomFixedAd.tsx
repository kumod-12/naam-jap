'use client';

import { useEffect, useState } from 'react';

export default function BottomFixedAd() {
  const [isMobile, setIsMobile] = useState(false);

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
      console.log(err);
    }
  }, [isMobile]);

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-lg flex justify-center items-center overflow-hidden ${isMobile ? 'h-16' : 'h-24'}`}>
      <div className="ad-container flex justify-center items-center">
        {isMobile ? (
          /* Mobile Bottom_fixed-ad 300x50 */
          <ins 
            className="adsbygoogle"
            style={{ 
              display: 'inline-block', 
              width: '300px', 
              height: '50px',
              minWidth: '300px',
              minHeight: '50px',
              maxWidth: '300px',
              maxHeight: '50px'
            }}
            data-ad-client="ca-pub-2243677965278567"
            data-ad-slot="9592063681"
            data-ad-format="fixed"
            data-full-width-responsive="false"
          ></ins>
        ) : (
          /* Desktop bottom-sticky-desktop 728x90 */
          <ins 
            className="adsbygoogle"
            style={{ 
              display: 'inline-block', 
              width: '728px', 
              height: '90px',
              minWidth: '728px',
              minHeight: '90px',
              maxWidth: '728px',
              maxHeight: '90px'
            }}
            data-ad-client="ca-pub-2243677965278567"
            data-ad-slot="5130074497"
            data-ad-format="fixed"
            data-full-width-responsive="false"
          ></ins>
        )}
      </div>
    </div>
  );
}