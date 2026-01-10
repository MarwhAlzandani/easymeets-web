// app/invite/[code]/not-found.tsx
import Link from 'next/link'
import Image from 'next/image'

const BRAND_BLUE = '#3e91fd'

export default function InviteNotFound() {
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
          <div className="text-6xl mb-6">😕</div>
          
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Invite Not Found
          </h1>
          
          <p className="text-gray-600 mb-8 leading-relaxed">
            This invite link is invalid or has expired. Ask your friend to send a new one!
          </p>

          <Link
            href="/"
            className="inline-block w-full py-4 px-6 rounded-full text-white font-semibold text-lg transition-all hover:opacity-90"
            style={{ backgroundColor: BRAND_BLUE }}
          >
            Go to Easy Meets
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="p-6 text-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Easy Meets</p>
      </footer>
    </main>
  )
}