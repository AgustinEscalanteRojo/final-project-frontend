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
  Collapse,
  Avatar,
  IconButton,
  Typography,
  Paper,
  Box,
  TextField,
  Button,
  IconButtonProps,
} from '@mui/material'
import ShareIcon from '@mui/icons-material/Share'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import SendIcon from '@mui/icons-material/Send'
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

  const [isLike, setLike] = useState(
    localStorage.getItem('isLiked') === 'true' || false
  )
  const [isFav, setFav] = useState(
    localStorage.getItem('isFavorited') === 'true' || false
  )

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

    const newIsLiked = !isLike
    setLike(newIsLiked)
    localStorage.setItem('isLiked', String(newIsLiked))
  }, [isLike, post._id])

  const handleFavoriteClick = useCallback(async () => {
    await togglePostFavByUser(post._id)

    const newIsFavorited = !isFav
    setFav(newIsFavorited)
    localStorage.setItem('isFavorited', String(newIsFavorited))
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

        <IconButton aria-label="add to favorites" onClick={handleFavoriteClick}>
          <FavIcon isFav={isFav} />
        </IconButton>

        <IconButton aria-label="share">
          <ShareIcon />
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

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Comments:</Typography>
          <Paper
            sx={{
              width: '100%',
              padding: 2,
              backgroundColor: '#f9f9f9',
              overflowY: 'auto',
            }}
          >
            {comments.map((comment, index) => (
              <Typography key={index} paragraph sx={{ marginBottom: 1 }}>
                {comment}
              </Typography>
            ))}
          </Paper>
        </CardContent>
      </Collapse>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: 3,
          marginRight: 3,
          marginBottom: 3,
        }}
      >
        <TextField
          fullWidth
          label="Comment"
          id="comment"
          value={comment}
          onChange={handleCommentChange}
          multiline
          rows={1}
        />
        <Button
          size="small"
          variant="contained"
          onClick={handleCommentSubmit}
          sx={{
            marginLeft: 1,
            backgroundColor: '#4CAF50',
            color: 'white',
            '&:hover': {
              backgroundColor: '#45A049',
            },
            height: 23,
            '& .MuiButton-startIcon': {
              fontSize: 34,
              margin: '0 auto',
            },
          }}
          startIcon={<SendIcon />}
        ></Button>
      </Box>
    </CardStyled>
  )
}

export default memo(RecipeReviewCard)
