'use client'
import Link from "next/link"
import { useState } from "react"
import { Plus } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"

interface NavigationProps {
  theme?: 'dark' | 'light';
  onWaitlistOpen?: () => void;
}

const Navigation = ({ theme = 'dark', onWaitlistOpen }: NavigationProps) => {
  const [open, setOpen] = useState(false)
  const isDark = theme === 'dark';
  const textColor = isDark ? 'text-white' : 'text-black';
  const hoverColor = isDark ? 'hover:text-gray-300' : 'hover:text-gray-600';
  const bgColor = isDark ? 'bg-black' : 'bg-white';
  const borderColor = isDark ? 'border-white' : 'border-black';

  return (
    <nav className={`sticky top-0 z-20 w-full py-5 sm:py-8 ${bgColor}`}>
      <div className="container mx-auto px-8 sm:px-6">
        {/* Desktop navigation */}
        <ul className="hidden sm:flex justify-between items-center">
          <div className="flex space-x-6">
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
            <li>
              <a
                href="mailto:handsforai@gmail.com"
                className={`text-lg ${textColor} ${hoverColor} transition-colors font-['Halyard_Display']`}
              >
                Careers
              </a>
            </li>
            <li>
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
              Early Access
            </button>
          </li>
        </ul>

        {/* Mobile navigation */}
        <div className="flex sm:hidden items-center justify-between">
          <Link
            href="/"
            className={`text-lg ${textColor} ${hoverColor} transition-colors font-['Halyard_Display']`}
          >
            Hands
          </Link>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger aria-label="Open menu" className={`p-0 rounded-md ${isDark ? 'text-white' : 'text-black'}`}>
              <Plus className={`h-6 w-6 transition-transform duration-200 ${open ? 'rotate-45' : 'rotate-0'}`} />
            </SheetTrigger>
            <SheetContent side="right" className={`${bgColor} text-inherit [&>button]:hidden`}> 
              <nav className="mt-8 flex flex-col space-y-4">
                <Link
                  href="/mission"
                  onClick={() => setOpen(false)}
                  className={`text-xl ${textColor} ${hoverColor} transition-colors font-['Halyard_Display']`}
                >
                  Mission
                </Link>
                <a
                  href="mailto:handsforai@gmail.com"
                  onClick={() => setOpen(false)}
                  className={`text-xl ${textColor} ${hoverColor} transition-colors font-['Halyard_Display']`}
                >
                  Careers
                </a>
                <Link
                  href="/updates"
                  onClick={() => setOpen(false)}
                  className={`text-xl ${textColor} ${hoverColor} transition-colors font-['Halyard_Display']`}
                >
                  Updates
                </Link>
                <div className="pt-2">
                  <SheetClose asChild>
                    <button
                      onClick={onWaitlistOpen}
                      className={`w-full text-lg ${textColor} ${hoverColor} transition-colors font-['Halyard_Display'] ${borderColor} border px-4 py-2 rounded-full`}
                    >
                      Early Access
                    </button>
                  </SheetClose>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;