import { FC, memo } from 'react'
import { CardContainer, Username, FollowButton, HeaderUser, Names, Userfirst} from './style'
import { Props } from './types'
import useLogic from './logic'
import { Avatar } from '@mui/material'
const UserCard: FC<Props> = ({ user }) => {
  const { handleFollowClick, getRandomPastelColor } = useLogic(user)

  return (
    <CardContainer>
     <HeaderUser>
      <Avatar style={{ backgroundColor: getRandomPastelColor() }}>
        {user.username.charAt(0)}
      </Avatar>
      <Names>
      <Username>{user.username}</Username>
      <Userfirst>{user.firstName}</Userfirst>
      </Names>
</HeaderUser>
      <FollowButton onClick={handleFollowClick}> FOLLOW </FollowButton>
    </CardContainer>
  )
}

export default memo(UserCard)
