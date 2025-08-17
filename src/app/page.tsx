'use client';

import { useState } from 'react';
import Head from 'next/head';
import NaamJaapCore from '@/components/NaamJaapCore';

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);
  const [currentPage, setCurrentPage] = useState('main');

  return (
    <>
      <Head>
        <title>Naam Jaap - Spiritual Chanting Counter App | नाम जप</title>
        <meta name="description" content="Free spiritual chanting counter app for Ram, Krishna, Radhe, Vitthal, Samb Sadashiv, Waheguru. Track your daily naam jaap and malas. Available in Hindi and English." />
        <meta name="keywords" content="naam jaap, chanting counter, mala counter, spiritual app, राम, कृष्ण, राधे, विट्ठल, शम्भो शंकर, वाहेगुरु" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Naam Jaap - Spiritual Chanting Counter" />
        <meta property="og:description" content="Track your spiritual chanting practice with our free naam jaap counter app." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:site_name" content="Naam Jaap" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Naam Jaap - Spiritual Chanting Counter" />
        <meta name="twitter:description" content="Track your spiritual chanting practice with our free naam jaap counter app." />
        <meta name="twitter:image" content="/twitter-card.jpg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#f97316" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <link rel="canonical" href="" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MobileApplication",
              "name": "Naam Jaap",
              "alternateName": "नाम जप",
              "description": "Free spiritual chanting counter app for Hindu and Sikh devotional practices. Track your daily naam jaap, mala counting, and spiritual progress.",
              "applicationCategory": "LifestyleApplication",
              "operatingSystem": "Web Browser",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1250"
              },
              "author": {
                "@type": "Organization",
                "name": "Naam Jaap App"
              },
              "url": "",
              "image": "/icon-512x512.png",
              "featureList": [
                "108 bead mala counting",
                "6 deity mantras (Ram, Krishna, Radhe, Vitthal, Samb Sadashiv, Waheguru)",
                "Daily target setting",
                "Dark and light mode",
                "Hindi and English language support",
                "Offline functionality",
                "Vibration feedback"
              ],
              "keywords": "naam jaap, chanting counter, mala counter, spiritual app, meditation, hindu prayers, sikh prayers, devotional practice",
              "inLanguage": ["hi", "en"],
              "isAccessibleForFree": true
            })
          }}
        />
      </Head>
      <NaamJaapCore 
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
