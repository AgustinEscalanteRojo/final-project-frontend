import styled from 'styled-components'
import { AccordionDetails } from '@mui/material'
import theme from '../../styles/theme'

export const FaqContainer = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Content = styled.div`
  border-radius: 5px;
  margin-top: 200px;
  padding: 100px;
  display: flex;
  justify-content: center;
  max-width: 600px;
  margin: 0 auto; 
  
  @media (max-width: 768px) {
    margin-top: 50px; 
    padding: 30px; 
  }
`;

export const Backgroundcolor = styled(AccordionDetails)`
  background-color: ${theme.colors.blue75};
  border-radius: 5px;
`

export const Tittle = styled.h1`
  color: ${({ theme }) => theme.colors.blue900};
  margin-top: 100px;
  font-size: 50px;
  font-style: italic;
  text-align: center;

  
  @media (max-width: 768px) {
    font-size: 24px; 
  }
`;

export const QuestionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.blue900};
  margin-top: 15px; 
  font-family: 'Roboto', sans-serif !important; 
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 18px; 
  }
`;

export const StyledTypography = styled.p`
  color: ${theme.colors.blue900};
  font-family: 'Roboto', sans-serif !important;
  font-size: 18px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 16px; 
  }
`;