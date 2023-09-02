import { FC, memo } from 'react'
import {CardContainer, Avatar, Username} from "./style"
import { Props } from './types'
import { Card as MuiCard, IconButton, CardHeader } from '@mui/material'

const UserCard: FC<Props> = ({ user }) => {
  return (
    <CardContainer>
      <Avatar>{user.email}</Avatar>
      <Username>{user.username}</Username>
      
    </CardContainer>
  )
}

export default memo(UserCard)
