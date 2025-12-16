// import Header from "@/components/header"

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function About() {
  return (
    <div style={{ backgroundColor: "#121212" }} className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
   <section 
  className="relative py-12 md:py-16 lg:py-20 px-4 md:px-6 bg-[#121212] mt-8 h-[30vh] sm:h-[35vh] md:h-[40vh] lg:h-[50vh] xl:h-[60vh] bg-contain bg-center bg-no-repeat"
  style={{
    backgroundImage: 'url("/abt.png")',
  }}
>
  <div className="relative max-w-7xl mx-auto z-10 h-full flex flex-col justify-center items-center">
    <div
      className="inline-block w-auto px-4 sm:px-6 py-2 sm:py-3 rounded-[15px] text-sm sm:text-base font-medium mb-4 md:mb-6 border border-gray-600/50"
      style={{ 
        backgroundColor: "rgba(47, 47, 47, 0.5)", 
        color: "#FFFFFF",
        backdropFilter: "blur(10px)"
      }}
    >
      About Us
    </div>
    
    <h1 
      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-center px-4 sm:px-6 py-3 sm:py-4 rounded-lg w-full sm:w-[90%] md:w-[80%] lg:w-[60%] xl:w-[60%]" 
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.04)",
        backdropFilter: "blur(1px)"
      }}
    >
      <span className="text-[#F6E58B]">ExpediteMD</span> is the backbone of cultural and social cultural
    </h1>
  </div>
</section>

      {/* Who We Are Section */}
      <section className="py-20 px-6" style={{ backgroundColor: "#121212" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Who We Are</h2>
            <p className="text-gray-300 text-lg">
              Work in new cities or return to families. Build your schedule around your life
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="p-8 rounded-2xl " style={{ backgroundColor: "#2F2F2F" }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: "#F6E58B" }}>
                Our Vision
              </h3>
              <p className="text-gray-300">To be the undisputed leading and dominant eye care provider in Africa.</p>
            </div>
            <div className="p-8 rounded-2xl " style={{ backgroundColor: "#2F2F2F" }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: "#F6E58B" }}>
                Our Mission
              </h3>
              <p className="text-gray-300">To liberate people by preserving their sight to see the beauty of life.</p>
            </div>
          </div>

          {/* Brand Values */}
          <div className="p-12 rounded-2xl " style={{ backgroundColor: "#2F2F2F" }}>
            <h3 className="text-2xl font-bold mb-6" style={{ color: "#F6E58B" }}>
              Brand Values
            </h3>
            <p className="text-gray-300 mb-6">
              Our brand values define our culture and guide our behavior. They are lived by our people, captured in our
              relationships and reflected in how we work.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-300">
                  <span style={{ color: "#F6E58B" }}>✓</span> Competence
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <span style={{ color: "#F6E58B" }}>✓</span> Innovation
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <span style={{ color: "#F6E58B" }}>✓</span> Insight
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-300">
                  <span style={{ color: "#F6E58B" }}>✓</span> Integrity
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <span style={{ color: "#F6E58B" }}>✓</span> Respect
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <span style={{ color: "#F6E58B" }}>✓</span> Resilience
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}
