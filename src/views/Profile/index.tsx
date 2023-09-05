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
import { getMe } from '../../services/api/user'
import { User } from '../../models/User'
import { PerfilContainer, Content } from './styles'
import type { Props } from './types'

const Profile: FC<Props> = ({ onLogout }) => {
  const navigate = useNavigate()

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

      <Box sx={{ width: '50%', marginTop: '400px' }}>
        <Grid container>
          <Grid container xs={2}>
            <Avatar style={{ backgroundColor: '#42adbd' }}>
              {user?.username ? user.username.charAt(0).toUpperCase() : ''}
            </Avatar>
          </Grid>
          <Grid container xs={2}>
            <div>
              username: {user?.username} - email: {user?.email}
            </div>
          </Grid>
          <Grid container xs={5} alignItems="center" justifyContent="center">
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
            >
              <Button
                variant="contained"
                onClick={handleGoToLikes}
                style={{ backgroundColor: '#42adbd' }}
              >
                Likes
              </Button>
              <Button
                variant="contained"
                onClick={handleGoToFollowers}
                style={{ backgroundColor: '#42adbd' }}
              >
                Followers{' '}
              </Button>
              <Button
                variant="contained"
                onClick={handleGoToFollowers}
                style={{ backgroundColor: '#42adbd' }}
              >
                Following{' '}
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </Box>

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
