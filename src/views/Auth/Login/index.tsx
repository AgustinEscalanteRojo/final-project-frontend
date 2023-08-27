import { FC, memo } from 'react'
import { Props } from './types'
import useLogic from './logic'
import Footer from '../../../components/Footer'
import VideoBackground from '../../../components/VideoBackground'
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { Link } from 'react-router-dom'
import { Formik } from 'formik'
import { InitialValues, ValidationSchema } from './constants'

const Login: FC<Props> = ({ onLogin }) => {
  const { handleOnSubmit } = useLogic(onLogin)

  const paperStyle = {
    padding: '30px 24px',
    width: '100%', 
    maxWidth: 300, 
    margin: '170px auto', 
    backgroundColor: '#FFDAB9',
  }

  const avatarStyle = {
    border: '2px solid black', 
  }
  const btnstyle = { margin: '10px 0', fontSize: '12px', width: '40%' }

  return (
    <Grid>
      <Footer />
      <VideoBackground videoSrc="/back.mp4" />
      <Paper elevation={10} style={paperStyle}>
        <Formik
          initialValues={InitialValues}
          validationSchema={ValidationSchema}
          onSubmit={handleOnSubmit}
        >
          {({ handleSubmit, handleChange, values }) => (
            <form onSubmit={handleSubmit}>
                  <Grid container alignContent="center" justifyContent="center">
                <Avatar src="/logoicon.jpg" style={avatarStyle}>
                  <LockOutlinedIcon />
                </Avatar>
                <h3>SharedFlavours</h3>
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
                type="password"
                variant="outlined"
                fullWidth
                required
                name="password"
                value={values.password}
                onChange={handleChange}
              />
              <FormControlLabel
                control={<Checkbox name="checkedB" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                color="primary"
                variant="contained"
                style={btnstyle}
                fullWidth
                onClick={() => handleOnSubmit(values)}
              >
                Log in
              </Button>
              <Typography>
                <Link to="#">Forgot password ?</Link>
              </Typography>
              <Typography>
                {' '}
                Do you have an account ?<Link to="/signup"> Sign up here </Link>
              </Typography>
            </form>
          )}
        </Formik>
      </Paper>
    </Grid>
  )
}

export default memo(Login)
