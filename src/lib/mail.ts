interface SendMailProps {
  name: string;
  to: string;
  subject: string;
  html: string;
}

export async function sendMail({ name, to, subject, html }: SendMailProps) {
  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    body: JSON.stringify({
      sender: {
        name: "Notes App",
        email: process.env.FROM_EMAIL,
      },
      to: [
        {
          name,
          email: to,
        },
      ],
      subject,
      htmlContent: html,
    }),
    headers: {
      "api-key": process.env.BREVO_API_KEY,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to send email");
  }
}
