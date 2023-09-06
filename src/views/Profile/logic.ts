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

  return {
    user,
    handleChange,
    value,
  }
}

export default useLogic
