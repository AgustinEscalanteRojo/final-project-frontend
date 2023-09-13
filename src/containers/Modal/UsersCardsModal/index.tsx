import { FC, memo, useCallback, useState } from 'react'
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
import { Button } from '@mui/material'

const UsersCardsModal: FC<Props> = ({ users, buttonText }) => {
  const [openModal, setOpenModal] = useState(false)

  const handleOpen = () => setOpenModal(true)
  const handleClose = () => setOpenModal(false)

  return (
    <Container>
      <Button variant="text" onClick={handleOpen}>
        {buttonText}
      </Button>
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
