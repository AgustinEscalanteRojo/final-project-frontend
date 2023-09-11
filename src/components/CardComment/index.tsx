import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'

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
      <CardContent>
        <div
          style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}
        >
          <Avatar src={avatarUrl} alt={author} />
          <Typography variant="subtitle1" style={{ marginLeft: '8px' }}>
            {author}
          </Typography>
        </div>
        <Typography variant="body1">{content}</Typography>
        <Typography variant="caption" color="textSecondary">
          {date}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CardComment
