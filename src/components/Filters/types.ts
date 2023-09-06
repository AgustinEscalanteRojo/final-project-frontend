import type { PostFormFields } from '../../models/Post'

export type Props = {
  onSubmit: (data: Partial<PostFormFields>) => void
  initialValues?: Partial<PostFormFields>
}
