import { FC, memo } from 'react'
import { Props } from './types'
import useLogic from './logic'
import { Formik } from 'formik'
import Footer from '../../../components/Footer'
// import Button from '../../../components/Button'
import { InitialValues, ValidationSchema } from './constants'
import VideoBackground from '../../../components/VideoBackground'
import {
  Container,
  Form,
  FormContent,
  Info,
  Input,
  InputController,
  InputError,
  Label,
  Title,
  // Link,
} from './styles'
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  // Link,
} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { Link } from 'react-router-dom';
import { green } from '@material-ui/core/colors'
import { Sign } from 'crypto'

const Login: FC<Props> = ({ onLogin }) => {
  const { handleOnSubmit } = useLogic(onLogin)

  const paperStyle = {
    padding: 30,
    height: '40vh',
    width: 300,
    margin: '200px auto',
  }
  const avatarStyle = { backgroundColor: '#1bbd7e' }
  const btnstyle = { margin: '22px 0' }

  return (
    <Grid>
      <Footer />
      <VideoBackground videoSrc="/cocina.mp4" />
      <Paper elevation={10} style={paperStyle}>
      <Grid container alignContent ="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>SharedFlavors</h2>
        </Grid>
        <TextField
          label="Username"
          placeholder="Enter username"
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
          onClick={() => {
            alert('clicked');
          }}
        >
          Sign in
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

  // return (
  //   <Container>
  //     <Footer />
  //     <VideoBackground videoSrc="/cocina.mp4" />
  //     <Formik
  //       initialValues={InitialValues}
  //       validationSchema={ValidationSchema}
  //       onSubmit={handleOnSubmit}
  //     >
  //       {({ errors, handleSubmit, handleChange, values }) => (
  //         <Form onSubmit={handleSubmit}>
  //           <FormContent>
  //             <Title>FoodCook</Title>
  //             <InputController>
  //               <Label>Email</Label>
  //               <Input
  //                 type="email"
  //                 name="email"
  //                 onChange={handleChange}
  //                 value={values.email}
  //               />
  //               {errors?.email && <InputError>{errors.email}</InputError>}
  //             </InputController>
  //             <InputController>
  //               <Label>Password</Label>
  //               <Input
  //                 type="password"
  //                 name="password"
  //                 onChange={handleChange}
  //                 value={values.password}
  //               />
  //               {errors?.password && <InputError>{errors.password}</InputError>}
  //             </InputController>
  //             <Button type="submit">Log in</Button>
  //             <Info>
  //               Don't have an account yet?{' '}
  //               <Link to="/signup">Sign up here </Link>
  //             </Info>
  //           </FormContent>
  //         </Form>
  //       )}
  //     </Formik>
  //   </Container>
  // )
}

export default memo(Login)
