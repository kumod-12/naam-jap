import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ThemeProvider from '@/components/ThemeProvider';
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
  title: "DailyNaamJap - Spiritual Chanting Counter App | नाम जप",
  description: "Free spiritual chanting counter app for Hindu and Sikh devotional practices. Track your daily naam jaap and malas with our digital mala counter.",
  keywords: "daily naam jaap, chanting counter, mala counter, spiritual app, meditation, hindu prayers, sikh prayers",
  authors: [{ name: "DailyNaamJap Team" }],
  creator: "DailyNaamJap",
  publisher: "DailyNaamJap",
  robots: "index, follow",
  openGraph: {
    title: "DailyNaamJap - Spiritual Chanting Counter App",
    description: "Track your spiritual chanting practice with our free naam jaap counter app",
    siteName: "DailyNaamJap",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DailyNaamJap - Spiritual Chanting Counter",
    description: "Track your spiritual chanting practice with our free naam jaap counter app",
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
        <meta name="apple-mobile-web-app-title" content="DailyNaamJap" />
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
      </body>
    </html>
  );
}
