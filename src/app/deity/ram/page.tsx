import Head from 'next/head';
import Link from 'next/link';

export default function RamPage() {
  return (
    <>
      <Head>
        <title>Ram Naam Jaap - श्री राम जय राम जय जय राम | Chant Ram Mantra</title>
        <meta name="description" content="Chant श्री राम जय राम जय जय राम (Shri Ram Jai Ram Jai Jai Ram) with our digital mala counter. Experience the divine power of Lord Ram's sacred naam jaap." />
        <meta name="keywords" content="Ram naam jaap, श्री राम, Shri Ram Jai Ram, Ram mantra, Lord Ram chanting, राम जप, spiritual practice Ram" />
        <link rel="canonical" href="/deity/ram" />
        <meta property="og:title" content="Ram Naam Jaap - श्री राम जय राम जय जय राम" />
        <meta property="og:description" content="Chant Lord Ram's sacred mantra with digital mala counter. Experience divine devotion." />
        <meta property="og:url" content="/deity/ram" />
        <meta property="og:image" content="/images/ram-deity.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Ram Naam Jaap",
              "description": "Digital mala counter for Lord Ram's sacred mantra श्री राम जय राम जय जय राम",
              "url": "/deity/ram",
              "about": {
                "@type": "Person",
                "name": "Lord Ram",
                "alternateName": ["Sri Ram", "Rama", "श्री राम"],
                "description": "Hindu deity, seventh avatar of Vishnu, hero of Ramayana",
                "sameAs": [
                  "https://en.wikipedia.org/wiki/Rama",
                  "https://www.britannica.com/topic/Rama-Hindu-deity"
                ]
              },
              "mainEntity": {
                "@type": "SpiritualPractice",
                "name": "Ram Naam Jaap",
                "description": "Chanting the sacred name of Lord Ram for spiritual purification and divine connection",
                "mantra": "श्री राम जय राम जय जय राम",
                "transliteration": "Shri Ram Jai Ram Jai Jai Ram",
                "benefits": [
                  "Spiritual purification",
                  "Divine protection",
                  "Mental peace",
                  "Removal of obstacles",
                  "Moksha (liberation)"
                ]
              }
            })
          }}
        />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <nav className="mb-8">
            <Link href="/" className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 dark:bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-600 dark:hover:bg-orange-700 transition-all duration-200 shadow-md hover:shadow-lg group">
              <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to App
            </Link>
          </nav>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 text-center">
              <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🕉️</span>
              </div>
              <h1 className="text-3xl font-bold mb-2">Lord Ram Naam Jaap</h1>
              <p className="text-xl opacity-90">श्री राम जय राम जय जय राम</p>
              <p className="text-lg opacity-80">Shri Ram Jai Ram Jai Jai Ram</p>
            </div>
            
            <div className="p-8">
              <div className="prose prose-lg text-gray-700 max-w-none">
                <h2 className="text-2xl font-semibold mt-8 mb-4 text-orange-600">About Lord Ram</h2>
                <p>
                  Lord Ram, the seventh avatar of Lord Vishnu, is revered as the epitome of 
                  righteousness, virtue, and divine love. The sacred mantra "श्री राम जय राम जय जय राम" 
                  carries immense spiritual power and has been chanted by devotees for millennia.
                </p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3 text-orange-600">Sacred Mantra</h3>
                <div className="bg-orange-50 border-l-4 border-orange-400 p-6 my-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-orange-800 mb-2">श्री राम जय राम जय जय राम</p>
                    <p className="text-lg text-orange-700">Shri Ram Jai Ram Jai Jai Ram</p>
                    <p className="text-sm text-orange-600 mt-2">Victory to Lord Ram, the divine protector</p>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mt-6 mb-3 text-orange-600">Spiritual Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3 mt-1">🙏</span>
                    <div>
                      <strong>Divine Protection:</strong> Ram naam shields devotees from negative influences and provides divine protection
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3 mt-1">✨</span>
                    <div>
                      <strong>Spiritual Purification:</strong> Cleanses the mind and heart of impurities and negative karma
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3 mt-1">🧘</span>
                    <div>
                      <strong>Mental Peace:</strong> Brings tranquility and removes anxiety, stress, and mental disturbances
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3 mt-1">🛡️</span>
                    <div>
                      <strong>Obstacle Removal:</strong> Helps overcome challenges and removes barriers in spiritual and material life
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3 mt-1">🌟</span>
                    <div>
                      <strong>Moksha (Liberation):</strong> Leads to ultimate spiritual liberation and unity with the divine
                    </div>
                  </li>
                </ul>
                
                <h3 className="text-xl font-semibold mt-6 mb-3 text-orange-600">How to Practice</h3>
                <ol className="space-y-3">
                  <li><strong>1. Preparation:</strong> Sit in a comfortable position, preferably facing east</li>
                  <li><strong>2. Intention:</strong> Set a pure intention for spiritual growth and divine connection</li>
                  <li><strong>3. Chanting:</strong> Repeat the mantra with devotion and focus</li>
                  <li><strong>4. Counting:</strong> Use our digital mala counter to track 108 repetitions per mala</li>
                  <li><strong>5. Consistency:</strong> Practice daily for maximum spiritual benefit</li>
                </ol>
                
                <h3 className="text-xl font-semibold mt-6 mb-3 text-orange-600">Best Times for Practice</h3>
                <ul className="space-y-2">
                  <li>🌅 <strong>Brahma Muhurta:</strong> 4:00-6:00 AM (most auspicious)</li>
                  <li>🌇 <strong>Evening:</strong> During sunset (peaceful time)</li>
                  <li>🌙 <strong>Before Sleep:</strong> For peaceful dreams and divine protection</li>
                  <li>⭐ <strong>Ekadashi:</strong> Especially powerful on this sacred day</li>
                </ul>
                
                <h3 className="text-xl font-semibold mt-6 mb-3 text-orange-600">Scriptural References</h3>
                <blockquote className="border-l-4 border-orange-400 pl-4 italic text-gray-600">
                  "राम नाम जप करत कोई, जन्म मरण दुख छूटै सोई"<br/>
                  <span className="text-sm">"Whoever chants Ram's name, gets freed from the sorrows of birth and death"</span>
                  <cite className="block text-sm mt-2">- Saint Tulsidas</cite>
                </blockquote>
                
                <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-lg p-6 mt-8 text-center">
                  <h4 className="text-xl font-semibold text-orange-800 mb-3">Start Your Ram Naam Jaap</h4>
                  <p className="text-orange-700 mb-4">
                    Experience the divine power of Lord Ram's sacred name with our digital mala counter
                  </p>
                  <Link 
                    href="/?deity=Ram" 
                    className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    Start Chanting Now 🙏
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}