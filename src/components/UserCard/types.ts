import type { User } from '../../models/User'

export type Props = {
  onClick?: () => void
  user: Partial<User>
  currentUserFollowing?: string[]
}
