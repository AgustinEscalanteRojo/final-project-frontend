import { FC, memo } from 'react'
import type { Props } from './types'
import { Container, Title, Users, StarIconStyle } from './styles'
import UserCard from '../../../components/UserCard'

const TopChefs: FC<Props> = ({ users, loggedUser, className }) => {
  return (
    <Container className={className}>
      <StarIconStyle fontSize="large" />
      <Title>Top 10 Chefs</Title>
      <Users>
        {users
          ?.filter((user) => user._id !== loggedUser?._id)
          .map((user, index) => (
            <UserCard
              key={index}
              user={user}
              currentUserFollowing={loggedUser?.following.map(
                (user) => user._id
              )}
            />
          ))}
      </Users>
    </Container>
  )
}

export default memo(TopChefs)
