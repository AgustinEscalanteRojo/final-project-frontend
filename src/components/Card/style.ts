import styled from 'styled-components'
import theme from '../../styles/theme'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import FavoriteIcon from '@mui/icons-material/Favorite'
import Typography from '@mui/material/Typography'
import { Card as MuiCard, IconButton, CardHeader } from '@mui/material'
import { AllergyIconProps } from './types'

export const TitleContainer = styled.div`
  font-size: 17px;
  margin-top: 12px;
  margin-bottom: -10px;
  cursor: pointer;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.colors.greytitle};
  text-transform: uppercase;
`
export const CardStyled = styled(MuiCard)`
  background-color: ${({ theme }) => theme.colors.blue25} !important;
  margin: 10px;
  width: 450px;
  border: 1px solid ${theme.colors.blue175};
  border-radius: 20px !important;
  transition: max-width 0.3s ease-in-out;
  box-shadow: 15px 12px 20px rgba(0, 0, 0, 0.1) !important;
  transform: scale(0.9);

  @media (min-width: 532px) and (max-width: 842px) {
    margin: -100px;
    bottom: -100px;
    transform: scale(0.5) !important;
    font-size: 14px !important;
  }

  @media (min-width: 0px) and (max-width: 532px) {
    margin: -170px !important;
    bottom: -250px !important;
    transform: scale(0.3) !important;
  }
`
export const AllergyIcon = styled.img<AllergyIconProps>`
  margin-top: 10px;
  margin-bottom: -18px;
  width: 24px;
  height: 24px;
  margin-bottom: -25px;
`
export const AllergyIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`
export const Image = styled.img`
  display: block;
  height: 20rem;
  object-fit: contain;
  width: 100%;
  cursor: pointer;
  margin-bottom: -15px;
`
export const LikeIcon = styled(FavoriteIcon)<{ isLike: boolean }>`
  color: ${(props) => (props.isLike ? 'red' : 'grey')};
`
export const FavIcon = styled(BookmarkIcon)<{ isFav: boolean }>`
  color: ${(props) => (props.isFav ? 'blue' : 'grey')};
`
export const DetailsIconButton = styled(IconButton)``

export const CardHeaderStyled = styled(CardHeader)`
  font-size: 24px !important;
  font-weight: bold !important;
  margin-bottom: -15px;
`
export const IconDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
`
export const DiningIconContainer = styled.span`
  transform: scale(0.8);
  margin-right: -10px;
`
export const Description = styled(Typography)`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`
