import type { Post } from '../../models/Post'
import { User } from '../../models/User'

export type Props = {
  onClick?: () => void
  post: Post
  isProfile?: boolean
  onRemove: (postId: string) => void
  currentUser?: User
}
