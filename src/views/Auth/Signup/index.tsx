import { FC, memo } from 'react'
import { Formik, Form } from 'formik'
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Footer from '../../../components/Footer'
import VideoBackground from '../../../components/VideoBackground'
import { InitialValues, ValidationSignupSchema } from './constant'
import useLogic from './logic'
import * as S from './styles'
import type { Props } from './types'

const Signup: FC<Props> = ({ onSignup }) => {
  const { handleOnSubmit, error } = useLogic(onSignup)

  const paperStyle = {
    padding: '15px 15px',
    width: '100%',
    maxWidth: 400,
    margin: '50px auto',
    backgroundColor: '#FFDAB9',
  }
  const avatarStyle = {
    border: '2px solid black',
  }
  const btnstyle = {
    color: 'white',
    margin: '10px 0',
    marginBottom: '2px',
    fontSize: '12px',
    width: '60%',
  }

  return (
    <S.Container>
      <Grid container justifyContent="center">
        <Grid item xs={6}>
          <Footer />
        </Grid>
        <Grid item xs={6}>
          <VideoBackground videoSrc="/back.mp4" />
        </Grid>

        <Grid item xs={6}>
          <Paper elevation={10} style={paperStyle}>
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
                    <Avatar src="/logoicon.jpg" style={avatarStyle}>
                      <LockOutlinedIcon />
                    </Avatar>
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
                        required
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
                      <TextField
                        label="City"
                        placeholder="Enter city"
                        variant="outlined"
                        fullWidth
                        required
                        name="city"
                        value={values.city}
                        onChange={handleChange}
                      />
                    </Grid>
                  </Grid>
                  <Grid item container spacing={2}>
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

                    <Grid item xs={6}>
                      <TextField
                        label="Avatar"
                        placeholder="Please select an avatar"
                        variant="outlined"
                        fullWidth
                        required
                        name="avatar"
                        value={values.avatar}
                        onChange={handleChange}
                      />
                    </Grid>
                  </Grid>
                  <Grid item container spacing={2} justifyContent="center">
                    <Grid item xs={12}>
                      <TextField
                        label="Biography"
                        placeholder="Write a brief biography"
                        variant="outlined"
                        fullWidth
                        required
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
                    <Button
                      type="submit"
                      color="primary"
                      variant="contained"
                      style={btnstyle}
                      size="large"
                      disabled={!isValid}
                      fullWidth
                    >
                      Sign up
                    </Button>
                    <S.Link to="/login">Log in</S.Link>
                  </S.Buttons>
                </Form>
              )}
            </Formik>
          </Paper>
        </Grid>
      </Grid>
    </S.Container>
  )
}

export default memo(Signup)
