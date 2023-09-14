import type { User } from '../../../models/User'

export type Props = {
  className?: string
  users: User[]
  loggedUser: User
}
