import { FC, memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import type { Props } from './types'
import { logout } from '../../services/api/auth'
import Button from '../Button'

import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';


import { ButtonController, Container, Title } from './styles'


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
      <Title>Social Recipes</Title>
      <ButtonController>

      <IconButton size="large" >
  <AccountCircleIcon onClick={handleGoToProfile} sx={{ color: 'white', fontSize: 40 } } />
</IconButton>

<IconButton size="large" >
  <LogoutIcon onClick={handleLogout} sx={{ color: 'white', fontSize: 40 } } />
</IconButton>


        
    
      </ButtonController>
    </Container>
  )
}

export default memo(Header)
