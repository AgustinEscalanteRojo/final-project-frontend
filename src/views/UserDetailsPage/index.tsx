import { FC, memo } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import * as React from 'react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { Avatar } from '@material-ui/core'
import ImageBackground from '../../components/ImageBackground'
import UserCard from '../../components/UserCard'
import RecipeReviewCard from '../../components/Card'
import useLogic from './logic'
import {
  PerfilContainer,
  Content,
  FollowersContainer,
  FollowingContainer,
  Posts,
  Container,
} from './styles'
import type { Props } from './types'

const UserDetailsPage: FC<Props> = ({ onLogout }) => {
  const { user, selectedTab, handleSetTab } = useLogic()

  return (
    <Container>
      <Header onLogout={onLogout} />
      <PerfilContainer>
        <Avatar style={{ backgroundColor: '#D4A373', marginTop: '150px' }}>
          {user?.username ? user.username.charAt(0).toUpperCase() : ''}
        </Avatar>
        username: {user?.username} - email: {user?.email}
        <FollowingContainer>
          Following
          {user?.following.map((user) => (
            <UserCard key={user._id} user={user} />
          ))}
        </FollowingContainer>
        <FollowersContainer>Followers</FollowersContainer>
        {user?.followers.map((user) => <UserCard key={user._id} user={user} />)}
        <Content>
          <Box sx={{ marginTop: 10, width: '100%', typography: 'body1' }}>
            <TabContext value={selectedTab}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList
                  onChange={handleSetTab}
                  aria-label="lab API tabs example"
                >
                  <Tab label="Recipes" value="1" />
                  <Tab label="Saved recipes" value="2" />
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
              <TabPanel value="2"></TabPanel>
            </TabContext>
          </Box>
        </Content>
        <ImageBackground imageSrc="/back.jpg" />
        <Footer />
      </PerfilContainer>
    </Container>
  )
}

export default memo(UserDetailsPage)
