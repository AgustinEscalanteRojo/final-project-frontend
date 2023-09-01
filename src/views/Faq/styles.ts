import styled from 'styled-components'
import { AccordionDetails } from '@mui/material'
import theme from '../../styles/theme'

export const FaqContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Content = styled.div`
  margin-top: 300px;
  padding: 100px;
  color: ${theme.colors.pastelCoral};
  display: flex;
  justify-content: center;
  max-width: 600px;
  margin: 0 auto; 
`

export const Backgroundcolor = styled(AccordionDetails)`
  background-color: ${theme.colors.blue75};;
`

export const Tittle = styled.h1`
  color: ${theme.colors.blue125};;
  margin-top: 150px;
  font-size: 50px;
  font-style: italic;
  text-align: center;
`
