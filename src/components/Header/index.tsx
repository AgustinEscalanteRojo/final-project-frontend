import { FC, memo, useCallback, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import type { Props } from './types'
import { logout } from '../../services/api/auth'
import Image from '../Image'
import IconButton from '@mui/material/IconButton'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LogoutIcon from '@mui/icons-material/Logout'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import {
  ButtonController,
  Container,
  MobileButtonController,
  MobileIconButton,
  SearchArea,
} from './styles'

const Header: FC<Props> = ({ onLogout }) => {
  const navigate = useNavigate()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false) // Nuevo estado para el área de búsqueda
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

  const toggleSearch = () => {
    setIsSearchOpen((prevState) => !prevState)
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
      <Link to="/dashboard">
        <Image src="/logo&tipo.png" alt="logo&tipo" variant="logoHeader" />
      </Link>
      <ButtonController>
        {isMobileView ? (
          <MobileButtonController>
            <IconButton size="large" onClick={toggleMobileMenu}>
              <MenuIcon sx={{ color: 'green', fontSize: 40 }} />
            </IconButton>
            {isMobileMenuOpen && (
              <div>
                <MobileIconButton size="large" onClick={handleGoToProfile}>
                  <AccountCircleIcon sx={{ color: 'red', fontSize: 40 }} />
                </MobileIconButton>
                <MobileIconButton size="large" onClick={handleLogout}>
                  <LogoutIcon sx={{ color: 'yellow', fontSize: 40 }} />
                </MobileIconButton>
                <IconButton size="large" onClick={toggleSearch}>
                  <SearchIcon sx={{ color: 'orange', fontSize: 40 }} />
                </IconButton>
                {isSearchOpen && (
                  <SearchArea>
                    <input
                      type="text"
                      placeholder="Buscar recetas..."
                      // value={searchQuery}
                      // onChange={handleSearchChange}
                    />
                  </SearchArea>
                )}
              </div>
            )}
          </MobileButtonController>
        ) : (
          <>
            <IconButton size="large" onClick={handleGoToProfile}>
              <AccountCircleIcon sx={{ color: 'brown', fontSize: 35 }} />
            </IconButton>
            <MobileIconButton size="large" onClick={handleLogout}>
              <LogoutIcon sx={{ color: 'gray', fontSize: 35 }} />
            </MobileIconButton>
            {/* Nuevo botón de búsqueda */}
            <IconButton size="large" onClick={toggleSearch}>
              <SearchIcon sx={{ color: 'white', fontSize: 35 }} />
            </IconButton>
            {isSearchOpen && (
              <SearchArea>
                <input
                  type="text"
                  placeholder="Buscar recetas..."
                  // value={searchQuery}
                  // onChange={handleSearchChange}
                />
              </SearchArea>
            )}
          </>
        )}
      </ButtonController>
    </Container>
  )
}

export default memo(Header)
