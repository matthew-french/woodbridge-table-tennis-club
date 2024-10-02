import { Suspense } from 'react'
import { LatestNews } from '@/app/latest-news/_components/latest-news'

export default function News() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <LatestNews />
      </Suspense>
    </>
  )
}
