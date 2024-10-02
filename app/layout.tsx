import './global.css'
import '@mantine/core/styles.css'

import React from 'react'
import { ColorSchemeScript, Container, MantineProvider } from '@mantine/core'
import { FooterBar } from '@/components/footer-bar/footer-bar'
import { HeaderBar } from '@/components/header-bar/header-bar'
import { theme } from '../theme'

export const metadata = {
  title: 'Woodbridge Table Tennis Club',
  description: 'Woodbridge Table Tennis Club',
}

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang='en'>
      <head>
        <ColorSchemeScript />
        <link rel='shortcut icon' href='/favicon.svg' />
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no'
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <div className='wrapper'>
            <HeaderBar />
            <main className='content'>
              {children}
            </main>
            <FooterBar />
          </div>
        </MantineProvider>
      </body>
    </html>
  )
}
