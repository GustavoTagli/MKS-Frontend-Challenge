import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { DefaultProviders } from '@/providers/default-providers'
import { Footer } from '@/components/footer'
import StyledComponentsRegistry from '@/lib/registy'
import { Header } from '@/components/header'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'MKS Sistemas',
  description: 'Desafio fronted MKS Sistemas',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-br'>
      <DefaultProviders>
        <body className={montserrat.className}>
          <StyledComponentsRegistry>
            <Header />
            {children}
            <Footer />
          </StyledComponentsRegistry>
        </body>
      </DefaultProviders>
    </html>
  )
}
