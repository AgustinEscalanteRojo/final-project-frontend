import styled from 'styled-components'
import theme from '../../styles/theme'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { Card as MuiCard, IconButton, CardHeader } from '@mui/material'

// LikeIcon and FavIcon components
export const LikeIcon = styled(FavoriteIcon)<{ isLike: boolean }>`
  color: ${(props) => (props.isLike ? 'red' : 'grey')};
`

export const FavIcon = styled(BookmarkIcon)<{ isFav: boolean }>`
  color: ${(props) => (props.isFav ? 'blue' : 'grey')};
`

// Styled Card component
export const CardStyled = styled(MuiCard)`
  max-width: 510px;
  background-color: ${theme.colors.cornsilk} !important;
  margin-top: 4px;
  margin: 19px;
  margin-bottom: 29px;
  border: 3px solid ${theme.colors.boldbuff};
  border-radius: 20px !important; 
`

// Styled Details IconButton
export const DetailsIconButton = styled(IconButton)`
  margin-left: 89px !important;
`

export const CardHeaderStyled = styled(CardHeader)`
  font-size: 24px !important;
  font-weight: bold !important;
`
