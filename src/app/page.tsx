import { Metadata } from 'next';
import HomeComponent from './HomeComponent';

export const metadata: Metadata = {
  title: "Daily Naam Jap - Free Digital Mala Counter | Spiritual Chanting App",
  description: "Free digital mala counter for Hindu & Sikh devotional practices. Track naam jaap with 108-bead counting, 6 deity mantras, dark mode & offline support. Start your spiritual journey today!",
  alternates: {
    canonical: "https://www.dailynaamjap.com",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MobileApplication",
            "name": "Daily Naam Jap",
            "alternateName": "नाम जप",
            "description": "Free digital mala counter for Hindu & Sikh devotional practices. Track your daily naam jaap, mala counting, and spiritual progress.",
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
              "name": "Daily Naam Jap"
            },
            "url": "https://www.dailynaamjap.com",
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
      <HomeComponent />
    </>
  );
}