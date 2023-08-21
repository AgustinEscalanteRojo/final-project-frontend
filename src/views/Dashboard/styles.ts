import styled from 'styled-components'
import theme from '../../styles/theme'


export const ContainerAllergies = styled.div`
  position: fixed;
  top: 190px; 
  left: 60px; 
  z-index: 3; 

  display: flex;
  align-items: flex-start;
`;

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

  @media (max-width: 768px) {
    margin-top: 10px;
    justify-content: center;
  }
`



