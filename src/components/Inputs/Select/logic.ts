import { useCallback } from 'react'
import { useField } from 'formik'
import { Props } from './types'

const useLogic = (name: Props['name']) => {
  const [{ value }, { touched, error }, { setValue }] = useField(name)

  const handleChange = useCallback(
    (e: any) => {
      setValue(e.target.value)
    },
    [setValue]
  )

  return {
    handleChange,
    value,
    touched,
    error,
  }
}

export default useLogic
