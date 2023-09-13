import { FC, memo } from 'react'
import AddIcon from '@mui/icons-material/Add'
import ImageBackground from '../../components/ImageBackground'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import UserCard from '../../components/UserCard'
import Card from '../../components/Card'
import Filters from '../../components/Filters'
import * as S from './styles'
import type { Props } from './types'
import useLogic from './logic'

const Dashboard: FC<Props> = ({ onLogout }) => {
  const {
    currentUser,
    handleGoToPost,
    handleRemovePost,
    posts,
    users,
    handleFilter,
    isLoading,
  } = useLogic()

  return (
    <>
    <Header onLogout={onLogout} />
    <S.Container>
      <S.ButtonController>
        <S.IconButtonStyled
          onClick={handleGoToPost}
          color="primary"
          aria-label="add new post"
        >
          <AddIcon fontSize="medium" /> {}
        </S.IconButtonStyled>
      </S.ButtonController>
      <S.Cards>
        {isLoading && <div>Loading...</div>}
        {!isLoading &&
          posts?.map((post) => (
            <Card
              key={post._id}
              post={post}
              isCurrentUserCreator={currentUser?._id === post.userId}
              onRemove={handleRemovePost}
            />
          ))}
      </S.Cards>
      <Filters onSubmit={handleFilter} />
      <S.ContainerUsers>
        <S.UserCards>
        <S.Typography> Top Main Chefs </S.Typography>
          {users
            ?.filter((user) => user._id !== currentUser?._id)
            .map((user, index) => (
              <UserCard
                key={index}
                user={user}
                currentUserFollowing={currentUser?.following.map(
                  (user) => user._id
                )}
              />
            ))}
        </S.UserCards>
      </S.ContainerUsers>
      <Footer />
      <ImageBackground imageSrc="/back.jpg" />
    </S.Container>
    </>
  )
}

export default memo(Dashboard)
