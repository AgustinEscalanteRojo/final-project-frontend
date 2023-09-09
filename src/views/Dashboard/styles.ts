import styled from 'styled-components'
import Checkbox from '@mui/material/Checkbox'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import theme from '../../styles/theme'

export const ContainerUsers = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.blue175};
  border-radius: 30px;
  position: fixed;
  right: 15px;
  top: 85px;
  width: 150px;
  height: 595px;
  padding: 20px;
  background-color: ${theme.colors.transparentWhite};
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: scale(0.95);
  box-shadow: 15px 12px 20px rgba(0, 0, 0, 0.1) !important;

  @media (min-width: 532px) and (max-width: 842px) {
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
  transform: scale(0.6);
  background-color: transparent !important;
  color: ${({ theme }) => theme.colors.black}!important;
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto !important;
  padding: 0 !important;
  outline: none !important;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 320px;
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 0;
`
export const IconButtonStyled = styled(IconButton)`
  border: 2px solid ${theme.colors.blue225} !important;
  border-radius: 20%;
  top: -25px;
  width: 30px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.transparentWhite}!important;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1) !important;
`
export const ButtonController = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 10px;
  margin-top: 140px;
  margin-bottom: 10px;

  @media (min-width: 200px) and (max-width: 842px) {
    margin-top: 90px;
    transform: scale(0.6) !important;
  }
`
export const Cards = styled.div`
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
