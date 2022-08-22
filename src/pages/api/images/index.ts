import { NextApiRequest, NextApiResponse } from 'next';
import { prismaClient } from '../../../configs/prisma';

type Request = NextApiRequest;
type Response = NextApiResponse;

export default async function AddImagesInDatabase(
  request: Request,
  response: Response,
) {
  if (request.method !== 'POST') {
    return response.status(404).json({
      message: 'METHOD is invalid',
    });
  }

  const { url, alt } = request.body;

  if (!url || !alt) {
    return response.status(400).json({
      message: 'Url and Alt is requered',
    });
  }

  try {
    const bandage = await prismaClient.images.create({
      data: {
        alt,
        url,
      },
    });

    return response.status(201).json({
      message: 'Bandage create success',
      bandage,
    });
  } catch (err) {
    return response.status(500).json({
      message: 'Internal server error',
      err: err,
    });
  }
}
