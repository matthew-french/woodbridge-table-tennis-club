'use client'

import { Burger, Group } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle'
import classes from './HeaderSearch.module.css'

import Link from 'next/link';

const links = [
  { link: '/', label: 'Home' },
  { link: '/latest-news', label: 'Latest News' },
  { link: '/about-us', label: 'About Us' },
  { link: '/play-and-compete', label: 'Play & Compete' },
  { link: '/contact-us', label: 'Contact Us' }
];

export function HeaderSearch() {
  const [opened, { toggle }] = useDisclosure(false)

  const items = links.map((link) => (
    <Link key={link.label} href={link.link} className={classes.link}>
      {link.label}
    </Link>
  ))

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </Group>

        <Group>
          <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
            {items}
          </Group>
        </Group>

        <Group>
          <ColorSchemeToggle />
        </Group>
      </div>
    </header>
  )
}
