"use client"

import Image from "next/image"

interface WhyCard {
  number: string
  title: string
  description: string
  image: string
}

const whyCards: WhyCard[] = [
  {
    number: "1",
    title: "Lifestyle That Fits You",
    description:
      "Work in new cities or return to favorites. Build your schedule around your life — not the other way around.",
    image: "/male-doctor-teaching-child-lifestyle.jpg",
  },
  {
    number: "2",
    title: "Better Pay, Fewer Barriers",
    description:
      "Competitive compensation with transparent terms. No hidden fees. Just straightforward partnerships built on trust and fair value.",
    image: "/surgeon-in-operating-room-surgery.jpg",
  },
  {
    number: "3",
    title: "Trust, Not Transactions",
    description:
      "Dedicated support from real people who understand your needs. We're partners in your career, not just a middleman.",
    image: "/hospital-professional-healthcare-environment.jpg",
  },
]

export function WhyExpeditieMDSection() {
  return (
    <section className="w-full bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-5xl font-bold mb-16 font-outfit">
          <span className="text-white">So, Why </span>
          <span className="text-yellow-500">ExpeditieMD?</span>
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyCards.map((card, index) => (
            <div key={index} className="relative group overflow-hidden rounded-2xl h-96">
              {/* Background Image */}
              <Image
                src={card.image || "/placeholder.svg"}
                alt={card.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="text-6xl font-bold text-yellow-500 mb-2 font-outfit">{card.number}</div>
                <h3 className="text-2xl font-bold text-white mb-3 font-outfit">{card.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed font-satoshi">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
