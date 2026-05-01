"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail({ name, email, phone, message, countryCode, price }) {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "nlc.madhushanka@gmail.com",
      subject: `YuroDesign New Lead: ${name}`,
      text: `Email: ${email}\n\n Phone: ${phone}\n\n Country code: ${countryCode}\n\n Price: ${price}\n\n Message: ${message}`,
    });
    return { success: true };
  } catch (error) {
    return error;
  }
}
