// const nodemailer = require("nodemailer");
import nodemailer from "nodemailer"
import dotenv from "dotenv"
dotenv.config()

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,          // ✅ Use 587 instead of 465
  secure: false,      // ✅ must be false for port 587
  auth: {
   user: process.env.EMAIL,
     pass: process.env.APP_PASSWORD,
  },
});


export const sendContactMail=async(name,email,message)=>{
const html = `
<div style="font-family: Arial, sans-serif; background-color: #f9fafb; padding: 20px;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
    
    <!-- Header -->
    <div style="background-color: #4f46e5; color: white; text-align: center; padding: 20px;">
      <h1 style="margin: 0; font-size: 24px; font-weight: bold;">New Contact Message</h1>
    </div>

    <!-- Body -->
    <div style="padding: 20px; color: #111827;">
      <p style="margin-bottom: 10px;">You have received a new message from your portfolio contact form.</p>

      <div style="margin-bottom: 10px;">
        <strong>Name:</strong> ${name}
      </div>

      <div style="margin-bottom: 10px;">
        <strong>Email:</strong> ${email}
      </div>

      <div style="margin-bottom: 10px;">
        <strong>Message:</strong>
        <p style="background-color: #f3f4f6; padding: 10px; border-radius: 8px;">${message}</p>
      </div>

      <p style="font-size: 12px; color: #6b7280; margin-top: 20px;">
        This message was sent via your portfolio contact form.
      </p>
    </div>

    <!-- Footer -->
    <div style="background-color: #f3f4f6; padding: 10px; text-align: center; font-size: 12px; color: #6b7280;">
      &copy; ${new Date().getFullYear()} Muhammad Talha Saleem Portfolio
    </div>

  </div>
</div>
`;
await transporter.sendMail({
    from: `"Portfolio Contact Form" <${process.env.MIDDLE_EMAIL}>`, // sender (your email)
    to: process.env.OWNER_EMAIL,                             // recipient (your personal email)
    subject: `New Contact Message from ${name}`,             // name of the user in subject
    html:html
});


}
