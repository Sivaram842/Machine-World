import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (to, subject, html) => {
  try {
    const response = await resend.emails.send({
      from: "AntiWorld <no-reply@antiworld.in>",
      to,
      subject,
      html,
    });

    console.log("📩 Email sent:", response);
  } catch (error) {
    console.error("EMAIL SEND ERROR:", error);
    throw new Error("Email could not be sent");
  }
};