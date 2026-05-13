import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, destination, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Salve Maria Website" <${process.env.FROM_EMAIL}>`,
      to: process.env.ADMIN_EMAIL,
      replyTo: email,
      subject: `New Inquiry from ${name} - Salve Maria Tours`,
      html: `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
          <div style="background-color: #0c1c3c; padding: 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px; letter-spacing: 1px;">SALVE MARIA TOURS</h1>
            <p style="color: #60a5fa; margin: 5px 0 0 0; font-size: 14px; text-transform: uppercase; letter-spacing: 2px;">New Journey Inquiry</p>
          </div>
          <div style="padding: 40px; background-color: #ffffff;">
            <p style="font-size: 16px; color: #333; line-height: 1.6;">Hello Admin,</p>
            <p style="font-size: 16px; color: #333; line-height: 1.6;">You have received a new inquiry through the website contact form. Here are the details:</p>
            
            <div style="margin-top: 30px; border-left: 4px solid #f97316; padding-left: 20px;">
              <p style="margin: 10px 0; font-size: 14px; color: #666; text-transform: uppercase; font-weight: bold;">User Details</p>
              <p style="margin: 5px 0; font-size: 16px;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 5px 0; font-size: 16px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #0ea5e9; text-decoration: none;">${email}</a></p>
              <p style="margin: 5px 0; font-size: 16px;"><strong>Phone:</strong> ${phone}</p>
              <p style="margin: 10px 0; font-size: 14px; color: #666; text-transform: uppercase; font-weight: bold; margin-top: 20px;">Interest</p>
              <p style="margin: 5px 0; font-size: 16px;"><strong>Destination:</strong> ${destination}</p>
            </div>
            
            <div style="margin-top: 30px;">
              <p style="margin: 10px 0; font-size: 14px; color: #666; text-transform: uppercase; font-weight: bold;">Message</p>
              <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; color: #334155; font-size: 15px; line-height: 1.6; font-style: italic;">
                "${message}"
              </div>
            </div>
            
            <p style="margin-top: 40px; font-size: 14px; color: #94a3b8; text-align: center;">
              This email was generated from the Salve Maria Tours contact form.
            </p>
          </div>
          <div style="background-color: #f1f5f9; padding: 20px; text-align: center; font-size: 12px; color: #64748b;">
            © 2026 Salve Maria Tours & Travels. All rights reserved.
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
}
