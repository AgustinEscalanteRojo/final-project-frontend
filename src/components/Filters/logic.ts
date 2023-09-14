import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'

const useLogic = () => {
  const [searchParams] = useSearchParams()

  const initialValues = useMemo(() => {
    const allergies = searchParams.get('allergies')?.split(',') || []
    const type = searchParams.get('type')?.split(',') || []
    const difficulty = searchParams.get('difficulty')?.split(',') || []

    return {
      allergies: allergies || [],
      type: type || [],
      difficulty: difficulty || [],
    }
  }, [searchParams])

  return { initialValues }
}

export default useLogic
