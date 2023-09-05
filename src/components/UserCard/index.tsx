import { FC, memo } from 'react'
import { CardContainer, HeaderUser, Name, FollowButton } from './style'
import { Props } from './types'
import useLogic from './logic'
import { Avatar } from '@mui/material'
const UserCard: FC<Props> = ({ user }) => {
  const { handleFollowClick, getRandomPastelColor, isFollowing } =
    useLogic(user)

  return (
    <CardContainer>
      <HeaderUser>
        <Avatar style={{ backgroundColor: getRandomPastelColor() }}>
          {user.username.charAt(0)}
        </Avatar>
        <Name primary={user.username} secondary={user.firstName} />
        <FollowButton
          variant="text"
          color={isFollowing ? 'secondary' : 'primary'}
          onClick={() => {
            handleFollowClick() 
          }}
        >
          {isFollowing ? 'UNFOLLOW' : 'FOLLOW'}
        </FollowButton>
      </HeaderUser>
    </CardContainer>
  )
}

export default memo(UserCard)
