'use client'
import Link from "next/link"

interface NavigationProps {
  theme?: 'dark' | 'light';
  onWaitlistOpen?: () => void;
}

const Navigation = ({ theme = 'dark', onWaitlistOpen }: NavigationProps) => {
  const isDark = theme === 'dark';
  const textColor = isDark ? 'text-white' : 'text-black';
  const hoverColor = isDark ? 'hover:text-gray-300' : 'hover:text-gray-600';
  const bgColor = isDark ? 'bg-black' : 'bg-white';
  const borderColor = isDark ? 'border-white' : 'border-black';

  return (
    <nav className={`sticky top-0 z-20 w-full py-8 px-6 ${bgColor}`}>
      <div className="container mx-auto">
        <ul className="flex justify-between sm:justify-end items-center">
          <div className="flex space-x-4 sm:space-x-6">
            <li>
              <Link
                href="/"
                className={`text-lg ${textColor} ${hoverColor} transition-colors font-['Halyard_Display']`}
              >
                Hands
              </Link>
            </li>
            <li>
              <Link
                href="/mission"
                className={`text-lg ${textColor} ${hoverColor} transition-colors font-['Halyard_Display']`}
              >
                Mission
              </Link>
            </li>
            <li className="hidden sm:block">
              <a
                href="mailto:handsforai@gmail.com"
                className={`text-lg ${textColor} ${hoverColor} transition-colors font-['Halyard_Display']`}
              >
                Careers
              </a>
            </li>
            <li className="hidden sm:block">
              <Link
                href="/updates"
                className={`text-lg ${textColor} ${hoverColor} transition-colors font-['Halyard_Display']`}
              >
                Updates
              </Link>
            </li>
          </div>
          <li className="sm:ml-6">
            <button
              onClick={onWaitlistOpen}
              className={`text-lg ${textColor} ${hoverColor} transition-colors font-['Halyard_Display'] ${borderColor} border px-4 py-1 rounded-full`}
            >
              Join Waitlist
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;