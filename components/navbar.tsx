"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Menu, X } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isOpen) {
        // Slide in from top
        gsap.fromTo(
          mobileMenuRef.current,
          {
            y: -100,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
          }
        )
      }
    }
  }, [isOpen])

  const handleClose = () => {
    if (mobileMenuRef.current) {
      // Slide up before closing
      gsap.to(mobileMenuRef.current, {
        y: -100,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          setIsOpen(false)
        }
      })
    }
  }

  return (
    <nav className="w-full absolute top-0 left-0 right-0 z-50 ">
      <div className="max-w-screen-2xl mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 py-3 sm:py-4 md:py-5 flex items-center justify-between">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="ExpediteMD Logo"
            width={250}
            height={80}
            className="w-20 sm:w-28 md:w-36 lg:w-48 h-auto"
            priority
          />
        </Link>

        <button 
          onClick={() => isOpen ? handleClose() : setIsOpen(true)} 
          className="md:hidden flex items-center justify-center w-10 h-10"
        >
          {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
        </button>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8 xl:gap-12">
          <Link
            href="/#home"
            className="text-white text-xs md:text-sm lg:text-base font-light satoshi hover:text-yellow-100 transition"
          >
            Home
          </Link>
          <Link
            href="/#why-us"
            className="text-white text-xs md:text-sm lg:text-base font-light satoshi hover:text-yellow-100 transition"
          >
            Why Choose Us
          </Link>
          <Link
            href="about"
            className="text-white text-xs md:text-sm lg:text-base font-light satoshi hover:text-yellow-100 transition"
          >
            About Us
          </Link>

          {/* Contact Button */}
          <Link href='contact' className="bg-[#C29343] hover:bg-yellow-700 text-white px-3 md:px-4 lg:px-5 py-2 rounded-[10px] font-semibold flex items-center gap-2 transition font-outfit text-xs md:text-sm lg:text-base whitespace-nowrap">
            <Phone className="w-3.5 md:w-4 lg:w-5 h-3.5 md:h-4 lg:h-5 flex-shrink-0" />
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div 
            ref={mobileMenuRef}
            className="absolute top-full left-0 right-0 bg-[#1a1a1a] md:hidden flex flex-col gap-4 p-6 shadow-lg z-50 pointer-events-auto"
          >
            <Link 
              href="/#home" 
              className="text-white satoshi hover:text-yellow-100 transition"
              onClick={handleClose}
            >
              Home
            </Link>
            <Link 
              href="/#why-us" 
              className="text-white satoshi hover:text-yellow-100 transition"
              onClick={handleClose}
            >
              Why Choose Us
            </Link>
            <Link 
              href="/about" 
              className="text-white satoshi hover:text-yellow-100 transition"
              onClick={handleClose}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="bg-[#C29343] hover:bg-yellow-700 text-white px-4 py-2 rounded-[10px] font-semibold flex items-center gap-2 transition font-outfit w-full justify-center"
              onClick={handleClose}
            >
              <Phone className="w-4 h-4" />
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}