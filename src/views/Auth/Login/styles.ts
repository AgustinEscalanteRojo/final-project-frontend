import styled from 'styled-components'
import theme from '../../../styles/theme'
import { Paper, Avatar, Button } from '@material-ui/core'
import { Link as DefaultLink } from 'react-router-dom'

export const PaperStyled = styled(Paper)`
  border-radius: 15px !important;
  padding: 30px 24px;
  width: 100%;
  max-width: 300px;
  margin: 170px auto;
  background-color: ${({ theme }) => theme.colors.blue25}!important;
`

export const AvatarStyled = styled(Avatar)`
  border: 2px solid ${({ theme }) => theme.colors.blue900};
`

export const ButtonStyled = styled(Button)`
  margin: 12px 0;
  margin-top: 14px !important;
  font-size: 25px;
  width: 50%;
`

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100vh;
`

export const Form = styled.form`
  border: 1px solid ${({ theme }) => theme.colors.grey900};
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

export const TitleContainer = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column;
`

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.blue900};
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
  margin-top: 14px !important;
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

export const Info = styled.p`
  color: black;
  font-size: 14px;
  text-align: center;
`

export const Buttons = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column;
`
