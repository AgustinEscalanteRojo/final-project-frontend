import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { Post, PostFormFields } from '../../models/Post'
import {
  getPostById,
  removePostById,
  updatePostById,
} from '../../services/api/post'
import { User } from '../../models/User'
import { getMe } from '../../services/api/user'

const useLogic = () => {
  const navigate = useNavigate()
  const { postId } = useParams()
  const [searchParams] = useSearchParams()
  const [post, setPost] = useState<Post | null>(null)
  const [formError, setFormError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isEdit] = useState(searchParams.get('edit') === 'true')
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  const handleFetchUserMe = useCallback(async () => {
    try {
      const userInfo = await getMe()
      setCurrentUser(userInfo)
    } catch (error) {
      console.error('Error fetching user data:', error)
    }
  }, [])

  useEffect(() => {
    handleFetchUserMe()
  }, [handleFetchUserMe])

  const InitialValues = useMemo<Partial<PostFormFields>>(
    () => ({
      title: post?.title || '',
      type: post?.type || '',
      duration: post?.duration || '',
      difficulty: post?.difficulty || '',
      allergies: post?.allergies || [],
      description: post?.description || '',
      ingredients: post?.ingredients || [{ name: '', quantity: 0, unity: '' }],
      diners: post?.diners || 0,
      steps: post?.steps || [{ title: '', description: '', order: 1 }],
      mainImage: post?.mainImage || '',
    }),
    [post]
  )

  const handleGetPost = useCallback(async () => {
    if (postId) {
      setIsLoading(true)
      const currentPost = await getPostById(postId)
      setPost(currentPost as Post)
      setIsLoading(false)
    }
  }, [postId])

  useEffect(() => {
    handleGetPost()
  }, [handleGetPost])

  const handleEditPost = useCallback(
    async (values: Partial<PostFormFields>) => {
      try {
        if (post?._id) {
          await updatePostById({ id: post._id, input: values })
          navigate(`/posts/${post._id}`, { replace: true })
          navigate(0)
        }
      } catch (e) {
        setFormError((e as Error).message)
      }
    },
    [post, navigate]
  )

  const handleRemovePost = useCallback(
    async (postId: string) => {
      await removePostById(postId)
      navigate('/dashboard')
    },
    [navigate]
  )

  return {
    post,
    isLoading,
    isEdit,
    InitialValues,
    handleEditPost,
    handleRemovePost,
    currentUser,
    formError,
  }
}

export default useLogic
