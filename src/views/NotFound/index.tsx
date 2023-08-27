import { FC, memo } from 'react'
import { Link } from 'react-router-dom'
import { Box, Button, Typography } from './styles'

const NotFound: FC = () => {
  return (
    <Box>
      <Typography variant="h1">404</Typography>
      <Typography variant="h2">
        The page you are looking for does not exist
      </Typography>
      <Button variant="contained">
        <Link to="/signup">Back to Home</Link>
      </Button>
    </Box>
  )
}

export default memo(NotFound)
