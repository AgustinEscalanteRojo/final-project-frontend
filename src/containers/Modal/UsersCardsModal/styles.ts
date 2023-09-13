import styled from 'styled-components'
import { Modal } from '@mui/material'

export const Container = styled.div``

export const ModalContainer = styled(Modal)``

export const Content = styled.div`
  background-color: white;
  left: 50%;
  max-height: 500px;
  max-width: 500px;
  padding: 32px;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
`

export const UsersContent = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.grey400};
  border-radius: 4px;
  padding: 8px;
`

export const UserCardContent = styled.div`
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey400};
  }
`
