'use client'

import Link from "next/link"
import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { Plus } from "lucide-react"
import { Sheet, SheetContent, SheetClose } from "@/components/ui/sheet"

interface NavigationProps {
  theme?: 'dark' | 'light';
  onWaitlistOpen?: () => void;
}

const Navigation = ({ theme = 'dark', onWaitlistOpen }: NavigationProps) => {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = theme === 'dark';
  const textColor = isDark ? 'text-white' : 'text-black';
  const hoverColor = isDark ? 'hover:text-gray-300' : 'hover:text-gray-600';
  const bgColor = isDark ? 'bg-black' : 'bg-white';
  const borderColor = isDark ? 'border-white' : 'border-black';

  // Floating plus/x button rendered outside DOM hierarchy
  const triggerButton = mounted ? createPortal(
    <button
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      onClick={() => setOpen(prev => !prev)}
      className={`fixed top-4 right-4 z-[60] p-0 rounded-md ${isDark ? 'text-white' : 'text-black'} sm:hidden`}
      >
      <Plus className={`h-8 w-8 transition-transform duration-200 ${open ? 'rotate-45' : 'rotate-0'}`} />
    </button>,
    document.body
  ) : null

  // Floating Early Access button (mobile only)
  const mobileEarlyAccess = mounted ? createPortal(
    <button
      onClick={onWaitlistOpen}
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[50] sm:hidden text-lg ${textColor} ${hoverColor} ${borderColor} border px-6 py-2 rounded-full font-['Halyard_Display'] transition-colors ${bgColor}`}
    >
      Early Access
    </button>,
    document.body
  ) : null

  return (
    <>
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
              className={`text-xl tracking-tight ${textColor} ${hoverColor} transition-colors font-['Halyard_Display'] font-semibold -mt-0.5`}
              >
              Hands
            </Link>

            {/* Portaled trigger button */}
            {triggerButton}

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetContent side="top" className={`${bgColor} text-inherit [&>button]:hidden`}>
                <nav className="mt-8 flex flex-col space-y-4 px-6">
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
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
