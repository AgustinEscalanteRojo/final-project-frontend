import { object, string, array } from 'yup'

export const ValidationSchema = object().shape({
  type: array().of(string()),
  difficulty: array().of(string()),
  allergies: array().of(string()),
})
