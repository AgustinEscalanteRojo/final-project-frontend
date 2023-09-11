import styled from 'styled-components'

export const Container = styled.div``

export const PerfilContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

export const Content = styled.div`
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
`

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.blue900};
  margin-top: 15px;
  font-family: 'Roboto', sans-serif !important;
  font-size: 18px;
`

export const Button = styled.div`
  display: flex;
  flex-flow: row wrap;
`

export const FollowersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FollowingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
`

export const Posts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: -50px;
  justify-content: center;
  max-width: 1000px;

  @media (max-width: 1317px) {
    grid-template-columns: 1fr;
    bottom: -50px;
  }
  @media (min-width: 0px) and (max-width: 532px) {
    margin: -27px !important;
  }
`
