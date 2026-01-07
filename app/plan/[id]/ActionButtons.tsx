'use client'

import { useState } from 'react'

const TESTFLIGHT_URL = 'https://testflight.apple.com/join/ytNNM6QS'

type ActionButtonsProps = {
  planId: number
}

export default function ActionButtons({ planId }: ActionButtonsProps) {
  const [showDownloadPrompt, setShowDownloadPrompt] = useState(false)

  const handleOpenInApp = () => {
    const deepLink = `easymeets://plan/${planId}`
    
    // Try to open the app
    const startTime = Date.now()
    window.location.href = deepLink

    // If app doesn't open within 1.5 seconds, show download prompt
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
        className="w-full bg-easy-blue hover:bg-easy-blue-dark text-white font-semibold py-4 px-6 rounded-2xl transition-colors flex items-center justify-center gap-2"
      >
        <span>📱</span>
        <span>Open in Easy Meets</span>
      </button>

      {/* Download Button */}
      <a
        href={TESTFLIGHT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold py-4 px-6 rounded-2xl transition-colors"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
        <span>Download on TestFlight</span>
      </a>

      {/* Download Prompt Modal */}
      {showDownloadPrompt && (
        <div className="fixed inset-0 bg-black/50 flex items-end justify-center z-50 p-4">
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
                className="block w-full bg-easy-blue hover:bg-easy-blue-dark text-white font-semibold py-4 px-6 rounded-2xl transition-colors mb-3"
              >
                Download on TestFlight
              </a>
              
              <button
                onClick={() => setShowDownloadPrompt(false)}
                className="w-full text-gray-500 font-medium py-3"
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
