import styled from 'styled-components'
import theme from '../../styles/theme'
import ProfileCircleIcon from '@mui/icons-material/AccountCircle'
import LogoutIcon from '@mui/icons-material/Logout'
import Home from '@mui/icons-material/CottageOutlined'
import PlusIcon from '@mui/icons-material/AddBoxOutlined'

export const Container = styled.header`
  display: flex;
  background-color: ${theme.colors.black};
  border-bottom: 2px solid ${theme.colors.blue25};
  width: 100%;
  height: 70px;
  position: fixed;
  z-index: 2;

  @media (min-width: 768px) {
 
    justify-content: space-between;
    height: 60px;
    padding: 20px;
  }
`

export const LogoContainer = styled.div`
  border-radius: 4px;
  align-self: center;

  &:hover,
  &:active {
    box-shadow: 0px 0px 5px 0.5px ${theme.colors.softSky};
  }

  @media (min-width: 768px) {
    width: auto;
    height: auto;
  }
`

export const DeskButtonController = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px;

  @media (min-width: 768px) {
    gap: 10px;
    align-self: center;
  }
`

export const MobileButtonController = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 10px;
`

export const HomeIconStyled = styled(Home)`
  color: ${theme.colors.softSky};
  font-size: 35px;
  margin: 5px;

  &:hover {
    color: ${theme.colors.aquaSky};
  }

  &:active {
    color: ${theme.colors.lagoonMist};
  }
`

export const PlusIconStyled = styled(PlusIcon)`
  color: ${theme.colors.softSky};
  font-size: 35px;
  margin: 5px;

  &:hover {
    color: ${theme.colors.aquaSky};
  }

  &:active {
    color: ${theme.colors.lagoonMist};
  }
`

export const ProfileCircleIconStyled = styled(ProfileCircleIcon)`
  color: ${theme.colors.softSky};
  font-size: 35px;
  margin: 5px;

  &:hover {
    color: ${theme.colors.aquaSky};
  }

  &:active {
    color: ${theme.colors.lagoonMist};
  }
`

export const LogoutIconStyled = styled(LogoutIcon)`
  color: ${theme.colors.softSky};
  font-size: 35px;
  margin: 5px;

  &:hover {
    color: ${theme.colors.aquaSky};
  }

  &:active {
    color: ${theme.colors.lagoonMist};
  }
`
