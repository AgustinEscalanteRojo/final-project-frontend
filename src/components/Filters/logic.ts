import { useMemo } from 'react'

const useLogic = () => {
  const initialValues = useMemo(() => {
    return {
      allergies: [],
      type: [],
      difficulty: [],
    }
  }, [])

  return { initialValues }
}

export default useLogic
