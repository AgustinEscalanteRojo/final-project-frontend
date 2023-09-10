import { useCallback, useEffect, useState, SyntheticEvent } from 'react'
import { getProfile } from '../../services/api/user'
import type { User } from '../../models/User'

const useLogic = () => {
  const [user, setUser] = useState<User | null>(null)
  const [value, setValue] = useState('1')

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  const fetchUserMe = useCallback(async () => {
    try {
      const userInfo = await getProfile()
      setUser(userInfo)
    } catch (error) {
      console.error('Error fetching user data:', error)
    }
  }, [])

  useEffect(() => {
    fetchUserMe()
  }, [fetchUserMe])

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
    user,
    handleChange,
    value,
    getRandomPastelColor
  }
}

export default useLogic
