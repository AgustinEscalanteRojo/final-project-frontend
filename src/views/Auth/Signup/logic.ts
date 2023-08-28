import { useCallback, useState } from 'react'
import { signup } from '../../../services/api/auth'
import type { UserFormFields } from '../../../models/User'
import type { Props } from './types'

const useLogic = (onSignup: Props['onSignup']) => {
  const [error, setError] = useState('')

  const handleOnSubmit = useCallback(
    async (values: UserFormFields) => {
      try {
        console.log({ values })
        await signup(values)
        onSignup()
      } catch (error) {
        setError((error as Error).message)
      }
    },
    [onSignup]
  )

  return { handleOnSubmit, error }
}

export default useLogic
