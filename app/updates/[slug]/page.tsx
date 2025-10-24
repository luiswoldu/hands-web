"use client"

import * as React from "react"
import { useState } from "react"
import { notFound } from "next/navigation"
import Navigation from "@/components/Navigation"
import WaitlistForm from "@/components/WaitlistForm"
import Footer from "@/components/Footer"
import { updates } from "../data" // must resolve correctly

export default function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params)
  const [showWaitlist, setShowWaitlist] = useState(false)
  const article = updates?.find((a) => a.slug === slug)

  if (!article) {
    notFound()
  }

  const formattedDate = new Date(article.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <>
      <main className="bg-white text-black min-h-screen">
        <Navigation theme="light" onWaitlistOpen={() => setShowWaitlist(true)} />

        <article className="max-w-7xl mx-auto px-5 py-14 grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6 md:col-start-4">
            <time
              className="block text-center text-lg text-black/60 mb-6 font-['Halyard_Display']"
              dateTime={article.date}
            >
              {formattedDate}
            </time>

            {/* Title now left-aligned */}
            <h1 className="text-6xl font-bold text-left mb-12 font-['Halyard_Display']">
              {article.title}
            </h1>

            <div className="space-y-8">
              {article.content.map((block, i) =>
                block.type === "heading" ? (
                  <h2
                    key={i}
                    className="text-4xl font-semibold mt-12 mb-6 font-['Halyard_Display']"
                  >
                    {block.text}
                  </h2>
                ) : (
                  <p
                    key={i}
                    className="text-xl leading-relaxed text-black/80 font-['Halyard_Display']"
                  >
                    {block.text}
                  </p>
                )
              )}
            </div>
          </div>
        </article>

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
