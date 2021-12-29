import * as yup from 'yup';

interface InputInterface {
  title: string;
  description: string;
}

export default async function validateInput(
  data: InputInterface,
): Promise<InputInterface | yup.ValidationError> {
  const schema = yup.object().shape({
    title: yup
      .string()
      .required('O título é obrigatório')
      .min(1)
      .max(32, 'O título é muito grande'),
    description: yup.string().required('A descrição é obrigatória'),
  });

  try {
    let valid = await schema.validate(data);
    return valid;
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      return error;
    } else {
      return new yup.ValidationError('Algum outro erro ocorreu');
    }
  }
}
