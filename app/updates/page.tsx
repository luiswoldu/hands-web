"use client"

import Link from "next/link"
import { useState } from "react"
import Footer from "@/components/Footer"

const updates = [
  {
    slug: "announcing-hands",
    title: "Announcing Hands",
    date: "2025-04-30",
    excerpt: "Today, we're announcing Hands, your intelligent, personal cooking assistant.",
  },
]

export default function HomePage() {
    const [showWaitlist, setShowWaitlist] = useState(false)
  return (
    <>
      {/* Top navigation - centered container, left aligned links like main/mission */}
      <main
        style={{
          background: "#ffffff",
          color: "#000000",
          minHeight: "100vh",
        }}>
            <nav className="sticky top-0 z-20 w-full py-8 px-6 bg-white">
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
                    <a href="mailto:luiswoldu@gmail.com" className="text-black hover:text-gray-600 transition-colors">
                    Careers
                    </a>
                </li>
                <li>
                    <Link
                    href="/updates"
                    className="text-black hover:text-gray-600 transition-colors">
                    Updates
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

        {/* Hero area with floating background heading */}
        <div style={{ position: "relative", maxWidth: 1100, margin: "0 auto", padding: "56px 20px 80px" }}>
          {/* floating decorative heading (visually large, low-opacity, animated) */}
          <h1
            aria-hidden="true"
            style={{
              position: "absolute",
              top: -20,
              left: "50%",
              transform: "translateX(-50%)",
              margin: 0,
              pointerEvents: "none",
              fontSize: "clamp(48px, 12vw, 180px)",
              lineHeight: 1,
              fontWeight: 900,
              color: "#000",
              opacity: 0.06,
              letterSpacing: "-0.05em",
              zIndex: 0,
              whiteSpace: "nowrap",
              willChange: "transform",
            }}
          >
            Updates
          </h1>

          {/* actual accessible page heading and content sits above the decorative heading */}
          <section style={{ position: "relative", zIndex: 1 }}>
            <header style={{ marginBottom: 28 }}>
              <h2 style={{ margin: 0, fontSize: 42, lineHeight: 1.05 }}>Latest News</h2>
            </header>

            <section aria-labelledby="updates-list">
              <ul id="updates-list" style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 18 }}>
                {updates.map((u) => (
                  <li key={u.slug} style={{ border: "1px solid rgba(0,0,0,0.04)", borderRadius: 12, padding: 18, background: "#fff" }}>
                    <article>
                      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "baseline" }}>
                        <h3 style={{ margin: 0, fontSize: 18 }}>
                          {u.title}
                        </h3>
                        <time style={{ color: "rgba(0,0,0,0.45)" }} dateTime={u.date}>
                          {new Date(u.date).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" })}
                        </time>
                      </div>

                      <p style={{ marginTop: 8, marginBottom: 12, color: "rgba(0,0,0,0.7)" }}>{u.excerpt}</p>
                    </article>
                  </li>
                ))}
              </ul>
            </section>
          </section>
        </div>

        {/* Footer Section */}
        <Footer theme="light" />

        <style>{`
          @keyframes floatY {
            0% { transform: translateX(-50%) translateY(60px); }
            100% { transform: translateX(-50%) translateY(10px); }
          }

          /* run once and hold final position; respect reduced motion */
          h1[aria-hidden="true"] {
            animation: floatY 1400ms cubic-bezier(.2,.8,.2,1) forwards;
            will-change: transform;
          }

          @media (max-width: 640px) {
            h1[aria-hidden="true"] {
              font-size: clamp(32px, 20vw, 96px);
              opacity: 0.04;
              top: -10px;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            h1[aria-hidden="true"] {
              animation: none;
              transform: translateX(-50%) translateY(-20px);
            }
          }
        `}</style>
      </main>
      

      {/* ...existing page content... */}
    </>
  )
}
// ...existing code...