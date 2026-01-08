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
            width={60} 
            height={60}
            className="w-14 h-14 md:w-16 md:h-16"
          />
          <span className="text-2xl md:text-3xl font-bold">
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

      {/* Our Story */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 py-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Today there is a huge gap between outings that involve more than one person and the tools to plan them. Customer surveys show that 70% of young people struggle with making plans with friends and maintaining a work-life balance, forcing many to forfeit their social life.
          </p>
          
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            We recognize CUNY&apos;s vast commuter population, which forces students to put their social life as their last priority. We&apos;ve lived it, and we&apos;ve seen countless other young adults going through the same issues. The pain isn&apos;t just in the long hours or the packed schedules—it&apos;s in the planning process. The endless back-and-forths, the approval headaches, and the never-ending cycle of canceled plans because the whole process is just too inefficient.
          </p>
          
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            <span style={{ color: BRAND_BLUE }} className="font-semibold">Easy Meets</span> is born out of these same struggles. We&apos;ve felt that sting of putting our social lives on the back burner, and seeing our friends less and less as we navigate this novel adult life. It doesn&apos;t get any easier when we step into the workforce.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            With endless choices and logistical challenges to plan, Easy Meets streamlines the process, transforming it into a fun and hassle-free experience. No more missed opportunities, no more canceled trips, no more trips to the same spot—it&apos;s time to take control of your social life.
          </p>
          
          <p className="text-gray-600 text-lg leading-relaxed">
            Easy Meets is a marketplace that simplifies planning hangouts and trips for users and provides businesses with valuable information about potential customers who have expressed interest in their business. Let Easy Meets be your partner in making every meet-up affordable, enjoyable, and, most importantly, hassle-free.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Meet the Founder
          </h2>
          
          <div className="flex justify-center">
            <div className="max-w-2xl">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="w-48 h-48 rounded-full overflow-hidden shadow-xl ring-4 ring-white">
                    <Image
                      src="/images/founder.jpg"
                      alt="Marwh Nabil"
                      width={192}
                      height={192}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-900">Marwh Nabil</h3>
                  <p style={{ color: BRAND_BLUE }} className="font-medium text-lg mb-4">Founder</p>
                  <p className="text-gray-600 leading-relaxed">
                    &ldquo;My passion for accessible tourism and belief in simplifying information inspired me to build Easy Meets. What began as a travel solution quickly grew into a platform for both travelers and locals, after realizing how much time is lost to overwhelming, scattered planning. Easy Meets helps people spend less time organizing and more time experiencing, while giving small businesses a simple way to connect with the right customers and stay top of mind in a fast-paced, digital world.&rdquo;
                  </p>
                </div>
              </div>
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
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="font-bold text-gray-900 text-lg">Standard Chartered</h3>
              <p className="text-gray-600 mt-1">Women+Tech Prize Winner</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="font-bold text-gray-900 text-lg">Blackstone LaunchPad</h3>
              <p className="text-gray-600 mt-1">Selected Fellow</p>
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
