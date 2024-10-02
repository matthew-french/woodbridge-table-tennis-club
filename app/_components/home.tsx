import { Container } from '@mantine/core'
import { HeroImageBackground } from '@/components/hero-image-background/hero-image-background'

export function Home() {
  return (
    <>
      <HeroImageBackground />
      <Container size='xl'>
        Home Page
      </Container>
    </>
  )
}
