import { FC, memo } from 'react'
import { Formik, Form } from 'formik'
import {
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core'
import Footer from '../../../components/Footer'
import { InitialValues, ValidationSignupSchema } from './constant'
import useLogic from './logic'
import * as S from './styles'
import type { Props } from './types'
import ImageBackground from '../../../components/ImageBackground'

const Signup: FC<Props> = ({ onSignup }) => {
  const { handleOnSubmit, error } = useLogic(onSignup)

  return (
    <S.Container>
      <Grid container justifyContent="center">
        <Grid item xs={6}>
          <Footer />
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={6}>
          <S.PaperStyled elevation={10}>
            <Formik
              initialValues={InitialValues}
              validationSchema={ValidationSignupSchema}
              onSubmit={handleOnSubmit}
            >
              {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                errors,
                isValid,
              }) => (
                <Form onSubmit={handleSubmit} noValidate autoComplete="off">
                  <S.TitleContainer>
                    <S.AvatarStyled src="/logoicon.jpg"></S.AvatarStyled>
                    <S.Title>SharedFlavours</S.Title>
                  </S.TitleContainer>
                  <Grid item container spacing={2}>
                    <Grid item xs={6}>
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
                      {errors?.email && (
                        <S.InputError>{errors.email}</S.InputError>
                      )}
                    </Grid>
                    <Grid item xs={6}>
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
                    </Grid>
                  </Grid>
                  <Grid item container spacing={2}>
                    <Grid item xs={6}>
                      <TextField
                        label="Username"
                        placeholder="Enter username"
                        variant="outlined"
                        fullWidth
                        required
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        label="First Name"
                        placeholder="Enter first name"
                        variant="outlined"
                        fullWidth
                        required
                        name="firstName"
                        value={values.firstName}
                        onChange={handleChange}
                      />
                    </Grid>
                  </Grid>
                  <Grid item container spacing={2}>
                    <Grid item xs={6}>
                      <TextField
                        label="Last Name"
                        placeholder="Enter last name"
                        variant="outlined"
                        fullWidth
                        name="lastName"
                        value={values.lastName}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        label="Age"
                        placeholder="Enter age"
                        type="number"
                        variant="outlined"
                        fullWidth
                        required
                        name="age"
                        value={values.age}
                        onChange={handleChange}
                      />
                    </Grid>
                  </Grid>
                  <Grid item container spacing={2}>
                    <Grid item xs={6}>
                      <TextField
                        label="Country"
                        placeholder="Enter country"
                        variant="outlined"
                        fullWidth
                        required
                        name="country"
                        value={values.country}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FormControl fullWidth variant="outlined" required>
                        <InputLabel id="gender-label">Gender</InputLabel>
                        <Select
                          labelId="gender-label"
                          label="Gender"
                          name="gender"
                          value={values.gender}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                          <MenuItem value={'male'}>Male</MenuItem>
                          <MenuItem value={'female'}>Female</MenuItem>
                          <MenuItem value={'non-binary'}>Non-Binary</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>

                  <Grid item container spacing={2} justifyContent="center">
                    <Grid item xs={12}>
                      <TextField
                        label="Biography"
                        placeholder="Write a brief biography"
                        variant="outlined"
                        fullWidth
                        name="biography"
                        value={values.biography}
                        onChange={handleChange}
                        multiline
                        minRows={4}
                      />
                    </Grid>
                  </Grid>
                  {error && <S.InputError>{error}</S.InputError>}
                  <S.Buttons>
                    <S.ButtonStyled
                      type="submit"
                      color="primary"
                      variant="contained"
                      size="large"
                      disabled={!isValid}
                      fullWidth
                    >
                      Sign up
                    </S.ButtonStyled>
                    <S.Link to="/login">Log in</S.Link>
                  </S.Buttons>
                </Form>
              )}
            </Formik>
          </S.PaperStyled>
        </Grid>
      </Grid>
      <ImageBackground imageSrc="/back.jpg" />
    </S.Container>
  )
}

export default memo(Signup)
