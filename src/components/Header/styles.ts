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
  border-bottom: 2px solid ${theme.colors.buff};
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

export const ButtonController = styled.div`
  display: flex;
  gap: 10px;
  /* border: 10px red solid; */

  @media (min-width: 768px) {
    gap: 10px;
    align-self: center;
  }
`

export const MobileButtonController = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  /* border: 10px orange solid; */
`

export const SearchArea = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: ${theme.colors.black};
  padding: 10px;
  transition: all 0.3s ease-in-out;
  display: none;

  @media (min-width: 768px) {
    display: block;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${theme.colors.black};
    padding: 10px;
  }
`
