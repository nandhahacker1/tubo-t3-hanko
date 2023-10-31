import type { Metadata } from 'next'

import { siteConfig } from '@/config/siteConfig'

const icons = {
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/images/favicons/next-light.png',
        href: '/images/favicons/next-light.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/images/favicons/next-dark.png',
        href: '/images/favicons/next-dark.png',
      },
    ],
  },
}

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.description}`,
  },
  description: siteConfig.description,
  authors: [
    {
      name: siteConfig.name.split('|')[0].trim(),
      url: siteConfig.links.github,
    },
  ],
  creator: siteConfig.name.split('|')[0].trim(),
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  openGraph: {
    type: 'website',
    locale: 'en-US',
    url: new URL(siteConfig.url),
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@cavargasl',
  },
  ...icons,
}
export const staticMetadata = {
  ...baseMetadata,
  dashboard: {
    title: 'Dashboard - ' + siteConfig.name,
    description: siteConfig.description,
  } satisfies Metadata,
}