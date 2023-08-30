import { object, string, number, array } from 'yup'

export const DefaultInitialValues = {
  title: '',
  type: '',
  duration: '',
  difficulty: '',
  allergies: [],
  description: '',
  ingredients: [{ name: '', quantity: 0, unity: '' }],
  diners: 0,
  steps: [{ title: '', description: '', order: 1, image: [] }],
}

export const ValidationSchema = object().shape({
  title: string().required('Title is required'),
  type: string()
    .oneOf(['Salad', 'Dessert', 'Breakfast'])
    .required('Type is required'),
  duration: string().required('Duration is required'),
  difficulty: string()
    .oneOf(['Easy', 'Moderate', 'Difficult'])
    .required('Difficulty is required'),
  allergies: array().of(string()),
  description: string(),
  ingredients: array().of(
    object().shape({
      name: string().required('Ingredient name is required'),
      quantity: number().required('Quantity is required'),
      unity: string().required('Unity is required'),
    })
  ),
  diners: number().required('Number of diners is required'),
  steps: array().of(
    object().shape({
      title: string().required('Step title is required'),
      description: string().required('Step description is required'),
      order: number().required('Step order is required'),
      image: array(),
    })
  ),
})
