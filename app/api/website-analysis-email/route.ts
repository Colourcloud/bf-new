import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  const formData = await request.json();

  // Create a transporter
  const transporter = nodemailer.createTransport({
    host: "server01.eu", // Replace with your SMTP host
    port: 587, // Common ports are 587, 465 (SSL required), or 25
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER, // SMTP username from env file
      pass: process.env.SMTP_PASS, // SMTP password from env file
    },
    tls: {
      rejectUnauthorized: false, // This is necessary only if your server uses self-signed certificates
    },
  });

  // Set email data
  const mailData = {
    from: '"Builtflat Website Analysis Submission" <email@builtflat.co.nz>',
    to: `hello@builtflat.co.nz, ${formData.email}`, // You might want to sanitize this email input
    subject: `Message From ${formData.name}`,
    text: `${formData.message} | Sent from: ${formData.email}`,
    html: `
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Message:</strong> ${formData.message}</p>
    `,
  };

  try {
    // Send email
    await transporter.sendMail(mailData);
    return NextResponse.json({ success: true, message: 'Email successfully sent' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, error: error instanceof Error ? error.message : 'Unknown error occurred' }, { status: 500 });
  }
}
