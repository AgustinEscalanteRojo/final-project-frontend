import styled from 'styled-components'
import AddIcon from '@mui/icons-material/Add'
import StickyCard from '@mui/material/Card'
import theme from '../../styles/theme'

export const Container = styled.div`
  padding-top: 130px;
  max-width: 2000px;
`
export const ContainerFilter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
`

export const StickyCardStyle = styled(StickyCard)`
  width: 1635px;
  background-color: ${({ theme }) => theme.colors.blue25}!important;
  border: 1px solid ${theme.colors.blue175};
  border-radius: 15px !important;
  box-shadow: 15px 12px 20px rgba(0, 0, 0, 0.1) !important;
  height: 55px;
`

export const ContainerUsers = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.blue175};
  border-radius: 15px;
  position: fixed;
  right: 54px;
  top: 104px;
  width: 170px;
  height: 190px;
  padding: 23px;
  transform: scale(0.9);
  background-color: ${({ theme }) => theme.colors.blue25} !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 15px 12px 20px rgba(0, 0, 0, 0.1) !important;
`
export const ContainerCardsUsers = styled.div`
margin: 5px;
margin-right: 20px;
`


export const Cards = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 20px;
  margin: 50px 0;
  justify-content: center;
  overflow: auto;

`

export const IconButtonStyled = styled(AddIcon)`
margin-top: 40px;
  border: 2px solid ${theme.colors.blue225} !important;
  border-radius: 20%;
  width: 30px;
  cursor: pointer;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.transparentWhite}!important;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1) !important;
`

export const Title = styled.h2``

export const Subtitle = styled.h5``

export const Typography = styled.div`
  position: absolute;
  margin-left: 48px;
  margin-top: -52px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.grey};
  transform: scale(0.8);
`
