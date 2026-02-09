import Image from 'next/image';
import Link from 'next/link';

const BRAND_BLUE = '#4292fc';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-4 border-b border-gray-100">
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src="/images/logo.png" 
            alt="Easy Meets" 
            width={50} 
            height={50}
            className="w-12 h-12 md:w-14 md:h-14"
          />
          <span className="text-2xl font-bold">
            <span style={{ color: BRAND_BLUE }}>Easy</span>
            <span className="text-gray-800"> Meets</span>
          </span>
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
            About us
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 md:px-12 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-gray-500 mb-8">Last updated: February 2026</p>

        <div className="prose prose-gray max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-600 mb-4">
              Easy Meets (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and website (collectively, the &quot;Service&quot;).
            </p>
            <p className="text-gray-600">
              Please read this Privacy Policy carefully. By using the Service, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-medium text-gray-900 mb-3">Personal Information</h3>
            <p className="text-gray-600 mb-4">
              When you create an account, we may collect:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Name and username</li>
              <li>Email address</li>
              <li>Profile photo (optional)</li>
              <li>Authentication information (if using Google Sign-In or email)</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mb-3">Usage Information</h3>
            <p className="text-gray-600 mb-4">
              We automatically collect certain information when you use the Service:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Places you like or save</li>
              <li>Plans you create and share</li>
              <li>Friends and connections you make</li>
              <li>Device information and app usage patterns</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mb-3">Location Information</h3>
            <p className="text-gray-600">
              With your permission, we collect your location to show nearby places and provide location-based recommendations. You can disable location services at any time through your device settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Provide, maintain, and improve the Service</li>
              <li>Personalize your experience with relevant place recommendations</li>
              <li>Enable you to connect with friends and share plans</li>
              <li>Show you places near your location</li>
              <li>Send you updates about your plans and activity</li>
              <li>Respond to your comments and questions</li>
              <li>Detect, prevent, and address technical issues</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Services</h2>
            <p className="text-gray-600 mb-4">We use the following third-party services:</p>
            
            <h3 className="text-xl font-medium text-gray-900 mb-3">Supabase</h3>
            <p className="text-gray-600 mb-4">
              We use Supabase to store and manage user data, including account information, likes, and plans. Supabase provides secure database storage and authentication services.
            </p>

            <h3 className="text-xl font-medium text-gray-900 mb-3">Google Sign-In</h3>
<p className="text-gray-600">
  We offer Google Sign-In as an authentication option. When you sign in with Google, we receive your name, email address, and profile photo. Google&apos;s privacy policy governs their collection and use of data.
</p>

           
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Sharing</h2>
            <p className="text-gray-600 mb-4">
              We do not sell your personal information. We may share your information in the following situations:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><strong>With your friends:</strong> When you add friends or share plans, they can see your profile and shared content</li>
              <li><strong>With service providers:</strong> We share data with third-party services that help us operate the Service</li>
              <li><strong>For legal reasons:</strong> We may disclose information if required by law or to protect our rights</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-600">
              We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
            <p className="text-gray-600 mb-4">You have the right to:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your account and all associated data through Settings → Delete Account in the app</li>
              <li>Opt out of marketing communications</li>
              <li>Disable location services</li>
            </ul>
            <p className="text-gray-600 mt-4">
              To exercise these rights, please contact us at hello@easymeets-app.com.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Children&apos;s Privacy</h2>
            <p className="text-gray-600">
              The Service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we discover that a child under 13 has provided us with personal information, we will delete it immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Policy</h2>
            <p className="text-gray-600">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="text-gray-600 space-y-2">
              <li><strong>Email:</strong> easymeetsnyc@gmail.com</li>
              <li><strong>Website:</strong> easymeets-app.com</li>
            </ul>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-8 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Easy Meets. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm font-medium" style={{ color: BRAND_BLUE }}>
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-700">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
