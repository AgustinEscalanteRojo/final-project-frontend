import { FC, memo } from 'react'
import {
  DetailsContainer,
  Content,
  MainImageContainer,
  Title,
  MainImage,
  ShortDescription,
  StepsContainer,
  TextSteps,
  SecondaryImages,
  MiscelaniaText,
} from './styles'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
// import Sidebar from '../../components/Sidebar'
import ImageBackground from '../../components/ImageBackground'
import TimeIcon from '@mui/icons-material/AccessTime'
import DiningIcon from '@mui/icons-material/RamenDiningOutlined'
import IngredientIcon from '@mui/icons-material/EggOutlined'
import DifficultyIcon from '@mui/icons-material/TuneOutlined'

import type { Props } from './types'

const DetailsView: FC<Props> = ({ onLogout }) => {
  return (
    <DetailsContainer>
      <Header onLogout={onLogout} />
      <Content>
        <MainImageContainer>
          <Title>GAZPACHO SEVILLANO CASERO</Title>
          <MainImage
            src="https://recetasdegazpacho.com/wp-content/uploads/2021/05/Como-hacer-gazpacho-sevillano-casero.jpg"
            alt="Gazpacho sevillano casero"
          />
          <ShortDescription>
            El gazpacho andaluz es el que todos conocemos, el de toda la vida,
            aquel que nos prepara nuestra madre o abuela en verano y que
            disfrutamos como niños pequeños. Una receta muy similar es la del
            gazpacho sevillano y, aunque se parezcan, no son exactamente
            iguales.
          </ShortDescription>

          <MiscelaniaText>
            Información adiccional de la receta:
            <ul>
              <li>
                <TimeIcon /> Tiempo: 30 minutos
              </li>
              <li>
                <DifficultyIcon /> Dificultad: Fácil
              </li>
              <li>
                <DiningIcon /> Comensales: 4 Personas
              </li>
              <li>
                <IngredientIcon />
                Ingredientes:
              </li>
            </ul>
            <ol>
              <li>1kg de tomates maduros / pera</li>
              <li>2 dientes de ajo</li>
              <li>1 pimiento verde italiano</li>
              <li>1 pimiento rojo</li>
              <li>½ pepino mediano</li>
              <li>1 cebolla</li>
              <li>100g de pan</li>
              <li>50ml de aceite de oliva virgen extra</li>
              <li>30ml de vinagre de vino blanco</li>
              <li>30ml de zumo de limón</li>
              <li>Sal al gusto</li>
              <li>Pimienta al gusto</li>
            </ol>
          </MiscelaniaText>
        </MainImageContainer>

        <StepsContainer>
          <Title>Pasos a seguir:</Title>
          <TextSteps>
            Las instrucciones son bastante similares a las del gazpacho
            tradicional, así que si ya sabes prepararlo, hacer este te será pan
            comido.
            <br />
            <br />
            1.- Lavar y cortar los tomates, pimientos y pepino. No es necesario
            que los peles ni que les quites las pepitas, en uno de los últimos
            pasos lo colaremos todo. <br />
            <br />
            <SecondaryImages
              src="https://recetasdegazpacho.com/wp-content/uploads/2021/05/Como-hacer-gazpacho-sevillano-casero.jpg"
              alt="Gazpacho sevillano casero"
            />
            <SecondaryImages
              src="https://recetasdegazpacho.com/wp-content/uploads/2021/05/Como-hacer-gazpacho-sevillano-casero.jpg"
              alt="Gazpacho sevillano casero"
            />
            <br />
            <br />
            2.- Pelar y trocear la cebolla. No es necesario que la cortes
            demasiado pequeña.
            <br />
            <br />
            3.-Pelar, cortar y quitar el corazón de los dientes de ajo. Si no
            quitas este germen, le dará un sabor muy intenso a tu gazpacho y
            solo sabrá a ajo.
            <br />
            <br />
            4.- Añadir los tomates, dientes de ajo, pimientos, pepino, cebolla,
            la mitad del pan mojado con agua, el vinagre, el zumo de limón, sal
            y pimienta al vaso de la batidora. Si no te cabe todo, puedes
            hacerlo en 2 tandas.
            <SecondaryImages
              src="https://recetasdegazpacho.com/wp-content/uploads/2021/05/Como-hacer-gazpacho-sevillano-casero.jpg"
              alt="Gazpacho sevillano casero"
            />
            <br />
            <br />
            5.- Triturar a máxima potencia durante el tiempo que sea necesario
            para que quede bien batido.
            <br />
            <br />
            6.- Cuando esté todo triturado, añadir lentamente el aceite junto a
            un poco de agua. Con este proceso, conseguiremos emulsionar ambos
            líquidos, lo que resultará en un gazpacho mucho más cremoso y
            delicioso al juntarse todo.
            <br />
            <br />
            7.- Batir de nuevo para acabar de mezclar la emulsión.
            <br />
            <br />
            8.- Comprobar el punto de sal y la espesura. Si te ha quedado muy
            espeso y no te gusta, puedes añadir un poco de agua para rebajarlo.
            Si por el contrario te ha quedado muy líquido, añade el pan que
            reservaste al principio.
            <br />
            <br />
            9.- Volver a triturar en caso de haber hecho alguna corrección.
            <br />
            <br />
            10.- Colar todo con un colador chino muy fino para eliminar las
            pieles, las pepitas y posibles grumos que hayan quedado por no
            triturar bien. Es muy desagradable encontrarse estas cosas flotando.
            <br />
            <br />
            11.- Dejar en la nevera para que se enfríe y se asiente durante 3
            horas. Como mejor está el gazpacho es frío. También puedes, a la
            hora de servirlo, poner unos cuantos cubitos para enfriarlo más.
            <br />
            <br />
            12.- Disfrutar de un delicioso y refrescante gazpacho de Sevilla.
          </TextSteps>
        </StepsContainer>
      </Content>
      <Footer />
      <ImageBackground imageSrc="/back.jpg" />
    </DetailsContainer>

    // <Sidebar>
    // </Sidebar>
  )
}

export default memo(DetailsView)
