import Image from 'next/image';
import Link from 'next/link';

const BRAND_BLUE = '#4292fc';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-4 border-b border-gray-100">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/logo.png" alt="Easy Meets" width={50} height={50} className="w-12 h-12 md:w-14 md:h-14" />
          <span className="text-2xl font-bold">
            <span style={{ color: BRAND_BLUE }}>Easy</span>
            <span className="text-gray-800"> Meets</span>
          </span>
        </Link>
        <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">About us</Link>
      </nav>

      <main className="max-w-4xl mx-auto px-6 md:px-12 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms of Service</h1>
        <p className="text-gray-500 mb-8">Last updated: January 2025</p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600">Welcome to Easy Meets! By accessing or using our mobile application and website, you agree to be bound by these Terms of Service. If you do not agree to these Terms, please do not use the Service.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
            <p className="text-gray-600">Easy Meets is a social planning application that helps users discover places, save favorites, connect with friends, and create group plans.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Accounts</h2>
            <p className="text-gray-600 mb-4">To use certain features, you must create an account. You agree to provide accurate information, maintain account security, and be responsible for all activities under your account. You must be at least 13 years old to use the Service.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. User Content</h2>
            <p className="text-gray-600">You retain ownership of content you submit. By posting, you grant Easy Meets a license to use and display your content. Do not post unlawful, harmful, or infringing content.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Acceptable Use</h2>
            <p className="text-gray-600">Do not use the Service for illegal purposes, attempt unauthorized access, interfere with the Service, scrape data, impersonate others, or harass users.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Third-Party Content</h2>
            <p className="text-gray-600">The Service displays content from third parties including Yelp. We do not control or endorse third-party content. Verify place information directly before visiting.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Intellectual Property</h2>
            <p className="text-gray-600">The Service and its content are owned by Easy Meets and protected by intellectual property laws.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Disclaimer of Warranties</h2>
            <p className="text-gray-600">THE SERVICE IS PROVIDED AS IS WITHOUT WARRANTIES OF ANY KIND. WE DO NOT GUARANTEE THE SERVICE WILL BE UNINTERRUPTED OR ERROR-FREE.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Limitation of Liability</h2>
            <p className="text-gray-600">EASY MEETS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING FROM YOUR USE OF THE SERVICE.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Termination</h2>
            <p className="text-gray-600">We may terminate your account for any reason. You may delete your account through app settings or by contacting easymeetsnyc@gmail.com.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Governing Law</h2>
            <p className="text-gray-600">These Terms are governed by the laws of New York State, United States.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contact</h2>
            <p className="text-gray-600">Questions? Email us at easymeetsnyc@gmail.com</p>
          </section>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-100 py-8 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Easy Meets. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-700">Privacy Policy</Link>
            <Link href="/terms" className="text-sm font-medium" style={{ color: BRAND_BLUE }}>Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
