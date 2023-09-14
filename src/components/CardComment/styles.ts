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
  margin-top: -42px !important;
  transform: scale(0.9);
  transform-origin: top left;
`
export const DeleteIconContainer = styled.div`
  width: 40px;
  height: 40px;
  margin-left: -8px;
  background-color: ${({ theme }) => theme.colors.grey300};
  border-radius: 50%;
  cursor: pointer;
  transition:
    transform 0.3s,
    box-shadow 0.3s;

  &:hover {
    transform: scale(0.83);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`
