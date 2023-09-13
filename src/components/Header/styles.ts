import styled from 'styled-components'
import theme from '../../styles/theme'
import ProfileCircleIcon from '@mui/icons-material/AccountCircle'
import LogoutIcon from '@mui/icons-material/Logout'
import Home from '@mui/icons-material/CottageOutlined'
import PlusIcon from '@mui/icons-material/AddBoxOutlined'

export const Container = styled.header`
  display: flex;
  background-color: ${theme.colors.grey800};
  width: 100vw;
  position: fixed;
  z-index: 2;

  @media (min-width: 768px) {
    justify-content: space-between;
    height: 40px;
    padding: 20px;
  }
`

export const DeskButtonController = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin: 10px;
  width: 100vw;

  @media (min-width: 768px) {
    gap: 10px;
    align-self: center;
  }
`

export const LogoDeskContainer = styled.div`
  border-radius: 4px;
  align-self: center;
  transform: scale(0.9);

  @media (min-width: 768px) {
    width: auto;
    height: auto;
  }
`

export const IconDeskContainer = styled.div`
  align-self: center;
  margin-right: 30px !important;
`

export const MobileButtonController = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  align-items: center;
  gap: 10px;
  margin: 10px;
`

export const LogoMobileContainer = styled.div`
  border-radius: 4px;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 12px;
  margin-right: 12px;

  &:hover,
  &:active {
    box-shadow: 0px 0px 5px 0.5px ${theme.colors.softSky};
  }

  @media (max-width: 768px) {
    width: 32vw;
    max-width: 150px;
    height: auto;
  }
`

export const MobileIconPosition = styled.div`
  display: flex;
`

export const HomeIconStyled = styled(Home)`
  && {
    color: ${theme.colors.softSky};
    font-size: 30px;
    margin: 5px;
  }

  &:hover {
    color: ${theme.colors.aquaSky};
  }

  &:active {
    color: ${theme.colors.lagoonMist};
  }

  @media (max-width: 768px) {
    && {
      color: ${theme.colors.softSky};
      font-size: 22px;
      margin: 5px;

      &:hover {
        color: ${theme.colors.aquaSky};
      }
    }
  }
`

export const PlusIconStyled = styled(PlusIcon)`
  && {
    color: ${theme.colors.softSky};
    font-size: 30px;
    margin: 5px;
  }

  &:hover {
    color: ${theme.colors.aquaSky};
  }

  &:active {
    color: ${theme.colors.lagoonMist};
  }
  @media (max-width: 768px) {
    && {
      color: ${theme.colors.softSky};
      font-size: 22px;
      margin: 5px;

      &:hover {
        color: ${theme.colors.aquaSky};
      }
    }
  }
`

export const ProfileCircleIconStyled = styled(ProfileCircleIcon)`
  && {
    color: ${theme.colors.softSky};
    font-size: 30px;
    margin: 5px;
  }

  &:hover {
    color: ${theme.colors.aquaSky};
  }

  &:active {
    color: ${theme.colors.lagoonMist};
  }
  @media (max-width: 768px) {
    && {
      color: ${theme.colors.softSky};
      font-size: 22px;
      margin: 5px;

      &:hover {
        color: ${theme.colors.aquaSky};
      }
    }
  }
`

export const LogoutIconStyled = styled(LogoutIcon)`
  && {
    color: ${theme.colors.softSky};
    font-size: 30px;
    margin: 5px;
  }

  &:hover {
    color: ${theme.colors.aquaSky};
  }

  &:active {
    color: ${theme.colors.lagoonMist};
  }

  @media (max-width: 768px) {
    && {
      color: ${theme.colors.softSky};
      font-size: 22px;
      margin: 5px;

      &:hover {
        color: ${theme.colors.aquaSky};
      }
    }
  }
`
