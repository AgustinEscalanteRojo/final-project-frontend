import { FC, memo } from 'react'
import Button from '../Button'
import useLogic from './logic'

export const BackButton: FC = () => {
  const { handleGoBack } = useLogic()
  return <Button onClick={handleGoBack}>Go back</Button>
}

export default memo(BackButton)
