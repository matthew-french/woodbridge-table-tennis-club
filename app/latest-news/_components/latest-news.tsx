import React from 'react'
import { unstable_cache } from 'next/cache'
import { PortableText } from '@portabletext/react'
import { Container, Loader, Paper, Text, Title } from '@mantine/core'
import { client } from '@/lib/client'

interface NewsItem {
  _id: string
  title: string
  body: []
}

export async function LatestNews() {
  const news = await getLatestNews()

  if (!news) {
    return (
      <Container>
        <Loader />
      </Container>
    )
  }

  return (
    <Container>
      <Title order={1}>News</Title>
      {news.map((item: NewsItem) => (
        <Paper key={item._id} shadow='sm' withBorder>
          <Title order={2}>{item.title}</Title>
          <PortableText value={[...item.body]} />
        </Paper>
      ))}
    </Container>
  )
}

const getLatestNews = unstable_cache(
  async () => {
    const query = `*[_type == "post"] {
      _id,
      title,
      body
    }`
    const data = await client.fetch(query)

    return data || []
  },
  ['latest-news'],
  { revalidate: 1 }
)
