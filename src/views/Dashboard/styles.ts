import styled from 'styled-components'
import Checkbox from '@mui/material/Checkbox'
import IconButton from '@mui/material/IconButton'

export const ContainerAllergies = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  transform: scale(0.7);
`;

export const StyledCheckbox = styled(Checkbox)`
  transform: scale(0.8);
`

export const AllergyOption = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;


export const AllergyIcon = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`

export const AllergyLabel = styled.label`
  display: flex;
  align-items: center;
`

export const IconButtonStyled = styled(IconButton)`
  border: 3px solid #b5803f !important;
  border-radius: 20%;
  width: 60px;
  height: 60px;
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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0;
    margin-top: 0;
    margin-bottom: 0;
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
