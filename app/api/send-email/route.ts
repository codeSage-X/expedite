// app/api/send-email/route.ts

import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { fullName, specialty, email, phone, additionalDetails } = await request.json()

    // Validate required fields
    if (!fullName || !email) {
      return NextResponse.json(
        { error: 'Full name and email are required' },
        { status: 400 }
      )
    }

    const { data, error } = await resend.emails.send({
      from: 'ExpedMD Contact <onboarding@resend.dev>', // Update this with your verified domain
      to: ['contact@expedmd.com'], // Your receiving email
      replyTo: email,
      subject: `New Contact Form Submission from ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #C29343; border-bottom: 2px solid #C29343; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="margin: 20px 0;">
            <p><strong>Full Name:</strong> ${fullName}</p>
            <p><strong>Specialty:</strong> ${specialty || 'Not provided'}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          </div>
          
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 8px; margin-top: 20px;">
            <h3 style="margin-top: 0; color: #333;">Additional Details:</h3>
            <p style="white-space: pre-wrap;">${additionalDetails || 'No additional details provided'}</p>
          </div>
          
          <hr style="margin-top: 30px; border: none; border-top: 1px solid #ddd;" />
          <p style="color: #888; font-size: 12px;">
            This email was sent from the ExpedMD contact form.
          </p>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Server error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}