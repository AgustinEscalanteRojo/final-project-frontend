import { EditPostInput } from '../../models/Post'

export type Props = {
  initialValues: EditPostInput
  id: string
  onEditComplete: (values: EditPostInput) => void
  onLogout: () => void
}
