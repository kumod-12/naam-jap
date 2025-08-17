import Head from 'next/head';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Naam Jaap App | गोपनीयता नीति</title>
        <meta name="description" content="Privacy policy for Naam Jaap app. Learn how we protect your spiritual practice data and maintain complete privacy." />
        <meta name="keywords" content="naam jaap privacy policy, spiritual app privacy, data protection, spiritual practice privacy" />
        <link rel="canonical" href="/privacy-policy" />
        <meta property="og:title" content="Privacy Policy - Naam Jaap App" />
        <meta property="og:description" content="Privacy policy for Naam Jaap app and data protection practices." />
        <meta property="og:url" content="/privacy-policy" />
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
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Privacy Policy</h1>
            
            <div className="prose prose-lg text-gray-700">
              <p className="text-sm text-gray-500 mb-6">
                <strong>Last updated:</strong> August 16, 2024
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Our Commitment to Privacy</h2>
              <p>
                At Naam Jaap, we understand that your spiritual practice is deeply personal. 
                We are committed to protecting your privacy and ensuring that your devotional 
                journey remains completely private and secure.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Data We Collect</h2>
              <h3 className="text-xl font-semibold mt-6 mb-3">Local Data Only</h3>
              <ul className="space-y-2">
                <li><strong>Chanting counts:</strong> Your mala counts and spiritual progress</li>
                <li><strong>App preferences:</strong> Language, theme, and audio settings</li>
                <li><strong>Daily targets:</strong> Your personal spiritual goals</li>
              </ul>
              
              <div className="bg-green-50 border-l-4 border-green-400 p-4 my-6">
                <h4 className="font-semibold text-green-800 mb-2">🔒 Complete Privacy</h4>
                <p className="text-green-700">
                  All your data is stored locally on your device only. We never collect, 
                  transmit, or store any personal information on external servers.
                </p>
              </div>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Data We DON'T Collect</h2>
              <ul className="space-y-2">
                <li>❌ Personal identification information</li>
                <li>❌ Location data</li>
                <li>❌ Contact information</li>
                <li>❌ Usage analytics (unless opted in)</li>
                <li>❌ Chanting data on external servers</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Data</h2>
              <p>
                Your locally stored data is used solely to:
              </p>
              <ul className="space-y-2">
                <li>✅ Track your spiritual progress</li>
                <li>✅ Maintain your app preferences</li>
                <li>✅ Provide personalized spiritual goals</li>
                <li>✅ Remember your favorite deities and mantras</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Services</h2>
              <h3 className="text-xl font-semibold mt-6 mb-3">Google Analytics (Optional)</h3>
              <p>
                If enabled, we may use Google Analytics to understand app usage patterns. 
                This data is anonymized and helps us improve the app. You can opt out 
                anytime in settings.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">No Social Media Tracking</h3>
              <p>
                We do not use social media pixels, advertising trackers, or any other 
                third-party tracking technologies.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
              <ul className="space-y-2">
                <li>🔐 All data remains on your device</li>
                <li>🔐 No data transmission to external servers</li>
                <li>🔐 You control all data deletion</li>
                <li>🔐 App works completely offline</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights</h2>
              <ul className="space-y-2">
                <li><strong>Data deletion:</strong> Clear all data anytime in app settings</li>
                <li><strong>Data export:</strong> Your data stays with you on your device</li>
                <li><strong>Opt-out:</strong> Disable any optional features anytime</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Children's Privacy</h2>
              <p>
                Our app is suitable for all ages. We do not knowingly collect personal 
                information from children under 13, as we don't collect personal information 
                from anyone.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to Privacy Policy</h2>
              <p>
                We may update this privacy policy occasionally. Any changes will be posted 
                on this page with an updated revision date.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
              <p>
                If you have questions about this privacy policy, please contact us at:
              </p>
              <ul className="space-y-1">
                <li>📧 <strong>Email:</strong> privacy@example.com</li>
                <li>🌐 <strong>Website:</strong> www.naamjaap.app/contact</li>
              </ul>
              
              <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mt-8">
                <h4 className="font-semibold text-orange-800 mb-2">🙏 Spiritual Promise</h4>
                <p className="text-orange-700">
                  We honor the sacred nature of your spiritual practice by ensuring 
                  complete privacy and security for your devotional journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}