import { object, string } from 'yup'

export const InitialValues = {
  email: '',
  password: '',
}

export const ValidationSignupSchema = object({
  email: string()
    .email('not a valid email')
    .required('email is a required field'),
  password: string()
    .required('password is a required field')
    .min(6, 'password must have at least 6 characters'),
})