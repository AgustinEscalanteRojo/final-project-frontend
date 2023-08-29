import styled from 'styled-components'

export const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; /* Two equal columns */
  gap: 10px; /* Adjust the gap between cards as needed */
  justify-content: center;
  max-width: 1000px; /* Optional: Set a maximum width for the card container */

  @media (max-width: 1221px) {
    /* For smaller screens, show only one column */
    grid-template-columns: 1fr;
  }
`;

export const ContainerAllergies = styled.div`
  position: fixed;
  top: 190px;
  left: 60px;
  z-index: 3;

  display: flex;
  align-items: flex-start;
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
