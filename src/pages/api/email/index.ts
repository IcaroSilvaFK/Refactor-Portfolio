import { NextApiRequest, NextApiResponse } from 'next';

import { apiBackend } from '../../../configs/axiosBackend';
import { IRequestProps } from '../../../interface/RequestProps.interface';
import { SendEmail } from '../../../utils/sendEmail';

type Request = NextApiRequest;
type Response = NextApiResponse;

export default async function email(request: Request, response: Response) {
  const { method } = request;
  const { message, name }: IRequestProps = request.body;

  if (method !== 'POST') {
    return response.status(404).json({ message: 'Cannot route' });
  }

  if (!message || !name) {
    return response
      .status(400)
      .json({ message: 'Error in the mandatory fields' });
  }

  try {
    await SendEmail({
      message,
      name,
    });
    await apiBackend.post('/', { email: name });

    return response.status(200).json({ message: 'Enviado com sucesso' });
  } catch (error) {
    return response.status(500).json({ message: 'Error has ben ocorried' });
  }
}
