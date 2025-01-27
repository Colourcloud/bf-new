import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  const formData = await request.json();

  // Create a transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // Replace with your SMTP host
    port: 465, // Common ports are 587, 465 (SSL required), or 25
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER, // SMTP username from env file
      pass: process.env.SMTP_PASS, // SMTP password from env file
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
                    <p style="font-size:14px;line-height:1.5;margin:16px 0">Thank you for submitting your website analysis request with Builtflat. We've received your message and will get back to you as soon as possible. Website analysis can take up to 1-3 business days to complete. If you are not the intended recipient of this email, please ignore and delete this email.</p>
                    <p style="font-size:14px;line-height:1.5;margin:16px 0">Name: ${formData.name}</p>
                    <p style="font-size:14px;line-height:1.5;margin:16px 0">Email Address: <a href="mailto:${formData.email}" style="color:#067df7;text-decoration:underline" target="_blank">${formData.email}</a></p>
                    <p style="font-size:14px;line-height:1.5;margin:16px 0">Buiness Name: ${formData.business_name}</p>
                    <p style="font-size:14px;line-height:1.5;margin:16px 0">Website URL: <a href="mailto:${formData.website_url}" style="color:#067df7;text-decoration:underline" target="_blank">${formData.website_url}</a></p>
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
    from: '"Builtflat Website Analysis Submission" <email@builtflat.co.nz>',
    to: `hello@builtflat.co.nz`, // You might want to sanitize this email input
    subject: `Message From ${formData.name}`,
    text: `${formData.message} | Sent from: ${formData.email}`,
    html: htmlContent
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
