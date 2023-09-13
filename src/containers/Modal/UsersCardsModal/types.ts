import { User } from '../../../models/User'

export type Props = {
  users: User['followers'] | User['following']
  buttonText: string
}
