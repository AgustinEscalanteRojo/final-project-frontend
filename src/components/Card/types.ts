import type { Post } from '../../models/Post'

export type Props = {
  onClick?: () => void
  post: Post
  isProfile?: boolean
  onRemove: (postId: string) => void
}
