import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

import { apiBackend } from "../../../configs/axiosBackend";

export default async function email(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { method } = request;

  if (method !== "POST") {
    return response.status(404).json({ message: "Cannot route" });
  }

  if (method === "POST") {
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
    await apiBackend.post("/", { email: name });
    try {
      const data = await transport.sendMail({
        subject: "Icaro Portfólio",
        from: sendEmail.email,
        to: "Icaro Vieira <icarovsilva1@gmail.com>",
        html: sendEmail.body,
      });

      return response.status(200).json({
        data,
        email,
      });
    } catch (error) {
      console.log(error);
      return response.status(500).json({ message: "Error has ben ocorried" });
    }
  }
}
