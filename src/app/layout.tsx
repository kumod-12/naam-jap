import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ThemeProvider from '@/components/ThemeProvider';
import BottomFixedAd from '@/components/BottomFixedAd';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.dailynaamjap.com'),
  title: "Daily Naam Jap - Free Digital Mala Counter | Spiritual Chanting App",
  description: "Free digital mala counter for Hindu & Sikh devotional practices. Track naam jaap with 108-bead counting, 6 deity mantras, dark mode & offline support. Start your spiritual journey today!",
  keywords: [
    "digital mala counter",
    "naam jaap app",
    "spiritual chanting counter", 
    "hindu prayer app",
    "sikh prayer app",
    "meditation app",
    "mantra counter",
    "108 beads",
    "daily spiritual practice",
    "devotional app",
    "free mala counter",
    "offline spiritual app"
  ],
  authors: [{ name: "Daily Naam Jap Team", url: "https://www.dailynaamjap.com" }],
  creator: "Daily Naam Jap",
  publisher: "Daily Naam Jap",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  category: "Lifestyle",
  classification: "Spiritual & Religious Apps",
  openGraph: {
    type: "website",
    title: "Daily Naam Jap - Free Digital Mala Counter | Spiritual Chanting App",
    description: "Free digital mala counter for Hindu & Sikh devotional practices. Track naam jaap with 108-bead counting, 6 deity mantras, dark mode & offline support.",
    siteName: "Daily Naam Jap",
    locale: "en_US",
    url: "https://www.dailynaamjap.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Daily Naam Jap - Digital Mala Counter for Spiritual Practice",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@dailynaamjap",
    creator: "@dailynaamjap",
    title: "Daily Naam Jap - Free Digital Mala Counter",
    description: "Free digital mala counter for Hindu & Sikh devotional practices. Track naam jaap with 108-bead counting, 6 deity mantras & offline support.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://www.dailynaamjap.com",
  },
  verification: {
    google: "your-google-verification-code",
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Daily Naam Jap",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-S9Z26PS6QV"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-S9Z26PS6QV');
            `,
          }}
        />
        
        {/* Google AdSense */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2243677965278567" crossOrigin="anonymous"></script>
        
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem('theme');
                  if (savedTheme) {
                    if (savedTheme === 'dark') {
                      document.documentElement.classList.add('dark');
                    }
                  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <link rel="stylesheet" href="/styles.css" />
        <link rel="icon" href="/favicon-32.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#f97316" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Daily Naam Jap" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          margin: 0,
          padding: 0,
          fontFamily: 'Arial, Helvetica, sans-serif',
          backgroundColor: '#ffffff',
          color: '#171717',
          minHeight: '100vh'
        }}
      >
        <ThemeProvider />
        {children}
        <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-4 mt-auto mb-16">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Copyright © 2025 Daily Naam Jap - All Rights Reserved.
            </p>
          </div>
        </footer>
        <BottomFixedAd />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
