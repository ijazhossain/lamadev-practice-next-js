import { ThemeProvider } from '@/ThemeContext/ThemeProvider'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lama dev',
  description: 'This is description',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <div className='container'>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
