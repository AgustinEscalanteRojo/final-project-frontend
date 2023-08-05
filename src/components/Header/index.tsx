import { FC, memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import type { Props } from './types'
import { logout } from '../../services/api/auth'
import { ButtonController, Container, Title } from './styles'
import Button from '../Button'

const Header: FC<Props> = ({ onLogout }) => {
  const navigate = useNavigate()

  const handleGoToProfile = useCallback(() => {
    navigate('/profile')
  }, [navigate])

  const handleLogout = useCallback(async () => {
    await logout()
    onLogout()
    navigate('/login')
  }, [navigate, onLogout])

  return (
    <Container>
      <Title>RentCar</Title>
      <ButtonController>
        <Button onClick={handleGoToProfile}>Profile</Button>
        <Button onClick={handleLogout}>Logout</Button>
      </ButtonController>
    </Container>
  )
}

export default memo(Header)
