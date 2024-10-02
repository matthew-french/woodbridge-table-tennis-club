'use client'

import Image from 'next/image'
import NextLink from 'next/link'
import { Burger, Container, Drawer, Group, List, rem, ScrollArea } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { navigationLinks } from '@/config/links'
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle'
import classes from './header-bar.module.css'

export function HeaderBar() {
  const [opened, { open, close }] = useDisclosure(false)

  const items = navigationLinks.map((link) => (
    <NextLink key={link.label} href={link.link} className={classes.link}>
      {link.label}
    </NextLink>
  ))

  return (
    <>
      <header className={classes.header}>
        <Container size='xl' visibleFrom='sm'>
          <div className={classes.top}>
            <Group >
              <NextLink href='/' passHref>
                <Image
                  className={classes.logo}
                  src='/images/wttc_logo.png'
                  alt='Woodbridge Table Tennis Club'
                  width={472}
                  height={94}
                />
              </NextLink>
            </Group>
          </div>
        </Container>

        <div className={classes.inner}>
          <Container size='xl'>
            <div className={classes.innerContainer}>
              <Group hiddenFrom='sm'>
                <Burger opened={opened} onClick={open} size='md' />
              </Group>

              <Group hiddenFrom='sm' grow={true}>
                <NextLink href='/' passHref>
                  <Image
                    className={classes.logo}
                    src='/images/wttc_logo.png'
                    alt='Woodbridge Table Tennis Club'
                    width={472}
                    height={94}
                  />
                </NextLink>
              </Group>

              <Group visibleFrom='sm'>
                <Group ml={0} gap={5} className={classes.links}>
                  {items}
                </Group>
              </Group>

              {/* <Group>
                <ColorSchemeToggle />
              </Group> */}
            </div>
          </Container>
        </div>
      </header>

      <Drawer
        opened={opened}
        onClose={close}
        size='100%'
        padding='md'
        title='Navigation'
        hiddenFrom='sm'
        zIndex={1000000}
        transitionProps={{ transition: 'slide-right', duration: 175, timingFunction: 'linear' }}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx='-md'>
          Items?
          <Group wrap='nowrap' align='flex-start'>
            <List>
              <List.Item>Item 1</List.Item>
              <List.Item>Item 2</List.Item>
              <List.Item>Item 3</List.Item>
            </List>
          </Group>
          No Items
        </ScrollArea>
      </Drawer>
    </>
  )
}
