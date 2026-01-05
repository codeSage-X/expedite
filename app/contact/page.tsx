"use client"

import type React from "react"
import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Mail, Phone, Loader2 } from "lucide-react"

interface FormErrors {
  fullName?: string
  specialty?: string
  email?: string
  phone?: string
  additionalDetails?: string
}

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    specialty: "",
    email: "",
    phone: "",
    additionalDetails: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null)

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case "fullName":
        if (!value.trim()) return "Full name is required"
        if (value.trim().length < 2) return "Name must be at least 2 characters"
        if (!/^[a-zA-Z\s'-]+$/.test(value)) return "Name can only contain letters, spaces, hyphens and apostrophes"
        return undefined

      case "specialty":
        if (!value.trim()) return "Specialty is required"
        if (value.trim().length < 2) return "Specialty must be at least 2 characters"
        return undefined

      case "email":
        if (!value.trim()) return "Email is required"
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Please enter a valid email address"
        return undefined

      case "phone":
        if (!value.trim()) return "Phone number is required"
        const cleanedPhone = value.replace(/[\s\-\(\)]/g, "")
        if (!/^\+?[0-9]{10,15}$/.test(cleanedPhone)) return "Please enter a valid phone number"
        return undefined

      case "additionalDetails":
        if (value.length > 1000) return "Message must be less than 1000 characters"
        return undefined

      default:
        return undefined
    }
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    let isValid = true

    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key as keyof typeof formData])
      if (error) {
        newErrors[key as keyof FormErrors] = error
        isValid = false
      }
    })

    setErrors(newErrors)
    setTouched({ fullName: true, specialty: true, email: true, phone: true, additionalDetails: true })
    return isValid
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    if (touched[name]) {
      const error = validateField(name, value)
      setErrors((prev) => ({ ...prev, [name]: error }))
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    const error = validateField(name, value)
    setErrors((prev) => ({ ...prev, [name]: error }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus(null)

    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message")
      }

      setStatus({ type: "success", message: "Thank you for reaching out! We will contact you soon." })
      setFormData({ fullName: "", specialty: "", email: "", phone: "", additionalDetails: "" })
      setTouched({})
      setErrors({})
    } catch (error) {
      setStatus({ type: "error", message: "Failed to send message. Please try again." })
    } finally {
      setIsLoading(false)
    }
  }

  const getInputStyles = (fieldName: string) => {
    const hasError = touched[fieldName] && errors[fieldName as keyof FormErrors]
    return {
      backgroundColor: "#2F2F2F",
      borderColor: hasError ? "#ef4444" : "#404040",
      borderWidth: "1px",
    }
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
                    <Phone className="w-4 h-4 text-black" strokeWidth={3} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Call Us</h3>
                </div>
                <p className="text-gray-300">+234 XXX XXX XXXX</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 border border-gray-700 rounded-2xl" style={{ backgroundColor: "#121212" }}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Full name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="John Doe"
                      className="w-full text-white px-4 py-2 rounded-2xl border focus:outline-none transition-colors"
                      style={getInputStyles("fullName")}
                      onFocus={(e) => (e.target.style.borderColor = "#F6E58B")}
                    />
                    {touched.fullName && errors.fullName && (
                      <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Specialty <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="specialty"
                      value={formData.specialty}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Cardiologist"
                      className="w-full text-white px-4 py-2 rounded-2xl border focus:outline-none transition-colors"
                      style={getInputStyles("specialty")}
                      onFocus={(e) => (e.target.style.borderColor = "#F6E58B")}
                    />
                    {touched.specialty && errors.specialty && (
                      <p className="text-red-500 text-sm mt-1">{errors.specialty}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="john@example.com"
                      className="w-full text-white px-4 py-2 rounded-2xl border focus:outline-none transition-colors"
                      style={getInputStyles("email")}
                      onFocus={(e) => (e.target.style.borderColor = "#F6E58B")}
                    />
                    {touched.email && errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="+234 XXX XXXX XXX"
                      className="w-full text-white px-4 py-2 rounded-2xl border focus:outline-none transition-colors"
                      style={getInputStyles("phone")}
                      onFocus={(e) => (e.target.style.borderColor = "#F6E58B")}
                    />
                    {touched.phone && errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Additional Details</label>
                  <textarea
                    name="additionalDetails"
                    value={formData.additionalDetails}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Tell us more about your inquiry..."
                    rows={4}
                    className="w-full text-white px-4 py-2 rounded-2xl border focus:outline-none transition-colors resize-none"
                    style={getInputStyles("additionalDetails")}
                    onFocus={(e) => (e.target.style.borderColor = "#F6E58B")}
                  ></textarea>
                  {touched.additionalDetails && errors.additionalDetails && (
                    <p className="text-red-500 text-sm mt-1">{errors.additionalDetails}</p>
                  )}
                  <p className="text-gray-500 text-xs mt-1 text-right">
                    {formData.additionalDetails.length}/1000
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full hover:opacity-90 text-white font-bold py-3 rounded-2xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  style={{ backgroundColor: "#da941bff", color: "#ffffffff" }}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send"
                  )}
                </button>

                {status && (
                  <div
                    className={`p-4 rounded-xl text-center ${
                      status.type === "success"
                        ? "bg-green-900/50 text-green-300 border border-green-700"
                        : "bg-red-900/50 text-red-300 border border-red-700"
                    }`}
                  >
                    {status.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}