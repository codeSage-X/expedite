"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"

const STEPS = [
  {
    id: 1,
    title: "Connect With Us",
    description:
      "Fill out a short form and a real person, not a bot, will reach out to understand your goals and preferences.",
  },
  {
    id: 2,
    title: "Get Matched & Prepped",
    description:
      "We find the perfect assignment for you and prepare all necessary documentation and support materials.",
  },
  {
    id: 3,
    title: "Start Your Assignment",
    description:
      "Begin your locum tenens journey with comprehensive support throughout your assignment.",
  },
]

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0) // default step 1 active

  return (
    <section className="process w-full bg-[#F9EEB6] h-[90vh] md:h-[60vh] lg:h-[100vh] xl:h-[100vh] 2xl:h-[100vh] flex items-center justify-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-2xl mx-auto w-full flex flex-col items-center sm:items-start text-center sm:text-left">
        {/* Heading + icon */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 sm:gap-0 mb-10 sm:mb-12 md:mb-16 w-full">
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6 font-outfit leading-tight">
              We&apos;ve made the process simple.{" "}
              <br className="hidden sm:block" /> Here&apos;s how it works
            </h2>
          </div>

          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-4 sm:mt-0">
            <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
        </div>

        {/* Description for active step */}
        <div className="mb-10 sm:mb-12 md:mb-16 max-w-2xl mx-auto sm:mx-0 transition-all duration-500 ease-in-out">
          <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed font-satoshi">
            {STEPS[activeStep].description}
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col sm:flex-row items-center sm:items-center justify-center sm:justify-between gap-8 sm:gap-4 w-full">
          {STEPS.map((step, index) => {
            const isActive = index === activeStep

            return (
              <div
                key={step.id}
                onMouseEnter={() => setActiveStep(index)} // 👈 activate on hover
                className="flex-1 w-full flex flex-col items-center sm:items-start text-center sm:text-left transition-all duration-500 cursor-pointer"
              >
                {/* Dots and connecting line */}
                <div className="w-full flex items-center justify-center sm:justify-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="relative flex-shrink-0">
                    <div className="relative w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                      {/* Gold back layer */}
                      <div
                        className={`absolute left-2 bottom-2 w-full h-full rounded-full transition-all duration-500 ${
                          isActive ? "bg-[#C7A85A]" : "bg-gray-300"
                        }`}
                      ></div>
                      {/* Black front layer */}
                      <div
                        className={`absolute left-0 top-0 w-full h-full rounded-full z-10 transition-all duration-500 ${
                          isActive ? "bg-black" : "bg-gray-400"
                        }`}
                      ></div>
                    </div>
                  </div>

                  {/* Line for all steps */}
                  <div
                    className={`hidden sm:block flex-1 h-0.5 md:h-1 transition-all duration-500 ${
                      isActive ? "bg-black" : "bg-gray-300"
                    }`}
                  ></div>
                </div>

                {/* Step title */}
                <p
                  className={`text-xs sm:text-sm md:text-base lg:text-lg font-satoshi transition-all duration-500 ${
                    isActive ? "text-black font-semibold" : "text-gray-400"
                  }`}
                >
                  {step.id}. {step.title}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
