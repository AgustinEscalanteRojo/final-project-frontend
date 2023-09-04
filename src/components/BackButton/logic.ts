import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

const useLogic = () => {
  const navigate = useNavigate()
  const handleGoBack = useCallback(() => {
    navigate(-1)
  }, [])

  return {
    handleGoBack,
  }
}

export default useLogic
