import * as yup from 'yup';

export default async function validateInput(data: { title: string; description: string }) {
    const schema = yup.object().shape({
      title: yup.string().required('O título é obrigatório').min(1).max(32),
      description: yup.string().required(),
    });

    let valid = await schema.isValid(data);
    return valid;
}