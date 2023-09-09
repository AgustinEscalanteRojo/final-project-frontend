import styled from 'styled-components'
import DefaultTextField from '@mui/material/TextField'
import { Select } from '@mui/material'
import { Typography } from '@mui/material'
import { Button } from '@mui/material'

export const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`
export const Title = styled(Typography)`
  font-family: 'Roboto', sans-serif !important;
  font-size: 24px !important;
  font-weight: bold !important;
  color: ${({ theme }) => theme.colors.greytitle};
  margin-bottom: 10px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`
export const TextField = styled(DefaultTextField)`
  margin-top: 26px !important;
`
export const FormControlStyle = styled.div`
  margin-top: 26px !important;
`
export const FormControlIngredients = styled.div`
  display: flex !important;
  align-items: center !important;
`
export const ContainerIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
export const ImgIcons = styled.img`
  width: 25%;
  margin-left: 2px;
`
export const FormControlStep = styled.div``

export const Steps = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`
export const StepsTitle = styled(DefaultTextField)`
  margin: o auto !important;
`
export const ButtonRemoveIngredient = styled(Button)`
  color: ${({ theme }) => theme.colors.white}!important;
  background-color: ${({ theme }) => theme.colors.red300}!important;
  transform: scale(0.6) !important;
  margin-top: 26px !important;
`
export const SelectIngredients = styled(Select)`
  margin-top: 26px !important;
`
export const ButtonRemoveStep = styled(Button)`
  color: ${({ theme }) => theme.colors.red300}!important;
`
export const ButtonAddIngredient = styled(Button)`
  
  color: ${({ theme }) => theme.colors.green500}!important;
  margin-top: 26px !important;
`
export const ButtonAddStep = styled(Button)`
  margin-top: 10px !important;
  color: ${({ theme }) => theme.colors.green500}!important;
`
export const ButtonSaveRecipe = styled(Button)`
  display: block !important;
  margin: 0 auto !important;
  background-color: ${({ theme }) => theme.colors.green500}!important;
  color: ${({ theme }) => theme.colors.white}!important;
  margin-bottom: 96px !important;
  margin-top: 20px !important;
`
