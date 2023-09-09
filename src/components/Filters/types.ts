import type { FiltersFormFields } from '../../models/Post'

export type Props = {
  initialValues?: FiltersFormFields
  onSubmit: (values: FiltersFormFields) => void
}
