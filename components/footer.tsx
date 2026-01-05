"use client"

import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative bg-black text-white pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-0 overflow-hidden">
      <div className="max-w-screen-2xl px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Left Column - Navigation Links */}
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className="text-sm md:text-base font-bold font-satoshi hover:text-yellow-500 transition"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm md:text-base font-bold -mt-2 font-satoshi hover:text-yellow-500 transition"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm md:text-base font-bold -mt-2 font-satoshi hover:text-yellow-500 transition"
            >
              Contact us
            </Link>
          </div>

          {/* Center Column - Social Links and Contact Info */}
          <div className="flex flex-col gap-4">
            {/* <h3 className="text-sm md:text-base font-outfit font-bold">Social links</h3> */}
            {/* <div className="flex flex-col gap-2">
            
              <a
                href="mailto:expedite@seoemail.com"
                className="text-xs md:text-sm font-satoshi hover:text-yellow-500 transition"
              >
                expedite@seoemail.com
              </a>
            </div> */}
          </div>
        </div>

        {/* Footer Bottom */}

        {/* <div className="border-t border-gray-700 mt-8 md:mt-12 pt-8 md:pt-12">
          <p className="text-center text-xs sm:text-sm text-gray-400 font-satoshi">
            © 2025 ExpeditieMD. All rights reserved.
          </p>
        </div> */}
      </div>
      <div className="footer_bg w-full h-[10vh] sm:h-[10vh] md:h-[30vh] lg:h-[30vh] xl:h-[30vh] 2xl:h-[30vh] flex justify-center items-end">
        <div
          className="w-[95%] h-full bg-contain bg-bottom bg-no-repeat"
          style={{
            backgroundImage: 'url("/footer_logo.png")',
          }}
        ></div>
      </div>
    </footer>
  )
}