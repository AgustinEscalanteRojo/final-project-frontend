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
import { InitialValues, ValidationSignupSchema } from './constant'
import SendIcon from '@mui/icons-material/Send'

const Signup: FC<Props> = ({ onSignup }) => {
  const { handleOnSubmit } = useLogic(onSignup)

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

  const [gender, setGender] = useState('')

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  }

  return (
    <div style={containerStyle}>
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
              {({ handleSubmit, handleChange, handleBlur, values }) => (
                <form onSubmit={handleSubmit}>
                  <Grid container alignContent="center" justifyContent="center">
                    <Avatar src="/logoicon.jpg" style={avatarStyle}>
                      <LockOutlinedIcon />
                    </Avatar>
                    <h2>SharedFlavours</h2>
                  </Grid>
                  <Grid container direction="column">
                    <Grid item container spacing={2}>
                      <Grid item xs={6}>
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
                      </Grid>
                      <Grid item xs={6}>
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
                      </Grid>
                    </Grid>
                    <Grid item container spacing={2}>
                      <Grid item xs={6}>
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
                      </Grid>
                      <Grid item xs={6}>
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
                      </Grid>
                    </Grid>
                    <Grid item container spacing={2}>
                      <Grid item xs={6}>
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
                          type="string"
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
                          type="string"
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
                      </Grid>
                    </Grid>
                    <Grid item container spacing={2} justifyContent="center">
                      <Grid item xs={6}>
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
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid container justifyContent="center">
                    <Button
                      type="submit"
                      color="primary"
                      variant="contained"
                      style={btnstyle}
                      size="large"
                      fullWidth
                      onClick={() => handleOnSubmit(values)}
                    >
                      Sign up
                    </Button>
                    <Button
                      type="submit"
                      color="primary"
                      variant="contained"
                      endIcon={<SendIcon style={{ color: '#3847a4' }} />}
                      style={{ ...btnstyle, backgroundColor: '#FFFACD', }}
                      size="large"
                      fullWidth
                    >
                      <Typography>
                        <Link to="/login">Log in</Link>
                      </Typography>
                    </Button>
                  </Grid>
                </form>
              )}
            </Formik>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default memo(Signup)
