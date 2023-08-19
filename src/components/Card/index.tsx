// import de la card MI
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Image from '../Image';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';


// import de  comentario MI
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


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


  // COMENTARIO
  const [comment, setComment] = useState('');
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    // aqui lógica para guardar el comentario
    console.log('Comentario enviado:', comment);
    setComment('');
  };

    


  return (
    <Card sx={{ maxWidth: 800, backgroundColor: 'rgba(255, 255, 255, 0.911)', marginTop: 4,  marginBottom: 32 }}>
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
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
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
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Calienta 1/2 taza del caldo en una olla hasta que hierva a fuego
            lento, agrega el azafrán y deja reposar por 10 minutos.
          </Typography>
          <Typography paragraph>
            Caliente el aceite en una paellera (de 14 a 16 pulgadas) o en una
            sartén grande y profunda a fuego medio-alto. Agregue el pollo, los
            camarones y el chorizo, y cocine, revolviendo ocasionalmente hasta
            que estén ligeramente dorados, de 6 a 8 minutos. Transfiera los
            camarones a un plato grande y reserve, dejando el pollo y el chorizo
            ​​en la sartén. Agregue el pimentón, las hojas de laurel, el ajo,
            los tomates, la cebolla, la sal y la pimienta, y cocine, revolviendo
            con frecuencia hasta que espese y esté fragante, aproximadamente 10
            minutos. Agregue el caldo de azafrán y las 4 1/2 tazas restantes de
            caldo de pollo; llevar a ebullición.
          </Typography>
          <Typography paragraph>
            Agregue el arroz y revuelva muy suavemente para distribuir. Cubra
            con alcachofas y pimientos, y cocine sin revolver, hasta que se
            absorba la mayor parte del líquido, de 15 a 18 minutos. Reduzca el
            fuego a medio-bajo, agregue los camarones y los mejillones
            reservados, introdúzcalos en el arroz y cocine nuevamente sin
            revolver, hasta que los mejillones se hayan abierto y el arroz esté
            tierno, de 5 a 7 minutos más. (Deseche los mejillones que no se
            abran).
          </Typography>
          <Typography>
            Apartar del fuego para dejar reposar durante 10 minutos y luego
            servir.
          </Typography>
        </CardContent>
      </Collapse>



      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',marginLeft: 3, marginRight: 3  }}>
      <TextField
        fullWidth
        label="Comment"
        id="comment"
        value={comment}
        onChange={handleCommentChange}
        multiline
        rows={1}
      />


<Button variant="contained" onClick={handleCommentSubmit} sx={{ marginTop: 1, marginBottom: 1,  backgroundColor: 'brown', color: 'white' }}>
  Publish Comment
</Button>

    </Box>



    </Card>
  )
}

