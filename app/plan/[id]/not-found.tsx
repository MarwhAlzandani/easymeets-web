import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full text-center">
        <div className="text-6xl mb-6">🔍</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">
          Plan not found
        </h1>
        <p className="text-gray-600 mb-8">
          This plan may have been deleted or the link might be incorrect.
        </p>
        
        <Link
          href="/"
          className="inline-block bg-easy-blue hover:bg-easy-blue-dark text-white font-semibold py-3 px-8 rounded-2xl transition-colors"
        >
          Go to Easy Meets
        </Link>
      </div>
    </main>
  )
}
