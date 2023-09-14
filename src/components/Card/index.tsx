import React, { FC, memo } from 'react'
import { CardContent, CardActions, Avatar, IconButton } from '@mui/material'
import DiningIcon from '@mui/icons-material/RamenDiningOutlined'
import RepeatIcon from '@mui/icons-material/Repeat'
import DeleteIcon from '@mui/icons-material/Delete'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import BarChartIcon from '@mui/icons-material/BarChart'
import EditIcon from '@mui/icons-material/Edit'
import TimeIcon from '@mui/icons-material/AccessTime'
import { allergyIcons } from '../../common/constants'
import useLogic from './logic'
import {
  LikeIcon,
  FavIcon,
  CardHeaderStyled,
  IconDetailsContainer,
  DiningIconContainer,
  Description,
  Image,
  AllergyIconContainer,
  AllergyIcon,
  TitleContainer,
  AvatarStyled,
  ButtonDetails,
  Name,
  Container,
} from './styles'
import type { Props } from './types'

const Card: FC<Props> = ({ onRemove, post, isCurrentUserCreator }) => {
  const {
    handleGoToEditForm,
    handleDetailsClick,
    handleLikeClick,
    handleFavoriteClick,
    handleOnRemove,
    getRandomPastelColor,
    isLike,
    isFav,
    creatorUser,
    handleGoToProfile,
    handleGoToCurrentUserProfile,
  } = useLogic(post, onRemove)

  return (
    <Container>
      <TitleContainer onClick={handleDetailsClick}>{post.title}</TitleContainer>
      <CardHeaderStyled
        avatar={
          <AvatarStyled>
            <Name
              onClick={
                isCurrentUserCreator
                  ? handleGoToCurrentUserProfile
                  : handleGoToProfile
              }
              primary={creatorUser?.username}
              secondary={creatorUser?.firstName}
            />
            <Avatar
              aria-label="recipe"
              style={{ backgroundColor: getRandomPastelColor() }}
              onClick={
                isCurrentUserCreator
                  ? handleGoToCurrentUserProfile
                  : handleGoToProfile
              }
            >
              {creatorUser
                ? creatorUser.username.charAt(0).toUpperCase()
                : post.userId.charAt(0)}
            </Avatar>
          </AvatarStyled>
        }
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
        src={post.mainImage ? post.mainImage : '/SharedFlavoursImageRandom.jpg'}
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
              {post.likes}
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
        <ButtonDetails type="button" onClick={handleDetailsClick}>
          Details
        </ButtonDetails>
      </CardActions>
    </Container>
  )
}

export default memo(Card)
