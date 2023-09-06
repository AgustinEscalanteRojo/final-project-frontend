import styled from 'styled-components'
import Checkbox from '@mui/material/Checkbox'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import theme from '../../styles/theme'

export const ContainerUsers = styled.div`
  border: 1px solid ${theme.colors.blue175};
  border-radius: 30px;
  position: fixed;
  right: 15px;
  top: 85px;
  width: 150px;
  height: 595px;
  padding: 20px;
  background-color: ${theme.colors.transparentWhite};
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: scale(0.95);

  @media (min-width: 532px) and (max-width: 842px) {
    top: 0px;
    right: -15px;
    transform: scale(0.7);
  }
  @media (min-width: 0px) and (max-width: 532px) {
    top: -110px !important;
    right: -45px !important;
    transform: scale(0.4) !important;
  }
`
export const UserCards = styled.div`
  width: 110%;
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
export const ContainerFilters = styled.div`
  border: 1px solid ${theme.colors.blue175};
  border-radius: 30px;
  position: fixed;
  left: 15px;
  top: 85px;
  width: 150px;
  height: 595px;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${theme.colors.transparentBlue};
  transform: scale(0.95);
  @media (min-width: 10px) and (max-width: 842px) {
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
  left: 7px;
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
  left: 7px;
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
  left: 7px;
  margin-top: 487px;
  transform: translateY(-50%);
  width: 200px;
  display: flex;

  transform: scale(0.78);
  flex-direction: column;
  align-items: flex-start;
`
export const ButtonStyled = styled(Button)`
  top: 10px;
  transform: scale(0.6);
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
  top: -20px;
  width: 30px;
  height: 30px;
  background-color: ${theme.colors.black};
`
export const ButtonController = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 10px;
  margin-top: 140px;
  margin-bottom: 10px;

  @media (min-width: 200px) and (max-width: 842px) {
    margin-top: 90px;
    transform: scale(0.6) !important;
  }
`
export const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: -50px;
  justify-content: center;
  max-width: 1000px;

  @media (max-width: 1317px) {
    grid-template-columns: 1fr;
    bottom: -50px;
  }
  @media (min-width: 0px) and (max-width: 532px) {
    margin: -27px !important;
  }
`
