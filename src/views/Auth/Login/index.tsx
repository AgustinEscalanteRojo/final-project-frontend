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

const Login: FC<Props> = ({ onLogin }) => {
  const { handleOnSubmit } = useLogic(onLogin)

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
      <VideoBackground videoSrc="/cocina.mp4" />
      <Paper elevation={10} style={paperStyle}>
        <Grid container alignContent="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h3>SharedFlavours</h3>
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
      </Paper>
    </Grid>
  )
}

export default memo(Login)
