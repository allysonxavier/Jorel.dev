import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import inter from 'theme/fontFamily'

import 'theme/styles.css'

export const metadata: Metadata = {
  title: 'Jorelverso - O Beagle mais famoso',
  description: 'Um universo dedicado ao Jorel, o Beagle mais adorável. Aventuras, amigos peludos e momentos inesquecíveis.'
}

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="pt-BR">
    <body className={inter.className}>{children}</body>
  </html>
)

export default RootLayout
