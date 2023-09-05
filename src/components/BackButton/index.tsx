import { FC, memo } from 'react'
import { Back } from './styles'
import Button from '../Button'
import useLogic from './logic'

export const BackButton: FC = () => {
  const { handleGoBack } = useLogic()
  return (
    <Back>
      <Button onClick={handleGoBack}>Go back</Button>
    </Back>
  )
}

export default memo(BackButton)
