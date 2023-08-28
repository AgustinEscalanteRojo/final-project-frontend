import { FC, memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import type { Props } from './types'
import Button from '../../components/Button'
import {
  PerfilContainer,
  Content,
  ButtonController,
  Tittle,
  AvatarContainer,
} from './styles'
import * as React from 'react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { Avatar } from '@material-ui/core'
import ImageBackground from '../../components/ImageBackground'

const Profile: FC<Props> = ({ onLogout }) => {
  const navigate = useNavigate()

  const handleGoToLikes = useCallback(() => {
    navigate('/ ')
  }, [navigate])

  const handleGoToFollowers = useCallback(() => {
    navigate('/Followers')
  }, [navigate])

  const [value, setValue] = React.useState('1')
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }
  return (
    <PerfilContainer>
      <Header onLogout={onLogout} />

      <Content>
        <Tittle>Profile</Tittle>

        <AvatarContainer>
          <Avatar
            style={{
              backgroundColor: '#D4A373',
            }}
          />
        </AvatarContainer>

        <ButtonController>
          <Button onClick={handleGoToLikes}>Like</Button>
        </ButtonController>

        <ButtonController>
          <Button onClick={handleGoToFollowers}>Followers / Following</Button>
        </ButtonController>

        <Box sx={{ marginTop: 2, width: '100%', typography: 'body1' }}>
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
            <TabPanel value="1">recipe 1, recipe 2, recipe 3</TabPanel>
            <TabPanel value="2">favorite 1, favorite 2, favorite 3</TabPanel>
          </TabContext>
        </Box>
      </Content>
      <ImageBackground imageSrc="/back.jpg" />
      <Footer />
    </PerfilContainer>
  )
}
export default memo(Profile)
