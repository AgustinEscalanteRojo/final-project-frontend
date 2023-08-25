import type { Post } from '../../models/Post'

export type Props = {
  onLogout: () => void
  post: Post

  onRemove?: (postId: string) => void
}
