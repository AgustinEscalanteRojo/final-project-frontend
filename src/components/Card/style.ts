import styled from 'styled-components'
import theme from '../../styles/theme'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { Card as MuiCard, IconButton, CardHeader } from '@mui/material'




export const ImageContent = styled.div`
  img {
    max-width: 100%;
    height: auto; 
    display: block; 
  }
`;

export const LikeIcon = styled(FavoriteIcon)<{ isLike: boolean }>`
  color: ${(props) => (props.isLike ? 'red' : 'grey')};
`

export const FavIcon = styled(BookmarkIcon)<{ isFav: boolean }>`
  color: ${(props) => (props.isFav ? 'blue' : 'grey')};
`

export const CardStyled = styled(MuiCard)`
  background-color: ${theme.colors.cornsilk} !important;
  margin: 10px;
  border: 1px solid ${theme.colors.boldbuff};
  border-radius: 20px !important;
  max-width: 410px;
  transition: max-width 0.3s ease-in-out;

  @media (min-width:  771px) and (max-width: 1500px) {
    max-width: 300px;
  }


  @media (min-width:  10px) and (max-width: 770px) {
    max-width: 190px;
    max-height: 470px;
  }


`

export const DetailsIconButton = styled(IconButton)``

export const CardHeaderStyled = styled(CardHeader)`
  font-size: 24px !important;
  font-weight: bold !important;
`
