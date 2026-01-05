"use client"

import type React from "react"
import Image from "next/image"
import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Mail } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    specialty: "",
    email: "",
    phone: "",
    additionalDetails: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for reaching out! We will contact you soon.")
    setFormData({ fullName: "", specialty: "", email: "", phone: "", additionalDetails: "" })
  }

  return (
    <div style={{ backgroundColor: "#121212" }} className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative py-20 px-6 bg-[#121212] mt-20 md:mt-24 h-[25vh] md:h-[40vh] lg:h-[40vh] xl:h-[60vh] bg-contain bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/contact.png")',
        }}
      >
        <div className="relative max-w-7xl mx-auto z-10 h-full flex flex-col justify-center">
          <div
            className="inline-block w-34 px-6 py-3 rounded-[15px] text-base font-medium mb-6 border border-gray-600/50"
            style={{
              backgroundColor: "rgba(47, 47, 47, 0.5)",
              color: "#FFFFFF",
              backdropFilter: "blur(10px)",
            }}
          >
            Contact Us
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">We are always available</h1>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="py-20 px-6" style={{ backgroundColor: "#121212" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12">Your journey starts here</h2>
          <p className="text-gray-300 text-lg mb-12">
            Work in new cities or return to families. Build your schedule around your life
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              {/* Email Section */}
              <div className="p-8 rounded-2xl border border-gray-700">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl"
                    style={{ backgroundColor: "#F6E58B", color: "#121212" }}
                  >
                    <Mail className="w-4 h-4 text-black" strokeWidth={3} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Email Us</h3>
                </div>
                <p className="text-gray-300">contact@expedmd.com</p>
              </div>

              {/* Phone Section */}
              <div className="p-8 rounded-2xl border border-gray-700">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl"
                    style={{ backgroundColor: "#F6E58B", color: "#121212" }}
                  >
                    📞
                  </div>
                  <h3 className="text-xl font-bold text-white">Call Us</h3>
                </div>
                <p className="text-gray-300">+234 XXX XXX XXXX</p>
              </div>

              {/* Social Links */}
              <div className="p-8 rounded-2xl border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">Social Links</h3>
                <ul className="space-y-2 text-gray-300">
                  <li
                    className="hover:opacity-75 cursor-pointer transition-all"
                    style={{ color: "#F6E58B" }}
                  >
                    Instagram
                  </li>
                  <li
                    className="hover:opacity-75 cursor-pointer transition-all"
                    style={{ color: "#F6E58B" }}
                  >
                    LinkedIn
                  </li>
                  <li
                    className="hover:opacity-75 cursor-pointer transition-all"
                    style={{ color: "#F6E58B" }}
                  >
                    X (Twitter)
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className="p-8 border border-gray-700 rounded-2xl"
              style={{ backgroundColor: "#121212" }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-semibold mb-2">Full name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full text-white px-4 py-2 rounded-2xl border border-gray-600 focus:outline-none transition-colors"
                      style={{
                        backgroundColor: "#1A1A1A",
                        borderColor: "#404040",
                        borderWidth: "1px",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#F6E58B")}
                      onBlur={(e) => (e.target.style.borderColor = "#404040")}
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Specialty</label>
                    <input
                      type="text"
                      name="specialty"
                      value={formData.specialty}
                      onChange={handleChange}
                      placeholder="Cardiologist"
                      className="w-full text-white px-4 py-2 rounded-2xl border focus:outline-none transition-colors"
                      style={{
                        backgroundColor: "#2F2F2F",
                        borderColor: "#404040",
                        borderWidth: "1px",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#F6E58B")}
                      onBlur={(e) => (e.target.style.borderColor = "#404040")}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full text-white px-4 py-2 rounded-2xl border focus:outline-none transition-colors"
                      style={{
                        backgroundColor: "#2F2F2F",
                        borderColor: "#404040",
                        borderWidth: "1px",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#F6E58B")}
                      onBlur={(e) => (e.target.style.borderColor = "#404040")}
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+234 XXX XXXX XXX"
                      className="w-full text-white px-4 py-2 rounded-2xl border focus:outline-none transition-colors"
                      style={{
                        backgroundColor: "#2F2F2F",
                        borderColor: "#404040",
                        borderWidth: "1px",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#F6E58B")}
                      onBlur={(e) => (e.target.style.borderColor = "#404040")}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Additional Details</label>
                  <textarea
                    name="additionalDetails"
                    value={formData.additionalDetails}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..."
                    rows={4}
                    className="w-full text-white px-4 py-2 rounded-2xl border focus:outline-none transition-colors resize-none"
                    style={{
                      backgroundColor: "#2F2F2F",
                      borderColor: "#404040",
                      borderWidth: "1px",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#F6E58B")}
                    onBlur={(e) => (e.target.style.borderColor = "#404040")}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full hover:opacity-90 text-white font-bold py-3 rounded-2xl transition-all"
                  style={{ backgroundColor: "#da941bff", color: "#ffffffff" }}
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}