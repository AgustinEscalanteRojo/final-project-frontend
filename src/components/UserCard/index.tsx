import { FC, memo } from 'react'
import { CardContainer, Avatar, Username, FollowButton } from './style'
import { Props } from './types'
import useLogic from './logic'

const UserCard: FC<Props> = ({ user }) => {
  const { handleFollowClick } = useLogic(user)

  return (
    <CardContainer>
      <Avatar>{user.email}</Avatar>
      <Username>{user.username}</Username>
      <FollowButton onClick={handleFollowClick}> FOLLOW </FollowButton>

    </CardContainer>
  )
}

export default memo(UserCard)
