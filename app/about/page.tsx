import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-4">
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
          <Link href="/about" className="text-[#3B9EFF] font-medium">
            About us
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#E8F4FF] via-[#F0F8FF] to-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About us
          </h1>
        </div>
      </section>

      {/* Mission Image */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 -mt-8">
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/images/mockup2.png"
            alt="Easy Meets App"
            width={800}
            height={400}
            className="w-full h-64 md:h-80 object-cover"
          />
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            We are a team of City University of New York (CUNY) students united by personal frustrations, including conflicting interests, varying budgets, and the time-consuming task of planning a hangout and finding suitable nearby activities. Additionally, the surge of social media exacerbates this issue, leading to an overwhelming amount of scrolling, scattered information, and increased expenses. This challenge isn&apos;t limited to local experiences; it also affects travelers who often miss out on fantastic opportunities.
          </p>
          
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            To address these issues, we created Easy Meets. Easy Meets simplifies the process, making it a breeze to plan individual or group hangouts. Let us handle the logistics while you focus on having fun. With us, every outing is stress-free and memorable.
          </p>
          
          <p className="text-gray-600 text-lg leading-relaxed">
            Our technology ensures that organizing a trip with multiple individuals is smooth and efficient. Say goodbye to the hassle – Easy Meets has got you covered. From the business perspective, Easy Meets provides access to numerous tools and analytics to maximize profit.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Team
          </h2>
          
          <div className="flex justify-center">
            <div className="text-center">
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden shadow-lg mb-4">
                <Image
                  src="/images/founder.jpg"
                  alt="Marwh Nabil"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Marwh Nabil</h3>
              <p className="text-gray-600">Founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Recognition
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-100 rounded-xl p-6 text-center shadow-sm">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="font-semibold text-gray-900">CUNY Startups</h3>
              <p className="text-sm text-gray-600">New Venture Accelerator 1 & 2</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-6 text-center shadow-sm">
              <div className="text-3xl mb-3">🎓</div>
              <h3 className="font-semibold text-gray-900">Founder Fellowship</h3>
              <p className="text-sm text-gray-600">Selected Fellow</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-6 text-center shadow-sm">
              <div className="text-3xl mb-3">🌍</div>
              <h3 className="font-semibold text-gray-900">Global Venture Founders</h3>
              <p className="text-sm text-gray-600">Member</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#3B9EFF] py-16">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Contact Information
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <Image 
              src="/images/logo.png" 
              alt="Easy Meets" 
              width={32} 
              height={32}
              className="w-8 h-8"
            />
            <span className="text-xl font-bold text-white">Easy Meets</span>
          </div>
          <a 
            href="mailto:easymeetsnyc@gmail.com"
            className="inline-block bg-white text-[#3B9EFF] font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors"
          >
            easymeetsnyc@gmail.com
          </a>
          
          {/* Social Links */}
          <div className="flex justify-center gap-4 mt-8">
            <a 
              href="https://www.linkedin.com/company/easy-meets" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-[#0077B5] hover:opacity-90 transition-opacity"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/easymeetsapp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity"
            >
              <svg className="w-6 h-6" fill="url(#instagram-gradient)" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#F77737" />
                    <stop offset="50%" stopColor="#FD1D1D" />
                    <stop offset="100%" stopColor="#833AB4" />
                  </linearGradient>
                </defs>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

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
            <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-700">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
