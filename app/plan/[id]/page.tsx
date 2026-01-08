import { createClient } from '@supabase/supabase-js'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import CalendarButtons from './CalendarButtons'
import ActionButtons from './ActionButtons'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

const BRAND_BLUE = '#4292fc'

type PlanPlace = {
  position: number
  place: {
    id: string
    name: string
    category: string
    neighborhood: string
    rating: number
    yelp_photo_url: string | null
    admin_photo_url: string | null
    address: string
    latitude: number
    longitude: number
  }
  travel_time_from_prev?: number
  travel_mode?: string
}

type PlanMember = {
  user_id: string
  status: string
  profile: {
    first_name: string
    avatar_url: string
  }
}

type Plan = {
  id: number
  name: string
  scheduled_date: string | null
  scheduled_time: string | null
  user_id: string
  created_at: string
  owner: {
    first_name: string
    avatar_url: string
  }
  places: PlanPlace[]
  members: PlanMember[]
}

function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 3959
  const dLat = (lat2 - lat1) * Math.PI / 180
  const dLon = (lon2 - lon1) * Math.PI / 180
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
  return R * c
}

function getWalkingTime(miles: number): string {
  const minutes = Math.round(miles * 20)
  if (minutes < 1) return '1 min walk'
  if (minutes === 1) return '1 min walk'
  return `${minutes} min walk`
}

async function getPlan(id: string): Promise<Plan | null> {
  try {
    const { data: plan, error: planError } = await supabase
      .from('plans')
      .select('id, name, scheduled_date, scheduled_time, user_id, created_at')
      .eq('id', id)
      .single()

    if (planError || !plan) {
      console.error('Plan fetch error:', planError)
      return null
    }

    const { data: ownerProfile } = await supabase
      .from('profiles')
      .select('first_name, avatar_url')
      .eq('id', plan.user_id)
      .single()

    const { data: planPlaces } = await supabase
      .from('plan_places')
      .select('place_id, order_index')
      .eq('plan_id', id)
      .order('order_index')

    let places: any[] = []
    if (planPlaces && planPlaces.length > 0) {
      const placeIds = planPlaces.map(pp => pp.place_id)
      const { data: cachedPlaces } = await supabase
        .from('cached_places')
        .select('id, name, category, rating, yelp_photo_url, admin_photo_url, address, city, neighborhood, latitude, longitude')
        .in('id', placeIds)

      places = planPlaces.map((pp, index) => {
        const place = cachedPlaces?.find(cp => cp.id === pp.place_id)
        return { position: pp.order_index || index, place }
      }).filter(p => p.place !== null)
    }

    const { data: members } = await supabase
      .from('plan_members')
      .select('user_id, status')
      .eq('plan_id', id)

    let membersWithProfiles: any[] = []
    if (members && members.length > 0) {
      const memberIds = members.map(m => m.user_id)
      const { data: memberProfiles } = await supabase
        .from('profiles')
        .select('id, first_name, avatar_url')
        .in('id', memberIds)

      membersWithProfiles = members.map(m => ({
        user_id: m.user_id,
        status: m.status,
        profile: memberProfiles?.find(p => p.id === m.user_id) || { first_name: 'Unknown', avatar_url: null }
      }))
    }

    return {
      ...plan,
      owner: ownerProfile || { first_name: 'Someone', avatar_url: null },
      places,
      members: membersWithProfiles
    } as Plan
  } catch (err) {
    console.error('getPlan error:', err)
    return null
  }
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const plan = await getPlan(params.id)
  
  if (!plan) {
    return {
      title: 'Plan Not Found - Easy Meets',
    }
  }

  const placeNames = plan.places.slice(0, 3).map(p => p.place?.name).filter(Boolean).join(' → ')
  const description = plan.scheduled_date 
    ? `${placeNames} • ${formatDate(plan.scheduled_date)}${plan.scheduled_time ? ` at ${plan.scheduled_time}` : ''}`
    : placeNames

  return {
    title: `${plan.name} - Easy Meets`,
    description: `Join ${plan.owner.first_name}'s plan: ${description}`,
    openGraph: {
      title: plan.name,
      description: `${plan.owner.first_name} invited you to ${placeNames}`,
      type: 'website',
      images: plan.places[0]?.place?.yelp_photo_url ? [plan.places[0].place.yelp_photo_url] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: plan.name,
      description: `${plan.owner.first_name} invited you: ${placeNames}`,
    },
  }
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + 'T00:00:00')
  return date.toLocaleDateString('en-US', { 
    weekday: 'short', 
    month: 'short', 
    day: 'numeric' 
  })
}

