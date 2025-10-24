"use client"

import { useState } from "react"
import Link from "next/link"
import Navigation from "@/components/Navigation"
import WaitlistForm from "@/components/WaitlistForm"
import Footer from "@/components/Footer"
import { updates } from "./data"

export default function UpdatesPage() {
  const [showWaitlist, setShowWaitlist] = useState(false)

  return (
    <>
      <main className="bg-white text-black min-h-screen">
        <Navigation theme="light" onWaitlistOpen={() => setShowWaitlist(true)} />

        <div className="max-w-7xl mx-auto px-5 py-14 grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6 md:col-start-4 relative">
            <h1
              aria-hidden="true"
              className="absolute -top-5 left-1/2 -translate-x-1/2 text-[clamp(48px,12vw,180px)] font-black opacity-[0.06] tracking-tighter pointer-events-none"
            >
              Updates
            </h1>

            <section className="relative z-10">
              <header className="mb-7">
                <h2 className="font-semibold text-[42px] leading-tight font-['Halyard_Display']">
                  Latest News
                </h2>
              </header>

              <ul className="grid gap-5">
                {updates.map((u) => (
                  <li key={u.slug}>
                    <Link href={`/updates/${u.slug}`}>
                      <article className="p-5 bg-white rounded-xl shadow-custom hover:shadow-lg hover:scale-[1.01] transition-all">
                        <div className="flex justify-between items-baseline">
                          <h3 className="font-['Halyard_Display'] text-xl">{u.title}</h3>
                          <time
                            className="text-black/45 font-['Halyard_Display']"
                            dateTime={u.date}
                          >
                            {new Date(u.date).toLocaleDateString(undefined, {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </time>
                        </div>
                        <p className="mt-2 text-black/70 font-['Halyard_Display']">{u.excerpt}</p>
                      </article>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        <Footer theme="light" />
      </main>

      {showWaitlist && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full mx-4">
            <WaitlistForm onClose={() => setShowWaitlist(false)} />
          </div>
        </div>
      )}
    </>
  )
}
