import { FC, memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { PerfilContainer, Content } from './styles'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import VideoBackground from '../../components/VideoBackground/videoBackground'
import type { Props } from './types'

const Profile: FC<Props> = ({ onLogout }) => {
  return (
    <PerfilContainer>
      <Header onLogout={onLogout} />
      <Content>

        
      </Content>
      <Footer />
      <VideoBackground videoSrc="/cocina.mp4" />
    </PerfilContainer>
  )
}

export default memo(Profile)
