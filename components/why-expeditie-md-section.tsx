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
    <section className="w-full bg-[#121212] py-16 sm:py-24 px-4 sm:px-6 -mt-24 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-16 font-outfit">
          <span className="text-white">So, Why </span>
          <span className="text-[#F6E58B]">ExpeditieMD?</span>
        </h2>

        {/* Responsive cards grid - 1 column on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whyCards.map((card, index) => (
            <div key={index} className="relative group overflow-hidden rounded-2xl h-72 sm:h-96">
              {/* Background Image */}
              <Image
                src={card.image || "/placeholder.svg"}
                alt={card.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                <div className="text-4xl sm:text-6xl font-bold text-[#F6E58B] mb-2 font-outfit">{card.number}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#F6E58B] mb-2 sm:mb-3 font-outfit">{card.title}</h3>
                <p className="text-xs sm:text-sm leading-relaxed font-satoshi text-gray-300">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
