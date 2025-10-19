import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full border-t border-black/10 py-8">
      <div className="container mx-auto">
        <div className="flex flex-col space-y-8">
          {/* Logo and Links Row */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            {/* Logo/Brand with Social Icons */}
            <div className="flex items-center justify-between md:space-x-8 mb-6 md:mb-0">
              <Link href="/" className="text-xl font-['Halyard_Display'] font-[350] text-black">
                Hands
              </Link>
              
              {/* Social Icons Container */}
              <div className="flex items-center space-x-2">
                <a 
                  href="https://www.instagram.com/h.ai.nds/" 
                  className="p-2 rounded-md transition-colors text-black hover:text-black hover:bg-black/10"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                
                <a 
                  href="https://www.tiktok.com/@handsaiapp" 
                  className="p-2 rounded-md transition-colors text-black hover:text-black hover:bg-black/10"
                  aria-label="TikTok"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-2.909 2.909 2.896 2.896 0 0 1-2.909-2.909 2.896 2.896 0 0 1 2.909-2.909c.183 0 .363.018.534.052V9.26c-.17-.008-.338-.018-.534-.018A6.541 6.541 0 0 0 2.924 15.783a6.541 6.541 0 0 0 6.541 6.541A6.541 6.541 0 0 0 16.006 15.783V7.034a8.159 8.159 0 0 0 4.77 1.548V5.137a4.725 4.725 0 0 1-1.187-1.451z"/>
                  </svg>
                </a>
                
                <a 
                  href="https://www.youtube.com/@handsai" 
                  className="p-2 rounded-md transition-colors text-black hover:text-black hover:bg-black/10"
                  aria-label="YouTube"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                
                <a 
                  href="https://ca.linkedin.com/company/handsforu" 
                  className="p-2 rounded-md transition-colors text-black hover:text-black hover:bg-black/10"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Navigation Links */}
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex space-x-4">
                <Link href="/mission" className="text-gray-600 hover:text-black font-['Halyard_Display'] font-[350]">
                  Mission
                </Link>
                <a href="mailto:handsforai@gmail.com" className="text-gray-600 hover:text-black font-['Halyard_Display'] font-[350]">
                  Careers
                </a>
                <Link href="mailto:handsforai@gmail.com" className="text-gray-600 hover:text-black font-['Halyard_Display'] font-[350]">
                  Contact
                </Link>
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="text-gray-600 font-['Halyard_Display'] font-[350]">
            Copyright © 2025 Hands. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}