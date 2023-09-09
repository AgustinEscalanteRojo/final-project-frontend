import type { Post } from '../../models/Post'

export type Props = {
  isCurrentUserCreator: boolean
  isProfile?: boolean
  onClick?: () => void
  onRemove?: (postId: string) => void
  post: Post
}
export type AllergyIconProps = {
  src: string
  alt: string
}
