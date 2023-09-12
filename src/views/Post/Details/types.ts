import type { Post } from '../../../models/Post'

export type Props = {
  isCurrentUserCreator: boolean
  post: Post | null
  onRemove?: (postId: string) => void
}

export type AllergyIconProps = {
  src: string
  alt: string
}
