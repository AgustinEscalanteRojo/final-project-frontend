import { FC, memo } from 'react'
import * as React from 'react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import { Avatar } from '@material-ui/core'
import ImageBackground from '../../components/ImageBackground'
import UserCard from '../../components/UserCard'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import RecipeReviewCard from '../../components/Card'
import LocationCityIcon from '@mui/icons-material/LocationCity'
import {
  // PerfilContainer,
  Content,
  FollowersContainer,
  FollowingContainer,
  Posts,
  Container,
  UserContainer,
  CardStyle,
  TabPanelStyle,
} from './styles'
import type { Props } from './types'
import useLogic from './logic'
import {
  CardContent,
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import EmailIcon from '@mui/icons-material/Email'
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle'
import { TabPanel } from '@mui/lab'

const Profile: FC<Props> = ({ onLogout }) => {
  const { user, value, handleChange, getRandomPastelColor } = useLogic()

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
            <CardContent>
              <Typography variant="h5">Username: {user?.username}</Typography>
              <ListItem>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary={`Name: ${user?.firstName}`} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary={`Lastname: ${user?.lastName}`} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <EmailIcon />
                </ListItemIcon>
                <ListItemText primary={`Email: ${user?.email}`} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <LocationCityIcon />
                </ListItemIcon>
                <ListItemText primary={`Country: ${user?.country}`} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary={`Gender: ${user?.gender}`} />
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
                <TabPanelStyle value="1">
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
                </TabPanelStyle>
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
        </Grid>
      </Grid>
      <ImageBackground imageSrc="/back.jpg" />
    </Container>
  )
}

export default memo(Profile)
