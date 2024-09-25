import React from 'react'
import { PortableText } from '@portabletext/react'
import { sanity } from '../../lib/sanity'
import { unstable_cache } from 'next/cache'


interface NewsItem {
  _id: string
  title: string
  body: []
}

export async function LatestNews() {
  const news = await getLatestNews()


  if (!news) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>News</h1>
      {news.map((item: NewsItem) => (
        <div key={item._id}>
          <h2>{item.title}</h2>
          <PortableText value={[...item.body]} />
        </div>
      ))}
    </div>
  )
}

const getLatestNews = unstable_cache(
  async () => {
    const query = `*[_type == "post"] {
      _id,
      title,
      body
    }`
    const data = await sanity.fetch(query)

    return data || []
  },
  ['lastest-news'],
  { revalidate: 1 }
)
