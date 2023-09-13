import styled from 'styled-components'
import Checkbox from '@mui/material/Checkbox'
import { Button } from '@mui/material'

export const ContainerButton = styled.div`
  margin-left: 1000px;
  display: flex;
  justify-content: center;
  margin-top: -4px;
  flex-direction: row;
`

export const ButtonStyle = styled(Button)`
  margin: -5px !important;
  margin-top: -37px !important;
  transform: scale(0.6);
  background-color: ${({ theme }) => theme.colors.greytitle} !important;
  color: ${({ theme }) => theme.colors.white} !important;

  &:hover {
    transform: scale(0.7);
    transition: transform 0.3s ease;
  }
`
export const Typography = styled.div`
  margin-left: 10px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.greytitle};
`
export const AllergyOption = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: -10px;
`
export const AllergyIcon = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`
export const DifficultyOption = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: -10px;
`
export const AllergyIconContainer = styled.div`
  width: 120px;
  display: flex;
  align-items: center;
`

export const ContainerAllergies = styled.div``
export const ContainerDifficulty = styled.div``
export const ContainerType = styled.div``
export const DivContainerFilter = styled.div``

export const SpanFilters = styled.div``

export const StyledCheckboxDifficulty = styled(Checkbox)``
export const StyledCheckbox = styled(Checkbox)``
export const AllergyLabel = styled.label`
  display: flex;
  align-items: center;
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
  /* display: flex;
  align-items: center; */
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
