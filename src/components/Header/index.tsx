import { FC, memo, useCallback, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import type { Props } from './types'
import { logout } from '../../services/api/auth'
import Image from '../Image'
import IconButton from '@mui/material/IconButton'
import {
  Container,
  DeskButtonController,
  LogoDeskContainer,
  IconDeskContainer,
  MobileButtonController,
  LogoMobileContainer,
  MobileIconPosition,
  HomeIconStyled,
  PlusIconStyled,
  ProfileCircleIconStyled,
  LogoutIconStyled,
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
          <LogoDeskContainer>
            <Link to="/dashboard">
              <Image
                src="/logo&tipo.png"
                alt="logo&tipo"
                variant="logoHeader"
              />
            </Link>
          </LogoDeskContainer>
          <IconDeskContainer>
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
          </IconDeskContainer>
        </DeskButtonController>
      )}

      {isMobileView && (
        <MobileButtonController>
          <MobileIconPosition>
            <IconButton onClick={handleGoToHome}>
              <HomeIconStyled />
            </IconButton>
            <IconButton onClick={handleGoToPost}>
              <PlusIconStyled />
            </IconButton>
          </MobileIconPosition>
          <LogoMobileContainer>
            <Link to="/dashboard">
              <Image src="/logo&tipo.png" alt="logo&tipo" variant="default" />
            </Link>
          </LogoMobileContainer>
          <MobileIconPosition>
            <IconButton onClick={handleGoToProfile}>
              <ProfileCircleIconStyled />
            </IconButton>
            <IconButton onClick={handleLogout}>
              <LogoutIconStyled />
            </IconButton>
          </MobileIconPosition>
        </MobileButtonController>
      )}
    </Container>
  )
}

export default memo(Header)
