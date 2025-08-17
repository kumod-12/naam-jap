import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <Head>
        <title>About Naam Jaap App - Spiritual Chanting Counter | नाम जप के बारे में</title>
        <meta name="description" content="Learn about Naam Jaap app features, spiritual benefits, and how this digital mala counter supports your devotional practice." />
        <meta name="keywords" content="about naam jaap, spiritual app features, mala counter benefits, devotional practice app" />
        <link rel="canonical" href="/about" />
        <meta property="og:title" content="About Naam Jaap App - Spiritual Chanting Counter" />
        <meta property="og:description" content="Learn about Naam Jaap app features and spiritual benefits." />
        <meta property="og:url" content="/about" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 py-8 px-4">
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
            <h1 className="text-3xl font-bold text-gray-800 mb-6">About Naam Jaap</h1>
            
            <div className="prose prose-lg text-gray-700">
              <p className="text-xl mb-6">
                Naam Jaap is your digital companion for spiritual chanting practice, 
                designed to support Hindu and Sikh devotional traditions.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Key Features</h2>
              <ul className="space-y-3">
                <li><strong>108 Bead Mala Counting:</strong> Traditional counting system with visual progress tracking</li>
                <li><strong>6 Deity Mantras:</strong> Ram, Krishna, Radhe, Vitthal, Samb Sadashiv, Waheguru</li>
                <li><strong>Daily Target Setting:</strong> Set and track your spiritual goals</li>
                <li><strong>Bilingual Support:</strong> Available in Hindi and English</li>
                <li><strong>Dark & Light Mode:</strong> Comfortable viewing in any lighting</li>
                <li><strong>Offline Functionality:</strong> Practice anywhere, anytime</li>
                <li><strong>Vibration Feedback:</strong> Tactile confirmation for each count</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
              <p>
                We aim to preserve and promote traditional spiritual practices through modern technology. 
                Naam Jaap bridges ancient wisdom with contemporary convenience, making devotional 
                practice accessible to everyone.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Privacy & Data</h2>
              <p>
                Your spiritual practice is personal. All data is stored locally on your device. 
                We don't collect, track, or share your chanting data with anyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}