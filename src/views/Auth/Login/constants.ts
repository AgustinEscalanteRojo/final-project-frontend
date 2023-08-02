import { object, string } from "yup"


export const InitialValues = {
    email: '',
    password: '',
}

export const ValidationSchema = object({
    email: string()
        .email('not a valida email'),
        .required('email is a requierd field'),
    password: string().required('password is a requierd field'),
})