import { FC, memo, useCallback } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useNavigate } from 'react-router-dom'
import VideoBackground from '../../components/VideoBackground'
import type { Props } from './types'
import Button from '../../components/Button'
import Card from '../../components/Card'
import { Container, ButtonController} from './styles'

const Dashboard: FC<Props> = ({ onLogout }) => {
  const navigate = useNavigate()

  const handleGoToPost = useCallback(() => {
    navigate('/post')
  }, [navigate])
  return (
    <Container>
      <Header onLogout={onLogout} />
      <ButtonController>
          <Button onClick={handleGoToPost}>Add New Recipe</Button>
        </ButtonController>

        <Card  />
      <Footer />
      <VideoBackground videoSrc="/back.mp4" />
    </Container>
  )
}

export default memo(Dashboard)
