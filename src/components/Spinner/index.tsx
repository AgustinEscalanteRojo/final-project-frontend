import { FC, memo } from 'react'
import { CircularProgress } from '@mui/material'
import { Container } from './styles'
import type { Props } from './types'

const Spinner: FC<Props> = ({ fullScreen }) => {
  return (
    <Container>
      <CircularProgress color="primary" />
    </Container>
  )
}

export default memo(Spinner)
