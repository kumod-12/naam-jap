import Head from 'next/head';
import Link from 'next/link';

export default function KrishnaPage() {
  return (
    <>
      <Head>
        <title>Krishna Naam Jaap - हरे कृष्ण हरे कृष्ण | Hare Krishna Mantra | Digital Mala</title>
        <meta name="description" content="Chant हरे कृष्ण हरे कृष्ण (Hare Krishna Hare Krishna) with our free digital mala counter. Experience divine love, spiritual bliss & Lord Krishna's grace. ISKCON approved Mahamantra chanting." />
        <meta name="keywords" content="Krishna naam jaap, हरे कृष्ण, Hare Krishna, Krishna mantra, Lord Krishna chanting, कृष्ण जप, ISKCON mantra, Mahamantra, Govinda, Gopala, Bhagavad Gita, Vrindavan, divine love, spiritual bliss" />
        <link rel="canonical" href="https://www.dailynaamjap.com/deity/krishna" />
        <meta property="og:title" content="Krishna Naam Jaap - हरे कृष्ण Mahamantra | Digital Mala Counter" />
        <meta property="og:description" content="Experience divine love through Krishna's sacred Mahamantra. Free digital mala counter for ISKCON approved chanting. Perfect for spiritual bliss & bhakti yoga." />
        <meta property="og:url" content="https://www.dailynaamjap.com/deity/krishna" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.dailynaamjap.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Hare Krishna Naam Jaap - Digital Mala Counter for Mahamantra" />
        <meta property="og:site_name" content="Daily Naam Jap" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@dailynaamjap" />
        <meta name="twitter:creator" content="@dailynaamjap" />
        <meta name="twitter:title" content="Hare Krishna Mahamantra - हरे कृष्ण | Free Digital Mala" />
        <meta name="twitter:description" content="Chant the divine Mahamantra with our free digital mala counter! Experience Krishna's love & spiritual bliss through sacred naam jaap." />
        <meta name="twitter:image" content="https://www.dailynaamjap.com/og-image.png" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Krishna Naam Jaap",
              "description": "Digital mala counter for Lord Krishna's sacred mantra हरे कृष्ण हरे कृष्ण",
              "url": "/deity/krishna",
              "about": {
                "@type": "Person",
                "name": "Lord Krishna",
                "alternateName": ["Krsna", "कृष्ण", "Govinda", "Gopala"],
                "description": "Hindu deity, eighth avatar of Vishnu, central figure in Bhagavad Gita",
                "sameAs": [
                  "https://en.wikipedia.org/wiki/Krishna",
                  "https://www.britannica.com/topic/Krishna-Hindu-deity"
                ]
              },
              "mainEntity": {
                "@type": "SpiritualPractice",
                "name": "Krishna Naam Jaap",
                "description": "Chanting the sacred name of Lord Krishna for spiritual awakening and divine love",
                "mantra": "हरे कृष्ण हरे कृष्ण",
                "transliteration": "Hare Krishna Hare Krishna",
                "fullMantra": "Hare Krishna Hare Krishna Krishna Krishna Hare Hare Hare Rama Hare Rama Rama Rama Hare Hare",
                "benefits": [
                  "Divine love and bliss",
                  "Spiritual awakening",
                  "Liberation from material bondage",
                  "Pure consciousness",
                  "Eternal happiness"
                ]
              }
            })
          }}
        />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8 px-4">
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
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-8 text-center">
              <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🦚</span>
              </div>
              <h1 className="text-3xl font-bold mb-2">Lord Krishna Naam Jaap</h1>
              <p className="text-xl opacity-90">हरे कृष्ण हरे कृष्ण</p>
              <p className="text-lg opacity-80">Hare Krishna Hare Krishna</p>
            </div>
            
            <div className="p-8">
              <div className="prose prose-lg text-gray-700 max-w-none">
                <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-600">About Lord Krishna</h2>
                <p>
                  Lord Krishna, the eighth avatar of Lord Vishnu, embodies divine love, compassion, 
                  and supreme consciousness. The sacred Hare Krishna mantra is one of the most 
                  powerful spiritual practices, known to awaken pure love of God and liberate 
                  the soul from material bondage.
                </p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3 text-blue-600">Sacred Mantra</h3>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-blue-800 mb-2">हरे कृष्ण हरे कृष्ण</p>
                    <p className="text-lg text-blue-700">Hare Krishna Hare Krishna</p>
                    <p className="text-sm text-blue-600 mt-2">Oh Lord Krishna, please engage me in Your service</p>
                  </div>
                  <div className="mt-4 p-4 bg-blue-100 rounded">
                    <p className="text-sm text-blue-800 mb-2"><strong>Complete Maha Mantra:</strong></p>
                    <p className="text-blue-700 font-semibold">
                      Hare Krishna Hare Krishna<br/>
                      Krishna Krishna Hare Hare<br/>
                      Hare Rama Hare Rama<br/>
                      Rama Rama Hare Hare
                    </p>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mt-6 mb-3 text-blue-600">Spiritual Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">💙</span>
                    <div>
                      <strong>Divine Love (Prema):</strong> Awakens pure, unconditional love for the Supreme Lord
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">🌟</span>
                    <div>
                      <strong>Spiritual Awakening:</strong> Purifies consciousness and reveals the soul's true nature
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">🔓</span>
                    <div>
                      <strong>Liberation:</strong> Frees the soul from the cycle of birth and death
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">😌</span>
                    <div>
                      <strong>Eternal Bliss:</strong> Brings lasting happiness that transcends material pleasure
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">🧘‍♂️</span>
                    <div>
                      <strong>Pure Consciousness:</strong> Elevates awareness to the transcendental platform
                    </div>
                  </li>
                </ul>
                
                <h3 className="text-xl font-semibold mt-6 mb-3 text-blue-600">The Science of Kirtan</h3>
                <p>
                  Chanting the Hare Krishna mantra is called "sankirtana" - the congregational 
                  chanting of the holy names. According to Vedic scriptures, this is the most 
                  effective spiritual practice for the current age (Kali Yuga).
                </p>
                
                <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 my-6">
                  <h4 className="font-semibold text-indigo-800 mb-2">Three Aspects of the Mantra:</h4>
                  <ul className="text-indigo-700 space-y-1">
                    <li><strong>Hare:</strong> The divine energy of the Lord (Radha)</li>
                    <li><strong>Krishna:</strong> The all-attractive Supreme Lord</li>
                    <li><strong>Rama:</strong> The reservoir of all pleasure</li>
                  </ul>
                </div>
                
                <h3 className="text-xl font-semibold mt-6 mb-3 text-blue-600">How to Practice</h3>
                <ol className="space-y-3">
                  <li><strong>1. Pure Intention:</strong> Chant with sincere desire for spiritual advancement</li>
                  <li><strong>2. Attentive Hearing:</strong> Listen carefully to each syllable of the mantra</li>
                  <li><strong>3. Regular Practice:</strong> Commit to daily chanting, ideally 16 rounds (1,728 mantras)</li>
                  <li><strong>4. Humble Attitude:</strong> Approach with humility and devotion</li>
                  <li><strong>5. Avoid Offenses:</strong> Chant respectfully without committing spiritual offenses</li>
                </ol>
                
                <h3 className="text-xl font-semibold mt-6 mb-3 text-blue-600">Best Times for Chanting</h3>
                <ul className="space-y-2">
                  <li>🌅 <strong>Early Morning:</strong> 4:00-8:00 AM (most recommended)</li>
                  <li>🌸 <strong>Brahma Muhurta:</strong> 1.5 hours before sunrise</li>
                  <li>🌙 <strong>Evening:</strong> During sunset meditation</li>
                  <li>📅 <strong>Ekadashi:</strong> Fasting days are especially auspicious</li>
                  <li>⭐ <strong>Anytime:</strong> The holy name can be chanted at any time</li>
                </ul>
                
                <h3 className="text-xl font-semibold mt-6 mb-3 text-blue-600">Scriptural Authority</h3>
                <blockquote className="border-l-4 border-blue-400 pl-4 italic text-gray-600">
                  "हरेर्नाम हरेर्नाम हरेर्नामैव केवलम्।<br/>
                  कलौ नास्त्येव नास्त्येव नास्त्येव गतिरन्यथा॥"<br/>
                  <span className="text-sm">"In this age of Kali, there is no other way, no other way, no other way for spiritual realization than chanting the holy name."</span>
                  <cite className="block text-sm mt-2">- Brihan-naradiya Purana</cite>
                </blockquote>
                
                <h3 className="text-xl font-semibold mt-6 mb-3 text-blue-600">ISKCON Tradition</h3>
                <p>
                  The International Society for Krishna Consciousness (ISKCON) has spread 
                  the practice of Hare Krishna chanting worldwide. Devotees typically 
                  chant 16 rounds daily on japa beads, which equals 1,728 mantras.
                </p>
                
                <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg p-6 mt-8 text-center">
                  <h4 className="text-xl font-semibold text-blue-800 mb-3">Begin Your Krishna Consciousness Journey</h4>
                  <p className="text-blue-700 mb-4">
                    Experience the transcendental bliss of Krishna's holy names with our digital mala counter
                  </p>
                  <Link 
                    href="/?deity=Krishna" 
                    className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    Start Chanting Hare Krishna 🦚
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