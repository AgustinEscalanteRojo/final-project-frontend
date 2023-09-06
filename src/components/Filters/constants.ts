import { object, string, array } from 'yup'

export const DefaultInitialValues = {
  type: '',
  difficulty: '',
  allergies: [],
}

export const ValidationSchema = object().shape({
  type: string()
    .oneOf(['Salad', 'Dessert', 'Breakfast'])
    .required('Type is required'),
  difficulty: string()
    .oneOf(['Easy', 'Moderate', 'Difficult'])
    .required('Difficulty is required'),
  allergies: array().of(string()),
})
