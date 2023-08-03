import { FC, memo } from "react"
import { Props } from "./types"
import useLogic from "./logic"
import { Formik } from 'formik'
import { InitialValues, ValidationSchema } from "./constants"
import {
    Button,
    Container,
    Form,
    FormContent,
    Info,
    Input,
    InputController,
    InputError,
    Label,
    Title,
    Link,
  } from './styles'

  const Login: FC<Props> = ({ onLogin }) => {
    const { handleOnSubmit } = useLogic(onLogin)
  
    return (
        <Container>
          <Formik
            initialValues={InitialValues}
            validationSchema={ValidationSchema}
            onSubmit={handleOnSubmit}
          >
            {({ errors, handleSubmit, handleChange, values }) => (
              <Form onSubmit={handleSubmit}>
                <FormContent>
                  <Title>FoodCook</Title>
                  <InputController>
                    <Label>Email</Label>
                    <Input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      value={values.email}
                    />
                    {errors?.email && <InputError>{errors.email}</InputError>}
                  </InputController>
                  <InputController>
                    <Label>Password</Label>
                    <Input
                      type="password"
                      name="password"
                      onChange={handleChange}
                      value={values.password}
                    />
                    {errors?.password && (
                      <InputError>{errors.password}</InputError>
                    )}
                  </InputController>
                  <Button type="submit">Log in</Button>
                  <Info>
                    Don't have an account yet?{' '}
                    <Link to="/signup">Sign up here </Link>
                  </Info>
                </FormContent>
              </Form>
            )}
          </Formik>
        </Container>
    )
  }
  
  export default memo(Login)