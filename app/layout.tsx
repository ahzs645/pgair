import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Prince George Air Improvement Roundtable',
  description: 'PGAIR is committed to researching, monitoring, recommending and implementing air quality improvements in the Prince George airshed.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-primary text-white">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <a href="/" className="text-2xl font-bold">PGAIR</a>
              <div className="hidden md:flex space-x-6">
                <a href="/about" className="hover:text-gray-300">About</a>
                <a href="/programs" className="hover:text-gray-300">Programs</a>
                <a href="/news" className="hover:text-gray-300">News & Events</a>
                <a href="/resources" className="hover:text-gray-300">Resources</a>
                <a href="/contact" className="hover:text-gray-300">Contact</a>
              </div>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="bg-secondary text-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                <p>PO Box 322</p>
                <p>Prince George, BC V2L 4S2</p>
                <p>Email: info@pgairquality.com</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="/about" className="hover:text-gray-300">About PGAIR</a></li>
                  <li><a href="/programs" className="hover:text-gray-300">Programs</a></li>
                  <li><a href="/news" className="hover:text-gray-300">News & Events</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                <p>Stay updated with our latest news and events</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p>&copy; {new Date().getFullYear()} Prince George Air Improvement Roundtable. All Rights Reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
} 