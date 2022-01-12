import * as yup from 'yup';

interface InputInterfaceProps {
  guide: string;
  title: string;
  description: string;
  file: File;
  
}

async function validateInput(
  data: InputInterfaceProps,
): Promise<InputInterfaceProps | yup.ValidationError> {
  const schema = yup.object().shape({
    guide: yup
      .string()
      .required('O guia é obrigatório'),
    title: yup
      .string()
      .required('O título é obrigatório'),
    description: yup.string().required('A descrição é obrigatória'),
    file: yup
      .mixed()
      .required('O arquivo é obrigatório'),
  });

  return await schema.validate(data);
}

export default validateInput;