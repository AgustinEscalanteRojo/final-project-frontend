import styled from 'styled-components'
import DefaultTextField from '@mui/material/TextField'
import { Typography } from '@mui/material'


export const TextField = styled(DefaultTextField)``

export const Title = styled(Typography)`
  font-family: 'Roboto', sans-serif !important; 
  font-size: 24px !important;
  font-weight: bold !important;
  color: #333; 
  margin-bottom: 10px; 
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); 
`;