// app/invite/[code]/page.tsx
import { createClient } from '@supabase/supabase-js'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import InviteButtons from './InviteButtons'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

const BRAND_BLUE = '#3e91fd'

type InviteData = {
  id: string
  code: string
  inviter_id: string
  status: string
  profile: {
    id: string
    first_name: string
    last_name: string
    username: string
    avatar_url: string | null
  }
}

async function getInvite(code: string): Promise<InviteData | null> {
  const { data, error } = await supabase
    .from('invites')
    .select(`
      id,
      code,
      inviter_id,
      status,
      profile:profiles!inviter_id (
        id,
        first_name,
        last_name,
        username,
        avatar_url
      )
    `)
    .eq('code', code)
    .single()

  if (error || !data) return null

  // Handle the profile being an array or object
  const profile = Array.isArray(data.profile) ? data.profile[0] : data.profile

  return {
    ...data,
    profile
  } as InviteData
}

export async function generateMetadata({ params }: { params: { code: string } }): Promise<Metadata> {
  const invite = await getInvite(params.code)

  if (!invite) {
    return {
      title: 'Invite Not Found | Easy Meets',
    }
  }

  const inviterName = `${invite.profile.first_name} ${invite.profile.last_name}`

  return {
    title: `${invite.profile.first_name} invited you to Easy Meets!`,
    description: `${inviterName} wants to plan hangouts with you on Easy Meets. Accept the invite to discover places and make plans together!`,
    openGraph: {
      title: `${invite.profile.first_name} invited you to Easy Meets! 🎉`,
      description: `Join ${inviterName} on Easy Meets to discover places and plan hangouts together.`,
      type: 'website',
      images: [
        {
          url: '/images/invite-og.png', // You can create this image later
          width: 1200,
          height: 630,
          alt: 'Easy Meets Invite',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${invite.profile.first_name} invited you to Easy Meets!`,
      description: `Join ${inviterName} on Easy Meets to discover places and plan hangouts together.`,
    },
  }
}

export default async function InvitePage({ params }: { params: { code: string } }) {
  const invite = await getInvite(params.code)

  if (!invite) {
    notFound()
  }

  const inviterName = `${invite.profile.first_name} ${invite.profile.last_name}`
  const initials = `${invite.profile.first_name?.[0] || ''}${invite.profile.last_name?.[0] || ''}`.toUpperCase()

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col">
      {/* Header */}
      <header className="p-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 relative">
            <Image
              src="/images/logo.png"
              alt="Easy Meets"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-lg font-bold">
            <span style={{ color: BRAND_BLUE }}>Easy</span>
            <span className="text-gray-800"> Meets</span>
          </span>
        </Link>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="bg-white rounded-3xl shadow-xl p-8 max-w-sm w-full text-center">
          {/* Avatar */}
          <div className="mb-6">
            {invite.profile.avatar_url ? (
              <div className="w-24 h-24 rounded-full mx-auto overflow-hidden border-4 border-blue-100">
                <Image
                  src={invite.profile.avatar_url}
                  alt={inviterName}
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>
            ) : (
              <div 
                className="w-24 h-24 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold"
                style={{ backgroundColor: BRAND_BLUE }}
              >
                {initials}
              </div>
            )}
          </div>

          {/* Invite Text */}
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {invite.profile.first_name} invited you!
          </h1>
          
          <p className="text-gray-500 mb-2">@{invite.profile.username}</p>
          
          <p className="text-gray-600 mb-8 leading-relaxed">
            Join Easy Meets to discover places and plan hangouts together! 🎉
          </p>

          {/* Action Buttons */}
          <InviteButtons code={invite.code} />

          {/* Features */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <p className="text-xs text-gray-400 mb-4">WITH EASY MEETS YOU CAN</p>
            <div className="flex justify-center gap-6 text-sm text-gray-600">
              <div className="flex flex-col items-center gap-1">
                <span className="text-xl">📍</span>
                <span>Discover</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="text-xl">👥</span>
                <span>Plan</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="text-xl">🗓️</span>
                <span>Meet</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="p-6 text-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Easy Meets</p>
      </footer>
    </main>
  )
}