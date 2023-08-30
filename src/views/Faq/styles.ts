import styled from 'styled-components'
import { AccordionDetails } from '@mui/material'
import theme from '../../styles/theme'

export const FaqContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Content = styled.div`
  margin-top: 100px;
  padding: 100px;
  color: ${theme.colors.pastelCoral};
  display: flex;
  justify-content: center;
  max-width: 600px;
  margin: 0 auto; 
`

export const Backgroundcolor = styled(AccordionDetails)`
  background-color: ${theme.colors.buff};;
`

export const Tittle = styled.h1`
  color: ${theme.colors.buff};;
  font-size: 50px;
  font-style: italic;
  text-align: center;
`
