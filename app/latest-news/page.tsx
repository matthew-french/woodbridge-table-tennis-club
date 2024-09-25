import { Suspense } from 'react'

import { LatestNews } from '@/components/LatestNews/LatestNews'

export default function News() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <LatestNews />
      </Suspense>
    </>
  )
}

