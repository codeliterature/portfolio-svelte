import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function POST({ request }) {
  const { subject, text } = await request.json();

  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  let mailOptions = {
    from: `"Contact Form" <${process.env.SMTP_USER}>`,
    to: "codeliterature1@gmail.com",
    subject: subject,
    text: text,
  };

  try {
    let info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    return new Response(JSON.stringify({ message: true }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ message: false }), { status: 500 });
  }
}
