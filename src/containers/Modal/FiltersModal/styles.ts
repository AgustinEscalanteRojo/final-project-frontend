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
`

