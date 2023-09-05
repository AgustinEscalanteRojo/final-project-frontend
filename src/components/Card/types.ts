import type { Post } from '../../models/Post'
import { User } from '../../models/User'

export type Props = {
  isCurrentUserCreator: boolean
  isProfile?: boolean
  onClick?: () => void
  onRemove?: (postId: string) => void
  post: Post
}
