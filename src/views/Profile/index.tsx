import { FC, memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import type { Props } from './types'
import Button from '../../components/Button'
import { PerfilContainer, Content, ButtonController } from './styles'

const Profile: FC<Props> = ({ onLogout }) => {
  const navigate = useNavigate()

  const handleGoToFollowers = useCallback(() => {
    navigate('/Followers')
  }, [navigate])

  return (
    <PerfilContainer>
      <Header onLogout={onLogout} />
      <Content>
        <ButtonController>
          <Button onClick={handleGoToFollowers}>Followers / Following</Button>
        </ButtonController>
      </Content>
      <Footer />
    </PerfilContainer>
  )
}

export default memo(Profile)
