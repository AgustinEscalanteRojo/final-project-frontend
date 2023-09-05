import { FC, memo, useCallback, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import type { Props } from './types'
import { logout } from '../../services/api/auth'
import Image from '../Image'
import IconButton from '@mui/material/IconButton'
import {
  DeskButtonController,
  Container,
  LogoContainer,
  MobileButtonController,
  ProfileCircleIconStyled,
  LogoutIconStyled,
  HomeIconStyled,
  PlusIconStyled,
} from './styles'

const Header: FC<Props> = ({ onLogout }) => {
  const navigate = useNavigate()

  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768)

  const handleGoToHome = useCallback(() => {
    navigate('/dashboard')
  }, [navigate])

  const handleGoToPost = useCallback(() => {
    navigate('/create-post')
  }, [navigate])

  const handleGoToProfile = useCallback(() => {
    navigate('/profile')
  }, [navigate])

  const handleLogout = useCallback(async () => {
    await logout()
    onLogout()
    navigate('/login')
  }, [navigate, onLogout])

  useEffect(() => {
    const handleWindowResize = () => {
      setIsMobileView(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  return (
    <Container>
      {!isMobileView && (
        <DeskButtonController>
          <IconButton onClick={handleGoToHome}>
            <HomeIconStyled />
          </IconButton>
          <IconButton onClick={handleGoToPost}>
            <PlusIconStyled />
          </IconButton>
          <IconButton onClick={handleGoToProfile}>
            <ProfileCircleIconStyled />
          </IconButton>
          <IconButton onClick={handleLogout}>
            <LogoutIconStyled />
          </IconButton>
        </DeskButtonController>
      )}

      {isMobileView && (
        <MobileButtonController>
          <IconButton onClick={handleGoToHome}>
            <HomeIconStyled />
          </IconButton>
          <IconButton onClick={handleGoToPost}>
            <PlusIconStyled />
          </IconButton>
        </MobileButtonController>
      )}

      <LogoContainer>
        <Link to="/dashboard">
          <Image src="/logo&tipo.png" alt="logo&tipo" variant="logoHeader" />
        </Link>
      </LogoContainer>

      {isMobileView && (
        <MobileButtonController>
          <IconButton onClick={handleGoToProfile}>
            <ProfileCircleIconStyled />
          </IconButton>
          <IconButton onClick={handleLogout}>
            <LogoutIconStyled />
          </IconButton>
        </MobileButtonController>
      )}
    </Container>
  )
}

export default memo(Header)
