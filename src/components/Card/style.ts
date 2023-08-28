import styled from 'styled-components'


import BookmarkIcon from '@mui/icons-material/Bookmark'
import FavoriteIcon from '@mui/icons-material/Favorite'

export const LikeIcon = styled(FavoriteIcon)<{ isLike: boolean }>`
  color: ${(props) => (props.isLike ? 'red' : 'grey')};
`

export const FavIcon = styled(BookmarkIcon)<{ isFav: boolean }>`
  color: ${(props) => (props.isFav ? 'blue' : 'grey')};
`
