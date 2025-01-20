import '@/styles/tailwind.css'
import type { Metadata } from 'next'
import { RootLayoutWrapper } from './root-layout'

export const metadata: Metadata = {
  title: {
    template: '%s - starknet',
    default: 'Starknet - Analyze Data',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/css?f%5B%5D=switzer@400,500,600,700&amp;display=swap"
        />
      </head>
      <body className="text-gray-950 antialiased">
        <RootLayoutWrapper>
          {children}
        </RootLayoutWrapper>
      </body>
    </html>
  )
}
