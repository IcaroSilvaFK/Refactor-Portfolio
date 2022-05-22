import * as yup from "yup";

export const formSchema = yup.object().shape({
  message: yup
    .string()
    .min(4, "O campo precisa no minimo de 4 caracteres")
    .required("O campo é obrigatório"),
  name: yup
    .string()
    .email("O campo precisa ser um email")
    .required("O campo é obrigatório"),
});
