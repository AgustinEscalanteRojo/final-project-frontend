import { object, string } from 'yup'

export const InitialValues = {
  email: '',
  password: '',
}

export const ValidationSchema = object({
  email: string()
    .email('not a valida email')
    .required('email is a requierd field'),
  password: string()
    .min(8, 'Password must be at least 8 characters')
    .required('password is a requierd field'),
})
