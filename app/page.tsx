"use client"
import { Navbar } from "@/components/navbar"
import { TestimonialSection } from "@/components/testimonial-section"
import { ProcessSection } from "@/components/process-section"
import { DifferenceSection } from "@/components/difference-section"
import { WhyExpeditieMDSection } from "@/components/why-expeditie-md-section"
import { PhysiciansSection } from "@/components/physictians-section"
import { WorkLifeBalanceSection } from "@/components/work-life-balance"
import { Footer } from "@/components/footer"
import { useEffect } from "react"
// import { useRouter } from 'next/router';



export default function Home() {
  // const router = useRouter();
 useEffect(() => {
    // Check if there's a hash in the URL
    const hash = window.location.hash;
    if (hash) {
      // Remove the # symbol
      const id = hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ 
          behavior: 'smooth' 
        });
      }, 100);
    }
  }, []);
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
     <section
  className="relative inset-0   bg_img w-full h-[80vh] md:h-[60vh] lg:h-[100vh] xl:h-[100vh] 2xl:h-[100vh] bg-contain bg-center bg-no-repeat overflow-hidden pt-24 sm:pt-0"
>
  {/* Overlay gradient for text readability */}
  <div className="absolute inset-0 to-transparent"></div>

  <div className="relative z-10 h-full flex flex-col justify-center w-full">
    <div className="max-w-screen-2xl mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 py-12 sm:py-0 ">
      <div className="max-w-xl md:max-w-2xl  ">
        <h1 className="outfit-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black mb-4 sm:mb-6 md:mb-8 leading-tight text-balance">
          Practice medicine See the world On your terms
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white font-light leading-relaxed mb-6 sm:mb-8 md:mb-12 font-satoshi">
          Join a growing network of elite physicians unlocking flexible, high-paying locum opportunities — paired
          with luxury travel and full-service support.
        </p>

        <button className="bg-[#C29343] hover:bg-yellow-700 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-[10px] font-semibold text-sm sm:text-base md:text-lg transition transform hover:scale-105 font-outfit">
          Start your Journey here
        </button>
      </div>
    </div>
  </div>
</section>

      <div id="process">
      <TestimonialSection/>
      </div>

      <ProcessSection />

      <DifferenceSection />

      <div id="why-us">
      <WhyExpeditieMDSection />
      </div>

      <PhysiciansSection/>

      <WorkLifeBalanceSection/>

      <Footer/>
    </main>
  )
}
