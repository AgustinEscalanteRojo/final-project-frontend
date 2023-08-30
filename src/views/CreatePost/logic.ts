import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { createPost } from '../../services/api/post'
import type { PostFormFields } from '../../models/Post'

const useLogic = () => {
  const navigate = useNavigate()
  const handleCreate = useCallback(
    async (values: Partial<PostFormFields>) => {
      try {
        await createPost(values)
        navigate('/dashboard')
      } catch (error) {
        console.error(error)
      }
    },
    [navigate]
  )

  return { handleCreate }
}

export default useLogic
