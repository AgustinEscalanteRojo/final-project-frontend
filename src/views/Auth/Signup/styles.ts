import styled from 'styled-components'
import { Link as DefaultLink } from 'react-router-dom'
import theme from '../../../styles/theme'
import { Paper, Avatar, Button } from '@material-ui/core'

export const PaperStyled = styled(Paper)`
  padding: 15px 15px;
  width: 100%;
  max-width: 400px;
  margin: 50px auto;
  background-color: ${({ theme }) => theme.colors.blue25}!important;
`

export const AvatarStyled = styled(Avatar)`
  border: 2px solid black;
`

export const ButtonStyled = styled(Button)`
  color: white;
  margin: 12px 0;
  margin-bottom: 10px;
  margin-top: 20px!important;
  font-size: 12px;
  width: 30%;
`

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.cornsilk};
`

export const Form = styled.form`
  border: 1px solid ${({ theme }) => theme.colors.blue25};
  border-radius: 4px;
  margin: 5rem auto;
  background-color: ${theme.colors.transparentWhite};
  max-width: 25rem;
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

export const Input = styled.input``

export const TitleContainer = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column;
`

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.blue900};
`

export const InputError = styled.span`
  color: ${({ theme }) => theme.colors.pastelCoral};
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
  text-decoration: none;
  transition: color 200ms ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.blue900};
  }
`

export const Buttons = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column;
`
