import { FC, memo } from 'react'
import TimeIcon from '@mui/icons-material/AccessTime'
import DiningIcon from '@mui/icons-material/RamenDiningOutlined'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import IngredientIcon from '@mui/icons-material/EggOutlined'
import BarChartIcon from '@mui/icons-material/TuneOutlined'
import Footer from '../../../components/Footer'
import ImageBackground from '../../../components/ImageBackground'
import * as S from './styles'
import type { Props } from './types'

const Details: FC<Props> = ({ post }) => {
  const defaultImage =
    'https://recetasdegazpacho.com/wp-content/uploads/2021/05/Como-hacer-gazpacho-sevillano-casero.jpg'

  return (
    <S.DetailsContainer>
      <S.Content>
        <S.MainImageContainer>
        <S.TitleContainer>{post?.title}</S.TitleContainer>
        <S.IconDetailsContainer>
            <S.DiningIconContainer>
              <TimeIcon />
            </S.DiningIconContainer>
            {post?.duration}
            <S.DiningIconContainer>
              <DiningIcon />
            </S.DiningIconContainer>
            {post?.diners}
            <S.DiningIconContainer>
              <BarChartIcon />
            </S.DiningIconContainer>
            {post?.difficulty}
            <S.DiningIconContainer>
              <RestaurantIcon />
            </S.DiningIconContainer>
            {post?.type}
          </S.IconDetailsContainer>
          <S.MainImage
            src={post?.mainImage || defaultImage}
            alt="Añadir descripción basica"
          />
          <S.IngredientTitle>
            <IngredientIcon />
            Ingredientes:
          </S.IngredientTitle>
          <S.IngredientsList>
            {post?.ingredients.map((ingredient) => (
              <S.IngredientListOption key={ingredient.name}>
                {ingredient.quantity} {ingredient.unity} - {ingredient.name}
              </S.IngredientListOption>
            ))}
          </S.IngredientsList>
          <S.ShortDescription>{post?.description}</S.ShortDescription>
        </S.MainImageContainer>


        <S.StepsContainer>
          <S.TitleContainer>Steps</S.TitleContainer>
          <S.Steps>
            {post?.steps.map((step) => (
              <S.Step key={step.title}>
                <S.StepTitle>
                  {step.order}.{step.title}
                </S.StepTitle>
                <S.StepDescription>{step.description}</S.StepDescription>
              </S.Step>
            ))}
          </S.Steps>
        </S.StepsContainer>
      </S.Content>
      <Footer />
      <ImageBackground imageSrc="/back.jpg" />
    </S.DetailsContainer>
  )
}

export default memo(Details)
