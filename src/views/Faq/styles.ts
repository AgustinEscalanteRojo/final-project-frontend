import styled from 'styled-components'
import theme from '../../styles/theme'

export const PerfilContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Content = styled.div`
  margin-top: 18px;
  padding: 16px;
  color: ${theme.colors.white};
  display: flex;
  justify-content: center;
`

export const ButtonController = styled.div`
  display: flex;
  flex-flow: row wrap;

  gap: 10px;
  margin-top: 120px;
  margin-right: 10px;
`

export const Backgroundcolor = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: ${theme.colors.pastelPeach};
`