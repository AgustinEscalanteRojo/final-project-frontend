import { FC, memo } from 'react'
import AddIcon from '@mui/icons-material/Add'
import ImageBackground from '../../components/ImageBackground'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Card from '../../components/Card'
import UserCard from '../../components/UserCard'
import * as S from './styles'
import type { Props } from './types'
import useLogic from './logic'
import Filters from '../../components/Filters'
import { Card as MUICard, CardContent, Typography } from '@mui/material'
import CrownIcon from '@mui/icons-material/AccountCircle'
import Box from '@material-ui/core/Box'

const Dashboard: FC<Props> = ({ onLogout }) => {
  const {
    currentUser,
    handleGoToPost,
    handleRemovePost,
    posts,
    users,
    handleFilter,
    handleReset,
    isLoading,
  } = useLogic()

  return (
    <>
      <Header onLogout={onLogout} />
      <S.Container>
        <S.ContainerFilter>
          {/* <S.Title>Welcome to the Shared Flavours.</S.Title>
          <S.Subtitle>
            Click on the + symbol and create your first recipe.
          </S.Subtitle> */}
          <S.StickyCardStyle>
            <CardContent>
              <Typography
                variant="body1"
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}
              />
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100vh"
                flexDirection="row"
              >
                <Filters onSubmit={handleFilter} onReset={handleReset} />
              </Box>
            </CardContent>
          </S.StickyCardStyle>
          <S.IconButtonStyled
            onClick={handleGoToPost}
            color="primary"
            aria-label="add new post"
          >
            <AddIcon fontSize="medium" />
          </S.IconButtonStyled>
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
        </S.ContainerFilter>

        <S.ContainerUsers>
          <S.ContainerCardsUsers>
            <Typography variant="h6">
              <CrownIcon /> Top Chefs
            </Typography>
            {users
              ?.filter((user) => user._id !== currentUser?._id)
              .slice(0, 3)
              .map((user, index) => (
                <UserCard
                  key={index}
                  user={user}
                  currentUserFollowing={currentUser?.following.map(
                    (user) => user._id
                  )}
                />
              ))}
          </S.ContainerCardsUsers>
        </S.ContainerUsers>

        <ImageBackground imageSrc="/back.jpg" />
        <Footer />
      </S.Container>
    </>
  )
}

export default memo(Dashboard)
