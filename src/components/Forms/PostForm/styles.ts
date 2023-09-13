import styled from 'styled-components'
import DefaultTextField from '@mui/material/TextField'
import { Select } from '@mui/material'
import { Typography } from '@mui/material'
import { Button } from '@mui/material'

export const Container = styled.div`
  margin-bottom: 100px;
`

export const FormContainer = styled.div`
  max-width: 620px;
  margin: 0 auto;
`

export const Title = styled(Typography)`
  font-family: 'Roboto', sans-serif !important;
  font-size: 24px !important;
  font-weight: bold !important;
  color: ${({ theme }) => theme.colors.greytitle};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  margin-bottom: 20px !important;
`

export const TypographyStyle = styled(Typography)`
  margin-bottom: 10px !important;
`

export const TextField = styled(DefaultTextField)`
  margin-top: 26px !important;
`

export const FormControlStyle = styled.div`
  margin-top: 26px !important;
  display: flex !important;
  justify-content: center !important;
`
export const FormControlIngredients = styled.div`
  display: flex !important;
  align-items: center !important;
`
export const FormAllergieslStyle = styled.div`
  margin-top: 30px;
  padding: 10px;
  color: ${({ theme }) => theme.colors.greytitle};
  @media (min-width: 1px) and (max-width: 842px) {
    font-size: 14px !important;
  }
`
export const ContainerIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 180px;
`
export const ImgIcons = styled.img`
  width: 25%;
  margin-left: 2px;
`
export const FormControlStep = styled.div``

export const Steps = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 6px;
`
export const StepsTitle = styled(DefaultTextField)`
  /* margin: o auto !important; */
  margin-top: 25px !important;
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
  margin-top: 25px !important;
  color: ${({ theme }) => theme.colors.red300}!important;
`
export const ButtonAddIngredient = styled(Button)`
  color: ${({ theme }) => theme.colors.green500}!important;
  margin-top: 26px !important;
`
export const ButtonAddStep = styled(Button)`
  margin-top: 16px !important;
  color: ${({ theme }) => theme.colors.green500}!important;
`
export const ButtonSaveRecipe = styled(Button)`
  &&& {
    background-color: ${({ theme }) => theme.colors.green500};
    color: ${({ theme }) => theme.colors.white};
    margin-top: 16px;
    
    &.Mui-disabled {
      background-color: ${({ theme }) => theme.colors.grey400};
    }
  }
`

export const ButtonContainer = styled.div`
  &&& {
    display: flex;
    justify-content: center;
  }
`

export const InputError = styled.div`
  color: ${({ theme }) => theme.colors.pastelCoral};
  font-size: 12px;
  line-height: 0.9;
  margin-top: 8px;
`

export const FormError = styled(InputError)`
  text-align: center;
  font-size: 16px;
  margin: 16px 0;
`
