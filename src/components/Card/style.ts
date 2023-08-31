import styled from 'styled-components'
import theme from '../../styles/theme'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import FavoriteIcon from '@mui/icons-material/Favorite'
import Typography from '@mui/material/Typography'
import { Card as MuiCard, IconButton, CardHeader } from '@mui/material'

export const Image = styled.img`
  display: block;
  height: 20rem;
  object-fit: contain;
  width: 100%;
`
export const LikeIcon = styled(FavoriteIcon)<{ isLike: boolean }>`
  color: ${(props) => (props.isLike ? 'red' : 'grey')};
`
export const FavIcon = styled(BookmarkIcon)<{ isFav: boolean }>`
  color: ${(props) => (props.isFav ? 'blue' : 'grey')};
`
export const CardStyled = styled(MuiCard)`
  background-color: ${theme.colors.blue25} !important;
  margin: 10px;
  border: 1px solid ${theme.colors.blue175};
  border-radius: 20px !important;
  max-width: 410px;
  transition: max-width 0.3s ease-in-out;
  font-size: 16px !important;

  @media (min-width: 771px) and (max-width: 1500px) {
    max-width: 300px;
    font-size: 14px !important;
  }

  @media (min-width: 10px) and (max-width: 770px) {
    max-width: 200px;
    max-height: 470px;
    font-size: 12px !important;
  }
`
export const DetailsIconButton = styled(IconButton)``

export const CardHeaderStyled = styled(CardHeader)`
  font-size: 24px !important;
  font-weight: bold !important;
`
export const IconDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px; 
`
export const TimeIconContainer = styled.span``

export const DiningIconContainer = styled.span`
  margin-left: 8px;
`

export const Description = styled(Typography)`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`
