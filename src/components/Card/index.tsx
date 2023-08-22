// import de la card MI
import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Image from '../Image'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import Avatar from '@mui/material/Avatar'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import SendIcon from '@mui/icons-material/Send'
import Paper from '@mui/material/Paper';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'

// import de  comentario MI
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

// ventana expandida  MI
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

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false)
  const [comments, setComments] = useState([]) // Estado para almacenar los comentarios
  
  // COMENTARIO
  const [comment, setComment] = useState('')
  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value)
  }

  const handleCommentSubmit = () => {
    // aqui lógica para guardar el comentario
    console.log('Comentario enviado:', comment)
    setComment('')
  }

  // like
  const [liked, setLiked] = useState(false)

  const handleLikeClick = () => {
    setLiked(!liked)
  }

  const [favorited, setFavorited] = useState(false)

  const handleFavoriteClick = () => {
    setFavorited(!favorited)
  }

  return (
    <Card
      sx={{
        width: '100%',
        maxWidth: 800,
        backgroundColor: 'rgba(255, 255, 255, 0.911)',
        marginTop: 4,
        marginBottom: 32,
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe"></Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Paella de Gambas y Chorizo"
        subheader="September 14, 2022"
      />

      <Image src="/arroz.mariscos.jpg" alt="arroz mariscos.jpg" />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Esta impresionante paella es un plato de fiesta perfecto y una comida
          divertida para cocinar junto con tus invitados. Agregue 1 taza de
          guisantes congelados junto con los mejillones, si lo desea.
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={handleFavoriteClick}>
          <FavoriteIcon color={favorited ? 'error' : 'inherit'} />
        </IconButton>

        <IconButton aria-label="add to favorites" onClick={handleLikeClick}>
          <ThumbUpAltIcon color={liked ? 'primary' : 'inherit'} />
        </IconButton>

        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
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
</Box>


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
            height: 53,
            // Estilos adicionales para el icono
            '& .MuiButton-startIcon': {
              fontSize: 44, // Tamaño del icono
              margin: '0 auto', // Centrar el icono horizontalmente
            },
          }}
          startIcon={<SendIcon />}
        ></Button>






      </Box>
    </Card>
  )
}
