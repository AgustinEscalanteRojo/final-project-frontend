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
  padding: 23px;
  background-color: ${({ theme }) => theme.colors.blue25} !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 15px 12px 20px rgba(0, 0, 0, 0.1) !important;

  @media (min-width: 532px) and (max-width: 927px) {
    top: 0;
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
  display: flex;
  flex-flow: row wrap;
  gap: 20px;
  margin: 50px 0;
  justify-content: center;
  overflow: auto;

  /*@media (max-width: 1490px) {
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
  }*/
`

export const Container = styled.div`
  padding: 0 40px;
  max-width: 2000px;
`

export const IconButtonStyled = styled(IconButton)`
  border: 2px solid ${theme.colors.blue225} !important;
  border-radius: 20%;
  width: 30px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.transparentWhite}!important;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1) !important;
`

export const ButtonController = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 150px;
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
