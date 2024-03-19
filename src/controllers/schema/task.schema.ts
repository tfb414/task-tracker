import * as yup from 'yup';

export const taskSchema = yup.object().shape({
  person: yup.string().required(),
  task: yup.string().required(),
  amount: yup.number().optional(),
  unit: yup.string().optional(),
});

export const taskTypeSchema = yup.object().shape({
  taskName: yup.string().required(),
  description: yup.string().optional()
});