import * as yup from 'yup';

export default async function validateInput(data: { title: string; description: string }) {
    const schema = yup.object().shape({
      title: yup.string().required('O título é obrigatório').min(1).max(32, 'O título é muito grande'),
      description: yup.string().required('A descrição é obrigatória'),
    });

    try {
        let valid = await schema.validate(data);
        return valid;
    } catch (error) {
        if (error instanceof yup.ValidationError) {
            console.log(error);
            return error;
        } else {
            return false;
        }
    }
    
    
}