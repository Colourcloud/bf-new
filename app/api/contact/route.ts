import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  phoneNumber: string;
  websiteLink: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required environment variables
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('Missing required SMTP environment variables');
      return NextResponse.json(
        { error: "Email service is not properly configured" },
        { status: 500 }
      );
    }

    // Create a transporter
    let transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const htmlContent = `
    <body style="background-color:#efeef1;font-family:HelveticaNeue,Helvetica,Arial,sans-serif">
    <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="max-width:580px;margin:30px auto;background-color:#ffffff">
      <tbody>
        <tr style="width:100%">
          <td>
            <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="display:flex;justify-content:center;aling-items:center;padding:30px">
              <tbody>
                <tr>
                  <td><img src="https://i.imgur.com/grdxJLR.png" style="display:block;outline:none;border:none;text-decoration:none" width="114" /></td>
                </tr>
              </tbody>
            </table>
            <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="width:100%;display:flex">
              <tbody>
                <tr>
                  <td>
                    <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation">
                      <tbody style="width:100%">
                        <tr style="width:100%">
                          <td data-id="__react-email-column" style="border-bottom:1px solid rgb(238,238,238);width:249px"></td>
                          <td data-id="__react-email-column" style="border-bottom:1px solid rgb(238,238,238);width:249px"></td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="padding:5px 20px 10px 20px">
              <tbody>
                <tr>
                  <td>
                    <p style="font-size:14px;line-height:1.5;margin:16px 0">Thank you for contacting Builtflat. We've received your message and will get back to you as soon as possible. If you are not the intended recipient of this email, please ignore and delete this email.</p>
                    <p style="font-size:14px;line-height:1.5;margin:16px 0">Contact Name: ${body.name}</p>
                    <p style="font-size:14px;line-height:1.5;margin:16px 0">Contact Email Address: <a href="mailto:${body.email}" style="color:#067df7;text-decoration:underline" target="_blank">${body.email}</a></p>
                    <p style="font-size:14px;line-height:1.5;margin:16px 0">Phone Number: ${body.phoneNumber}</p>
                    <p style="font-size:14px;line-height:1.5;margin:16px 0">Website URL: <a href="${body.websiteLink}" style="color:#067df7;text-decoration:underline" target="_blank">${body.websiteLink}</a></p>
                    <p style="font-size:14px;line-height:1.5;margin:16px 0">Message: ${body.message}</p>
                    <p style="font-size:14px;line-height:1.5;margin:16px 0">Thanks,<br />The Builtflat Team</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="max-width:580px;margin:0 auto">
      <tbody>
        <tr>
          <td>
            <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation">
              <tbody style="width:100%">
              <tr style="width:100%">
                <p style="color:#706a7b; font-size:12px;line-height:1.5;margin:16px 0; text-align: center;">This is an automated message from Builtflat. Please note that this email address is not monitored. Replies to this email are not read and cannot be responded to. A member of our team will reach out to you directly in regards to your message.</p>
                <p style="font-size:14px;line-height:24px;margin:16px 0;text-align:center;color:#706a7b">© 2024 Builtflat LTD, All Rights Reserved <br />Auckland, New Zealand</p>
              </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
    `;

    // Set email data
    const mailData = {
      from: '"Builtflat Contact Submission" <email@builtflat.co.nz>',
      to: `hello@builtflat.co.nz`,
      subject: `Message From ${body.name}`,
      text: body.message + " | Sent from: " + body.email,
      html: htmlContent
    };

    // Send email
    await new Promise((resolve, reject) => {
      transporter.sendMail(mailData, (err, info) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          resolve(info);
        }
      });
    });

    return NextResponse.json({ status: "Email successfully sent" }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: "Error sending email", details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}