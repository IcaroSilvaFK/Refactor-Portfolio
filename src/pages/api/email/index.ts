import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import { prisma } from "../../../configs/prismaClient";

export default async function email(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { message, name } = request.body;

  if (!message || !name) {
    return response
      .status(400)
      .json({ message: "Error in the mandatory fields" });
  }

  const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "2afbacbf4f74b1",
      pass: "c31ba0e8d6f7e8",
    },
  });

  const sendEmail = {
    email: `Icaro portfolio <${name}>`,
    body: `<div><b>${message}</b></div>`,
  };

  try {
    const data = await transport.sendMail({
      subject: "Icaro Portfólio",
      from: sendEmail.email,
      to: "Icaro Vieira <icarovsilva1@gmail.com>",
      html: sendEmail.body,
    });

    const email = await prisma.contacts.create({
      data: {
        email: name,
      },
    });

    return response.status(200).json({
      data,
      email,
    });
  } catch (error) {
    return response.status(500).json({ message: "Error has ben ocorried" });
  }
}
