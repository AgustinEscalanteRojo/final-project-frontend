import { useCallback } from 'react'
import { Props } from './types'
import { useNavigate } from 'react-router-dom'
import { login } from '../../../services/api/auth'

const useLogic = (onLogin: Props['onLogin']) => {
  const navigate = useNavigate()

  const handleOnSubmit = useCallback(
    async (values: { email: string; password: string }) => {
      try {
        await login(values.email, values.password)
        onLogin()
        navigate('/dashboard')
      } catch (e) {
        console.log(e)
      }
    },
    [navigate, onLogin]
  )
  return {
    handleOnSubmit,
  }
}

export default useLogic
