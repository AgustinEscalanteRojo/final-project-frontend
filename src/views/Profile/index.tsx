import { FC, memo } from 'react'
import * as React from 'react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { Avatar } from '@material-ui/core'
import ImageBackground from '../../components/ImageBackground'
import UserCard from '../../components/UserCard'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import RecipeReviewCard from '../../components/Card'
import {
  PerfilContainer,
  Content,
  FollowersContainer,
  FollowingContainer,
  Posts,
  Container,
  UserContainer,
} from './styles'
import type { Props } from './types'
import useLogic from './logic'

const Profile: FC<Props> = ({ onLogout }) => {
  const { user, value, handleChange, getRandomPastelColor } = useLogic()

  return (
    <Container>
      <Header onLogout={onLogout} />
      <PerfilContainer>
        <UserContainer>
          <Avatar
            style={{
              backgroundColor: getRandomPastelColor(),
              marginTop: '150px',
            }}
          >
            {user?.username ? user.username.charAt(0).toUpperCase() : ''}
          </Avatar>
          <div>Username: {user?.username}</div>
          <div>Email: {user?.email}</div>
          <div>FirstName: {user?.firstName}</div>
          <div>LastName: {user?.lastName}</div>
          <div>Gender: {user?.gender}</div>
          <div>Country: {user?.country}</div>
          <div>Biography: {user?.biography}</div>
          <FollowingContainer>
            Following
            {user?.following.map((user) => (
              <UserCard key={user._id} user={user} />
            ))}
          </FollowingContainer>
          <FollowersContainer>Followers</FollowersContainer>
          {user?.followers.map((user) => (
            <UserCard key={user._id} user={user} />
          ))}
        </UserContainer>

        <Content>
          <Box sx={{ marginTop: 10, width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: 'divider',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="My recipes" value="1" />
                  <Tab label="my favorites" value="2" />
                </TabList>
              </Box>

              <TabPanel value="1">
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
              </TabPanel>

              <TabPanel value="2">
                {user && user.favPosts && user.favPosts.length > 0 ? (
                  <Posts>
                    {user.favPosts.map((post) => (
                      <RecipeReviewCard
                        key={post._id}
                        post={post}
                        isCurrentUserCreator={user?._id === post.userId}
                      />
                    ))}
                  </Posts>
                ) : (
                  <p>Not have favorite posts yet.</p>
                )}
              </TabPanel>
            </TabContext>
          </Box>
        </Content>
        <ImageBackground imageSrc="/back.jpg" />
        <Footer />
      </PerfilContainer>
    </Container>
  )
}

export default memo(Profile)
