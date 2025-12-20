"use server";

import nodemailer from "nodemailer";

export async function sendContactEmail(formData: FormData) {
  const contactType = formData.get("contactType") as string;
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  if (!contactType || !name || !email || !subject || !message) {
    return { success: false, error: "All fields are required" };
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const contactTypeLabel = {
    general: "General Inquiry",
    suggestion: "Suggestion",
    support: "Support Request",
  }[contactType] || contactType;

  try {
    await transporter.sendMail({
      from: `"DisDocs Contact Form" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || "hello@docfunkist.com",
      replyTo: email,
      subject: `[${contactTypeLabel}] ${subject}`,
      text: `
Contact Type: ${contactTypeLabel}
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `.trim(),
      html: `
<h2>New Contact Form Submission</h2>
<p><strong>Contact Type:</strong> ${contactTypeLabel}</p>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
<p><strong>Subject:</strong> ${subject}</p>
<hr />
<h3>Message:</h3>
<p>${message.replace(/\n/g, "<br />")}</p>
      `.trim(),
    });

    return { success: true };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error: "Failed to send email. Please try again later." };
  }
}
