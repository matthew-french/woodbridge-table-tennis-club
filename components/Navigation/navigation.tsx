import React from 'react'
import Link from 'next/link'
import { Group } from '@mantine/core'
import { navigation } from '@/config/links'

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul>
        {navigation.map((linkItem, index) => (
          <li key={index}>
            <Link href={linkItem.link}>{linkItem.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
