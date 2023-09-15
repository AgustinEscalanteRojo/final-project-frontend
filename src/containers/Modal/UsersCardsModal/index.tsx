import { FC, memo, useState } from 'react'
import {
  Container,
  Content,
  ModalContainer,
  UserCardContent,
  UsersContent,
} from './styles'
import type { Props } from './types'
import UserCard from '../../../components/UserCard'
import * as React from 'react'
import { Box, Button } from '@mui/material'

const UsersCardsModal: FC<Props> = ({ users, buttonText }) => {
  const [openModal, setOpenModal] = useState(false)

  const handleOpen = () => setOpenModal(true)
  const handleClose = () => setOpenModal(false)

  return (
    <Container>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Button variant="outlined" onClick={handleOpen} style={{ marginBottom: '7px' }}>
          {buttonText}
        </Button>
      </Box>
      <ModalContainer open={openModal} onClose={handleClose}>
        <Content>
          <UsersContent>
            {users.map((user) => (
              <UserCardContent key={user._id}>
                <UserCard user={user} />
              </UserCardContent>
            ))}
          </UsersContent>
        </Content>
      </ModalContainer>
    </Container>
  )
}

export default memo(UsersCardsModal)
