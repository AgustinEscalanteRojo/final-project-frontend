import styled from 'styled-components'
import { Button } from '@mui/material'

export const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.blue175};
  background-color: ${({ theme }) => theme.colors.blue25};
  border-radius: 15px;
  max-width: 250px;
  padding: 20px;
  box-shadow: 15px 12px 20px rgba(0, 0, 0, 0.1);
`

export const ContainerButton = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row;
`

export const ButtonStyle = styled(Button)`
  &&& {
    font-size: 12px;
    &:not(:last-child) {
      margin-right: 8px;
    }
  }
`

export const InputContainer = styled.div`
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`
