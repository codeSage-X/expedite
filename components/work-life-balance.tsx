"use client"

import Image from "next/image"

export function WorkLifeBalanceSection() {
  return (
    <section
      className="  relative h-[25vh] md:h-[40vh] lg:h-[40vh] xl:h-[60vh] bg-[#121212]  bg-contain  bg-left bg-no-repeat flex items-center"
      style={{
        backgroundImage: 'url("/dna_bg.jpg")',
      }}
    >
      <div className="max-w-screen-2xl mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-12 sm:py-16 md:py-20 lg:py-24">
          {/* Left - Image */}
          <div className="flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-sm md:max-w-md h-96 md:h-[500px] lg:h-[600px]">
              {/* <Image
                src="/doctor-family.png"
                alt="Doctor with children - work life balance"
                fill
                className="object-contain"
                priority
              /> */}
            </div>
          </div>

          {/* Right - Text with EKG line */}
          <div className="order-1 lg:order-2 flex flex-col justify-center items-center lg:items-start gap-6 md:gap-8">
            {/* EKG/Heartbeat SVG Line */}
            

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-center lg:text-left leading-tight font-outfit text-balance max-w-2xl">
              {/* Give yourself the Work-life balance you deserve */}
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}
