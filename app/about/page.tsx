import Image from 'next/image';
import Link from 'next/link';

const BRAND_BLUE = '#4292fc';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-4">
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
          <Link href="/about" style={{ color: BRAND_BLUE }} className="font-medium">
            About us
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="relative py-16 md:py-24"
        style={{ 
          background: `linear-gradient(135deg, ${BRAND_BLUE}10 0%, ${BRAND_BLUE}05 50%, white 100%)`
        }}
      >
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            About us
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We&apos;re on a mission to make planning hangouts as fun as the hangouts themselves.
          </p>
        </div>
      </section>

      {/* Mission Image */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 -mt-8">
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="/images/mockup2.png"
            alt="Easy Meets App"
            width={1000}
            height={500}
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 py-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            We are a team of City University of New York (CUNY) students united by personal frustrations, including conflicting interests, varying budgets, and the time-consuming task of planning a hangout and finding suitable nearby activities. Additionally, the surge of social media exacerbates this issue, leading to an overwhelming amount of scrolling, scattered information, and increased expenses. This challenge isn&apos;t limited to local experiences; it also affects travelers who often miss out on fantastic opportunities.
          </p>
          
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            To address these issues, we created <span style={{ color: BRAND_BLUE }} className="font-semibold">Easy Meets</span>. Easy Meets simplifies the process, making it a breeze to plan individual or group hangouts. Let us handle the logistics while you focus on having fun. With us, every outing is stress-free and memorable.
          </p>
          
          <p className="text-gray-600 text-lg leading-relaxed">
            Our technology ensures that organizing a trip with multiple individuals is smooth and efficient. Say goodbye to the hassle – Easy Meets has got you covered. From the business perspective, Easy Meets provides access to numerous tools and analytics to maximize profit.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Meet the Team
          </h2>
          
          <div className="flex justify-center">
            <div className="text-center">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-xl mb-6 ring-4 ring-white">
                <Image
                  src="/images/founder.jpg"
                  alt="Marwh Nabil"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Marwh Nabil</h3>
              <p style={{ color: BRAND_BLUE }} className="font-medium text-lg">Founder</p>
              <p className="text-gray-600 mt-2 max-w-xs mx-auto">
                CUNY College of Staten Island graduate passionate about solving real-world problems through technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Recognition & Support
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="font-bold text-gray-900 text-lg">CUNY Startups</h3>
              <p className="text-gray-600 mt-1">New Venture Accelerator 1 & 2</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="font-bold text-gray-900 text-lg">Founder Fellowship</h3>
              <p className="text-gray-600 mt-1">Selected Fellow</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="font-bold text-gray-900 text-lg">Global Venture Founders</h3>
              <p className="text-gray-600 mt-1">Program Member</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        className="py-20"
        style={{ backgroundColor: BRAND_BLUE }}
      >
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
            Have questions, feedback, or want to collaborate? We&apos;d love to hear from you!
          </p>
          
          <a 
            href="mailto:easymeetsnyc@gmail.com"
            className="inline-block bg-white font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors text-lg"
            style={{ color: BRAND_BLUE }}
          >
            easymeetsnyc@gmail.com
          </a>
          
          {/* Social Links */}
          <div className="flex justify-center gap-4 mt-10">
            <a 
              href="https://www.linkedin.com/company/easy-meets" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-[#0077B5] hover:scale-110 transition-transform"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/easymeetsapp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-14 h-14 bg-white rounded-xl flex items-center justify-center hover:scale-110 transition-transform"
            >
              <svg className="w-7 h-7" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="instagram-gradient-about" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#F77737" />
                    <stop offset="50%" stopColor="#FD1D1D" />
                    <stop offset="100%" stopColor="#833AB4" />
                  </linearGradient>
                </defs>
                <path fill="url(#instagram-gradient-about)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-8 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Easy Meets. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-700">
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
