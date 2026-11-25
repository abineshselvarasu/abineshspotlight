import Link from 'next/link'

export default function NotFoundView() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-ink text-canvas px-6 text-center">
      <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">
        404 Error
      </p>
      <h1 className="font-display text-5xl sm:text-6xl text-canvas font-normal mb-4">
        Page not found
      </h1>
      <p className="text-canvas/75 max-w-md text-base leading-relaxed mb-8">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-ink text-sm font-semibold hover:bg-canvas transition-colors"
      >
        Return Home
      </Link>
    </div>
  )
}
