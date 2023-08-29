import { useCallback, useState } from 'react'
import { Props } from './types'
import { useNavigate } from 'react-router-dom'
import { login } from '../../../services/api/auth'

const useLogic = (onLogin: Props['onLogin']) => {
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const handleOnSubmit = useCallback(
    async (values: { email: string; password: string }) => {
      try {
        console.log({ values })
        await login(values.email, values.password)
        onLogin()
        navigate('/dashboard')
      } catch (error) {
        setError((error as Error).message)
      }
    },
    [navigate, onLogin]
  )
  return {
    handleOnSubmit,
    error,
  }
}

export default useLogic
