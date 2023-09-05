import styled from 'styled-components'
import { ListItemText } from '@material-ui/core'
import { Button} from '@mui/material'
export const HeaderUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: -20px;
`

export const Name = styled(ListItemText)`
  margin-left: 10px;
  margin: 15px;
  padding-right: 10px;
  margin-right: 10px;
`

export const FollowButton = styled(Button)`

  transform: scale(0.8) !important;

`

export const CardContainer = styled.div`
  margin-left: 1px;
  margin-right: -13px;
  transform: scale(0.7);
  border-radius: 20px;
`
