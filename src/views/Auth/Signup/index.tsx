import { FC, memo } from 'react'
import { Formik } from 'formik'
import Button from '../../../components/Button'

import {
  Container,
  Form,
  FormContent,
  Input,
  InputController,
  InputError,
  Label,
  Link,
} from './styles'
import VideoBackground from '../../../components/VideoBackground'
import { InitialValues, ValidationSignupSchema } from './constant'
import useLogic from './logic'
import { Props } from './types'

const Signup: FC<Props> = ({ onSignup }) => {
  const { handleOnSubmit } = useLogic(onSignup)

  return (
    <Container>
      <Formik
        initialValues={InitialValues}
        validationSchema={ValidationSignupSchema}
        onSubmit={handleOnSubmit}
      >
        {({ errors, handleSubmit, handleChange, values }) => (
          <Form onSubmit={handleSubmit}>
            <FormContent>
              <InputController>
                <Label>Email</Label>
                <Input type="email" name="email" onChange={handleChange} />
                {errors?.email && <InputError>{errors.email}</InputError>}
              </InputController>
              <InputController>
                <Label>Password</Label>
                <Input
                  type="password"
                  name="password"
                  onChange={handleChange}
                />
                {errors?.password && <InputError>{errors.password}</InputError>}
              </InputController>
              <Button type="submit">Crear cuenta</Button>
              <Link to="/login">Log in</Link>
            </FormContent>
          </Form>
        )}
      </Formik>
      <VideoBackground videoSrc="/back.mp4" />
    </Container>
  )
}

export default memo(Signup)