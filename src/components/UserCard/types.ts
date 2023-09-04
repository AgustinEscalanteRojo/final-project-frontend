
import { User } from '../../models/User'

export type Props = {
  onClick?: () => void
  user: User
  username?: string
  avatar?: string
}
