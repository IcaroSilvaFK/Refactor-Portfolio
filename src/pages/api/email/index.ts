import { NextApiRequest, NextApiResponse } from "next";

import { apiBackend } from "../../../configs/axiosBackend";
import { SendEmail } from "../../../utils/sendEmail";

interface IRequestProps {
  message: string;
  name: string;
}

export default async function email(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { method } = request;

  if (method !== "POST") {
    return response.status(404).json({ message: "Cannot route" });
  }

  const { message, name }: IRequestProps = request.body;

  if (!message || !name) {
    return response
      .status(400)
      .json({ message: "Error in the mandatory fields" });
  }

  try {
    await SendEmail({
      message,
      name,
    });
    await apiBackend.post("/", { email: name });

    return response.status(200).json({ message: "Enviado com sucesso" });
  } catch (error) {
    return response.status(500).json({ message: "Error has ben ocorried" });
  }
}
