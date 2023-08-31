import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { Post, PostFormFields } from '../../models/Post'
import { getPostById, updatePostById } from '../../services/api/post'

const useLogic = () => {
  const navigate = useNavigate()
  const { postId } = useParams()
  const [searchParams] = useSearchParams()
  const [post, setPost] = useState<Post | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isEdit] = useState(searchParams.get('edit') === 'true')

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
      steps: post?.steps || [
        { title: '', description: '', order: 1, image: [] },
      ],
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
      if (post?._id) {
        await updatePostById({ id: post._id, input: values })
        navigate(`/posts/${post._id}`)
        // TODO no debemos usar windows reload, la navegación debe ser reactiva
        window.location.reload()
      }
    },
    [post, navigate]
  )

  return {
    post,
    isLoading,
    isEdit,
    InitialValues,
    handleEditPost,
  }
}

export default useLogic
