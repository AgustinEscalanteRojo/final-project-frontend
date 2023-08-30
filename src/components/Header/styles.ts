import styled from 'styled-components'
import theme from '../../styles/theme'
import IconButton from '@mui/material/IconButton'

export const MobileIconButton = styled(IconButton)`
  background-color: black;
  border-radius: 50%;
`

export const Container = styled.header`
  display: flex;
  background-color: ${theme.colors.black};
  border-bottom: 2px solid ${theme.colors.blue25};
  width: 100%;
  height: 70px;
  position: fixed;
  z-index: 2;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    height: 60px;
    padding: 20px;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  gap: 10px;
  border-radius: 10%;
  /* border: 10px red solid; */
  align-self: center;
  margin-left: 20px;

  &:hover,
  &:active {
    box-shadow: 0px 0px 40px 1px rgba(212, 163, 115, 0.328);
  }

  @media (min-width: 768px) {
    gap: 10px;
    width: auto;
    height: auto;
  }

  @media (max-width: 768px) {
    flex: 1;
    justify-content: center;
  }
`

export const DeskButtonController = styled.div`
  display: flex;
  gap: 10px;
  /* border: 10px pink solid; */
  margin-right: 10px;

  @media (min-width: 768px) {
    gap: 10px;
    align-self: center;
  }
`

export const MobileButtonController = styled.div`
  display: flex;
  align-items: center;
  gap: 0px;
  /* border: 10px orange solid; */
`

export const SearchArea = styled.div`
  text-align: center;
  width: 100%;
  height: auto;
  background-color: ${theme.colors.black};
  padding: 10px;
  transition: all 0.3s ease-in-out;
  border-bottom: 2px solid ${theme.colors.blue25};
  /* border: 10px pink solid; */

  @media (min-width: 768px) {
    display: block;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${theme.colors.black};
    padding: 10px;
    z-index: 1;
  }

  @media (max-width: 768px) {
    position: fixed;
    margin-top: 70.4px;
  }
`
