import styled from 'styled-components'
import theme from '../../styles/theme'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import FavoriteIcon from '@mui/icons-material/Favorite'
import Typography from '@mui/material/Typography'
import { Card as MuiCard, IconButton, CardHeader } from '@mui/material'

interface AllergyIconProps {
  src: string
  alt: string
}

export const CardStyled = styled(MuiCard)`
  background-color: ${theme.colors.blue25} !important;
  margin: 10px;
  width:450px;
  border: 1px solid ${theme.colors.blue175};
  border-radius: 20px !important;
  transition: max-width 0.3s ease-in-out;
  transform: scale(0.9);

  @media (min-width: 532px) and (max-width: 842px) {
    margin: -100px;
    bottom: -100px;
    transform: scale(0.5)!important;
    font-size: 14px !important;
  }

  @media (min-width: 0px) and (max-width: 532px) {
   
    margin: -170px!important;
    bottom: -250px!important;
    transform: scale(0.3)!important;
  
   
  }

`





export const AllergyIcon = styled.img<AllergyIconProps>`
  margin-top: 10px;
  margin-bottom: -18px;
  width: 24px;
  height: 24px;
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
