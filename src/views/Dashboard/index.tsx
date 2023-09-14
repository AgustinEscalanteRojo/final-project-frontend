import { FC, memo } from 'react'
import ImageBackground from '../../components/ImageBackground'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Card from '../../components/Card'
import Spinner from '../../components/Spinner'
import useLogic from './logic'
import * as S from './styles'
import type { Props } from './types'

const Dashboard: FC<Props> = ({ onLogout }) => {
  const {
    users,
    currentUser,
    isLoading,
    posts,
    handleFilter,
    handleResetFilters,
    handleRemovePost,
  } = useLogic()

  return (
    <>
      <Header onLogout={onLogout} />
      <S.Container>
        <S.Filters onSubmit={handleFilter} onReset={handleResetFilters} />
        <S.FiltersModal onSubmit={handleFilter} onReset={handleResetFilters} />
        <S.Posts>
          {isLoading && <Spinner />}
          {!isLoading &&
            posts?.map((post) => (
              <Card
                key={post._id}
                post={post}
                isCurrentUserCreator={currentUser?._id === post.userId}
                onRemove={handleRemovePost}
              />
            ))}
        </S.Posts>
        <S.TopChefs users={users} loggedUser={currentUser!} />
        <ImageBackground imageSrc="/back.jpg" />
      </S.Container>
      <Footer />
    </>
  )
}

export default memo(Dashboard)
