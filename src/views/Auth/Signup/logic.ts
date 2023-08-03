import { useCallback } from 'react'
import { signup } from '../../../services/api/auth'
import { Props } from './types'

const useLogic = (onSignup: Props['onSignup']) => {
  const handleOnSubmit = useCallback(
    async (values: {
      email: string
      password: string
    }) => {
      try {
        await signup(
          values.email,
          values.password
        )
        onSignup()
      } catch (error) {
        console.log(error)
      }
    },
    [onSignup]
  )

  return { handleOnSubmit }
}

export default useLogic