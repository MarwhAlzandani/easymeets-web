import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full text-center">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-easy-blue mb-2">Easy Meets</h1>
          <p className="text-gray-600">Plan your hangouts together</p>
        </div>

        {/* Hero Card */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">
          <div className="text-6xl mb-4">🗺️</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Discover places with friends
          </h2>
          <p className="text-gray-600 mb-6">
            Swipe through curated spots, see what your friends like, 
            and plan the perfect hangout together.
          </p>
          
          {/* Features */}
          <div className="flex justify-center gap-6 text-sm text-gray-500 mb-6">
            <div className="flex items-center gap-1">
              <span>👥</span> Friends
            </div>
            <div className="flex items-center gap-1">
              <span>📍</span> Places
            </div>
            <div className="flex items-center gap-1">
              <span>📅</span> Plans
            </div>
          </div>
        </div>

        {/* Download Button */}
        <a
          href="https://testflight.apple.com/join/ytNNM6QS"
          className="block w-full bg-easy-blue hover:bg-easy-blue-dark text-white font-semibold py-4 px-6 rounded-2xl transition-colors mb-4"
        >
          Download on TestFlight
        </a>
        
        <p className="text-sm text-gray-400">
          Coming soon to the App Store
        </p>
      </div>
    </main>
  )
}
