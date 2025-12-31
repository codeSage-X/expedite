"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { EmblaCarouselType } from "embla-carousel"

interface Location {
  id: number
  name: string
  image: string
}

const locations: Location[] = [
  { id: 1, name: "North Central Florida", image: "/florida.jpg" },
  { id: 2, name: "Central Texas", image: "/texas.jpg" },
  { id: 3, name: "North California", image: "/california.jpg" },
  { id: 4, name: "Arizona", image: "/arizona.jpg" },
  { id: 5, name: "North Central Florida", image: "/florida.jpg" },
  { id: 6, name: "Central Texas", image: "/texas.jpg" },
  { id: 7, name: "North California", image: "/california.jpg" },
  { id: 8, name: "Arizona", image: "/arizona.jpg" },
]

export function PhysiciansSection() {
  const [api, setApi] = useState<EmblaCarouselType | undefined>()

  useEffect(() => {
    if (!api) return
    const handleSelect = () => {}
    api.on("select", handleSelect)
    return () => { api.off("select", handleSelect) }
  }, [api])

  return (
    <section className="w-full bg-[#121212] py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 sm:gap-4 mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-outfit max-w-3xl xl:max-w-5xl text-balance leading-tight">
            The physicians who have worked with us loved these{" "}
            <span className="text-[#F6E58B]">locations</span>.
          </h2>
          <div className="flex gap-3 sm:gap-4">
            <button
              onClick={() => api?.scrollPrev()}
              className="p-2 sm:p-3 text-[#F6E58B] hover:text-yellow-400 transition-colors rounded"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={() => api?.scrollNext()}
              className="p-2 sm:p-3 text-[#F6E58B] hover:text-yellow-400 transition-colors rounded"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="w-full">
          <Carousel
            opts={{ align: "start", loop: true }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent className="-ml-2 sm:-ml-3 md:-ml-4">
              {locations.map((location) => (
                <CarouselItem
                  key={location.id}
                  className="pl-2 sm:pl-3 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <div className="group relative bg-[#1f1f1f] rounded-2xl overflow-hidden md:hover:scale-[1.02] transition-transform duration-500">
                    {/* Image */}
                    <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-80">
                      <Image
                        src={location.image}
                        alt={location.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Hover Overlay - Hidden on mobile, shown on md+ */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:flex items-end">
                      <div className="p-4 sm:p-6">
                        <h3 className="text-lg sm:text-xl font-semibold text-white font-outfit">
                          {location.name}
                        </h3>
                      </div>
                    </div>

                    {/* Mobile Text - Always visible on mobile, hidden on md+ */}
                    <div className="p-4 md:hidden inset-0 bg-black/30 absolute bottom-0 w-full">
                      <h3 className="text-lg font-semibold text-white font-outfit">
                        {location.name}
                      </h3>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  )
}