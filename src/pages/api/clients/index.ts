import { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "../../../configs/prismaClient";

export default async function _clients(
  request: NextApiRequest,
  response: NextApiResponse
) {
  try {
    const { email } = request.body;

    if (request.method === "POST" && !email) {
      return response.status(404).json({ message: "Email is not found" });
    }

    if (request.method === "POST") {
      const emailExtists = await prisma.contacts.findFirst({
        where: {
          email,
        },
      });

      if (emailExtists) {
        return response.status(400).json({ message: "Email exists" });
      }

      const data = await prisma.contacts.create({
        data: {
          email,
        },
      });

      return response.status(201).json({ email: data });
    }

    if (request.method === "GET") {
      const data = await prisma.contacts.findMany();

      return response.status(200).json({ emails: data });
    }
  } catch (e) {
    return response.status(500).json({ message: "Internal Server Error" });
  }
}
