import Image from 'next/image';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-4 border-b border-gray-100">
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/images/logo.png" 
            alt="Easy Meets" 
            width={40} 
            height={40}
            className="w-10 h-10"
          />
          <span className="text-xl font-bold">
            <span className="text-[#3B9EFF]">Easy</span>
            <span className="text-gray-800"> Meets</span>
          </span>
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
            About us
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 md:px-12 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms of Service</h1>
        <p className="text-gray-500 mb-8">Last updated: January 2025</p>

        <div className="prose prose-gray max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-4">
              Welcome to Easy Meets! By accessing or using our mobile application and website (collectively, the &quot;Service&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please do not use the Service.
            </p>
            <p className="text-gray-600">
              Easy Meets reserves the right to modify these Terms at any time. We will notify users of any material changes by updating the &quot;Last updated&quot; date. Your continued use of the Service after any changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
            <p className="text-gray-600">
              Easy Meets is a social planning application that helps users discover places, save favorites, connect with friends, and create group plans. The Service allows users to browse curated places, see common interests with friends, and organize outings efficiently.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Accounts</h2>
            <p className="text-gray-600 mb-4">
              To use certain features of the Service, you must create an account. When creating an account, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
              <li>Be responsible for all activities that occur under your account</li>
            </ul>
            <p className="text-gray-600 mt-4">
              You must be at least 13 years old to use the Service. By creating an account, you represent that you meet this age requirement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. User Content</h2>
            <p className="text-gray-600 mb-4">
              You retain ownership of any content you submit, post, or display through the Service (&quot;User Content&quot;). By submitting User Content, you grant Easy Meets a non-exclusive, worldwide, royalty-free license to use, display, and distribute your content in connection with the Service.
            </p>
            <p className="text-gray-600">
              You are solely responsible for your User Content and agree not to post content that:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
              <li>Is unlawful, harmful, threatening, abusive, or harassing</li>
              <li>Infringes on any intellectual property rights</li>
              <li>Contains viruses or malicious code</li>
              <li>Violates the privacy of others</li>
              <li>Is spam or commercial solicitation</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Acceptable Use</h2>
            <p className="text-gray-600 mb-4">You agree not to:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Use the Service for any illegal purpose</li>
              <li>Attempt to gain unauthorized access to the Service or its systems</li>
              <li>Interfere with or disrupt the Service</li>
              <li>Scrape, crawl, or use automated means to access the Service without permission</li>
              <li>Impersonate any person or entity</li>
              <li>Harass, bully, or intimidate other users</li>
              <li>Use the Service to send unsolicited communications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Third-Party Content and Services</h2>
            <p className="text-gray-600 mb-4">
              The Service may display content from third parties, including place information from Yelp and other sources. Easy Meets does not control, endorse, or assume responsibility for any third-party content.
            </p>
            <p className="text-gray-600">
              Place information, including hours, ratings, and availability, is provided for informational purposes only. We recommend verifying details directly with the establishment before visiting.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Intellectual Property</h2>
            <p className="text-gray-600">
              The Service and its original content, features, and functionality are owned by Easy Meets and are protected by international copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, sell, or lease any part of the Service without our written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Disclaimer of Warranties</h2>
            <p className="text-gray-600">
              THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. EASY MEETS DOES NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE. WE DO NOT GUARANTEE THE ACCURACY, COMPLETENESS, OR RELIABILITY OF ANY CONTENT OR INFORMATION PROVIDED THROUGH THE SERVICE.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Limitation of Liability</h2>
            <p className="text-gray-600">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, EASY MEETS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SERVICE.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Indemnification</h2>
            <p className="text-gray-600">
              You agree to indemnify, defend, and hold harmless Easy Meets and its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising out of your use of the Service, your violation of these Terms, or your violation of any rights of another.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Termination</h2>
            <p className="text-gray-600 mb-4">
              We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason, including if you breach these Terms.
            </p>
            <p className="text-gray-600">
              You may delete your account at any time through the app settings or by contacting us at easymeetsnyc@gmail.com.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Governing Law</h2>
            <p className="text-gray-600">
              These Terms shall be governed by and construed in accordance with the laws of the State of New York, United States, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Dispute Resolution</h2>
            <p className="text-gray-600">
              Any dispute arising from these Terms or your use of the Service shall first be attempted to be resolved through good-faith negotiation. If the dispute cannot be resolved through negotiation, it shall be submitted to binding arbitration in New York, NY.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Severability</h2>
            <p className="text-gray-600">
              If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. Contact Information</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about these Terms, please contact us:
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
            © {new Date().getFullYear()} All rights reserved by Easy Meets
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-700">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-[#3B9EFF] font-medium">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
