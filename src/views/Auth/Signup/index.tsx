import { FC, memo } from 'react'
import { Formik } from 'formik'
import Footer from '../../../components/Footer'
import Button from '../../../components/Button'
import {
  Container,
  Form,
  FormContent,
  Input,
  InputController,
  InputError,
  Label,
  Title,
  Link,
} from './styles'
import { InitialValues, ValidationSignupSchema } from './constant'
import useLogic from './logic'
import { Props } from './types'
import VideoBackground from '../../../components/VideoBackground/videoBackground'

const Signup: FC<Props> = ({ onSignup }) => {
  const { handleOnSubmit } = useLogic(onSignup)

  return (
    <Container>
      <Footer />
      <VideoBackground videoSrc="/back.mp4" />
      <Formik
        initialValues={InitialValues}
        validationSchema={ValidationSignupSchema}
        onSubmit={handleOnSubmit}
      >
        {({ errors, handleSubmit, handleChange, values }) => (
          <Form onSubmit={handleSubmit}>
            <FormContent>
            <Title>FoodCook</Title>
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
              <Button type="submit">Create account</Button>
              <Link to="/login">Log in</Link>
            </FormContent>
          </Form>
        )}
      </Formik>
    </Container>
  )
}

export default memo(Signup)
