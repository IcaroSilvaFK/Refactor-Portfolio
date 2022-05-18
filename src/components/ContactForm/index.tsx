import { useForm, FormProvider, SubmitHandler } from "react-hook-form";

interface IContactFormProps {
  email: string;
}

export function ContactForm() {
  const props = useForm<IContactFormProps>();

  const onSubmit: SubmitHandler<IContactFormProps> = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...props}>
      <form onSubmit={props.handleSubmit(onSubmit)}></form>
    </FormProvider>
  );
}
