import type { FiltersFormFields } from '../../models/Post'

export type Props = {
  onSubmit: (values: FiltersFormFields) => void
  onReset: () => void
}
