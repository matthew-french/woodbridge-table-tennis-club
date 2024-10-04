import React from 'react'
import Link from 'next/link'
import { navigationLinks } from '@/config/links'

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul>
        {navigationLinks.map((linkItem, index) => (
          <li key={index}>
            <Link href={linkItem.link}>{linkItem.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
