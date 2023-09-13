import { FC } from 'react'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import * as S from './styles'
import type { CardCommentProps } from './types'
import useLogic from './logic'

const CardComment: FC<CardCommentProps> = ({
  author,
  content,
  avatarUrl,
  date,
  comment,
  isCurrentUserCreator,
}) => {
  const {
    getRandomPastelColor,
    commentCreator,
    handleGoToProfile,
    handleGoToCurrentUserProfile,
  } = useLogic(comment)
  return (
    <Card>
      <S.CardContentStyle>
        <Avatar
          src={avatarUrl}
          alt={author}
          aria-label="recipe"
          style={{ backgroundColor: getRandomPastelColor() }}
          onClick={
            isCurrentUserCreator
              ? handleGoToCurrentUserProfile
              : handleGoToProfile
          }
        >
          {commentCreator
            ? commentCreator.username?.charAt(0).toUpperCase()
            : comment?.userId.charAt(0)}
        </Avatar>
        <S.TypographyStyle
          variant="subtitle1"
          style={{ marginLeft: '8px', marginTop: '8px' }}
        >
          {author}
        </S.TypographyStyle>
        <S.TypographyStyle variant="body1">{content}</S.TypographyStyle>
        <S.TypographyStyle variant="caption" color="textSecondary">
          {date}
        </S.TypographyStyle>
      </S.CardContentStyle>
    </Card>
  )
}

export default CardComment
