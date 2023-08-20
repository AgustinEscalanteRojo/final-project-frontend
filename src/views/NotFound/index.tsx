import { FC, memo } from 'react'
import { Link } from 'react-router-dom'
import { Box, Button, Typography } from '@mui/material'
import { purple } from '@mui/material/colors'

const primary = purple[500]

const NotFound: FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: primary,
      }}
    >
      <Typography variant="h1" style={{ color: 'white' }}>
        404
      </Typography>
      <Typography variant="h4" style={{ color: 'white' }}>
        The page you’re looking for doesn’t exist.
      </Typography>
      <Button variant="contained">
        <Typography>
          <Link to="/signup">Back Home</Link>
        </Typography>
      </Button>
    </Box>
  )
}

export default memo(NotFound)
