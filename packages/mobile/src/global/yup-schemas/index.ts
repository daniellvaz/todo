import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup.string()
    .email("E-mail invalido!")
    .required("O E-mail é obrigatório!"),
  password: yup.string().min(6, "A senha deve ter no mínimo 8 caracteres!")
});

export const registerSchema = yup.object({
  firstName: yup.string().required("O nome é obrigatório!"),
  lastName: yup.string().required("O sobrenome é obrigatório!"),
  email: yup.string().email("O E-mail é inválido!").required("O e-mail é obrigatório!"),
  password: yup.string().required("A senha é obrigatório!"),
  repeatPassword: yup.string().equals([yup.ref("password")], "As senhas não conferem!")
})