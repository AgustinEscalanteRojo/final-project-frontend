import styled from 'styled-components'
import theme from '../../styles/theme'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { Button, ListItemText } from '@mui/material'
import Typography from '@mui/material/Typography'
import { Card as MuiCard, CardHeader, CardActions } from '@mui/material'
import { AllergyIconProps } from './types'



export const Container = styled(MuiCard)`
  background-color: ${({ theme }) => theme.colors.blue25} !important;
  border: 1px solid ${theme.colors.blue175};
  border-radius: 15px !important;
  transition: max-width 0.3s ease-in-out;
  box-shadow: 15px 12px 20px rgba(0, 0, 0, 0.1) !important;
`;

export const CardActionsStyle = styled(CardActions)`
  display: flex;
  width: 450px;
  margin: 10px;

  @media (max-width: 768px) {
    width: 300px; 
  }
`;

export const Image = styled.img`
  margin-top: 10px;
  display: block;
  max-width: 100%;
  max-height: 15rem;
  width: 100%;
  object-fit: cover;
  cursor: pointer;
`

export const ButtonDetails = styled(Button)`
  background-color: transparent !important;
  color: ${({ theme }) => theme.colors.black} !important;
  outline: none !important;
  transform: scale(0.7);
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`

export const ContainerLike = styled.div``


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

export const LikeNumber = styled.div`
  transform: scale(0.7) !important; 
  margin-left: 4px;
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

export const LikeIcon = styled(FavoriteIcon)<{ isLike: boolean }>`
  color: ${(props) => (props.isLike ? 'red' : 'grey')};
`

export const FavIcon = styled(BookmarkIcon)<{ isFav: boolean }>`
  color: ${(props) => (props.isFav ? 'blue' : 'grey')};
`

export const CardHeaderStyled = styled(CardHeader)`
  font-size: 24px !important;
  font-weight: bold !important;
  margin-bottom: -15px;
  
`

export const IconDetailsContainer = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  gap: 12px;
  margin-left: 14px;
  color: ${({ theme }) => theme.colors.greytitle} !important;
  margin-top: 6px;
  font-size: 15px;
`

export const DiningIconContainer = styled.span`
  transform: scale(0.8);
  margin-top: 2px;
  margin-right: -8px;
`

export const Description = styled(Typography)`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 333px;
`

export const Name = styled(ListItemText)`
  position: absolute;
  margin-left: 50px;
  margin-top: 5px !important;
  transform: scale(1);
  transform-origin: top left;
`

export const AvatarStyled = styled.div`
  width: 40px;
  height: 40px;
  margin-left: -8px;
  background-color: ${({ theme }) => theme.colors.grey300};
  border-radius: 50%;
  display: flex;
  transform: scale(0.8);
  align-items: center;
  cursor: pointer;
  transition:
  transform 0.3s,
  box-shadow 0.3s;

  &:hover {
    transform: scale(0.83);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`

export const UsernameContainer = styled.span``
