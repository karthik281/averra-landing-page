"use server";

export async function joinWaitlist(formData: FormData) {
  const email = formData.get("email") as string;
  const name = formData.get("name") as string;
  const company = formData.get("company") as string;

  if (!email || !email.includes("@")) {
    return { success: false, error: "Please enter a valid email address." };
  }

  // TODO: Wire up to your preferred email service:
  // - Resend: https://resend.com
  // - ConvertKit / Kit: https://kit.com
  // - Loops: https://loops.so (great for SaaS waitlists)
  // - Mailchimp
  //
  // Example with Resend:
  // import { Resend } from 'resend';
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({ from: '...', to: 'rao.kar@gmail.com', subject: `New waitlist signup: ${email}`, text: `Name: ${name}\nEmail: ${email}` });

  console.log(`New waitlist signup: ${name} @ ${company} <${email}>`);

  return { success: true };
}
