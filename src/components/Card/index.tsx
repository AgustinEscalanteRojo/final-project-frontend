import React, { FC, memo, useState, useCallback, useEffect } from 'react'
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
  togglePostFavByUser,
  togglePostLikeByUser,
} from '../../services/api/post'

import { useNavigate } from 'react-router-dom'
import {
  LikeIcon,
  FavIcon,
  CardStyled,
  DetailsIconButton,
  CardHeaderStyled,
  ImageContent,
  IconDetailsContainer,
  TimeIconContainer,
  DiningIconContainer
} from './style'
import { User } from '../../models/User'
import { getMe } from '../../services/api/user'
import type { Props } from './types'

const RecipeReviewCard: FC<Props> = ({ onRemove, post }) => {
  const [isLike, setLike] = useState(
    localStorage.getItem(`isLiked_${post._id}`) === 'true' || false
  )

  const [isFav, setFav] = useState(
    localStorage.getItem(`isFav_${post._id}`) === 'true' || false
  )

  const [currentUser, setCurrentUser] = useState<User | null>(null)

    const fetchUserMe = useCallback(async () => {
      try {
        const userInfo = await getMe()
        console.log({ currentUser })
        setCurrentUser(userInfo)
      } catch (error) {
        console.error('Error fetching user data:', error)
      }
    }, [])

    useEffect(() => {
      fetchUserMe()
    }, [fetchUserMe])


  const navigate = useNavigate()

  const handleGoToEditForm = useCallback(() => {
    navigate(`/posts/${post._id}?edit=true`)
    console.log(post._id)
  }, [navigate])

  const handleDetailsClick = useCallback(() => {
    navigate('/details')
  }, [navigate])

  const handleLikeClick = useCallback(async () => {
    await togglePostLikeByUser(post._id)

    const newIsLiked = !isLike
    setLike(newIsLiked)
    localStorage.setItem(`isLiked_${post._id}`, String(newIsLiked))
  }, [isLike, post._id])

  useEffect(() => {
    const storedIsLiked = localStorage.getItem(`isLiked_${post._id}`)
    if (storedIsLiked !== null) {
      setLike(storedIsLiked === 'true')
    }
  }, [post._id])

  const handleFavoriteClick = useCallback(async () => {
    await togglePostFavByUser(post._id)

    const newIsFavorited = !isFav
    setFav(newIsFavorited)
    localStorage.setItem(`isFavorited_${post._id}`, String(newIsFavorited))
  }, [isFav, post._id])

  useEffect(() => {
    const storedIsLiked = localStorage.getItem(`isLiked_${post._id}`)
    if (storedIsLiked !== null) {
      setLike(storedIsLiked === 'true')
    }

    const storedIsFavorited = localStorage.getItem(`isFavorited_${post._id}`)
    if (storedIsFavorited !== null) {
      setFav(storedIsFavorited === 'true')
    }
  }, [post._id])

  const isCurrentUserCreator = currentUser && currentUser._id === post.userId

  return (
    <CardStyled>
      <CardHeaderStyled
        avatar={
          <Avatar aria-label="recipe">
          </Avatar>
        }
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

      <ImageContent>
        <img src={post.mainImage} alt="Main Image" />
      </ImageContent>

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.description}
        </Typography>
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
