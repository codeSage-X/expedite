"use client"

import Image from "next/image"
import { Check } from "lucide-react"
import coop from '../public/coop.png'
import goldtick from '../public/goldtick.png'


export function DifferenceSection() {
  return (
    <section className="difference w-full  bg-[#121212] py-12 sm:py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-screen-2xl mx-auto">
        {/* Section title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 font-outfit text-[#F9EEB6]">
          The ExpediteMD Difference
        </h2>

        <div className="w-full flex justify-center items-center py-8 ">
          <div className="h-full w-full lg:w-[90%] xl:w-[80%] 2xl:w-[70%] flex flex-col lg:flex-row justify-center items-center gap-6">
            
            {/* Left Card */}
            <div className="w-full lg:w-[50%] h-auto lg:h-full flex justify-center items-center">
              <div className="card bg-transparent h-auto lg:min-h-[500px] xl:min-h-[600px] w-full rounded-2xl border border-gray-700 p-6 sm:p-8 md:p-10 flex flex-col justify-between">
                
                {/* Description text */}
                <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-8 sm:mb-10 md:mb-12 font-satoshi">
                  Driven by the realities of modern healthcare, we cut the noise between talent and teams. Vetted matches,
                  clean onboarding, clear pay, real support.
                </p>

                {/* Features list */}
                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  {/* Feature 1 */}
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center">
                      <Image
                        src={goldtick}
                        alt="goldtick"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-[#F9EEB6] text-sm sm:text-base md:text-lg lg:text-xl font-semibold font-satoshi">
                      Faster, safer placements
                    </span>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center">
                      <Image
                        src={goldtick}
                        alt="goldtick"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-[#F9EEB6] text-sm sm:text-base md:text-lg lg:text-xl font-semibold font-satoshi">
                      Curated matches that last
                    </span>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center">
                      <Image
                        src={goldtick}
                        alt="goldtick"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-[#F9EEB6] text-sm sm:text-base md:text-lg lg:text-xl font-semibold font-satoshi">
                      Full support, always
                    </span>
                  </div>
                </div>
              </div> 
            </div>

            {/* Right Card */}
            <div className="w-full lg:w-[50%] h-auto lg:h-full flex justify-center items-center">
              <div className="card bg-transparent h-auto lg:min-h-[500px] xl:min-h-[600px] w-full rounded-2xl border border-gray-700 overflow-hidden flex flex-col">
                
                {/* Image */}
                <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80">
                  <Image
                    src={coop}
                    alt="Healthcare professionals collaborating"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Description text */}
                <div className="p-6 sm:p-8 md:p-10 flex-1 flex items-center">
                  <p className="text-[#E5E5E5] text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-satoshi">
                    Start faster with verified credentials, clear contracts, and proactive scheduling. We align licensure,
                    onboarding, and travel in parallel so you arrive ready to treat patients, not chase paperwork or logistics.
                  </p>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}