function formatCategory(category: string): string {
  return category?.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) || 'Place'
}

function getPhotoUrl(place: PlanPlace['place']): string {
  return place?.admin_photo_url || place?.yelp_photo_url || '/placeholder.svg'
}

export default async function PlanPage({ params }: { params: { id: string } }) {
  const plan = await getPlan(params.id)

  if (!plan) {
    notFound()
  }

  const acceptedMembers = plan.members.filter(m => m.status === 'accepted')
  const firstPlace = plan.places[0]?.place

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Top Download Banner - MORE PROMINENT */}
      <div style={{ backgroundColor: '#1a1a1a' }} className="text-white py-4 px-4">
        <div className="max-w-lg mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">📲</span>
            <span className="font-semibold">Get Easy Meets</span>
          </div>
          <a 
            href="https://testflight.apple.com/join/ytNNM6QS"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold px-5 py-2 rounded-full transition-colors text-sm"
            style={{ backgroundColor: BRAND_BLUE }}
          >
            Download Free
          </a>
        </div>
      </div>

      {/* Header - WHITE BACKGROUND so logo is visible */}
      <header className="bg-white pt-6 pb-8 px-6 border-b border-gray-100">
        <div className="max-w-lg mx-auto">
          <div className="flex items-center justify-center gap-3">
            <Image 
              src="/images/logo.png" 
              alt="Easy Meets" 
              width={56} 
              height={56}
              className="w-14 h-14"
            />
            <span className="text-2xl font-bold">
              <span style={{ color: BRAND_BLUE }}>Easy</span>
              <span className="text-gray-800"> Meets</span>
            </span>
          </div>
        </div>
      </header>

      {/* Plan Card */}
      <div className="max-w-lg mx-auto px-4 py-6">
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          {/* Plan Info */}
          <div className="p-6 pb-4">
            <h1 className="text-2xl font-bold text-gray-900 mb-3">{plan.name}</h1>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-2">
                {plan.owner.avatar_url ? (
                  <img 
                    src={plan.owner.avatar_url} 
                    alt={plan.owner.first_name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                ) : (
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold"
                    style={{ backgroundColor: BRAND_BLUE }}
                  >
                    {plan.owner.first_name?.[0]?.toUpperCase()}
                  </div>
                )}
                <span className="text-gray-600 text-sm">
                  {plan.owner.first_name} invited you
                </span>
              </div>
            </div>

            {/* Date & Time */}
            {plan.scheduled_date && (
              <div className="flex items-center gap-2 text-gray-700 mb-3">
                <span className="text-lg">📅</span>
                <span className="font-medium">
                  {formatDate(plan.scheduled_date)}
                  {plan.scheduled_time && ` • ${plan.scheduled_time}`}
                </span>
              </div>
            )}

            {/* Members going */}
            {acceptedMembers.length > 0 && (
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {acceptedMembers.slice(0, 4).map((member) => (
                    member.profile.avatar_url ? (
                      <img 
                        key={member.user_id}
                        src={member.profile.avatar_url}
                        alt={member.profile.first_name}
                        className="w-7 h-7 rounded-full border-2 border-white object-cover"
                      />
                    ) : (
                      <div 
                        key={member.user_id}
                        className="w-7 h-7 rounded-full border-2 border-white bg-gray-300 flex items-center justify-center text-xs font-semibold text-gray-600"
                      >
                        {member.profile.first_name?.[0]?.toUpperCase()}
                      </div>
                    )
                  ))}
                </div>
                <span className="text-sm text-gray-500">
                  {acceptedMembers.length} {acceptedMembers.length === 1 ? 'friend' : 'friends'} going
                </span>
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="border-t border-gray-100 mx-6" />

          {/* Places List with Walking Distance */}
          <div className="p-6 pt-4">
            <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
              The Plan
            </h2>
            
            <div className="space-y-1">
              {plan.places.map((planPlace, index) => {
                let walkingTime: string | null = null
                if (index > 0) {
                  const prevPlace = plan.places[index - 1].place
                  const currPlace = planPlace.place
                  if (prevPlace?.latitude && prevPlace?.longitude && currPlace?.latitude && currPlace?.longitude) {
                    const distance = calculateDistance(
                      prevPlace.latitude, prevPlace.longitude,
                      currPlace.latitude, currPlace.longitude
                    )
                    walkingTime = getWalkingTime(distance)
                  }
                }

                return (
                  <div key={planPlace.place?.id || index}>
                    {/* Walking distance indicator */}
                    {walkingTime && (
                      <div className="flex items-center gap-2 ml-8 my-2">
                        <div className="flex flex-col items-center">
                          <div className="w-0.5 h-3 bg-gray-200"></div>
                          <div className="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-full">
                            <span className="text-xs">🚶</span>
                            <span className="text-xs text-gray-500 font-medium">{walkingTime}</span>
                          </div>
                          <div className="w-0.5 h-3 bg-gray-200"></div>
                        </div>
                      </div>
                    )}

                    {/* Place card */}
                    <div className="flex items-center gap-3 p-3 rounded-2xl hover:bg-gray-50 transition-colors">
                      <div className="relative">
                        <span 
                          className="absolute -left-6 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full text-white text-xs flex items-center justify-center font-semibold"
                          style={{ backgroundColor: BRAND_BLUE }}
                        >
                          {index + 1}
                        </span>
                        <img
                          src={getPhotoUrl(planPlace.place)}
                          alt={planPlace.place?.name || 'Place'}
                          className="w-16 h-16 rounded-xl object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 truncate">
                          {planPlace.place?.name}
                        </h3>
                        <p className="text-sm text-gray-500 truncate">
                          {formatCategory(planPlace.place?.category || '')}
                          {planPlace.place?.neighborhood && ` • ${planPlace.place.neighborhood}`}
                        </p>
                        {planPlace.place?.rating && planPlace.place.rating > 0 && (
                          <div className="flex items-center gap-1 mt-0.5">
                            <span className="text-yellow-500 text-xs">★</span>
                            <span className="text-xs text-gray-500">{planPlace.place.rating.toFixed(1)}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 space-y-3">
          {/* Add to Calendar - NOW SHOWS DATE */}
          {plan.scheduled_date && (
            <CalendarButtons 
              planName={plan.name}
              date={plan.scheduled_date}
              time={plan.scheduled_time}
              location={firstPlace?.address || firstPlace?.name || ''}
              places={plan.places.map(p => p.place?.name).filter(Boolean) as string[]}
            />
          )}

          {/* Open in App / Download */}
          <ActionButtons planId={plan.id} />
        </div>

        {/* CTA Card - EASY MEETS LOGO instead of map emoji */}
        <div className="mt-8 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="text-center">
            <Image 
              src="/images/logo.png" 
              alt="Easy Meets" 
              width={64} 
              height={64}
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Want to create your own plans?
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Download Easy Meets to discover places, find common interests with friends, and plan hangouts in seconds.
            </p>
            <a
              href="https://testflight.apple.com/join/ytNNM6QS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
              style={{ backgroundColor: BRAND_BLUE }}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <span>Download Easy Meets</span>
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 flex justify-center gap-4">
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
            href="https://www.linkedin.com/company/easy-meets" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 bg-[#0077B5] rounded-xl flex items-center justify-center text-white hover:opacity-90 transition-opacity"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </div>

        {/* Footer - BIGGER LOGO, not stretched */}
        <footer className="mt-8 pb-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Image 
              src="/images/logo.png" 
              alt="Easy Meets" 
              width={40} 
              height={40}
              className="w-10 h-10"
            />
            <span className="text-xl font-bold">
              <span style={{ color: BRAND_BLUE }}>Easy</span>
              <span className="text-gray-800"> Meets</span>
            </span>
          </div>
          <p className="text-sm text-gray-500">
            Plan hangouts effortlessly with friends
          </p>
        </footer>
      </div>
    </main>
  )
}