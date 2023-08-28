import { User } from "../../models/User"

export type Props = {
  onLogout: () => void
  user?: User
}
