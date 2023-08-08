import styled from 'styled-components'
import theme from '../../styles/theme';

export const Container = styled.footer`
  position: fixed;
  bottom: 0px;
  border: 3px solid ${({ theme }) => theme.colors.black};
  max-height: 1.5rem;
  width: 100%;
  background-color: ${theme.colors.transparentBlack};
  padding-bottom: 19px;
  text-align: center;
  z-index: 3;
`

export const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  text-align: top;
  justify-content: center;
  width: 100%;
`

export const Text = styled.p`
  position: relative;
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
`
