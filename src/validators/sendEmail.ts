import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("O nome é obrigatório"),
  email: yup.string().email("Email inválido").required("O email é obrigatório"),
  subject: yup.string().required("O assunto é obrigatório"),
  message: yup.string().required("A mensagem é obrigatória"),
});

export default schema;