import styled from 'styled-components'
import Checkbox from '@mui/material/Checkbox'
import { Button } from '@mui/material'

export const ContainerFilters = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.blue175};
  border-radius: 15px;
  position: fixed;
  left: 19px;
  top: 104px;
  width: 150px;
  height: 665px;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.transparentWhite2};
  box-shadow: 15px 12px 20px rgba(0, 0, 0, 0.1) !important;
  @media (min-width: 10px) and (max-width: 927px) {
    top: 0px;
    left: -15px;
    transform: scale(0.7);
  }
  @media (min-width: 0px) and (max-width: 532px) {
    top: -110px !important;
    left: -45px !important;
    transform: scale(0.4) !important;
  }
`
export const ContainerAllergies = styled.div`
  position: fixed;
  left: 24px;
  margin-top: -55px;
  transform: translateY(-50%);
  width: 200px;
  display: flex;
  transform: scale(0.78);
  flex-direction: column;
  align-items: flex-start;
`
export const ContainerDifficulty = styled.div`
  position: fixed;
  left: 24px;
  margin-top: 372px;
  transform: translateY(-50%);
  width: 200px;
  transform: scale(0.78);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const ContainerType = styled.div`
  position: fixed;
  left: 24px;
  margin-top: 487px;
  transform: translateY(-50%);
  width: 200px;
  display: flex;
  transform: scale(0.78);
  flex-direction: column;
  align-items: flex-start;
`
export const Typography = styled.div`
  margin-left: 10px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.greytitle};
`
export const StyledCheckbox = styled(Checkbox)`
  transform: scale(0.7);
`
export const ButtonApply = styled(Button)`
  top: 600px;
  margin-left: 24px!important;
  transform: scale(0.7);
  background-color: transparent !important;
  color: ${({ theme }) => theme.colors.black}!important;
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto !important;
  outline: none !important;
`

export const ButtonClean = styled(Button)`
  top: 600px;
  margin-left: 24px!important;
  transform: scale(0.7);
  background-color: transparent !important;
  color: ${({ theme }) => theme.colors.black}!important;
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto !important;
  outline: none !important;
`
export const AllergyOption = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: -10px;
`
export const DifficultyOption = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: -10px;
`
export const StyledCheckboxDifficulty = styled(Checkbox)`
  transform: scale(0.7);
`
export const AllergyLabel = styled.label`
  display: flex;
  align-items: center;
`
export const AllergyIconContainer = styled.div`
  width: 120px;
  display: flex;
  align-items: center;
`
export const AllergyIcon = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`
export const TypeLabel = styled.label`
  display: flex;
  align-items: center;
`
export const TypeIconContainer = styled.div`
  width: 120px;
  display: flex;
  align-items: center;
`
export const DifficultyLabel = styled.label`
  display: flex;
  align-items: center;
`
export const DifficultyIconContainer = styled.div`
  width: 120px;
  display: flex;
  align-items: center;
`
export const TypeOption = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: -10px;
`
export const StyledCheckboxType = styled(Checkbox)`
  transform: scale(0.7);
`