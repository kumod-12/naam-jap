import Head from 'next/head';
import Link from 'next/link';

export default function Benefits() {
  return (
    <>
      <Head>
        <title>Benefits of Naam Jaap - Spiritual & Mental Health Benefits | नाम जप के फायदे</title>
        <meta name="description" content="Discover the spiritual, mental, and emotional benefits of regular naam jaap practice. Learn how chanting mantras improves well-being and spiritual growth." />
        <meta name="keywords" content="naam jaap benefits, chanting benefits, spiritual benefits, meditation benefits, mantra benefits, mental health" />
        <link rel="canonical" href="/benefits" />
        <meta property="og:title" content="Benefits of Naam Jaap - Spiritual & Mental Health Benefits" />
        <meta property="og:description" content="Discover the spiritual and mental health benefits of regular naam jaap practice." />
        <meta property="og:url" content="/benefits" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8 px-4">
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
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Benefits of Naam Jaap</h1>
            
            <div className="prose prose-lg text-gray-700">
              <p className="text-xl mb-6">
                Regular practice of naam jaap offers profound benefits for spiritual, 
                mental, and emotional well-being.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Spiritual Benefits</h2>
              <ul className="space-y-3">
                <li><strong>Enhanced Devotion:</strong> Deepens connection with the divine</li>
                <li><strong>Spiritual Purification:</strong> Cleanses negative karma and thoughts</li>
                <li><strong>Inner Peace:</strong> Cultivates lasting tranquility and contentment</li>
                <li><strong>Divine Grace:</strong> Attracts blessings and spiritual protection</li>
                <li><strong>Consciousness Elevation:</strong> Raises awareness to higher spiritual planes</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Mental Health Benefits</h2>
              <ul className="space-y-3">
                <li><strong>Stress Reduction:</strong> Significantly lowers cortisol levels</li>
                <li><strong>Anxiety Relief:</strong> Calms the nervous system naturally</li>
                <li><strong>Improved Focus:</strong> Enhances concentration and mindfulness</li>
                <li><strong>Better Sleep:</strong> Promotes deeper, more restful sleep</li>
                <li><strong>Emotional Balance:</strong> Stabilizes mood and reduces reactivity</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Physical Benefits</h2>
              <ul className="space-y-3">
                <li><strong>Lower Blood Pressure:</strong> Relaxation response reduces hypertension</li>
                <li><strong>Improved Breathing:</strong> Deeper, more rhythmic breathing patterns</li>
                <li><strong>Reduced Inflammation:</strong> Stress reduction decreases inflammatory markers</li>
                <li><strong>Enhanced Immunity:</strong> Regular practice boosts immune function</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Scientific Research</h2>
              <p>
                Modern neuroscience confirms what ancient traditions have long known. Studies show 
                that repetitive chanting activates the parasympathetic nervous system, releases 
                beneficial neurotransmitters, and creates positive changes in brain structure.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Getting Started</h2>
              <p>
                Begin with just 5-10 minutes daily. Consistency is more important than duration. 
                Use our app to track your progress and maintain a regular practice that fits 
                your lifestyle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}