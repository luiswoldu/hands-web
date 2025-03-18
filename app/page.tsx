'use client'

import Link from "next/link"
import { useState } from "react"
import WaitlistForm from "@/components/WaitlistForm"

export default function Home() {
  const [showWaitlist, setShowWaitlist] = useState(false)

  return (
    <main className="bg-black text-white flex flex-col">
      {/* Navigation */}
      <nav className="w-full py-8 px-6">
        <div className="container mx-auto flex justify-end">
          <ul className="flex space-x-4 xs:space-x-6 font-helvetica">
            <li>
              <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                Hands
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                Mission
              </Link>
            </li>
            <li className="hidden xs:block">
              <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                Careers
              </Link>
            </li>
            <li>
              <button
                onClick={() => setShowWaitlist(true)}
                className="text-white hover:text-gray-300 transition-colors border border-white px-4 py-1 rounded-full"
              >
                Join Waitlist
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-[2.04175rem] xs:text-[6.125rem] font-bold tracking-tighter gradient-text leading-none xs:leading-tight font-['Halyard_Display'] opacity-0 animate-slide-up">
          Understanding taste.
        </h1>
        <p className="text-[10.263pt] xs:text-[1.5rem] font-semibold max-w-2xl font-['Halyard_Display'] mt-4 xs:mt-2 opacity-0 animate-slide-up animation-delay-5">
          Introducing Hands, your intelligent, personal cooking assistant.
        </p>

        <button
          onClick={() => setShowWaitlist(true)}
          className="mt-8 px-6 py-2.5 border border-white rounded-full font-['Halyard_Display'] text-sm font-normal hover:bg-white hover:text-black transition-colors duration-300"
        >
          Join Waitlist
        </button>
      </div>

      {/* Description Section */}
      <section className="w-full py-10 xs:py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl xs:text-[3.25rem] font-semibold font-['Halyard_Display'] text-white leading-[1.1]">
              Hands helps you plan meals, find new recipes and saves time cooking.
              <br />
              Hands is the best way to cook with AI.
            </h2>
          </div>
        </div>
      </section>

      {/* Full Width Image Sections */}
      <section className="w-full">
        {/* First Container */}
        <div className="bg-gray-600 w-full h-[50vh] relative">
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
            <h1 className="text-3xl md:text-5xl font-bold font-['Halyard_Display'] text-white mb-4 opacity-0 animate-slide-up">
            Goodbye bookmarks.
            </h1>
            <p className="text-sm md:text-base font-['Halyard_Display'] font-semibold text-gray-200 max-w-md opacity-0 animate-slide-up animation-delay-5">
            Import recipes from anywhere—Instagram, TikTok, YouTube, and your favorite food blogs—in seconds.
            </p>
          </div>
        </div>

        {/* Second Container */}
        <div className="bg-blue-800 w-full h-[50vh] relative">
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
            <h1 className="text-3xl md:text-5xl font-bold font-['Halyard_Display'] text-white mb-4 opacity-0 animate-slide-up animation-delay-10">
              Always know what to make. 
            </h1>
            <p className="text-sm md:text-base font-['Halyard_Display'] font-semibold text-gray-200 max-w-md opacity-0 animate-slide-up animation-delay-15">
            Find your recipes by ingredients or category to make leftovers into your next favorite meal.
            </p>
          </div>
        </div>

        {/* Third Container */}
        <div className="bg-amber-700 w-full h-[50vh] relative">
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
            <h1 className="text-3xl md:text-5xl font-bold font-['Halyard_Display'] text-white mb-4 opacity-0 animate-slide-up animation-delay-15">
            No one cooks like Hands.
            </h1>
            <p className="text-sm md:text-base font-['Halyard_Display'] font-semibold text-gray-200 max-w-md opacity-0 animate-slide-up animation-delay-20">
            Hands can recommend new recipes, inspiration and weekly meals based on what you like to eat.
            </p>
          </div>
        </div>

        {/* Fourth Container */}
        <div className="bg-emerald-800 w-full h-[50vh] relative">
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
            <h1 className="text-3xl md:text-5xl font-bold font-['Halyard_Display'] text-white mb-4 opacity-0 animate-slide-up animation-delay-20">
            Gets to know you.
            </h1>
            <p className="text-sm md:text-base font-['Halyard_Display'] font-semibold text-gray-200 max-w-md opacity-0 animate-slide-up animation-delay-20">
            Hands learns about your preferences, nutritional goals, even allergies, creating a personalized cooking experience.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section (White Background) */}
      <section className="w-full bg-white text-black h-[75vh] flex items-center justify-center">
        <div className="container mx-auto flex flex-col items-center justify-center px-4 text-center">
          <h2 className="text-[2.04175rem] xs:text-[4.0835rem] font-bold tracking-tighter gradient-text leading-none xs:leading-tight font-['Halyard_Display']">
            Our mission
          </h2>
          <p className="text-[10.263pt] font-semibold max-w-2xl font-['Halyard_Display'] mt-4 xs:mt-2 text-gray-800">
            Our mission is to understand taste and develop AI to learn about people's unique preferences.
          </p>
        </div>
      </section>

      {/* Career Section */}
      <section className="w-full">
        <div
          className="bg-purple-900 w-full relative"
          style={{
            height: "100vh",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-['Halyard_Display'] text-white mb-6">
              Create the future of health.
            </h1>
            <p className="text-lg md:text-xl font-['Halyard_Display'] font-semibold text-gray-200 max-w-2xl mb-10">
              If you love AI-powered software, cooking and want to build a company at ground zero, join us.
            </p>
            <a
              href="mailto:luiswoldu@gmail.com"
              className="px-8 py-4 border-2 border-white rounded-full font-helvetica text-base md:text-lg font-medium hover:bg-white hover:text-purple-900 transition-colors duration-300"
            >
              Apply
            </a>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full border-t border-white/10 py-8 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col space-y-8">
            {/* Logo and Links Row */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              {/* Logo/Brand */}
              <Link href="/" className="text-xl font-['Halyard_Display'] font-[350] mb-6 md:mb-0">
                Hands
              </Link>
              
              {/* Navigation Links */}
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
                <div className="flex space-x-8">
                  <Link href="#" className="text-white/80 hover:text-white font-['Halyard_Display'] font-[350]">
                    Mission
                  </Link>
                  <Link href="#" className="text-white/80 hover:text-white font-['Halyard_Display'] font-[350]">
                    Careers
                  </Link>
                  <Link href="#" className="text-white/80 hover:text-white font-['Halyard_Display'] font-[350]">
                    Join us
                  </Link>
                  <Link href="#" className="text-white/80 hover:text-white font-['Halyard_Display'] font-[350]">
                    Contact
                  </Link>
                </div>
                
                {/* Social Links */}
                <div className="flex space-x-8">
                  <Link href="#" className="text-white/80 hover:text-white font-['Halyard_Display'] font-[350]">
                    Instagram SVG
                  </Link>
                  <Link href="#" className="text-white/80 hover:text-white font-['Halyard_Display'] font-[350]">
                    X SVG
                  </Link>
                  <Link href="#" className="text-white/80 hover:text-white font-['Halyard_Display'] font-[350]">
                    TikTok
                  </Link>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-white/80 font-['Halyard_Display'] font-[350]">
              Copyright Hands
            </div>
          </div>
        </div>
      </footer>

      {/* Waitlist Form Modal */}
      {showWaitlist && <WaitlistForm onClose={() => setShowWaitlist(false)} />}
    </main>
  )
}

