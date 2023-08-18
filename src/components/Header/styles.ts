import styled from 'styled-components'
import theme from '../../styles/theme'
import IconButton from '@mui/material/IconButton'

export const MobileIconButton = styled(IconButton)`
  background-color: black;
  border-radius: 50%;
`

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.black};
  border-bottom: 2px solid ${theme.colors.buff};
  width: 100%;
  height: 70px;
  position: fixed;
  z-index: 1;

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

  @media (min-width: 768px) {
    gap: 30px;
    align-self: center;
  }
`

export const MobileButtonController = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
