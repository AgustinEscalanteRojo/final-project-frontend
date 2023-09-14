import { NormalizedUserPostComment } from '../../models/UserPostComment'

export type CardCommentProps = {
  author: string
  content: string
  avatarUrl: string
  date: string
  comment: NormalizedUserPostComment
  isCurrentUserCreator: boolean
  onRemove?: (commentId: string) => void
}
