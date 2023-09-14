import type { FiltersFormFields } from '../../../models/Post'

export type Props = {
  className?: string
  onSubmit: (values: FiltersFormFields) => void
  onReset: () => void
}
