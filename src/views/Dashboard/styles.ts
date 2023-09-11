import styled from 'styled-components'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import theme from '../../styles/theme'

export const ContainerUsers = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.blue175};
  border-radius: 15px;
  position: fixed;
  right: 19px;
  top: 104px;
  width: 150px;
  height: 665px;
  padding: 20px;
  background-color: ${theme.colors.transparentWhite};
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 15px 12px 20px rgba(0, 0, 0, 0.1) !important;

  @media (min-width: 532px) and (max-width: 927px) {
    top: 0px;
    right: -15px;
    transform: scale(0.7);
  }
  @media (min-width: 0px) and (max-width: 532px) {
    top: -110px !important;
    right: -45px !important;
    transform: scale(0.4) !important;
  }
`
export const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: -50px;
  margin-bottom: 50px;
  justify-content: center;
  max-width: 1000px;

  @media (max-width: 1490px) {
    grid-template-columns: 1fr;
    bottom: -50px;
  }
  @media (min-width: 0px) and (max-width: 532px) {
    margin-top: -17px !important;
  }
`
export const UserCards = styled.div`
  width: 110%;
  margin-right: 20px;
  padding: 20px;
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: #888 transparent;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    margin-right: 20px;
    background-color: ${({ theme }) => theme.colors.grey};
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.colors.grey900};
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`
export const ButtonStyled = styled(Button)`
  top: 10px;
  transform: scale(0.7);
  background-color: transparent !important;
  color: ${({ theme }) => theme.colors.black}!important;
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto !important;
  outline: none !important;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;


  
  margin-bottom: 0;
  margin-left: 0;
`
export const IconButtonStyled = styled(IconButton)`
  border: 2px solid ${theme.colors.blue225} !important;
  border-radius: 20%;
  top: -45px;
  width: 30px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.transparentWhite}!important;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1) !important;
`
export const ButtonController = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 10px;
  margin-top: 150px;
  margin-bottom: 10px;

  @media (min-width: 200px) and (max-width: 927px) {
    margin-top: 120px;
    transform: scale(0.6) !important;
  }
`

