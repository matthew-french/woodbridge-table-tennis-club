import React, { useEffect, useState } from 'react'
import { PortableText } from '@portabletext/react'
import { sanity } from '@/lib/sanity'

interface NewsItem {
  _id: string
  title: string
  body: []
}

export function News() {
  const [news, setNews] = useState([])

  useEffect(() => {
    getAllNews().then((news) => {
      setNews(news)
    })
  }, [])

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

const getAllNews = async () => {
  const query = `*[_type == "post"] {
    _id,
    title,
    body
  }`
  const news = await sanity.fetch(query)

  return news || []
}
