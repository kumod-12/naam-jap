'use client';

import { useEffect } from 'react';

interface AdBannerProps {
  adSlot: string;
  adFormat?: string;
  responsive?: boolean;
  style?: React.CSSProperties;
}

export default function AdBanner({ 
  adSlot, 
  adFormat = 'auto', 
  responsive = true,
  style = { display: 'block' }
}: AdBannerProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="ad-container my-4 text-center">
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-client="ca-pub-8211637256753557"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={responsive.toString()}
      ></ins>
    </div>
  );
}