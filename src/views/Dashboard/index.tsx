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
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Box from '@material-ui/core/Box'


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
          <Typography
           marginTop="95px"
            marginBottom="5px"
            textAlign="center"
            fontFamily="Oswald"
            fontWeight="5px"
            fontSize="50px"
          >
            Welcome to the Shared Flavours.
          </Typography>
          <Typography
            marginBottom="88px"
            textAlign="center"
            fontFamily="Oswald"
          >
            Click on the + symbol and create your first recipe.
          </Typography>

          <S.IconButtonStyled
            onClick={handleGoToPost}
            color="primary"
            aria-label="add new post"
          >
            <AddIcon fontSize="medium" />
          </S.IconButtonStyled>


          <S.StickyCardStyle
          >
            <CardContent >
              <Typography
                variant="body1"
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
              
                }}
              ></Typography>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100vh"
                flexDirection="row"
              >
                <Filters onSubmit={handleFilter} />
              </Box>
            </CardContent>
          </S.StickyCardStyle>


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
        </S.ButtonController>



        {/* <S.ContainerUsers>
        <S.UserCards>
        <S.Typography><S.CrownIconStyle/> Top Main Chefs </S.Typography>
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
      </S.ContainerUsers>   */}

        <Footer />
        <ImageBackground imageSrc="/back.jpg" />
      </S.Container>
    </>
  )
}

export default memo(Dashboard)
