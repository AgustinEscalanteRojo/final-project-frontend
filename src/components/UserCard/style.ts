import styled from 'styled-components'
import { ListItemText } from '@material-ui/core'
import Button from '@mui/material/Button'
import DefaultAvatar from '@mui/material/Avatar'

export const HeaderUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: -20px;
`
export const Avatar = styled(DefaultAvatar)`
  cursor: pointer;
`

export const Name = styled(ListItemText)`
  margin-left: 10px;
  margin: 15px;
  padding-right: 10px;
  margin-right: 10px;
  cursor: pointer;
  transition:
    transform 0.3s,
    box-shadow 0.3s;

  &:hover {
    transform: scale(1.2);
  }
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
export const UsernameContainer = styled.div`
  transform: scale(0.7);
`
export const AvatarStyled = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.grey300};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition:
    transform 0.3s,
    box-shadow 0.3s;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`
