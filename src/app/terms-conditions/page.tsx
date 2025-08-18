import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Terms & Conditions - Daily Naam Jap App Usage Guidelines | नियम और शर्तें",
  description: "Daily Naam Jap terms & conditions: Free use guidelines for digital mala counter. Spiritual practice terms, app usage rules, intellectual property & user responsibilities for naam jaap counting.",
  keywords: ["naam jaap terms conditions", "spiritual app terms", "app usage guidelines", "digital mala terms", "free app conditions", "spiritual practice guidelines", "user agreement", "intellectual property", "app licensing"],
  alternates: {
    canonical: "https://www.dailynaamjap.com/terms-conditions",
  },
  openGraph: {
    title: "Terms & Conditions - Daily Naam Jap App Usage Guidelines",
    description: "Free use guidelines for Daily Naam Jap digital mala counter. Spiritual practice terms, app usage rules & user responsibilities for secure naam jaap experience.",
    url: "https://www.dailynaamjap.com/terms-conditions",
    type: "article",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Daily Naam Jap Terms & Conditions - App Usage Guidelines",
      },
    ],
    siteName: "Daily Naam Jap",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@dailynaamjap",
    creator: "@dailynaamjap",
    title: "Daily Naam Jap Terms & Conditions - Free App Usage Guidelines",
    description: "Free spiritual app terms: Usage guidelines for digital mala counter, user responsibilities & spiritual practice rules. Fair use policy.",
    images: ["/og-image.png"],
  },
  robots: "index, follow, max-image-preview:large",
};

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-50 py-8 px-4">
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
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Terms & Conditions</h1>
          
          <div className="prose prose-lg text-gray-700">
            <p className="text-sm text-gray-500 mb-6">
              <strong>Last updated:</strong> August 16, 2024
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Welcome to Naam Jaap</h2>
            <p>
              By using the Naam Jaap app, you agree to these Terms and Conditions. 
              Please read them carefully as they govern your use of our spiritual 
              practice application.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Acceptance of Terms</h2>
            <p>
              By accessing or using Naam Jaap, you acknowledge that you have read, 
              understood, and agree to be bound by these Terms and Conditions and 
              our Privacy Policy.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Purpose of the App</h2>
            <p>
              Naam Jaap is designed to support your spiritual practice by:
            </p>
            <ul className="space-y-2">
              <li>✨ Facilitating chanting and mantra recitation</li>
              <li>✨ Tracking spiritual progress and mala counts</li>
              <li>✨ Providing guidance for devotional practices</li>
              <li>✨ Supporting multiple spiritual traditions</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Spiritual Use Guidelines</h2>
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-6">
              <h4 className="font-semibold text-amber-800 mb-2">🙏 Sacred Purpose</h4>
              <p className="text-amber-700">
                This app is intended for sincere spiritual practice. Please use it 
                with respect, devotion, and genuine intent for spiritual growth.
              </p>
            </div>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Respectful Usage</h3>
            <ul className="space-y-2">
              <li>Use the app for legitimate spiritual practice</li>
              <li>Respect the sacred nature of mantras and divine names</li>
              <li>Maintain focus and devotion during chanting</li>
              <li>Avoid misusing the app for non-spiritual purposes</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">User Responsibilities</h2>
            <h3 className="text-xl font-semibold mt-6 mb-3">Personal Practice</h3>
            <ul className="space-y-2">
              <li>You are responsible for your own spiritual journey</li>
              <li>Set realistic and healthy practice goals</li>
              <li>Seek guidance from qualified spiritual teachers when needed</li>
              <li>Use the app as a tool, not a substitute for genuine devotion</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Device and Data</h3>
            <ul className="space-y-2">
              <li>Ensure your device meets app requirements</li>
              <li>Backup your spiritual progress if desired</li>
              <li>Understand that data is stored locally on your device</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Intellectual Property</h2>
            <h3 className="text-xl font-semibold mt-6 mb-3">App Content</h3>
            <ul className="space-y-2">
              <li>The app design and code are protected by copyright</li>
              <li>Mantras and spiritual content are part of ancient traditions</li>
              <li>You may not copy, modify, or redistribute the app</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Sacred Texts</h3>
            <p>
              The mantras and spiritual content in this app are part of ancient 
              religious and spiritual traditions. We honor their sacred nature 
              and present them with utmost respect.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">App Availability</h2>
            <ul className="space-y-2">
              <li>The app is provided "as is" for spiritual practice</li>
              <li>We strive for 100% uptime but cannot guarantee it</li>
              <li>We may update or modify the app to improve functionality</li>
              <li>Your locally stored data remains yours always</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Limitation of Liability</h2>
            <h3 className="text-xl font-semibold mt-6 mb-3">Spiritual Guidance</h3>
            <p>
              This app is a tool for spiritual practice and does not replace:
            </p>
            <ul className="space-y-2">
              <li>Personal spiritual guidance from qualified teachers</li>
              <li>Traditional religious instruction</li>
              <li>Medical or psychological treatment</li>
              <li>Professional counseling services</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Technical Issues</h3>
            <p>
              We are not liable for data loss, technical problems, or interruptions 
              in service. Please backup important spiritual progress data.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Free Service</h2>
            <p>
              Naam Jaap is provided free of charge to support spiritual practice. 
              We believe spiritual tools should be accessible to everyone regardless 
              of economic circumstances.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Community Guidelines</h2>
            <ul className="space-y-2">
              <li>Maintain respect for all spiritual traditions</li>
              <li>Use the sharing features responsibly</li>
              <li>Avoid promoting commercial interests through the app</li>
              <li>Report any technical issues to help improve the app</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to Terms</h2>
            <p>
              We may update these Terms and Conditions periodically. Continued 
              use of the app after changes constitutes acceptance of new terms.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Termination</h2>
            <p>
              You may stop using the app at any time. We reserve the right to 
              discontinue the service with notice, though we are committed to 
              maintaining this spiritual tool for the community.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Information</h2>
            <p>
              For questions about these Terms and Conditions:
            </p>
            <ul className="space-y-1">
              <li>📧 <strong>Email:</strong> legal@example.com</li>
              <li>🌐 <strong>Website:</strong> www.naamjaap.app/contact</li>
            </ul>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-8">
              <h4 className="font-semibold text-blue-800 mb-2">🕉️ Spiritual Blessing</h4>
              <p className="text-blue-700">
                May your spiritual practice bring you peace, joy, and divine 
                connection. We are honored to support your devotional journey.
              </p>
            </div>
            
            <p className="text-center text-lg font-semibold mt-8 text-orange-600">
              🙏 ॐ शांति शांति शांति 🙏
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}