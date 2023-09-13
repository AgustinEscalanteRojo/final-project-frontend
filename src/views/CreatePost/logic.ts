import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createPost } from '../../services/api/post'
import type { PostFormFields } from '../../models/Post'

const useLogic = () => {
  const navigate = useNavigate()
  const [formError, setFormError] = useState('')

  const handleCreate = useCallback(
    async (values: Partial<PostFormFields>) => {
      try {
        await createPost(values)
        navigate('/dashboard')
      } catch (error) {
        setFormError((error as Error).message)
      }
    },
    [navigate]
  )

  return { handleCreate, formError }
}

export default useLogic
