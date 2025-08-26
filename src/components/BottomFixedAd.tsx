'use client';

import { useEffect } from 'react';

export default function BottomFixedAd() {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-2 flex justify-center shadow-lg">
      {/* Bottom_fixed-ad */}
      <ins 
        className="adsbygoogle"
        style={{ display: 'inline-block', width: '300px', height: '50px' }}
        data-ad-client="ca-pub-2243677965278567"
        data-ad-slot="9592063681"
      ></ins>
    </div>
  );
}