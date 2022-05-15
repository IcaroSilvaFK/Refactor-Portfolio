import { transport } from "../configs/nodemailer";

interface ISendEmailProps {
  email: string;
  body: string;
}

export async function sendEmail({ email, body }: ISendEmailProps) {
  try {
    const response = await transport.sendMail({
      from: email,
      to: "Icaro Vieira <icarovsilva1@gmail.com>",
      html: body,
    });

    return response;
  } catch (e) {
    throw new Error("Message has failed");
  }
}
