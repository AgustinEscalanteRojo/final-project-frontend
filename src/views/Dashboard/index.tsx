import { FC, memo } from 'react'
import AddIcon from '@mui/icons-material/Add'
import ImageBackground from '../../components/ImageBackground'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import UserCard from '../../components/UserCard'
import Card from '../../components/Card'
import * as S from './styles'
import type { Props } from './types'
import useLogic from './logic'
import Filters from '../../components/Filters'

const Dashboard: FC<Props> = ({ onLogout }) => {
  const {
    currentUser,
    handleGoToPost,
    handleRemovePost,
    posts,
    users,
    handleFilter,
  } = useLogic()

  return (
    <S.Container>
      <Header onLogout={onLogout} />
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
        {posts?.map((post) => (
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
          {users?.map((user, index) => <UserCard key={index} user={user} />)}
        </S.UserCards>
        <S.ButtonStyled variant="contained" color="primary" onClick={() => {}}>
          See all{' '}
        </S.ButtonStyled>
      </S.ContainerUsers>
      <Footer />
      <ImageBackground imageSrc="/back.jpg" />
    </S.Container>
  )
}

export default memo(Dashboard)
