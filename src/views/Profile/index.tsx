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
  Backgroundcolor,
} from './styles'

import * as React from 'react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { Avatar } from '@material-ui/core'

const Profile: FC<Props> = ({ onLogout }) => {
  const navigate = useNavigate()

  const handleGoToFollowers = useCallback(() => {
    navigate('/Followers')
  }, [navigate])

  const [value, setValue] = React.useState('1')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  // const avatarStyle = { backgroundColor: '#c9101d' }

  return (

    <PerfilContainer>

      <Header onLogout={onLogout} />

      <Avatar style={{ backgroundColor: '#c9101d', marginTop: '150px' }}></Avatar>

      <ButtonController>
        <Button onClick={handleGoToFollowers}>Followers / Following</Button>
      </ButtonController>



      <Content>
        <Box sx={{ marginTop: 7, width: '100%', typography: 'body1' }}>
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

      <Backgroundcolor />
      <Footer />
    </PerfilContainer>
  )
}

export default memo(Profile)
