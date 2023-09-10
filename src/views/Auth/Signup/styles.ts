import styled from 'styled-components'
import theme from '../../../styles/theme'
import { Paper, Avatar, Button } from '@material-ui/core'
import { Link as DefaultLink } from 'react-router-dom'

export const PaperStyled = styled(Paper)`
  border-radius: 15px !important;
  padding: 15px 15px;
  width: 100%;
  max-width: 400px;
  margin: 50px auto;
  background-color: ${({ theme }) => theme.colors.blue25}!important;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    margin: 20px auto;
  }
`

export const AvatarStyled = styled(Avatar)`
  border: 2px solid ${({ theme }) => theme.colors.blue900};
`

export const ButtonStyled = styled(Button)`
  color: white;
  margin: 12px 0;
  margin-bottom: 10px;
  margin-top: 10px !important;
  font-size: 12px;
  width: 30%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100vh;
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

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`

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

  @media screen and (max-width: 768px) {
    margin-top: 10px;
  }
`

export const Buttons = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column;
`
