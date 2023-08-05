import { FC, memo, useCallback } from 'react'
import { Container } from './styles'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useNavigate } from 'react-router-dom'
import VideoBackground from '../../components/VideoBackground/videoBackground'
import type { Props } from './types'

const Dashboard: FC<Props> = ({ onLogout }) => {

  const navigate = useNavigate()

  
  return (
    <Container>
      <Header onLogout={onLogout} />
      <Footer />
      <VideoBackground videoSrc="/back.mp4" />
    </Container>
  )
}

export default memo(Dashboard)
