import type { Metadata } from 'next'
import NotFoundView from '@/components/NotFoundView'

// Next.js adds `noindex` to not-found responses automatically
export const metadata: Metadata = {
  title: 'Page not found',
}

export default function NotFound() {
  return <NotFoundView />
}
