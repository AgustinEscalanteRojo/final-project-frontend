import React from 'react'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'

import * as S from './styles'
interface CardCommentProps {
  author: string
  content: string
  avatarUrl: string
  date: string
}

const CardComment: React.FC<CardCommentProps> = ({
  author,
  content,
  avatarUrl,
  date,
}) => {
  return (
    <Card>
      <S.CardContentStyle>
          <Avatar src={avatarUrl} alt={author} />
          <S.TypographyStyle variant="subtitle1" style={{ marginLeft: '8px', marginTop: '8px' }}>
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
