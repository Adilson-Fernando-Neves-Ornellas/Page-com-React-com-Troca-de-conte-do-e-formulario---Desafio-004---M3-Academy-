import * as Yup from "yup";


export default Yup.object().shape({



  nome: Yup.string().required("*Campo Obrigatório").min(3,"Nome inválido"),
  email: Yup.string().required("*Campo Obrigatório").email("Email inválido"),
  cpf: Yup.string().required("*Campo Obrigatório"),
  data: Yup.date().required("*Campo Obrigatório"),
  telefone: Yup.string().required("*Campo Obrigatório").min(11, "Numero Inválido"),
  insta: Yup.string().min("@" && 3, "Instagram inválido"),
  checkbox: Yup.string().required("*"),

});
