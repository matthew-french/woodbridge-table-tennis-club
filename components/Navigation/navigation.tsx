import React from 'react'
import Link from 'next/link'
import { navigationLinks } from '@/config/links'
import classes from './navigation.module.css'

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul className={classes.nav}>
        {navigationLinks.map((linkItem, index) => (
          <li key={index}>
            <Link href={linkItem.link} className={classes.link}>
              {linkItem.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
