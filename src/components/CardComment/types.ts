import { Post } from '../../models/Post'
import { NormalizedUserPostComment } from '../../models/UserPostComment'

export type CardCommentProps = {
  author: string
  content: string
  avatarUrl: string
  date: string
  comment?: NormalizedUserPostComment
  post?: Post
}
