'use client'
import Link from "next/link"

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-20 w-full h-16 bg-white flex items-center">
      <div className="container mx-auto px-6 h-full grid grid-cols-3 items-center">
        {/* Column 1: Hands */}
        <div className="col-span-1">
          <Link
            href="/"
            className="text-xl sm:text-lg text-black hover:text-gray-600 transition-colors font-halyard font-medium"
          >
            Hands
          </Link>
        </div>

        {/* Column 2: Nav links (hidden on small screens) */}
        <div className="col-span-1 justify-center hidden sm:flex space-x-6">
          <Link
            href="/"
            className="text-lg text-black hover:text-gray-600 transition-colors font-halyard font-book"
          >
            About
          </Link>
          <Link
            href="/mission"
            className="text-lg text-black hover:text-gray-600 transition-colors font-halyard font-book"
          >
            Mission
          </Link>
          <a
            href="mailto:handsforai@gmail.com"
            className="text-lg text-black hover:text-gray-600 transition-colors font-halyard font-book"
          >
            Careers
          </a>
          <Link
            href="/updates"
            className="text-lg text-black hover:text-gray-600 transition-colors font-halyard font-book"
          >
            Updates
          </Link>
        </div>

        {/* Column 3: Sign Up CTA */}
        <div className="col-span-1 flex justify-end">
          <Link
            href="/try-hands-sign-up"
            className="bg-[#6CD402] text-white text-xl sm:text-lg font-halyard font-medium px-4 py-1 rounded-full"
          >
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
