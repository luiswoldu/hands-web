'use client'

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import WaitlistForm from "@/components/WaitlistForm"

export default function Mission() {
  const [showWaitlist, setShowWaitlist] = useState(false)

  return (
    <main className="bg-white text-black flex flex-col">
      {/* Navigation */}
      <nav className="w-full py-8 px-6">
        <div className="container mx-auto">
          <ul className="flex justify-between sm:justify-end items-center">
            <div className="flex space-x-4 sm:space-x-6">
              <li>
                <Link href="/" className="text-black hover:text-gray-600 transition-colors">
                  Hands
                </Link>
              </li>
              <li>
                <Link href="/mission" className="text-black hover:text-gray-600 transition-colors">
                  Mission
                </Link>
              </li>
              <li className="hidden sm:block">
                <Link href="#" className="text-black hover:text-gray-600 transition-colors">
                  Careers
                </Link>
              </li>
            </div>
            <li className="sm:ml-6">
              <button
                onClick={() => setShowWaitlist(true)}
                className="text-black hover:text-gray-600 transition-colors font-helvetica border border-black px-4 py-1 rounded-full"
              >
                Join Waitlist
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mission Section */}
      <div className="min-h-[72vh] flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-[3rem] xs:text-[6.125rem] font-bold tracking-tighter leading-none xs:leading-tight font-['Halyard_Display'] opacity-0 animate-slide-up">
          Hands on AI
        </h1>
        <p className="text-[1.5rem] xs:text-[1.5rem] font-semibold max-w-2xl font-['Halyard_Display'] mt-4 xs:mt-2 opacity-0 animate-slide-up animation-delay-5 leading-7">
        Our vision is to develop AI that intuitively understands human taste preferences. 

        </p>
        <div className="mt-8 xs:mt-12 max-w-3xl opacity-0 animate-slide-up animation-delay-10">
        </div>
      </div>

      {/* Mission Slice Section */}
      <section className="w-full">
        <div className="w-full h-[50vh] relative">
          <Image
            src="/Images/mission-section-export@3x.jpg"
            alt="Mission section background"
            fill
            className="object-cover hidden md:block"
            priority
          />
          <Image
            src="/Images/mission-section-mobile-export1.jpg"
            alt="Mission section background mobile"
            fill
            className="object-cover block md:hidden"
            priority
          />
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 md:p-16 text-center z-10">
            <h1 className="text-[2.5rem] md:text-[5rem] tracking-tighter font-bold font-['Halyard_Display'] text-white mb-4 opacity-0 animate-slide-up leading-none">
              Our mission
            </h1>
            <p className="text-[1.5rem] md:text-[1.5rem] font-['Halyard_Display'] font-semibold text-white max-w-3xl opacity-0 animate-slide-up animation-delay-5 leading-6 pb-6">
              To understand human taste and build software that is useful for anyone that cooks. 
            </p>
          </div>
        </div>
      </section>

      {/* Our Goal Section */}
      <section className="w-full py-20 min-h-screen">
        <div className="container mx-auto px-4">
          <h2 className="text-[2.5rem] md:text-[5rem] font-bold tracking-tighter leading-none xs:leading-tight font-['Halyard_Display'] opacity-0 animate-slide-up text-center mb-8">
            Our goal
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-[1.5rem] font-semibold font-['Halyard_Display'] leading-7 opacity-0 animate-slide-up animation-delay-5 text-[#545454]">
              While personalization is everywhere—from grocery flyers to social media—most systems lack true context. At Hands, we focus on the most advanced and latest machine learning technologies to solve the challenge of prediction accuracy and context-awareness.
            </p>
            <p className="text-lg xs:text-[1.5rem] font-semibold font-['Halyard_Display'] leading-7 opacity-0 animate-slide-up animation-delay-5 mt-4 text-[#545454]">
              We understand that the the food we eat daily isn't just a pattern, but a set of personal vectors that comes down to personality, mood and even genetics. We are driven to deploy software that feels like having a dedicated personal chef. You might even say that the app we are building, will feel like you have an extra pair of hands.
            </p>
            <p className="text-lg xs:text-[1.5rem] font-semibold font-['Halyard_Display'] leading-7 opacity-0 animate-slide-up animation-delay-5 mt-4 text-[#545454]">
              For our neural network to deliver context-aware, hyper-accurate suggestions, we are looking for deep learning experts to join us.
            </p>
          </div>
        </div>
      </section>

      {/* Career Section */}
      <section className="w-full">
        <div
          className="w-full relative"
          style={{
            height: "100vh",
          }}
        >
          <img 
            src="/Images/careers-teamoffice.jpg" 
            alt="Team office" 
            className="absolute inset-0 w-full h-full object-cover z-[5]"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-[10]">
            <h1 className="text-4xl md:text-6xl font-bold font-['Halyard_Display'] text-white mb-6">
              Create the future of health.
            </h1>
            <p className="text-lg leading-tight md:text-xl font-['Halyard_Display'] font-semibold text-white max-w-2xl mb-10">
              If you love AI-powered software, cooking and want to build a company at ground zero, join us.
            </p>
            <a
              href="mailto:luiswoldu@gmail.com"
              className="px-8 py-2 border-2 border-white rounded-full font-helvetica text-base md:text-lg font-medium bg-white text-black transition-all duration-300 transform hover:scale-110"
            >
              Apply
            </a>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full border-t border-black/10 py-8 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col space-y-8">
            {/* Logo and Links Row */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              {/* Logo/Brand */}
              <Link href="/" className="text-xl font-['Halyard_Display'] font-[350] mb-6 md:mb-0 text-black">
                Hands
              </Link>
              
              {/* Navigation Links */}
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
                <div className="flex space-x-8">
                  <Link href="/mission" className="text-gray-600 hover:text-black font-['Halyard_Display'] font-[350]">
                    Mission
                  </Link>
                  <Link href="#" className="text-gray-600 hover:text-black font-['Halyard_Display'] font-[350]">
                    Careers
                  </Link>
                  <Link href="#" className="text-gray-600 hover:text-black font-['Halyard_Display'] font-[350]">
                    Join us
                  </Link>
                  <Link href="#" className="text-gray-600 hover:text-black font-['Halyard_Display'] font-[350]">
                    Contact
                  </Link>
                </div>
                
                {/* Social Links */}
                <div className="flex space-x-8">
                  <Link href="#" className="text-gray-600 hover:text-black font-['Halyard_Display'] font-[350]">
                    Instagram
                  </Link>
                  <Link href="#" className="text-gray-600 hover:text-black font-['Halyard_Display'] font-[350]">
                    X
                  </Link>
                  <Link href="#" className="text-gray-600 hover:text-black font-['Halyard_Display'] font-[350]">
                    TikTok
                  </Link>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-gray-600 font-['Halyard_Display'] font-[350]">
              Copyright Hands
            </div>
          </div>
        </div>
      </footer>

      {showWaitlist && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full mx-4">
            <WaitlistForm onClose={() => setShowWaitlist(false)} />
          </div>
        </div>
      )}
    </main>
  )
} 