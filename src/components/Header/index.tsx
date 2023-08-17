// import { FC, memo, useCallback } from 'react'
// import { useNavigate } from 'react-router-dom'
// import type { Props } from './types'
// import { logout } from '../../services/api/auth'
// import Button from '../Button'

// import IconButton from '@mui/material/IconButton'
// import AccountCircleIcon from '@mui/icons-material/AccountCircle'
// import LogoutIcon from '@mui/icons-material/Logout'

// import { ButtonController, Container, Title } from './styles'

// const Header: FC<Props> = ({ onLogout }) => {
//   const navigate = useNavigate()

//   const handleGoToProfile = useCallback(() => {
//     navigate('/profile')
//   }, [navigate])

//   const handleLogout = useCallback(async () => {
//     await logout()
//     onLogout()
//     navigate('/login')
//   }, [navigate, onLogout])

//   return (
//     <Container>
//       <Title>Shared Flavours</Title>
//       <ButtonController>
//         <IconButton size="large">
//           <AccountCircleIcon
//             onClick={handleGoToProfile}
//             sx={{ color: 'white', fontSize: 40 }}
//           />
//         </IconButton>

//         <IconButton size="large">
//           <LogoutIcon
//             onClick={handleLogout}
//             sx={{ color: 'white', fontSize: 40 }}
//           />
//         </IconButton>
//       </ButtonController>
//     </Container>
//   )
// }

// export default memo(Header)

// Header.tsx

import React, { FC, memo, useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import type { Props } from './types'
import { logout } from '../../services/api/auth'
import Button from '../Button'
import { MobileIconButton } from './styles'

import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LogoutIcon from '@mui/icons-material/Logout'

// Importa Container, Title y ButtonController desde './styles'
import IconButton from '@mui/material/IconButton'
import { Container, Title, ButtonController } from './styles'

const Header: FC<Props> = ({ onLogout }) => {
  const navigate = useNavigate()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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

  return (
    <Container>
      <Title>Shared Flavours</Title>
      <ButtonController>
        <IconButton size="large" onClick={toggleMobileMenu}>
          <AccountCircleIcon sx={{ color: 'white', fontSize: 40 }} />
        </IconButton>

        {isMobileMenuOpen && (
          <div>
            <IconButton size="large" onClick={handleGoToProfile}>
              <AccountCircleIcon sx={{ color: 'white', fontSize: 40 }} />
            </IconButton>

            <MobileIconButton size="large" onClick={handleLogout}>
              <LogoutIcon sx={{ color: 'white', fontSize: 40 }} />
            </MobileIconButton>
          </div>
        )}
      </ButtonController>
    </Container>
  )
}

export default memo(Header)
