import { FC, memo } from 'react'
import { Form, Formik } from 'formik'
import { TextField } from '@material-ui/core'
import useLogic from './logic'
import Footer from '../../../components/Footer'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { Link } from 'react-router-dom'

import { InitialValues, ValidationSchema } from './constants'
import * as S from './styles'
import { Props } from './types'

const Login: FC<Props> = ({ onLogin }) => {
  const { handleOnSubmit } = useLogic(onLogin)

  return (
    <S.Container>
      <Footer />
      <S.StyledPaper elevation={10}>
        <Formik
          initialValues={InitialValues}
          validationSchema={ValidationSchema}
          onSubmit={handleOnSubmit}
        >
          {({ handleSubmit, handleChange, values, errors, isValid }) => (
            <Form onSubmit={handleSubmit} noValidate autoComplete="off">
              <S.TitleContainer>
                <S.StyledAvatar src="/logoicon.jpg">
                  <LockOutlinedIcon />
                </S.StyledAvatar>
                <S.Title>SharedFlavours</S.Title>
              </S.TitleContainer>

              <TextField
                label="Email"
                placeholder="Enter email"
                variant="outlined"
                fullWidth
                required
                name="email"
                value={values.email}
                onChange={handleChange}
                error={!!errors?.email}
              />
              {errors?.email && <S.InputError>{errors.email}</S.InputError>}

              <S.Separation />

              <TextField
                label="Password"
                placeholder="Enter password"
                type="password"
                variant="outlined"
                fullWidth
                required
                name="password"
                value={values.password}
                onChange={handleChange}
                error={!!errors?.password}
              />
              {errors?.password && (
                <S.InputError>{errors.password}</S.InputError>
              )}
              <FormControlLabel
                control={<Checkbox name="checkedB" color="primary" />}
                label="Remember me"
              />
              <S.Buttons>
                <S.StyledButton
                  type="submit"
                  color="primary"
                  variant="contained"
                  fullWidth
                  disabled={!isValid}
                  onClick={() => handleOnSubmit(values)}
                >
                  Log in
                </S.StyledButton>
                <S.Link to="#">Forgot password ?</S.Link>
                <S.Link to="/signup">
                  Do you have an account? Sign up here
                </S.Link>
              </S.Buttons>
            </Form>
          )}
        </Formik>
      </S.StyledPaper>
    </S.Container>
  )
}

export default memo(Login)
