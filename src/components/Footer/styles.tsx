import styled from 'styled-components'

export const Container = styled.footer`
  position: fixed;
  bottom: 0px;
  border: 3px solid ${({ theme }) => theme.colors.black};
  max-height: 1.5rem;
  width: 100%;
  background: ${({ theme }) => theme.colors.transparentBlack4};
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
  color: ${({ theme }) => theme.colors.grey};
  font-size: 14px;
`
