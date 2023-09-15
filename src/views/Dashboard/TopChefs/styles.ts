import styled from 'styled-components'

export const Container = styled.div`
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.blue175};
  background-color: ${({ theme }) => theme.colors.blue25};
  border-radius: 15px;
  max-width: 250px;
  padding: 20px;
  box-shadow: 15px 12px 20px rgba(0, 0, 0, 0.1);
`

export const Title = styled.h4`
  text-align: center;
`

export const Users = styled.div``
