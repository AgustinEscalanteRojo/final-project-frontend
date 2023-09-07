import { useNavigate } from 'react-router-dom'
import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { getPosts, removePostById } from '../../services/api/post'
import { getAllUsers, getMe } from '../../services/api/user'
import type { Post } from '../../models/Post'
import type { User } from '../../models/User'

const useLogic = () => {
  const navigate = useNavigate()
  const [posts, setPosts] = useState<Post[]>([])
  const [users, setUsers] = useState<User[]>([])
  const [allergies, setAllergies] = useState<string[]>([])
  const [types, setTypes] = useState<string[]>([])
  const [difficultys, setdifficultys] = useState<string[]>([])
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  const fetchUserMe = useCallback(async () => {
    try {
      const userInfo = await getMe()
      setCurrentUser(userInfo)
    } catch (error) {
      console.error('Error fetching user data:', error)
    }
  }, [])

  useEffect(() => {
    fetchUserMe()
  }, [fetchUserMe])

  const handleDifficultysChange = (
    event: ChangeEvent<HTMLInputElement>,
    difficulty: string
  ) => {
    const { checked } = event.target
    if (checked) {
      setdifficultys([...difficultys, difficulty])
    } else {
      setdifficultys(difficultys.filter((a) => a !== difficulty))
    }
  }

  const handleAllergiesChange = (
    event: ChangeEvent<HTMLInputElement>,
    allergy: string
  ) => {
    const { checked } = event.target
    if (checked) {
      setAllergies([...allergies, allergy])
    } else {
      setAllergies(allergies.filter((a) => a !== allergy))
    }
  }

  const handleTypeChange = (
    event: ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    const { checked } = event.target
    if (checked) {
      setTypes([...types, type])
    } else {
      setTypes(types.filter((a) => a !== type))
    }
  }

  const handleGoToPost = useCallback(() => {
    navigate('/postform')
  }, [navigate])

  const fetchPosts = useCallback(async () => {
    const postsList = await getPosts()
    setPosts(postsList)
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

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

  return {
    allergies,
    currentUser,
    difficultys,
    handleAllergiesChange,
    handleDifficultysChange,
    handleGoToPost,
    handleRemovePost,
    handleTypeChange,
    posts,
    users,
    types,
  }
}

export default useLogic
