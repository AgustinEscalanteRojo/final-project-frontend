import styled from 'styled-components'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { ListItemText } from '@material-ui/core'

export const CardContentStyle = styled(CardContent)`
  margin-bottom: 1px;
  margin-left: 16px;
  margin-top: 11px;
`

export const TypographyStyle = styled(Typography)`
  margin-bottom: 16px; 
  `


export const Name = styled(ListItemText)`
  position: absolute; 
  margin-left: 50px; 
  margin-top: -42px!important; 
  transform: scale(0.9); 
  transform-origin: top left;
`

