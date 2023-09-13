import { SyntheticEvent, useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getUserById } from '../../services/api/user'
import type { User } from '../../models/User'

const useLogic = () => {
  const { userId } = useParams()
  const [user, setUser] = useState<User | null>(null)
  const [selectedTab, setSelectedTab] = useState('1')
  const [value, setValue] = useState('1')

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

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

  return {
    user,
    selectedTab,
    value,
    handleChange,
    handleSetTab,
    getRandomPastelColor,
  }
}

export default useLogic