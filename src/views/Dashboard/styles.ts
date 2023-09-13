import styled from 'styled-components'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import CrownIcon from '@mui/icons-material/EmojiEvents'
import StickyCard from '@mui/material/Card'
import theme from '../../styles/theme'

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
  right: 140px;
  top: 104px;
  width: 160px;
  height: 150px;
  padding-top: 45px !important;
  padding: 23px;
  background-color: ${({ theme }) => theme.colors.blue25} !important;
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
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin-bottom: 50px;
  justify-content: center;
  overflow: auto;

  @media (max-width: 1490px) {
    grid-template-columns: repeat(2, 1fr);
    margin-top: -25px;
    padding-left: 0;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-top: -10px;
    padding-left: 0;
  }

  @media (max-width: 532px) {
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
  flex-direction: row;
  justify-content: center;
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
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`
export const Typography = styled.div`
  position: absolute;
  margin-left: 48px;
  margin-top: -52px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.grey};
  transform: scale(0.8);
`

export const CrownIconStyle = styled(CrownIcon)`
  position: absolute;
  padding: 2px;
  margin-left: -38px;
  margin-top: -3px !important;
`
