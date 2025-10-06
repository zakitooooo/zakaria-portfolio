import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zakaria Zaroual - Développeur Full Stack',
  description: 'Portfolio de Zakaria Zaroual, étudiant en informatique à l\'UTT, développeur full stack avec expérience en React, TypeScript, AWS et Spring Boot.',
  keywords: 'développeur full stack, React, TypeScript, Java, Spring Boot, AWS, portfolio, UTT',
  authors: [{ name: 'Zakaria Zaroual' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
