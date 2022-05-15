import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiOutlineUser, AiOutlineClose } from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";
import { RiSendPlaneFill } from "react-icons/ri";

import { Button } from "../Button";
import { Input } from "./Input";
import { formSchema } from "../../schemas/formmessage.schema";
import axios from "axios";

interface IFormComponentProps {
  closeModal: () => void;
}

interface IFormProps {
  message: string;
  name: string;
}

export function Form({ closeModal }: IFormComponentProps) {
  const props = useForm<IFormProps>({
    defaultValues: {
      message: "",
      name: "",
    },
    resolver: yupResolver(formSchema),
  });

  const onSubmit: SubmitHandler<IFormProps> = async (data) => {
    console.log(data);
    const response = await axios.post("/api/email", data);
    console.log(response);
    props.reset();
  };

  return (
    <FormProvider {...props}>
      <form
        onSubmit={props.handleSubmit(onSubmit)}
        className='flex flex-col justify-center p-4 gap-2 relative z-1'
      >
        <div
          className='absolute top-[-15px] right-[-10px] bg-purple-800 p-2 rounded-full shadow-sm'
          onClick={closeModal}
        >
          <AiOutlineClose color='#fff' size={20} />
        </div>
        <Input
          placeholder='Nome'
          name='name'
          type='text'
          icon={<AiOutlineUser size={20} />}
        />

        <div className='flex items-start p-2 gap-2'>
          <BiMessageSquareDetail size={20} color='#fff' />
          <textarea
            id=''
            {...props.register("message")}
            className='resize-none w-[250px] h-16 outline-none rounded p-2 scrolllbar  scrollbar-track-transparent scrollbar-thin'
            placeholder='Deixe aqui sua mensagem'
          />
        </div>
        <div className='flex justify-center'>
          <Button
            variant='text'
            text='enviar'
            icon={<RiSendPlaneFill size={20} color='#fff' />}
          />
        </div>
      </form>
    </FormProvider>
  );
}
