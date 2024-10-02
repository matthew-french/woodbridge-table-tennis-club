import cx from 'clsx'
import { Button, Container, Overlay, Text, Title } from '@mantine/core'
import classes from './hero-image-background.module.css'
import { unstable_cache } from 'next/cache'
import { client, urlFor } from '@/lib/client'

interface HeroItem {
  _id: string
  title: string
  subtitle: string
  image: string
}

export async function HeroImageBackground() {
  const heroItems: HeroItem[] = await getHeroItems()

  console.log(heroItems)

  // randomly select one of the hero items
  const randomIndex = Math.floor(Math.random() * heroItems.length)
  
  const { image, title, subtitle } = heroItems[randomIndex]

  const backgroundStyle = {
    backgroundImage: `url(${urlFor(image)})`,
  }


  return (
    <div className={classes.wrapper} style={backgroundStyle}>
      <Overlay color='#000' opacity={0.65} zIndex={1} />

      <div className={classes.inner}>

        { title && 
          <Title className={classes.title}>{title}</Title>
        }

        { subtitle && 
          <Text className={classes.subTitle}>{subtitle}</Text> 
        }

        {/* <div className={classes.controls}>
          <Button className={classes.control} variant='white' size='lg'>
            Get started
          </Button>
          <Button className={cx(classes.control, classes.secondaryControl)} size='lg'>
            Live demo
          </Button>
        </div> */}
      </div>
    </div>
  )
}

const getHeroItems = unstable_cache(
  async () => {
    const query = `*[_type == "hero"] {
      _id,
      title,
      subtitle,
      image
    }`
    const data = await client.fetch(query)

    return data || []
  },
  ['hero-items'],
  { revalidate: 1 }
)


