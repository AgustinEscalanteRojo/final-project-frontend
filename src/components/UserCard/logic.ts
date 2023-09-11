import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toggleFollowUser } from '../../services/api/user'
import type { Props } from './types'

const useLogic = (
  user: Props['user'],
  currentUserFollowing: Props['currentUserFollowing']
) => {
  const navigate = useNavigate()
  const [isFollowing, setIsFollowing] = useState(false)

  useEffect(() => {
    setIsFollowing(!!currentUserFollowing?.includes(user?._id || ''))
  }, [currentUserFollowing])

  const handleFollowClick = useCallback(async () => {
    if (user._id) {
      await toggleFollowUser(user._id)
      setIsFollowing((prevFollowing) => !prevFollowing)
    }
  }, [user])

  const handleGoToDetails = useCallback(async () => {
    if (user._id) {
      navigate(`/users/${user._id}`)
    }
  }, [user, navigate])

  function getRandomPastelColor() {
    const pastelColors = [
      '#FFD1DC', // Light Pink
      '#FFABAB', // Light Red
      '#FFC3A0', // Light Orange
      '#FF677D', // Light Coral
      '#D4A5A5', // Light Mauve
      '#392F5A', // Light Indigo
      '#31A2AC', // Light Teal
      '#61C0BF', // Light Cyan
      '#6B4226', // Light Brown
      '#D9BF77', // Light Yellow
    ]

    return pastelColors[Math.floor(Math.random() * pastelColors.length)]
  }

  return {
    handleFollowClick,
    getRandomPastelColor,
    isFollowing,
    handleGoToDetails,
  }
}

export default useLogic
