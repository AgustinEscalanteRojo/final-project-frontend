import { SyntheticEvent, useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getUserById } from '../../services/api/user'
import type { User } from '../../models/User'

const useLogic = () => {
  const { userId } = useParams()
  const [user, setUser] = useState<User | null>(null)
  const [selectedTab, setSelectedTab] = useState('1')

  const handleSetTab = (event: SyntheticEvent, newValue: string) => {
    setSelectedTab(newValue)
  }

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

  useEffect(() => {
    handleFetchUser()
  }, [handleFetchUser])

  return {
    user,
    selectedTab,
    handleSetTab,
  }
}

export default useLogic
