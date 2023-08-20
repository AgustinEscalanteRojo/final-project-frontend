import { FC, memo } from 'react'
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
} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { Link } from 'react-router-dom'
import Login from '../Login'

const Signup: FC<Props> = ({ onSignup }) => {
  const { handleOnSubmit } = useLogic(onSignup)

  const paperStyle = {
    padding: '20px 20px',
    width: '50%', // Usa porcentaje para la responsividad
    maxWidth: 300, // Agrega un ancho máximo para pantallas más grandes
    margin: '80px auto', // Ajusta el margen para centrar verticalmente
  }
  const avatarStyle = { backgroundColor: '#1bbd7e' }
  const btnstyle = { margin: '22px 0' }

  return (
    <Grid>
      <Footer />
      <VideoBackground videoSrc="/back.mp4" />
      <Paper elevation={10} style={paperStyle}>
        <Grid container alignContent="center">
          <Avatar src="/logoicon.jpg" style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>SharedFlavours</h2>
        </Grid>
        <TextField
          label="Email"
          placeholder="Enter email"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          label="Username"
          placeholder="Enter username"
          type="username"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          label="First Name"
          placeholder="Enter first name"
          type="firstName"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          label="Last Name"
          placeholder="Enter last name"
          type="lastName"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          label="Age"
          placeholder="Enter age"
          type="age"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          label="Country"
          placeholder="Enter country"
          type="country"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          label="Gender"
          placeholder="Enter gender"
          type="gender"
          variant="outlined"
          fullWidth
          required
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
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
      </Paper>
    </Grid>
  )
}

export default memo(Signup)
