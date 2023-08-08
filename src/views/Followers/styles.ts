import styled from 'styled-components'
import theme from '../../styles/theme'

export const PerfilContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.colors.black};
`

export const Content = styled.div`
  color: ${theme.colors.white};
  display: flex;
  justify-content: center;
`

export const Backgroundcolor = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: ${theme.colors.pastelLemon};
`
