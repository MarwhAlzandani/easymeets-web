'use client'

import { useState } from 'react'

const BRAND_BLUE = '#4292fc'
const TESTFLIGHT_URL = 'https://testflight.apple.com/join/ytNNM6QS'

type ActionButtonsProps = {
  planId: number
}

export default function ActionButtons({ planId }: ActionButtonsProps) {
  const [showDownloadPrompt, setShowDownloadPrompt] = useState(false)

  const handleOpenInApp = () => {
    const deepLink = `easymeets://plan/${planId}`
    
    const startTime = Date.now()
    window.location.href = deepLink

    setTimeout(() => {
      if (Date.now() - startTime < 2000) {
        setShowDownloadPrompt(true)
      }
    }, 1500)
  }

  return (
    <>
      {/* Open in App Button */}
      <button
        onClick={handleOpenInApp}
        className="w-full text-white font-semibold py-4 px-6 rounded-2xl transition-all hover:shadow-lg flex items-center justify-center gap-2"
        style={{ backgroundColor: BRAND_BLUE }}
      >
        <span>📱</span>
        <span>Open in Easy Meets</span>
      </button>

      {/* Download Prompt Modal */}
      {showDownloadPrompt && (
        <div className="fixed inset-0 bg-black/50 flex items-end sm:items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl w-full max-w-lg overflow-hidden animate-slide-up">
            <div className="p-6 text-center">
              <div className="text-5xl mb-4">📲</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Get Easy Meets
              </h3>
              <p className="text-gray-600 mb-6">
                Download the app to join this plan and start planning hangouts with friends!
              </p>
              
              <a
                href={TESTFLIGHT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-white font-semibold py-4 px-6 rounded-2xl transition-colors mb-3"
                style={{ backgroundColor: BRAND_BLUE }}
              >
                Download on TestFlight
              </a>
              
              <button
                onClick={() => setShowDownloadPrompt(false)}
                className="w-full text-gray-500 font-medium py-3 hover:text-gray-700 transition-colors"
              >
                Maybe later
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </>
  )
}