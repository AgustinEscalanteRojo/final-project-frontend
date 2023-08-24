import { FC, memo, useState } from 'react'
import Footer from '../../../components/Footer'
import VideoBackground from '../../../components/VideoBackground'
import useLogic from './logic'
import { Props } from './types'
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { Link } from 'react-router-dom'
import { Formik } from 'formik'
import Login from '../Login'
import { InitialValues, ValidationSignupSchema } from './constant'

const Signup: FC<Props> = ({ onSignup }) => {
  const { handleOnSubmit } = useLogic(onSignup)

  const paperStyle = {
    padding: '20px 20px',
    width: '50%',
    maxWidth: 300,
    margin: '80px auto',
  }
  const avatarStyle = { backgroundColor: '#1bbd7e' }
  const btnstyle = { marginTop: '10px' }

  const [gender, setGender] = useState('')

  return (
    <Grid>
      <Footer />
      <VideoBackground videoSrc="/back.mp4" />

      <Paper elevation={10} style={paperStyle}>
        <Formik
          initialValues={InitialValues}
          validationSchema={ValidationSignupSchema}
          onSubmit={handleOnSubmit}
        >
          {({ handleSubmit, handleChange, handleBlur, values }) => (
            <form onSubmit={handleSubmit}>
              <Grid container alignContent="center">
                <Avatar src="/logoicon.jpg" style={avatarStyle}>
                  <LockOutlinedIcon />
                </Avatar>
                <h2>SharedFlavours</h2>
              </Grid>
              <TextField
                label="Email"
                placeholder="Enter email"
                type="string"
                variant="outlined"
                fullWidth
                required
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              <TextField
                label="Password"
                placeholder="Enter password"
                type="string"
                variant="outlined"
                fullWidth
                required
                name="password"
                value={values.password}
                onChange={handleChange}
              />
              <TextField
                label="Username"
                placeholder="Enter username"
                type="string"
                variant="outlined"
                fullWidth
                required
                name="username"
                value={values.username}
                onChange={handleChange}
              />
              <TextField
                label="First Name"
                placeholder="Enter first name"
                type="string"
                variant="outlined"
                fullWidth
                required
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
              />
              <TextField
                label="Last Name"
                placeholder="Enter last name"
                type="string"
                variant="outlined"
                fullWidth
                required
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
              />
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
              <TextField
                label="Country"
                placeholder="Enter country"
                type="string"
                variant="outlined"
                fullWidth
                required
                name="country"
                value={values.country}
                onChange={handleChange}
              />
              <TextField
                label="City"
                placeholder="Enter city"
                type="string"
                variant="outlined"
                fullWidth
                required
                name="city"
                value={values.city}
                onChange={handleChange}
              />
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
              <TextField
                label="Biography"
                placeholder="Write a brief biography"
                type="string"
                variant="outlined"
                fullWidth
                required
                name="biography"
                value={values.biography}
                onChange={handleChange}
              />
              <TextField
                label="Avatar"
                placeholder="Please select an avatar"
                type="string"
                variant="outlined"
                fullWidth
                required
                name="avatar"
                value={values.avatar}
                onChange={handleChange}
              />
              <Button
                type="submit"
                color="primary"
                variant="contained"
                style={btnstyle}
                fullWidth
                onClick={() => handleOnSubmit(values)}
              >
                Sign up
              </Button>

              <Button
                type="submit"
                color="secondary"
                variant="contained"
                style={btnstyle}
                fullWidth
              >
                <Typography>
                  <Link to="/login">Log in</Link>
                </Typography>
              </Button>
            </form>
          )}
        </Formik>
      </Paper>
    </Grid>
  )
}

export default memo(Signup)
