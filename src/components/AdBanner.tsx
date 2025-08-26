'use client';

import { useEffect } from 'react';

interface AdBannerProps {
  adSlot: string;
  adFormat?: string;
  responsive?: boolean;
  style?: React.CSSProperties;
  width?: string;
  height?: string;
}

export default function AdBanner({ 
  adSlot, 
  adFormat = 'auto', 
  responsive = true,
  style,
  width = 'auto',
  height = 'auto'
}: AdBannerProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, []);

  const adStyle = style || {
    display: 'inline-block',
    width: width,
    height: height
  };

  return (
    <div className="ad-container my-4 text-center">
      <ins
        className="adsbygoogle"
        style={adStyle}
        data-ad-client="ca-pub-2243677965278567"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={responsive.toString()}
      ></ins>
    </div>
  );
}