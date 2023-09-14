import { useNavigate, useSearchParams } from 'react-router-dom'
import { useCallback, useEffect, useState } from 'react'
import { getPosts, removePostById } from '../../services/api/post'
import { getAllUsers, getMe } from '../../services/api/user'
import type { FiltersFormFields, Post } from '../../models/Post'
import type { User } from '../../models/User'
import { buildFiltersQueryString } from '../../utils/filters'

const useLogic = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()
  const [posts, setPosts] = useState<Post[]>([])
  const [users, setUsers] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState(false)
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

  const handleFetchPosts = useCallback(async (filters?: FiltersFormFields) => {
    setIsLoading(true)
    const postsList = await getPosts(filters)
    setPosts(postsList)
    setIsLoading(false)
  }, [])

  useEffect(() => {
    const allergies = searchParams.get('allergies')?.split(',') || []
    const type = searchParams.get('type')?.split(',') || []
    const difficulty = searchParams.get('difficulty')?.split(',') || []

    handleFetchPosts({ allergies, type, difficulty })
  }, [handleFetchPosts, searchParams])

  const handleGoToPost = useCallback(() => {
    navigate('/postform')
  }, [navigate])

  const fetchUsers = useCallback(async () => {
    const usersList = await getAllUsers()
    setUsers(usersList)
  }, [])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  const handleRemovePost = useCallback(async (postId: string) => {
    const currentPosts = await getPosts()
    const filteredPosts = currentPosts.filter(
      (currentPost) => postId !== currentPost._id
    )
    await removePostById(postId)
    setPosts(filteredPosts)
  }, [])

  const handleFilter = useCallback(
    async (filters: FiltersFormFields) => {
      const filtersQueryString = buildFiltersQueryString(filters)
      navigate(`?${filtersQueryString}`)
      await handleFetchPosts(filters)
    },
    [handleFetchPosts, navigate]
  )

  const handleResetFilters = useCallback(async () => {
    searchParams.delete('allergies')
    searchParams.delete('type')
    searchParams.delete('difficulty')
    setSearchParams(searchParams)
    await handleFetchPosts()
  }, [handleFetchPosts, setSearchParams, searchParams])

  return {
    handleFilter,
    handleResetFilters,
    currentUser,
    handleGoToPost,
    handleRemovePost,
    posts,
    users,
    isLoading,
  }
}

export default useLogic
