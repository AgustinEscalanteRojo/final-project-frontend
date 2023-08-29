import React, { FC, memo, useState, useCallback } from 'react'
import {
  LikeIcon,
  FavIcon,
  CardStyled,
  DetailsIconButton,
  CardHeaderStyled,
} from './style'
import { styled } from '@mui/material/styles'
import {
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  IconButtonProps,
} from '@mui/material'
import RepeatIcon from '@mui/icons-material/Repeat';
import ShareIcon from '@mui/icons-material/Share'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import Image from '../Image'
import type { Props } from './types'
import {
  togglePostFavByUser,
  togglePostLikeByUser,
} from '../../services/api/post'
import { useNavigate } from 'react-router-dom'

const RecipeReviewCard: FC<Props> = ({ onRemove, post }) => {
  const [expanded, setExpanded] = useState(false)
  const [comments, setComments] = useState<string[]>([])
  const [comment, setComment] = useState('')
  const [isLike, setLike] = useState(post.isLike)
  const [isFav, setFav] = useState(post.isFav)
  const navigate = useNavigate()

  //desplegable
  interface ExpandMoreProps extends IconButtonProps {
    expand: boolean
  }
  const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props
    return <IconButton {...other} />
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }))
  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

    const handleGoToEditForm = useCallback(() => {
      navigate(`/posts/${post._id}?edit=true`)
      console.log(post._id)
    }, [navigate])

    const handleDetailsClick = useCallback(() => {
      navigate('/details')
    }, [navigate])

    const handleCommentChange = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        setComment(event.target.value)
      },
      []
    )

    // comentarios
    const handleCommentSubmit = useCallback(() => {
      if (comment.trim() !== '') {
        setComments([...comments, comment])
        console.log('Comentario enviado:', comment)
        setComment('')
      }
    }, [comment, comments])

    const handleLikeClick = useCallback(async () => {
      await togglePostLikeByUser(post._id)

      setLike(!isLike)
    }, [isLike, post._id])

    const handleFavoriteClick = useCallback(async () => {
      await togglePostFavByUser(post._id)

      setFav(!isFav)
    }, [isFav, post._id])

    return (
      <CardStyled>
        <CardHeaderStyled
          avatar={<Avatar aria-label="recipe"></Avatar>}
          action={
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
          }
          title={post.title}
          subheader="September 14, 2022"
        />

        <Image src="/arroz.mariscos.jpg" alt="arroz mariscos.jpg" />

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {post.description}
          </Typography>
        </CardContent>

        <CardActions disableSpacing>
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

          <DetailsIconButton onClick={handleDetailsClick}>
            <Typography
              variant="body2" 
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
