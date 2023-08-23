import { useCallback } from 'react'
import { signup } from '../../../services/api/auth'
import { Props } from './types'

const useLogic = (onSignup: Props['onSignup']) => {
  const handleOnSubmit = useCallback(
    async (values: {
      email: string
      password: string
      username: string
      firstName: string
      lastName: string
      age: number
      gender: string
      country: string
    }) => {
      try {
        await signup(
          values.email,
          values.password,
          values.username,
          values.firstName,
          values.lastName,
          values.age,
          values.gender,
          values.country,
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