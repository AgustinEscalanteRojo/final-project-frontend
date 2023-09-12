import { FC, memo, useEffect, useState } from 'react'
import TimeIcon from '@mui/icons-material/AccessTime'
import DiningIcon from '@mui/icons-material/RamenDiningOutlined'
import SendIcon from '@mui/icons-material/Send'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import BarChartIcon from '@mui/icons-material/TuneOutlined'
import Footer from '../../../components/Footer'
import ImageBackground from '../../../components/ImageBackground'
import CardComment from '../../../../src/components/CardComment'
import useLogic from './logic'
import * as S from './styles'
import type { Props } from './types'
import { allergyIcons } from '../../../common/constants'

const Details: FC<Props> = ({ post }) => {
  const { comments, handleCommentSubmit, comment, handleCommentChange } =
    useLogic(post)

  return (
    <S.DetailsContainer>
      <S.MainContent>
        <S.ImageContainer>
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
          <S.MainImage src={post?.mainImage} alt="Añadir descripción basica" />
          <S.IngredientTitle>Ingredients</S.IngredientTitle>
          <S.IngredientsList>
            {post?.ingredients.map((ingredient) => (
              <S.IngredientListOption key={ingredient.name}>
                {ingredient.quantity} {ingredient.unity} - {ingredient.name}
              </S.IngredientListOption>
            ))}
          </S.IngredientsList>
          <S.AllergyTitle>Allergies</S.AllergyTitle>
          <S.AllergyIconContainer>
            {post?.allergies.map((allergy, index) => (
              <S.AllergyIcon
                key={index}
                src={allergyIcons[allergy]}
                alt={allergy}
              />
            ))}
          </S.AllergyIconContainer>
          <S.Description>{post?.description}</S.Description>
        </S.ImageContainer>
        <S.StepsContainer>
          <S.StepsTitle>Steps</S.StepsTitle>
          {post?.steps.map((step) => (
            <S.Step key={step.title}>
              <S.StepTitle>
                {step.order}.{step.title}
              </S.StepTitle>
              <S.StepDescription>{step.description}</S.StepDescription>
            </S.Step>
          ))}
        </S.StepsContainer>
        <S.CommentSection>
          <S.CommentTitle>Comments</S.CommentTitle>

          <S.CommentList>
            {comments &&
              comments.map((comment: any) => (
                <CardComment
                  key={comment._id}
                  author={comment.userId}
                  content={comment.comment}
                  avatarUrl={comment.avatar}
                  date={comment.createdAt.toLocaleString()}
                />
              ))}
          </S.CommentList>

          <S.CommentForm onSubmit={handleCommentSubmit}>
            <S.CommentInput
              type="text"
              value={comment}
              onChange={handleCommentChange}
              placeholder="Write a comment..."
            />
            <S.CommentButton type="submit">
              <SendIcon />
            </S.CommentButton>
          </S.CommentForm>
        </S.CommentSection>
      </S.MainContent>

      <Footer />
      <ImageBackground imageSrc="/details.jpg" />
    </S.DetailsContainer>
  )
}

export default memo(Details)
