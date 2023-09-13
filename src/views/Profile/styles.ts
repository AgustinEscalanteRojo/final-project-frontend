import styled from 'styled-components'
import { Card, CardContent } from '@mui/material'
import TabPanel from '@mui/lab/TabPanel'

export const CardStyle = styled(Card)`
  max-width: 300px !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  background-color: ${({ theme }) => theme.colors.transparentGrey}!important;
  border-radius: 8px !important;
  box-shadow: none !important;
  padding: 16px !important;
  margin: 100px auto !important;
  border-radius: 35px !important;
`

export const TabPanelStyle = styled(TabPanel)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`

export const Container = styled.div``

export const Content = styled.div`
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
`

export const Button = styled.div`
  display: flex;
  flex-flow: row wrap;
`

export const Posts = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 20px;
  justify-content: center;
  max-width: 1000px;

  /* @media (max-width: 1317px) {
    grid-template-columns: 1fr;
    bottom: -50px;
  }
  @media (min-width: 0px) and (max-width: 532px) {
    margin: -27px !important;
  }*/
`
