import { FC, memo } from 'react'
import TimeIcon from '@mui/icons-material/AccessTime'
import DiningIcon from '@mui/icons-material/RamenDiningOutlined'
import IngredientIcon from '@mui/icons-material/EggOutlined'
import BarChartIcon from '@mui/icons-material/TuneOutlined'
import Footer from '../../../components/Footer'
import ImageBackground from '../../../components/ImageBackground'
import * as S from './styles'
import type { Props } from './types'
import BackButton from '../../../components/BackButton'

const Details: FC<Props> = ({ post }) => {
  const defaultImage =
    'https://recetasdegazpacho.com/wp-content/uploads/2021/05/Como-hacer-gazpacho-sevillano-casero.jpg'

  return (
    <S.DetailsContainer>
      <BackButton />
      <S.Content>
        <S.MainImageContainer>
          <S.Title>{post?.title}</S.Title>
          <S.MainImage
            src={post?.mainImage || defaultImage}
            alt="Añadir descripción basica"
          />
          <S.Information>
            <S.InformationOption>
              <TimeIcon /> {post?.duration} min
            </S.InformationOption>
            <S.InformationOption>
              <BarChartIcon /> {post?.difficulty}
            </S.InformationOption>
            <S.InformationOption>
              <DiningIcon /> {post?.diners} Persons
            </S.InformationOption>
          </S.Information>
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
          <S.Title>Steps</S.Title>
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
