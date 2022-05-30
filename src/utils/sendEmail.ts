import nodemailer from "nodemailer";
import { ISendEmailProps } from "../interface/SendMail.interface";

export async function SendEmail({ name, message }: ISendEmailProps) {
  try {
    const transport = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.NEXT_PUBLIC_MAIL_USER,
        pass: process.env.NEXT_PUBLIC_MAIL_PASS,
      },
    });

    const sendEmail = {
      email: `Icaro portfolio <${name}>`,
      body: `<div><b>${message}</b></div>`,
    };

    await transport.sendMail({
      subject: "Icaro Portfólio",
      from: sendEmail.email,
      to: "Icaro Vieira <icarovsilva1@gmail.com>",
      html: sendEmail.body,
    });
  } catch (error) {
    throw new Error();
  }
}
