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
import Login from '../Login'

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
          label="City"
          placeholder="Enter city"
          type="city"
          variant="outlined"
          fullWidth
          required
        />
        <FormControl fullWidth variant="outlined" required>
          <InputLabel id="gender-label">Gender</InputLabel>
          <Select
            labelId="gender-label"
            label="Gender"
            value={gender}
            onChange={(e) => setGender(e.target.value as string)}
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="non-binary">Non-Binary</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Biography"
          placeholder="Write a brief biography"
          type="biography"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          label="Avatar"
          placeholder="Please select an avatar"
          type="avatar"
          variant="outlined"
          fullWidth
          required
        />

        <Button
          type="submit"
          color="primary" // Aquí establecemos el color como "primary"
          variant="contained"
          style={{ ...btnstyle, marginTop: '10px' }} // Añadí un margen superior para separar los botones
          fullWidth
        >
          Sign up
        </Button>

        <Button
          type="submit"
          color="primary" 
          variant="contained"
          style={btnstyle}
          fullWidth
        >
          <Typography>
            <Link style={{ color: 'white', fontSize: '14px' }} to="/login">
              Login
            </Link>
          </Typography>
        </Button>
      </Paper>
    </Grid>
  )
}

export default memo(Signup)
