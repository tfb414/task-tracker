import * as yup from 'yup';

export const taskSchema = yup.object().shape({
  person: yup.string().required(),
  task: yup.string().required(),
  amount: yup.number().optional()
});