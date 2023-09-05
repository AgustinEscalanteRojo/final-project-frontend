import { FC, memo, useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import * as React from 'react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { Avatar, Button, ButtonGroup, Grid } from '@material-ui/core'
import ImageBackground from '../../components/ImageBackground'
import { getMe, getUserById } from '../../services/api/user'
import { User } from '../../models/User'
import { PerfilContainer, Content } from './styles'
import type { Props } from './types'
import UserCard from '../../components/UserCard'

const Profile: FC<Props> = ({ onLogout }) => {
  const navigate = useNavigate()
const [followingUsers, setFollowingUsers] = useState<User[]>([])

  const handleGoToLikes = useCallback(() => {
    navigate('/ ')
  }, [navigate])

  const [user, setUser] = useState<User | null>(null)

  const handleGoToFollowers = useCallback(() => {
    navigate('/Followers')
  }, [navigate])

  const [value, setValue] = React.useState('1')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  const fetchUserMe = useCallback(async () => {
    try {
      const userInfo = await getMe()
      setUser(userInfo)
    
            if (userInfo && userInfo.following) {
              const followingUserPromises = userInfo.following.map(
                (followingUserId) => getUserById(followingUserId)
              )

              const followingUserList = await Promise.all(followingUserPromises)
              setFollowingUsers(
                followingUserList.filter((user) => user !== null) as User[]
              )
            }
    
    
    
    
    } catch (error) {
      console.error('Error fetching user data:', error)
    }
  }, [])

  useEffect(() => {
    fetchUserMe()
  }, [fetchUserMe])

  return (
    <div>
    <Header onLogout={onLogout} />
    <PerfilContainer>
      <Avatar style={{ backgroundColor: '#D4A373', marginTop: '150px' }}>
        {user?.username ? user.username.charAt(0).toUpperCase() : ''}
      </Avatar>
      username: {user?.username} - email: {user?.email}
      <ButtonController>
        <Button onClick={handleGoToLikes}>Likes</Button>
        <div>Followers / Following</div>

        <div>
          {followingUsers.map((followingUser) => (
            <UserCard
              key={followingUser._id}
              user={followingUser}
              username={followingUser.username}
              avatar={followingUser.email}
            />
          ))}
        </div>
      </ButtonController>

      <Content>
        <Box sx={{ marginTop: 10, width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="My recipes" value="1" />
                <Tab label="my favorites" value="2" />
              </TabList>
            </Box>

            <TabPanel value="1"></TabPanel>

            <TabPanel value="2">
              {user && user.favPosts && user.favPosts.length > 0 ? (
                <ul>
                  {user.favPosts.map((favoritePost, index) => (
                    <li key={index}>{favoritePost}</li>
                  ))}
                </ul>
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
    </div>
  )
}

export default memo(Profile)
