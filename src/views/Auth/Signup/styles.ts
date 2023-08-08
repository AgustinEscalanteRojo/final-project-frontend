import styled from 'styled-components'
import { Link as DefaultLink } from 'react-router-dom'
import theme from '../../../styles/theme';

export const Container = styled.div`
`

export const Form = styled.form`
  border: 1px solid ${({ theme }) => theme.colors.grey900};
  border-radius: 4px;
  margin: 10rem auto;
  background-color: ${theme.colors.transparentWhite};
  max-width: 15rem;
`

export const FormContent = styled.div`

  color: ${({ theme }) => theme.colors.red300};
 text-align: center;
  padding: 10px;

`

export const InputController = styled.div`
  display: flex;
  flex-flow: column;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.red300};
  font-size: 16px;
  margin-bottom: 14px;
`
export const Button = styled.input``

export const Input = styled.input``

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.red300};
  font-size: 45px;
  margin-bottom: 45px;
`

export const InputError = styled.span`
  color: ${({ theme }) => theme.colors.danger};
  font-size: 12px;
  line-height: 0.9;
  margin-top: 8px;
`

export const Link = styled(DefaultLink)`
  color: ${({ theme }) => theme.colors.blue300};
  display: block;
  font-size: 14px;
  margin-top: 16px;
  text-align: center;
  transition: color 200ms ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.blue900};
  }
`