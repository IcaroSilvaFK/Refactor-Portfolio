import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { Button } from "../Button";

interface IContactFormProps {
  email: string;
}

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContactFormProps>();

  const onSubmit: SubmitHandler<IContactFormProps> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input type='email' {...register("email")} />
      </div>
      <Button variant='text' text='Enviar email' />
    </form>
  );
}
