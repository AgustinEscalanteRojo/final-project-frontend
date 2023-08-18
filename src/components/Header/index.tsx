import React, { FC, memo, useCallback, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import type { Props } from './types'
import { logout } from '../../services/api/auth'
import Image from '../Image'
import IconButton from '@mui/material/IconButton'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LogoutIcon from '@mui/icons-material/Logout'
import MenuIcon from '@mui/icons-material/Menu'
import Button from '../Button'
import { ButtonController, Container, MobileButtonController } from './styles'
import { MobileIconButton } from './styles'

const Header: FC<Props> = ({ onLogout }) => {
  const navigate = useNavigate()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768)

  const handleGoToProfile = useCallback(() => {
    navigate('/profile')
    setIsMobileMenuOpen(false)
  }, [navigate])

  const handleLogout = useCallback(async () => {
    await logout()
    onLogout()
    navigate('/login')
  }, [navigate, onLogout])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState)
  }

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
      <Image src="/logo&tipo.png" alt="logo&tipo" variant="logoHeader" />
      <ButtonController>
        {isMobileView ? (
          <MobileButtonController>
            <IconButton size="large" onClick={toggleMobileMenu}>
              <MenuIcon sx={{ color: 'white', fontSize: 40 }} />
            </IconButton>
            {isMobileMenuOpen && (
              <div>
                <MobileIconButton size="large" onClick={handleGoToProfile}>
                  <AccountCircleIcon sx={{ color: 'white', fontSize: 40 }} />
                </MobileIconButton>
                <MobileIconButton size="large" onClick={handleLogout}>
                  <LogoutIcon sx={{ color: 'white', fontSize: 40 }} />
                </MobileIconButton>
              </div>
            )}
          </MobileButtonController>
        ) : (
          <>
            <IconButton size="large" onClick={handleGoToProfile}>
              <AccountCircleIcon sx={{ color: 'white', fontSize: 40 }} />
            </IconButton>
            <MobileIconButton size="large" onClick={handleLogout}>
              <LogoutIcon sx={{ color: 'white', fontSize: 40 }} />
            </MobileIconButton>
          </>
        )}
      </ButtonController>
    </Container>
  )
}

export default memo(Header)
