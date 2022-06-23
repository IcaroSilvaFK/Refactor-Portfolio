import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { memo, useCallback, useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { AiOutlineClose, AiOutlineUser } from 'react-icons/ai';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { RiSendPlaneFill } from 'react-icons/ri';
import { toast } from 'react-toastify';

import { formSchema } from '../../schemas/formMessage';
import { Button } from '../Button';
import { Success } from '../Success';
import { Input } from './Input';

interface IFormComponentProps {
  closeModal: () => void;
}

interface IFormProps {
  message: string;
  name: string;
}

export function Form({ closeModal }: IFormComponentProps) {
  const [success, setSuccess] = useState(false);

  const props = useForm<IFormProps>({
    defaultValues: {
      message: '',
      name: '',
    },
    resolver: yupResolver(formSchema),
  });

  const onSubmit: SubmitHandler<IFormProps> = useCallback(async (data) => {
    try {
      await axios.post('/api/email', data);
      setSuccess(true);

      toast.success('Mensagem enviada com sucesso obrigado !🥳', {
        position: 'top-center',
        draggable: true,
        theme: 'light',
      });
    } catch (error) {
      setSuccess(false);

      toast.success('Infelizmente não conseguimos enviar a mensagem !😥', {
        position: 'top-center',
        draggable: true,
        theme: 'light',
      });
    }
    props.reset();
  }, []);

  return (
    <FormProvider {...props}>
      {success ? (
        <Success
          handleNewMessage={() => setSuccess(false)}
          closeModal={closeModal}
        />
      ) : (
        <form
          onSubmit={props.handleSubmit(onSubmit)}
          className="flex flex-col justify-center p-4 gap-2 relative z-1"
        >
          <div
            className="absolute top-[-15px] right-[-10px] bg-purple-800 p-2 rounded-full cursor-pointer"
            onClick={closeModal}
          >
            <AiOutlineClose color="#fff" size={20} />
          </div>
          <Input
            placeholder="Email"
            name="name"
            type="email"
            icon={<AiOutlineUser size={20} />}
          />

          <div className="flex items-start p-2 gap-2">
            <BiMessageSquareDetail size={20} color="#fff" />
            <textarea
              id=""
              {...props.register('message')}
              className="resize-none w-[250px] h-16 outline-none rounded p-2 scrolllbar  scrollbar-track-transparent scrollbar-thin"
              placeholder="Deixe aqui sua mensagem"
            />
          </div>
          <div className="flex justify-center">
            <Button
              variant="text"
              text="enviar"
              icon={<RiSendPlaneFill size={20} color="#fff" />}
            />
          </div>
        </form>
      )}
    </FormProvider>
  );
}

export default memo(Form);
