import { createClient } from '@supabase/supabase-js'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import CalendarButtons from './CalendarButtons'
import ActionButtons from './ActionButtons'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

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

async function getPlan(id: string): Promise<Plan | null> {
  const { data: plan, error } = await supabase
    .from('plans')
    .select(`
      id,
      name,
      scheduled_date,
      scheduled_time,
      user_id,
      created_at,
      owner:profiles!plans_user_id_fkey (
        first_name,
        avatar_url
      ),
      places:plan_places (
        position,
        travel_time_from_prev,
        travel_mode,
        place:cached_places (
          id,
          name,
          category,
          neighborhood,
          rating,
          yelp_photo_url,
          admin_photo_url,
          address,
          latitude,
          longitude
        )
      ),
      members:plan_members (
        user_id,
        status,
        profile:profiles (
          first_name,
          avatar_url
        )
      )
    `)
    .eq('id', id)
    .single()

  if (error || !plan) {
    return null
  }

  // Sort places by position
  plan.places = (plan.places || []).sort((a: any, b: any) => a.position - b.position)
  
  return plan as unknown as Plan
}

// Generate metadata for link previews (Open Graph)
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const plan = await getPlan(params.id)
  
  if (!plan) {
    return {
      title: 'Plan Not Found - Easy Meets',
    }
  }

  const placeNames = plan.places.slice(0, 3).map(p => p.place.name).join(' → ')
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
  return place.admin_photo_url || place.yelp_photo_url || '/placeholder.svg'
}

export default async function PlanPage({ params }: { params: { id: string } }) {
  const plan = await getPlan(params.id)

  if (!plan) {
    notFound()
  }

  const acceptedMembers = plan.members.filter(m => m.status === 'accepted')
  const firstPlace = plan.places[0]?.place

  return (
    <main className="min-h-screen pb-8">
      {/* Header */}
      <header className="bg-gradient-to-br from-easy-blue to-blue-400 text-white pt-12 pb-20 px-6">
        <div className="max-w-lg mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-2xl">🗺️</span>
            <span className="text-xl font-semibold">Easy Meets</span>
          </div>
        </div>
      </header>

      {/* Plan Card - Overlapping header */}
      <div className="max-w-lg mx-auto px-4 -mt-14">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Plan Info */}
          <div className="p-6 pb-4">
            <h1 className="text-2xl font-bold text-gray-900 mb-3">{plan.name}</h1>
            
            <div className="flex items-center gap-3 mb-4">
              {/* Owner avatar */}
              <div className="flex items-center gap-2">
                {plan.owner.avatar_url ? (
                  <img 
                    src={plan.owner.avatar_url} 
                    alt={plan.owner.first_name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-easy-blue flex items-center justify-center text-white text-sm font-semibold">
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
                  {acceptedMembers.slice(0, 4).map((member, i) => (
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

          {/* Places List */}
          <div className="p-6 pt-4">
            <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
              The Plan
            </h2>
            
            <div className="space-y-1">
              {plan.places.map((planPlace, index) => (
                <div key={planPlace.place.id}>
                  {/* Travel time connector */}
                  {index > 0 && planPlace.travel_time_from_prev && (
                    <div className="flex items-center gap-2 py-2 pl-4">
                      <div className="w-0.5 h-4 bg-gray-200" />
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        🚶 {planPlace.travel_time_from_prev} min walk
                      </span>
                    </div>
                  )}
                  
                  {/* Place card */}
                  <div className="flex items-center gap-3 p-3 rounded-2xl hover:bg-gray-50 transition-colors">
                    <div className="relative">
                      <span className="absolute -left-6 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-easy-blue text-white text-xs flex items-center justify-center font-semibold">
                        {index + 1}
                      </span>
                      <img
                        src={getPhotoUrl(planPlace.place)}
                        alt={planPlace.place.name}
                        className="w-16 h-16 rounded-xl object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 truncate">
                        {planPlace.place.name}
                      </h3>
                      <p className="text-sm text-gray-500 truncate">
                        {formatCategory(planPlace.place.category)}
                        {planPlace.place.neighborhood && ` • ${planPlace.place.neighborhood}`}
                      </p>
                      {planPlace.place.rating > 0 && (
                        <div className="flex items-center gap-1 mt-0.5">
                          <span className="text-yellow-500 text-xs">★</span>
                          <span className="text-xs text-gray-500">{planPlace.place.rating.toFixed(1)}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 space-y-3">
          {/* Add to Calendar */}
          {plan.scheduled_date && (
            <CalendarButtons 
              planName={plan.name}
              date={plan.scheduled_date}
              time={plan.scheduled_time}
              location={firstPlace?.address || firstPlace?.name || ''}
              places={plan.places.map(p => p.place.name)}
            />
          )}

          {/* Open in App / Download */}
          <ActionButtons planId={plan.id} />
        </div>

        {/* Footer */}
        <footer className="mt-10 text-center">
          <p className="text-sm text-gray-500 mb-2">
            Plan your hangouts together
          </p>
          <p className="text-xs text-gray-400">
            Coming soon to the App Store
          </p>
        </footer>
      </div>
    </main>
  )
}
