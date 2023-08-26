import styled from 'styled-components'
import theme from '../../styles/theme'
import { AccordionDetails } from '@mui/material'

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

export const StyledHeading = styled.h1`
  color: ${theme.colors.buff};;
  font-size: 50px;
  font-style: italic;
  text-align: center;
`
