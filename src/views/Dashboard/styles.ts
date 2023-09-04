import styled from 'styled-components'
import Checkbox from '@mui/material/Checkbox'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import theme from '../../styles/theme'

export const ContainerUsers = styled.div`
  border: 1px solid ${theme.colors.blue175};
  border-radius: 30px;
  position: fixed;
  right: 18px;
  top: 120px;
  width: 150px;
  height: 750px;
  padding: 20px;
  background-color: ${theme.colors.transparentWhite};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 10px) and (max-width: 770px) {
    top: -150px;
    right: -45px;
    transform: scale(0.4);
  }
`

export const UserCards = styled.div`
  width: 100%;
  margin-right: 20px;
  padding: 20px;
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: #888 transparent;

  &::-webkit-scrollbar {
    width: 6px; 
  }

  &::-webkit-scrollbar-thumb {
    margin-right: 20px;
    background-color: #888; 
    border-radius: 3px; 
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555; 
  }

  &::-webkit-scrollbar-track {
    background-color: transparent; 
  }
`

export const ButtonStyled = styled(Button)`
  top: 10px;
  transform: scale(0.8);
  background-color: transparent !important;
  color: ${theme.colors.black} !important;
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto !important;
  padding: 0 !important;

  outline: none !important;
`

export const Typography = styled.div`
  margin-left: 10px;
  font-weight: bold;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 320px;
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 0;
`

export const ContainerFilters = styled.div`
  border: 1px solid ${theme.colors.blue175};
  border-radius: 30px;
  position: fixed;
  left: 18px;
  top: 120px;
  width: 150px;
  height: 750px;
  padding: 20px;

  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 10px) and (max-width: 770px) {
    top: -150px;
    left: -45px;
    transform: scale(0.4);
  }
`

export const ContainerDifficulty = styled.div`
  position: fixed;
  left: 25px;
  margin-top: 550px;
  transform: translateY(-50%);
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const DifficultyOption = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: -10px;
`
export const StyledCheckboxDifficulty = styled(Checkbox)`
  transform: scale(0.7);
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

export const ContainerType = styled.div`
  position: fixed;
  left: 25px;
  margin-top: 690px;
  transform: translateY(-50%);
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const TypeOption = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: -10px;
`
export const StyledCheckboxType = styled(Checkbox)`
  transform: scale(0.7);
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

export const ContainerAllergies = styled.div`
  position: fixed;
  left: 25px;
  margin-top: 230px;
  transform: translateY(-50%);
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const StyledCheckbox = styled(Checkbox)`
  transform: scale(0.7);
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
export const AllergyLabel = styled.label`
  display: flex;
  align-items: center;
`
export const AllergyIconContainer = styled.div`
  width: 120px;
  display: flex;
  align-items: center;
`

export const IconButtonStyled = styled(IconButton)`
  border: 3px solid ${theme.colors.blue225} !important;
  border-radius: 20%;
  width: 60px;
  height: 60px;
  background-color: ${theme.colors.black};
`
export const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  justify-content: center;
  max-width: 1000px;

  @media (max-width: 1221px) {
    grid-template-columns: 1fr;
  }
`
export const ButtonController = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 10px;
  margin-top: 140px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    margin-top: 10px;
    justify-content: center;
  }
`
