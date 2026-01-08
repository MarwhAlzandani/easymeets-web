'use client'

import { useState } from 'react'

const BRAND_BLUE = '#4292fc'

type CalendarButtonsProps = {
  planName: string
  date: string
  time: string | null
  location: string
  places: string[]
}

export default function CalendarButtons({ planName, date, time, location, places }: CalendarButtonsProps) {
  const [showOptions, setShowOptions] = useState(false)

  // Parse date and time
  const startDate = new Date(date + 'T00:00:00')
  
  if (time) {
    const timeMatch = time.match(/(\d{1,2})(?::(\d{2}))?\s*(am|pm)?/i)
    if (timeMatch) {
      let hours = parseInt(timeMatch[1])
      const minutes = parseInt(timeMatch[2] || '0')
      const period = timeMatch[3]?.toLowerCase()
      
      if (period === 'pm' && hours !== 12) hours += 12
      if (period === 'am' && hours === 12) hours = 0
      
      startDate.setHours(hours, minutes, 0, 0)
    }
  } else {
    startDate.setHours(12, 0, 0, 0)
  }

  const endDate = new Date(startDate.getTime() + 2 * 60 * 60 * 1000)
  const description = `Easy Meets plan: ${places.join(' → ')}`

  const formatGoogleDate = (d: Date) => {
    return d.toISOString().replace(/-|:|\.\d{3}/g, '').slice(0, -1)
  }

  const googleCalendarUrl = (() => {
    const params = new URLSearchParams({
      action: 'TEMPLATE',
      text: planName,
      dates: `${formatGoogleDate(startDate)}/${formatGoogleDate(endDate)}`,
      details: description,
      location: location,
    })
    return `https://calendar.google.com/calendar/render?${params.toString()}`
  })()

  const generateICS = () => {
    const formatICSDate = (d: Date) => {
      return d.toISOString().replace(/-|:|\.\d{3}/g, '').slice(0, -1) + 'Z'
    }

    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Easy Meets//Plan//EN
BEGIN:VEVENT
DTSTART:${formatICSDate(startDate)}
DTEND:${formatICSDate(endDate)}
SUMMARY:${planName}
DESCRIPTION:${description}
LOCATION:${location}
END:VEVENT
END:VCALENDAR`

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    
    const link = document.createElement('a')
    link.href = url
    link.download = `${planName.replace(/[^a-z0-9]/gi, '-')}.ics`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setShowOptions(!showOptions)}
        className="w-full flex items-center justify-center gap-2 bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-semibold py-4 px-6 rounded-2xl transition-colors"
        style={{ '--hover-border': BRAND_BLUE } as React.CSSProperties}
      >
        <span>📅</span>
        <span>Add to Calendar</span>
        <svg 
          className={`w-4 h-4 transition-transform ${showOptions ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {showOptions && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden z-10">
          {/* Apple Calendar */}
          <button
            onClick={() => {
              generateICS()
              setShowOptions(false)
            }}
            className="w-full flex items-center gap-3 px-5 py-4 hover:bg-gray-50 transition-colors text-left"
          >
            <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6">
                <rect x="3" y="4" width="18" height="18" rx="2" fill="#FF3B30"/>
                <rect x="3" y="4" width="18" height="5" fill="#FF6259"/>
                <text x="12" y="17" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">
                  {new Date(date).getDate()}
                </text>
              </svg>
            </div>
            <div>
              <div className="font-semibold text-gray-900">Apple Calendar</div>
              <div className="text-sm text-gray-500">Download .ics file</div>
            </div>
          </button>

          <div className="border-t border-gray-100" />

          {/* Google Calendar */}
          <a
            href={googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setShowOptions(false)}
            className="w-full flex items-center gap-3 px-5 py-4 hover:bg-gray-50 transition-colors text-left"
          >
            <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </div>
            <div>
              <div className="font-semibold text-gray-900">Google Calendar</div>
              <div className="text-sm text-gray-500">Opens in new tab</div>
            </div>
          </a>
        </div>
      )}
    </div>
  )
}