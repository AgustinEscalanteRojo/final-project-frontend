import type { FiltersFormFields } from '../models/Post'

export const buildFiltersQueryString = (filters: FiltersFormFields) => {
  let filtersQueryString = ''

  if (filters.allergies?.length > 0) {
    filtersQueryString += `allergies=${filters.allergies.join(',')}&`
  }

  if (filters.type?.length > 0) {
    filtersQueryString += `type=${filters.type.join(',')}&`
  }

  if (filters.difficulty?.length > 0) {
    filtersQueryString += `difficulty=${filters.difficulty.join(',')}&`
  }

  return filtersQueryString
}
