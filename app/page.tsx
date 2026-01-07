'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setLoading(true);
    try {
      // TODO: Connect to Supabase waitlist table
      // For now, just simulate success
      await new Promise(resolve => setTimeout(resolve, 500));
      setSubmitted(true);
      setEmail('');
    } catch (error) {
      console.error('Error:', error);
    }
    setLoading(false);
  };

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
          <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
            About us
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#E8F4FF] via-[#F0F8FF] to-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Easy Meets simplifies planning{' '}
                <span className="text-[#3B9EFF]">hangouts & trips</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Easy Meets is built to ensure your plans matches your interests, whether you love to plan ahead or enjoy being spontaneous.
              </p>
              
              {/* Waitlist Form */}
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 max-w-md">
                  <p className="text-green-700 font-medium">🎉 You&apos;re on the list! We&apos;ll notify you when we launch.</p>
                </div>
              ) : (
                <form onSubmit={handleWaitlist} className="flex gap-3 max-w-md">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3B9EFF] focus:border-transparent"
                    required
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-3 bg-[#3B9EFF] text-white font-semibold rounded-xl hover:bg-[#2B8EEF] transition-colors disabled:opacity-50"
                  >
                    {loading ? '...' : 'Join wait-list'}
                  </button>
                </form>
              )}
            </div>

            {/* Right - Phone Mockups */}
            <div className="relative flex justify-center items-center min-h-[500px]">
              <div className="relative w-full max-w-lg">
                {/* Main phone - Discover */}
                <div className="relative z-10 mx-auto w-[220px] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-gray-900">
                  <Image
                    src="/images/mockup1.jpg"
                    alt="Discover Screen"
                    width={220}
                    height={440}
                    className="w-full"
                  />
                </div>
                {/* Left phone - Common Places */}
                <div className="absolute left-0 top-8 w-[180px] rounded-[1.5rem] overflow-hidden shadow-xl border-4 border-gray-900 -rotate-6 opacity-90">
                  <Image
                    src="/images/mockup3.png"
                    alt="Common Places"
                    width={180}
                    height={360}
                    className="w-full"
                  />
                </div>
                {/* Right phone - Place Detail */}
                <div className="absolute right-0 top-12 w-[180px] rounded-[1.5rem] overflow-hidden shadow-xl border-4 border-gray-900 rotate-6 opacity-90">
                  <Image
                    src="/images/mockup2.png"
                    alt="Place Detail"
                    width={180}
                    height={360}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Easy Meets Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Why use Easy Meets?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <FeatureCard
              emoji="🥹"
              title="Effortlessly creates multi-person plans"
              description="Find places everyone in your group will love based on shared interests."
            />
            <FeatureCard
              emoji="🔍"
              title="Eliminates endless searching"
              description="No more scrolling through social media or review sites to find the perfect spot."
            />
            <FeatureCard
              emoji="🥇"
              title="Generates last-minute plans"
              description="Get personalized recommendations based on your interests and location instantly."
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <FeatureCard
              emoji="🌍"
              title="Explores locally and internationally"
              description="Discover hidden gems in your city or plan adventures abroad."
            />
            <FeatureCard
              emoji="🧠"
              title="Maximizes time during outings"
              description="Smart routing and scheduling to help you make the most of every hangout."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            How It Works?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <HowItWorksStep
              step="1"
              title="Explore & Save"
              description="Swipe through curated places and save your favorites."
              image="/images/mockup1.jpg"
            />
            <HowItWorksStep
              step="2"
              title="Find mutual interest"
              description="See places your friends also love - find common ground instantly."
              image="/images/mockup3.png"
            />
            <HowItWorksStep
              step="3"
              title="Instantly plan"
              description="Create a plan with nearby places and share it with your group."
              image="/images/mockup2.png"
            />
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
            Recognized By
          </h3>
          <div className="flex flex-wrap justify-center gap-8 text-gray-600">
            <span className="px-4 py-2 bg-gray-50 rounded-lg">CUNY Startups Accelerator</span>
            <span className="px-4 py-2 bg-gray-50 rounded-lg">Founder Fellowship</span>
            <span className="px-4 py-2 bg-gray-50 rounded-lg">Global Venture Founders</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left - Brand & Waitlist */}
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4">
                <Image 
                  src="/images/logo.png" 
                  alt="Easy Meets" 
                  width={32} 
                  height={32}
                />
                <span className="text-lg font-bold">
                  <span className="text-[#3B9EFF]">Easy</span>
                  <span className="text-gray-800"> Meets</span>
                </span>
              </Link>
              <p className="text-gray-600 mb-4">Join our waitlist</p>
              <form onSubmit={handleWaitlist} className="flex gap-2 max-w-sm">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#3B9EFF]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#3B9EFF] text-white text-sm font-semibold rounded-lg hover:bg-[#2B8EEF] transition-colors"
                >
                  Join Waitlist
                </button>
              </form>
            </div>

            {/* Right - Links & Social */}
            <div className="flex flex-col md:items-end">
              <p className="text-gray-600 mb-4">Connect with us</p>
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/company/easy-meets" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#0077B5] rounded-lg flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.instagram.com/easymeetsapp" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] rounded-lg flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
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
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ emoji, title, description }: { emoji: string; title: string; description: string }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{emoji}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

function HowItWorksStep({ step, title, description, image }: { step: string; title: string; description: string; image: string }) {
  return (
    <div className="text-center">
      <div className="relative mx-auto w-[200px] rounded-[1.5rem] overflow-hidden shadow-xl border-4 border-gray-900 mb-6">
        <Image
          src={image}
          alt={title}
          width={200}
          height={400}
          className="w-full"
        />
      </div>
      <div className="inline-block bg-[#3B9EFF] text-white text-sm font-bold px-3 py-1 rounded-full mb-3">
        Step {step}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
