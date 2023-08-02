import { useCallback } from 'react'
import { Props } from './types'
// import { useNavigate } from 'react-router-dom'
// import { login } from '../../../services/api/auth'
// import { setToken } from '../../../services/storage/token'
// import { setUserInfo } from '../../../services/storage/user'

const useLogic = (onLogin: Props['onLogin']) => {
    const navigate = useNavigate()
  
    const handleOnSubmit = useCallback(
      async (values: { email: string; password: string }) => {
        try {
          const user = await login(values.email, values.password)
          console.log(user)
          if (user) {
            const token = await user.getIdToken()
            const userInfo = user.providerData
            setUserInfo(userInfo)
            setToken(token)
            onLogin()
            navigate('/selection')
          }
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