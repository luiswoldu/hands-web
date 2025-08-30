import Link from "next/link"

interface FooterProps {
  theme?: 'light' | 'dark'
}

export default function Footer({ theme = 'dark' }: FooterProps) {
  const isDark = theme === 'dark'
  
  return (
    <footer className={`w-full border-t ${isDark ? 'border-white/10' : 'border-black/10'} py-8`}>
      <div className="container mx-auto">
        <div className="flex flex-col space-y-8">
          {/* Logo and Links Row */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            {/* Logo/Brand */}
            <Link href="/" className={`text-xl font-['Halyard_Display'] font-[350] mb-6 md:mb-0 ${isDark ? 'text-white' : 'text-black'}`}>
              Hands
            </Link>
            
            {/* Navigation Links */}
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex space-x-4">
                <Link href="/mission" className={`${isDark ? 'text-white/80 hover:text-white' : 'text-gray-600 hover:text-black'} font-['Halyard_Display'] font-[350]`}>
                  Mission
                </Link>
                <a href="mailto:luiswoldu@gmail.com" className={`${isDark ? 'text-white/80 hover:text-white' : 'text-gray-600 hover:text-black'} font-['Halyard_Display'] font-[350]`}>
                  Careers
                </a>
                <Link href="mailto:handsforai@gmail.com" className={`${isDark ? 'text-white/80 hover:text-white' : 'text-gray-600 hover:text-black'} font-['Halyard_Display'] font-[350]`}>
                  Contact
                </Link>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-8">
                <a href="https://www.instagram.com/chefpluz/" target="_blank" rel="noopener noreferrer" className={`${isDark ? 'text-white/80 hover:text-white' : 'text-gray-600 hover:text-black'} font-['Halyard_Display'] font-[350]`}>
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className={`${isDark ? 'text-white/80' : 'text-gray-600'} font-['Halyard_Display'] font-[350]`}>
            Copyright © 2025 Hands. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
} 