import { FC, memo } from 'react'
import {
  Avatar,
  CardContainer,
  HeaderUser,
  Name,
  FollowButton,
  AvatarStyled,
} from './style'
import useLogic from './logic'
import type { Props } from './types'

const UserCard: FC<Props> = ({ user, currentUserFollowing }) => {
  const {
    handleFollowClick,
    getRandomPastelColor,
    isFollowing,
    handleGoToDetails,
  } = useLogic(user, currentUserFollowing)

  return (
    <CardContainer>
      <HeaderUser>
        <AvatarStyled>
          <Avatar
            style={{ backgroundColor: getRandomPastelColor() }}
            onClick={handleGoToDetails}
          >
            {user.username?.charAt(0)}
          </Avatar>
        </AvatarStyled>
        <Name
          primary={user.username}
          secondary={user.firstName}
          onClick={handleGoToDetails}
        />
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
