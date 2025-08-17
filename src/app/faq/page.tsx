import Head from 'next/head';
import Link from 'next/link';

export default function FAQ() {
  return (
    <>
      <Head>
        <title>FAQ - Naam Jaap App Questions & Answers | सामान्य प्रश्न</title>
        <meta name="description" content="Frequently asked questions about Naam Jaap app, mala counting, spiritual practice, and app features. Get answers to common queries." />
        <meta name="keywords" content="naam jaap FAQ, mala counter questions, spiritual app help, chanting app guide" />
        <link rel="canonical" href="/faq" />
        <meta property="og:title" content="FAQ - Naam Jaap App Questions & Answers" />
        <meta property="og:description" content="Get answers to frequently asked questions about Naam Jaap app and spiritual practice." />
        <meta property="og:url" content="/faq" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <nav className="mb-8">
            <Link href="/" className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 dark:bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-600 dark:hover:bg-orange-700 transition-all duration-200 shadow-md hover:shadow-lg group">
              <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to App
            </Link>
          </nav>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h1>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">What is a Mala?</h3>
                <p className="text-gray-700">
                  A mala is a string of 108 beads used in Hindu and Buddhist traditions for counting 
                  mantras during meditation. The number 108 is considered sacred, representing the 
                  universe's wholeness. Our app digitally replicates this traditional counting system.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">How is my data stored?</h3>
                <p className="text-gray-700">
                  All your chanting data is stored locally in your browser's storage. We don't 
                  collect, transmit, or store any personal information on external servers. 
                  Your spiritual practice remains completely private.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Does the app work offline?</h3>
                <p className="text-gray-700">
                  Yes! Once loaded, the app works completely offline. You can practice your naam 
                  jaap anywhere without an internet connection. This makes it perfect for meditation 
                  retreats, travel, or quiet spaces without wifi.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Which mantras are included?</h3>
                <p className="text-gray-700">
                  We include mantras for six popular deities: Ram (श्री राम जय राम), Krishna 
                  (हरे कृष्ण), Radhe (राधे राधे), Vitthal (विट्ठल), Samb Sadashiv (शम्भो शंकर), 
                  and Waheguru (वाहे गुरु). Each mantra is available in both Hindi and English.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">How do I set daily goals?</h3>
                <p className="text-gray-700">
                  In the settings panel, you can set your daily mala target (1-108 malas). 
                  The app will track your progress toward this goal. Start small with 1-2 malas 
                  daily and gradually increase as your practice deepens.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">What is the vibration feature?</h3>
                <p className="text-gray-700">
                  The vibration feature provides tactile feedback for each count and mala completion. 
                  This helps you maintain focus without looking at the screen. You can enable or 
                  disable this feature in the settings.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Can I install this as an app?</h3>
                <p className="text-gray-700">
                  Yes! This is a Progressive Web App (PWA). You can install it on your phone's 
                  home screen for a native app experience. Look for the "Add to Home Screen" 
                  option in your browser menu.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Is there a cost to use the app?</h3>
                <p className="text-gray-700">
                  The app is completely free to use. We believe spiritual practice should be 
                  accessible to everyone. The app is supported by optional donations and 
                  non-intrusive advertisements.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">How do I reset my count?</h3>
                <p className="text-gray-700">
                  Use the yellow reset button to reset your current mala count. To reset all 
                  data (total counts, completed malas), go to Settings and use the "Reset All Data" 
                  button. This action cannot be undone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}