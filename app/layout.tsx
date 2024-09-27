import '@mantine/core/styles.css';

import React from 'react';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { theme } from '../theme';
import { HeaderSearch } from '@/components/HeaderSearch/HeaderSearch';

export const metadata = {
  title: 'Woodbridge Table Tennis Club',
  description: 'Woodbridge Table Tennis Club',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <HeaderSearch />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
