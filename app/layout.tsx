import ToasterContext from './context/ToasterContext'
import AuthContext from './context/AuthContext'
import './globals.css'
import { Inter } from 'next/font/google'
import ActiveStatus from '@/components/ActiveStatus'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Qbai.kz',
  description: 'Qazakh Business Artificial Intellegence',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>
          <ToasterContext />
          <ActiveStatus/>
          {children}
        </AuthContext>
      </body>
    </html>
  )
}
