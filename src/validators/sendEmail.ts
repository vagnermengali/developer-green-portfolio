import *  as  yup from "yup"

export const schema = yup.object().shape({
    name: yup.string()
    .required("Campo obrigatório")
    .min(3, "A senha deve ter pelo menos 3 caracteres")
    .matches((/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑs]+$/),"O nome deve conter apenas letras."),

    email: yup.string()
    .required("Campo obrigatório")
    .email("E-mail inválido")
    .matches((/^[a-z0-9_.]+@[a-z]+.([a-z]+)$/),"Verifique seu e-mail"),

    subject: yup.string()
    .required("Campo obrigatório"),

    message: yup.string()
    .required("Campo obrigatório"),

  });