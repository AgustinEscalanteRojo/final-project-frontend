import styled from 'styled-components'
import { Button } from '@mui/material'

export const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.blue175};
  border-radius: 4px;
  max-width: 250px;
  padding: 20px;
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
