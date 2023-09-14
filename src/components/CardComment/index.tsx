import { FC } from 'react'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
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
  onRemove,
}) => {
  const {
    getRandomPastelColor,
    commentCreator,
    handleGoToProfile,
    handleGoToCurrentUserProfile,
    handleOnRemove,
  } = useLogic(comment, onRemove)
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

        <S.Name
          onClick={
            isCurrentUserCreator
              ? handleGoToCurrentUserProfile
              : handleGoToProfile
          }
          primary={commentCreator?.username}
          secondary={commentCreator?.firstName}
        />

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
        {isCurrentUserCreator ? (
          <>
            {onRemove && (
              <IconButton aria-label="settings" onClick={handleOnRemove}>
                <DeleteIcon />
              </IconButton>
            )}
          </>
        ) : null}
      </S.CardContentStyle>
    </Card>
  )
}

export default CardComment
