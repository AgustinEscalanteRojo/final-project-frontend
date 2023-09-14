import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getUserById, toggleFollowUser } from '../../services/api/user'
import type { User } from '../../models/User'
import type { Props } from './types'

const useLogic = (currentUserFollowing: Props['currentUserFollowing']) => {
  const { userId } = useParams()
  const [user, setUser] = useState<User | null>(null)
  const [isFollowing, setIsFollowing] = useState(false)
  
  const handleFetchUser = useCallback(async () => {
    try {
      if (userId) {
        const userInfo = await getUserById(userId)
        setUser(userInfo)
      }
    } catch (error) {
      console.error('Error fetching user data:', error)
    }
  }, [userId])

  function getRandomPastelColor() {
    const pastelColors = [
      '#FFD1DC',
      '#FFABAB',
      '#FFC3A0',
      '#FF677D',
      '#D4A5A5',
      '#392F5A',
      '#31A2AC',
      '#61C0BF',
      '#6B4226',
      '#D9BF77',
    ]

    return pastelColors[Math.floor(Math.random() * pastelColors.length)]
  }

  useEffect(() => {
    handleFetchUser()
  }, [handleFetchUser])

  useEffect(() => {
    setIsFollowing(!!currentUserFollowing?.includes(user?._id || ''))
  }, [currentUserFollowing, user?._id])

  const handleFollowClick = useCallback(async () => {
    if (user?._id) {
      await toggleFollowUser(user._id)
      setIsFollowing((prevFollowing) => !prevFollowing)
    }
  }, [user])

  return {
    isFollowing,
    handleFollowClick,
    user,
    getRandomPastelColor,
  }
}

export default useLogic