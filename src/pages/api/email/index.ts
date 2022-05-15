import { NextApiRequest, NextApiResponse } from "next";

export default function email(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { message, name } = request.body;

  return response.status(201).json({
    message,
    name,
  });
}
