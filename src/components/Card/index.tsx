import React, { FC, memo } from 'react'
import {
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
} from '@mui/material'
import DiningIcon from '@mui/icons-material/RamenDiningOutlined'
import RepeatIcon from '@mui/icons-material/Repeat'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import TimeIcon from '@mui/icons-material/AccessTime'
import {
  allergiesOptions,
  allergyIcons,
} from '../../common/constants'
import {
  LikeIcon,
  FavIcon,
  CardStyled,
  DetailsIconButton,
  CardHeaderStyled,
  IconDetailsContainer,
  TimeIconContainer,
  DiningIconContainer,
  Description,
  Image,
  AllergyIconContainer,
  AllergyIcon,
} from './style'
import type { Props } from './types'
import useLogic from './logic'

const RecipeReviewCard: FC<Props> = ({ onRemove, post }) => {
  const {
    currentUser,
    handleGoToEditForm,
    handleDetailsClick,
    handleLikeClick,
    handleFavoriteClick,
    isLike,
    isFav,
  } = useLogic(post)

  const isCurrentUserCreator = currentUser && currentUser._id === post.userId

  return (
    <CardStyled>
      <CardHeaderStyled
        avatar={<Avatar aria-label="recipe"></Avatar>}
        action={
          isCurrentUserCreator ? (
            <>
              <IconButton aria-label="settings" onClick={handleGoToEditForm}>
                <EditIcon />
              </IconButton>

              <IconButton
                aria-label="settings"
                onClick={() => onRemove(post._id)}
              >
                <DeleteIcon />
              </IconButton>
            </>
          ) : null
        }
        title={post.title}
        subheader={
          <IconDetailsContainer>
            <TimeIconContainer>
              <TimeIcon />
            </TimeIconContainer>
            {` ${post.duration}`}
            <DiningIconContainer>
              <DiningIcon />
            </DiningIconContainer>
            {` ${post.diners}`}
          </IconDetailsContainer>
        }
      />
      <Image src={post.mainImage} alt="Main of post with some data" />
      <CardContent>
      <Description variant="body2" color="text.secondary">
          {post.description}
        </Description>

        <AllergyIconContainer>
          {post.allergies.map((allergy, index) => (
            <AllergyIcon
              key={index}
              src={allergyIcons[allergy]} 
              alt={allergy}
            />
          ))}
        </AllergyIconContainer>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={handleLikeClick}>
          <LikeIcon isLike={isLike} />
        </IconButton>

        <IconButton aria-label="add to favorites" onClick={handleFavoriteClick}>
          <FavIcon isFav={isFav} />
        </IconButton>

        <IconButton aria-label="share">
          <RepeatIcon />
        </IconButton>

        <DetailsIconButton onClick={handleDetailsClick}>
          <Typography
            variant="body1"
            style={{
              fontSize: 'medium',
            }}
          >
            Details
          </Typography>
        </DetailsIconButton>
      </CardActions>
    </CardStyled>
  )
}

export default memo(RecipeReviewCard)
