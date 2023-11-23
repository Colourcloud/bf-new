import nodemailer from 'nodemailer';

export default function handler(req, res) {
  if (req.method === 'POST') {
    // Create a transporter
    let transporter = nodemailer.createTransport({
      host: "server01.eu", // Replace with your SMTP host
      port: 587, // Common ports are 587, 465 (SSL required), or 25
      secure: false, // true for 465, false for other ports
      auth: {
        user: "contact@builtflat.co.nz", // Your SMTP username
        pass: "HQREaHawdw0c", // Your SMTP password
      },
      tls: {
        // This is necessary only if your server uses self-signed certificates
        rejectUnauthorized: false,
      },
    });

    // Set email data
    const mailData = {
      from: 'email@builtflat.co.nz',
      to: 'jaromme@builtflat.co.nz',
      subject: `Message From ${req.body.name}`,
      text: req.body.message + " | Sent from: " + req.body.email,
      html: `<div>${req.body.message}</div><p>Sent from:
      ${req.body.email}</p>`
    };

    // Send email
    transporter.sendMail(mailData, function (err, info) {
        if(err) {
            console.error(err);
            res.status(500).json({ error: "Error sending email", details: err.message });
          } else {
            res.status(200).json({ status: "Email successfully sent" });
          }
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

