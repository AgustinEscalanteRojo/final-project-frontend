import { FC, memo } from 'react'
import { Avatar, CardContainer, HeaderUser, Name, FollowButton } from './style'
import useLogic from './logic'
import type { Props } from './types'

const UserCard: FC<Props> = ({ user }) => {
  const {
    handleFollowClick,
    getRandomPastelColor,
    isFollowing,
    handleGoToDetails,
  } = useLogic(user)

  return (
    <CardContainer>
      <HeaderUser>
        <Avatar
          style={{ backgroundColor: getRandomPastelColor() }}
          onClick={handleGoToDetails}
        >
          {user.username?.charAt(0)}
        </Avatar>
        <Name primary={user.username} secondary={user.firstName} />
        <FollowButton
          variant="text"
          color={isFollowing ? 'secondary' : 'primary'}
          onClick={handleFollowClick}
        >
          {isFollowing ? 'UNFOLLOW' : 'FOLLOW'}
        </FollowButton>
      </HeaderUser>
    </CardContainer>
  )
}

export default memo(UserCard)
