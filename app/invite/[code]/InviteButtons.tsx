// app/invite/[code]/InviteButtons.tsx
'use client'

import { useState, useEffect } from 'react'

const BRAND_BLUE = '#3e91fd'
const TESTFLIGHT_URL = 'https://testflight.apple.com/join/ytNNM6QS'

export default function InviteButtons({ code }: { code: string }) {
  const [isIOS, setIsIOS] = useState(false)
  const [isAndroid, setIsAndroid] = useState(false)

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor
    setIsIOS(/iPad|iPhone|iPod/.test(userAgent))
    setIsAndroid(/android/i.test(userAgent))
  }, [])

  const deepLink = `easymeets://invite/${code}`

  const handleOpenApp = () => {
    // Try to open the app
    window.location.href = deepLink

    // If app doesn't open after 1.5 seconds, redirect to download
    setTimeout(() => {
      if (document.visibilityState !== 'hidden') {
        // App didn't open, redirect to TestFlight/store
        if (isIOS) {
          window.location.href = TESTFLIGHT_URL
        } else if (isAndroid) {
          // Android Play Store link (update when available)
          window.location.href = TESTFLIGHT_URL // For now, use TestFlight
        } else {
          window.location.href = TESTFLIGHT_URL
        }
      }
    }, 1500)
  }

  return (
    <div className="space-y-3">
      {/* Primary Button - Open in App */}
      <button
        onClick={handleOpenApp}
        className="w-full py-4 px-6 rounded-full text-white font-semibold text-lg transition-all hover:opacity-90 active:scale-98 shadow-lg"
        style={{ 
          backgroundColor: BRAND_BLUE,
          boxShadow: `0 4px 14px ${BRAND_BLUE}40`
        }}
      >
        Accept Invite
      </button>

      {/* Secondary Button - Download */}
      <a
        href={TESTFLIGHT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full py-3 px-6 rounded-full font-medium text-gray-600 border-2 border-gray-200 hover:border-gray-300 transition-colors text-center"
      >
        {isIOS ? "Download on TestFlight" : "Get the App"}
      </a>

      {/* Help text */}
      <p className="text-xs text-gray-400 mt-4">
        {isIOS 
          ? "Requires TestFlight app to install" 
          : "Currently available on iOS via TestFlight"
        }
      </p>
    </div>
  )
}