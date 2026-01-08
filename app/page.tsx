'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const BRAND_BLUE = '#4292fc';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // If empty email, show red border
    if (!email || !email.trim()) {
      setError(true);
      return;
    }
    
    setError(false);
    setLoading(true);
    
    try {
      // Save to Supabase waitlist table
      const { error: insertError } = await supabase
        .from('waitlist')
        .insert([{ email: email.trim().toLowerCase() }]);
      
      if (insertError) {
        // If duplicate email, still show success (they're already on the list)
        if (insertError.code === '23505') {
          setSubmitted(true);
          setEmail('');
        } else {
          console.error('Error:', insertError);
          // Still show success to user for better UX
          setSubmitted(true);
          setEmail('');
        }
      } else {
        setSubmitted(true);
        setEmail('');
      }
    } catch (err) {
      console.error('Error:', err);
      // Show success anyway for better UX
      setSubmitted(true);
      setEmail('');
    }
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
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
          <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
            About us
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{ 
            background: `radial-gradient(ellipse at 30% 20%, ${BRAND_BLUE} 0%, transparent 50%),
                         radial-gradient(ellipse at 70% 80%, ${BRAND_BLUE} 0%, transparent 50%)`
          }}
        />
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
                style={{ backgroundColor: `${BRAND_BLUE}15`, color: BRAND_BLUE }}
              >
                <span>🚀</span>
                <span>Launching Soon</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Plan hangouts{' '}
                <span style={{ color: BRAND_BLUE }}>effortlessly</span>{' '}
                with friends
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
                Easy Meets helps you discover places, find common interests with friends, and create plans in seconds — not hours.
              </p>
              
              {/* Waitlist Form */}
              {submitted ? (
                <div 
                  className="border rounded-2xl p-4 max-w-md mx-auto lg:mx-0"
                  style={{ backgroundColor: '#E8F5E9', borderColor: '#A5D6A7' }}
                >
                  <p className="text-green-700 font-medium">🎉 You&apos;re on the list! We&apos;ll notify you when we launch.</p>
                </div>
              ) : (
                <form onSubmit={handleWaitlist} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError(false);
                    }}
                    className={`flex-1 px-5 py-4 rounded-xl border-2 focus:outline-none focus:ring-2 focus:border-transparent text-lg transition-colors ${
                      error ? 'border-red-500' : 'border-gray-200'
                    }`}
                    style={{ '--tw-ring-color': BRAND_BLUE } as React.CSSProperties}
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-8 py-4 text-white font-semibold rounded-xl transition-all disabled:opacity-50 hover:shadow-lg hover:scale-105"
                    style={{ backgroundColor: BRAND_BLUE }}
                  >
                    {loading ? 'Joining...' : 'Join Waitlist'}
                  </button>
                </form>
              )}
            </div>

            {/* Right - Phone Mockups */}
            <div className="relative flex justify-center items-center min-h-[500px] lg:min-h-[600px]">
              <div className="relative w-full max-w-lg">
                {/* Main phone - Discover */}
                <div className="relative z-20 mx-auto w-[240px] md:w-[280px] rounded-[2.5rem] overflow-hidden shadow-2xl border-[10px] border-gray-900 bg-gray-900">
                  <Image
                    src="/images/mockup1.jpg"
                    alt="Discover Screen"
                    width={280}
                    height={560}
                    className="w-full"
                  />
                </div>
                {/* Left phone - Common Places */}
                <div className="absolute left-0 md:-left-4 top-16 w-[160px] md:w-[200px] rounded-[2rem] overflow-hidden shadow-xl border-[6px] border-gray-900 -rotate-12 z-10">
                  <Image
                    src="/images/mockup3.png"
                    alt="Common Places"
                    width={200}
                    height={400}
                    className="w-full"
                  />
                </div>
                {/* Right phone - Place Detail */}
                <div className="absolute right-0 md:-right-4 top-20 w-[160px] md:w-[200px] rounded-[2rem] overflow-hidden shadow-xl border-[6px] border-gray-900 rotate-12 z-10">
                  <Image
                    src="/images/mockup2.png"
                    alt="Place Detail"
                    width={200}
                    height={400}
                    className="w-full"
                  />
                </div>
                
                {/* Decorative elements */}
                <div 
                  className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full opacity-20 blur-2xl"
                  style={{ backgroundColor: BRAND_BLUE }}
                />
                <div 
                  className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-20 blur-2xl"
                  style={{ backgroundColor: BRAND_BLUE }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Easy Meets Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why use Easy Meets?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We solve the headaches of planning so you can focus on making memories
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              emoji="🗺️"
              title="Discover Together"
              description="Swipe through curated places and see what your friends love too. No more guessing games."
            />
            <FeatureCard 
              emoji="⚡"
              title="Plan in Seconds"
              description="Turn liked places into actual plans with just a few taps. We handle the logistics."
            />
            <FeatureCard 
              emoji="👥"
              title="Find Common Ground"
              description="Instantly see places you and your friends both want to visit. Perfect for group decisions."
            />
            <FeatureCard 
              emoji="📍"
              title="Local & Travel Ready"
              description="Works for your neighborhood hangout or exploring new cities abroad."
            />
            <FeatureCard 
              emoji="🔔"
              title="Stay in Sync"
              description="Get notified when friends are free or invite you to plans. Never miss out."
            />
            <FeatureCard 
              emoji="💰"
              title="Budget Friendly"
              description="Filter by price range so everyone can enjoy without breaking the bank."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps to your next hangout
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            <HowItWorksStep 
              step="1"
              title="Discover Places"
              description="Swipe through restaurants, cafes, activities, and more. Like what catches your eye."
              image="/images/mockup1.jpg"
            />
            <HowItWorksStep 
              step="2"
              title="Find Common Interests"
              description="See places you and your friends both liked. Perfect matches for group outings."
              image="/images/mockup3.png"
            />
            <HowItWorksStep 
              step="3"
              title="Create Your Plan"
              description="Pick your spots, set a date, and invite friends. We'll handle the rest."
              image="/images/mockup2.png"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-20 md:py-28 px-6 md:px-12"
        style={{ backgroundColor: BRAND_BLUE }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to simplify your hangouts?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join our waitlist and be the first to know when we launch on the App Store.
          </p>
          
          {submitted ? (
            <div className="bg-white/20 rounded-2xl p-4 max-w-md mx-auto">
              <p className="text-white font-medium">🎉 You&apos;re on the list!</p>
            </div>
          ) : (
            <form onSubmit={handleWaitlist} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError(false);
                }}
                className={`flex-1 px-5 py-4 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-white text-lg ${
                  error ? 'border-red-500' : 'border-transparent'
                }`}
              />
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-4 bg-gray-900 text-white font-semibold rounded-xl transition-all disabled:opacity-50 hover:bg-gray-800"
              >
                {loading ? '...' : 'Join Waitlist'}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left - Brand */}
            <div>
              <Link href="/" className="flex items-center gap-3 mb-4">
                <Image 
                  src="/images/logo.png" 
                  alt="Easy Meets" 
                  width={48} 
                  height={48}
                  className="w-12 h-12"
                />
                <span className="text-xl font-bold">
                  <span style={{ color: BRAND_BLUE }}>Easy</span>
                  <span className="text-gray-800"> Meets</span>
                </span>
              </Link>
              <p className="text-gray-600 max-w-sm">
                Making hangout planning effortless, one swipe at a time.
              </p>
            </div>

            {/* Right - Links & Social */}
            <div className="flex flex-col md:items-end">
              <p className="text-gray-600 mb-4 font-medium">Connect with us</p>
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/company/easy-meets" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#0077B5] rounded-xl flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.instagram.com/easymeetsapp" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] rounded-xl flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="mailto:easymeetsnyc@gmail.com"
                  className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
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
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ emoji, title, description }: { emoji: string; title: string; description: string }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 lg:p-8 hover:shadow-xl hover:border-gray-200 transition-all duration-300 hover:-translate-y-1">
      <div className="text-4xl mb-4">{emoji}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function HowItWorksStep({ step, title, description, image }: { step: string; title: string; description: string; image: string }) {
  return (
    <div className="text-center">
      <div className="relative mx-auto w-[220px] md:w-[240px] rounded-[2rem] overflow-hidden shadow-2xl border-[8px] border-gray-900 mb-8 hover:scale-105 transition-transform duration-300">
        <Image
          src={image}
          alt={title}
          width={240}
          height={480}
          className="w-full"
        />
      </div>
      <div 
        className="inline-flex items-center justify-center w-10 h-10 rounded-full text-white text-lg font-bold mb-4"
        style={{ backgroundColor: '#4292fc' }}
      >
        {step}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 max-w-xs mx-auto">{description}</p>
    </div>
  );
}