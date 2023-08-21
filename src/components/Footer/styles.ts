import styled from 'styled-components'
import theme from '../../styles/theme'

export const Container = styled.footer`
  position: fixed;
  bottom: 0;
  border-top: 1px solid ${theme.colors.buff};
  width: 100%;
  text-align: center;
  z-index: 3;

  @media screen and (max-width: 768px) {
    position: fixed;
    bottom: 0;
    border: none;
    padding: 2.6px;
    max-height: none;
  }
`

export const Content = styled.div`
  background-color: ${theme.colors.black};
  display: flex;
  justify-content: center;
  align-items: stretch;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Text = styled.p`
  color:${theme.colors.buff};
  font-size: 11px;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    padding: 0px 0;
  }
`
