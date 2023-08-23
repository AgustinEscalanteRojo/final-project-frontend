import { object, string, number } from 'yup'

export const InitialValues = {
  email: '',
  password: '',
  username: '',
  firstName: '',
  lastName: '',
  age: '',
  gender: '',
  country: '',
}

export const ValidationSignupSchema = object({
  email: string().email('Must be a valid email').required('Email is required'),
  password: string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  username: string().required('Username is required'),
  firstName: string().required('First name is required'),
  lastName: string().required('Last name is required'),
  age: number()
    .positive('Age must be a positive number')
    .integer('Age must be an integer')
    .required('Age is required'),
  gender: string()
    .oneOf(
      ['male', 'female', 'non-binary'],
      'Gender must be male, female or non-binary'
    )
    .required('Gender is required'),
  country: string().required('Country is required'),
})
