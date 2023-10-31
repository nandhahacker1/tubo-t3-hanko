import { headers } from "next/headers";

import { baseMetadata } from '@/config/siteMeta'
import { fontMono, fontSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'

import { TRPCReactProvider } from "@/trpc/react";

import "@/styles/globals.css";


import type { Metadata } from 'next/types'

export const metadata: Metadata = {
  ...baseMetadata,
}

// icons: [{ rel: "icon", url: "../public/favicon.ico" }],

interface RootProps {
  children: React.ReactNode
  params: { locale: string }
}
export default function RootLayout({ children, params }: RootProps) {
  return (
    <html lang={params.locale} suppressHydrationWarning>
      <body
        className={cn(
          'scroll-smooth font-sans antialiased',
          fontMono.variable,
          fontSans.variable
        )}
      >
        <TRPCReactProvider
          headers={headers()}
        >
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  )
}