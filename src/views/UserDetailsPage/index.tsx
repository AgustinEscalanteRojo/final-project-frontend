import { FC, memo } from 'react'
import Header from '../../components/Header'
import * as React from 'react'
import Box from '@mui/material/Box'
import { Avatar } from '@material-ui/core'
import LocationCityIcon from '@mui/icons-material/LocationCity'
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle'
import ImageBackground from '../../components/ImageBackground'
import {
  CardContent,
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'
import RecipeReviewCard from '../../components/Card'
import useLogic from './logic'
import { Content, Posts, Container, CardStyle, FollowButton } from './styles'
import type { Props } from './types'
import UsersCardsModal from '../../containers/Modal/UsersCardsModal'

const UserDetailsPage: FC<Props> = ({ onLogout, currentUserFollowing }) => {
  const { user, getRandomPastelColor, handleFollowClick, isFollowing } =
    useLogic(currentUserFollowing)

  return (
    <Container>
      <Header onLogout={onLogout} />

      <Grid
        item
        xs={12}
        md={4}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Grid item xs={12} md={4}>
          <CardStyle>
            <Avatar
              style={{
                backgroundColor: getRandomPastelColor(),
                width: 60,
                height: 60,
              }}
            >
              {user?.username ? user.username.charAt(0).toUpperCase() : ''}
            </Avatar>
            <FollowButton
              variant="text"
              color={isFollowing ? 'secondary' : 'primary'}
              onClick={handleFollowClick}
            >
              {isFollowing ? 'UNFOLLOW' : 'FOLLOW'}
            </FollowButton>

            <CardContent>
              <Typography variant="h5">Username: {user?.username}</Typography>
              <UsersCardsModal
                users={user?.followers || []}
                buttonText={`Followers: ${user?.followers?.length || 0}`}
              />
              <UsersCardsModal
                users={user?.following || []}
                buttonText={`Following: ${user?.following?.length || 0}`}
              />
              <ListItem>
                <ListItemIcon>
                  <LocationCityIcon />
                </ListItemIcon>
                <ListItemText primary={`Country: ${user?.country}`} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <SupervisedUserCircleIcon />
                </ListItemIcon>
                <ListItemText primary={`Biography: ${user?.biography}`} />
              </ListItem>
            </CardContent>
          </CardStyle>
        </Grid>
        <Grid item xs={12} md={8}>
          <Content>
            <Box sx={{ marginTop: 10, width: '100%', typography: 'body1' }}>
              {user && user.myPosts && user.myPosts.length > 0 ? (
                <Posts>
                  {user.myPosts.map((post) => (
                    <RecipeReviewCard
                      key={post._id}
                      post={post}
                      isCurrentUserCreator={user?._id === post.userId}
                    />
                  ))}
                </Posts>
              ) : (
                <p>Not have posts yet.</p>
              )}
            </Box>
          </Content>
        </Grid>
      </Grid>
      <ImageBackground imageSrc="/back.jpg" />
    </Container>
  )
}

export default memo(UserDetailsPage)
