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
import RestaurantIcon from '@mui/icons-material/Restaurant'
import BarChartIcon from '@mui/icons-material/BarChart'
import EditIcon from '@mui/icons-material/Edit'
import TimeIcon from '@mui/icons-material/AccessTime'
import { allergyIcons } from '../../common/constants'
import {
  LikeIcon,
  FavIcon,
  CardStyled,
  DetailsIconButton,
  CardHeaderStyled,
  IconDetailsContainer,
  DiningIconContainer,
  Description,
  Image,
  AllergyIconContainer,
  AllergyIcon,
  TitleContainer,
} from './style'
import type { Props } from './types'
import useLogic from './logic'

const Card: FC<Props> = ({ onRemove, post, isCurrentUserCreator }) => {
  const {
    handleGoToEditForm,
    handleDetailsClick,
    handleLikeClick,
    handleFavoriteClick,
    handleOnRemove,
    isLike,
    isFav,
  } = useLogic(post, onRemove)

  return (
    <CardStyled>
      <TitleContainer onClick={handleDetailsClick}>{post.title}</TitleContainer>
      <CardHeaderStyled
        avatar={<Avatar aria-label="recipe"></Avatar>}
        action={
          isCurrentUserCreator ? (
            <>
              <IconButton aria-label="settings" onClick={handleGoToEditForm}>
                <EditIcon />
              </IconButton>
              {onRemove && (
                <IconButton aria-label="settings" onClick={handleOnRemove}>
                  <DeleteIcon />
                </IconButton>
              )}
            </>
          ) : null
        }
        // title={post.title}
        subheader={
          <IconDetailsContainer>
            <DiningIconContainer>
              <TimeIcon />
            </DiningIconContainer>
            {` ${post.duration}`}
            <DiningIconContainer>
              <DiningIcon />
            </DiningIconContainer>
            {` ${post.diners}`}
            <DiningIconContainer>
              <BarChartIcon />
            </DiningIconContainer>
            {` ${post.difficulty}`}
            <DiningIconContainer>
              <RestaurantIcon />
            </DiningIconContainer>
            {` ${post.type}`}
          </IconDetailsContainer>
        }
      />
      <Image
        src={post.mainImage}
        alt="Main of post with some data"
        onClick={handleDetailsClick}
      />
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
        {!isCurrentUserCreator && (
          <>
            <IconButton aria-label="add to favorites" onClick={handleLikeClick}>
              <LikeIcon isLike={isLike} />
            </IconButton>
            <IconButton
              aria-label="add to favorites"
              onClick={handleFavoriteClick}
            >
              <FavIcon isFav={isFav} />
            </IconButton>
            <IconButton aria-label="share">
              <RepeatIcon />
            </IconButton>
          </>
        )}
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

export default memo(Card)
