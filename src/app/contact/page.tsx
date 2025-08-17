import Head from 'next/head';
import Link from 'next/link';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact DailyNaamJap - App Support, Feedback & Suggestions</title>
        <meta name="description" content="Contact DailyNaamJap team for technical support, feature requests, bug reports & feedback. Get help with digital mala counter, mantra chanting app issues. 24-48 hour response time guaranteed." />
        <meta name="keywords" content="DailyNaamJap contact, naam jaap app support, spiritual app help, mala counter support, technical support spiritual app, app feedback, feature requests, bug reports" />
        <link rel="canonical" href="https://dailynaamjap.vercel.app/contact" />
        <meta property="og:title" content="Contact DailyNaamJap - App Support, Feedback & Suggestions" />
        <meta property="og:description" content="Contact DailyNaamJap team for technical support, feature requests & feedback. Get help with digital mala counter & mantra chanting app. 24-48 hour response guaranteed." />
        <meta property="og:url" content="https://dailynaamjap.vercel.app/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://dailynaamjap.vercel.app/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Contact DailyNaamJap Support Team" />
        <meta property="og:site_name" content="DailyNaamJap" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@dailynaamjap" />
        <meta name="twitter:creator" content="@dailynaamjap" />
        <meta name="twitter:title" content="Contact DailyNaamJap Support - Quick Help & Feedback" />
        <meta name="twitter:description" content="Get technical support, report bugs, request features. 24-48 hour response time. We're here to help with your spiritual practice!" />
        <meta name="twitter:image" content="https://dailynaamjap.vercel.app/og-image.png" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50 py-8 px-4">
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
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h1>
            
            <div className="prose prose-lg text-gray-700">
              <p className="text-xl mb-8">
                We'd love to hear from you! Whether you have questions, feedback, 
                or suggestions for improving Naam Jaap, please don't hesitate to reach out.
              </p>
              
              <div className="bg-orange-50 border-l-4 border-orange-400 p-6 mb-8">
                <h2 className="text-xl font-semibold text-orange-800 mb-4">Get in Touch</h2>
                <ul className="space-y-3 text-orange-700">
                  <li className="flex items-center">
                    <span className="text-2xl mr-3">📧</span>
                    <strong>Email:</strong> support@example.com
                  </li>
                  <li className="flex items-center">
                    <span className="text-2xl mr-3">🌐</span>
                    <strong>Website:</strong> www.naamjaap.app
                  </li>
                  <li className="flex items-center">
                    <span className="text-2xl mr-3">📱</span>
                    <strong>WhatsApp:</strong> +91-XXXXXXXXXX
                  </li>
                </ul>
              </div>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">How We Can Help</h2>
              <ul className="space-y-2">
                <li>✅ Technical support and troubleshooting</li>
                <li>✅ Feature requests and suggestions</li>
                <li>✅ Bug reports and issue resolution</li>
                <li>✅ General questions about spiritual practice</li>
                <li>✅ Feedback on app usability and design</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Response Time</h2>
              <p>
                We typically respond to all inquiries within 24-48 hours. For urgent 
                technical issues, please mark your email as "URGENT" in the subject line.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Community</h2>
              <p>
                Join our growing community of spiritual practitioners. Share your 
                experiences, ask questions, and connect with others on their spiritual journey.
              </p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">
                  🙏 We Appreciate Your Feedback
                </h3>
                <p className="text-blue-700">
                  Your suggestions help us improve Naam Jaap for everyone. Whether it's 
                  adding new mantras, improving features, or fixing bugs, your input 
                  shapes the future of our app.
                </p>
              </div>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Privacy</h2>
              <p>
                When you contact us, we only use your information to respond to your 
                inquiry. We never share your contact details with third parties or 
                use them for marketing purposes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}