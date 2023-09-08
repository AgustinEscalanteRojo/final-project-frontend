import { FC, memo } from 'react'
import useLogic from './logic'
import {
  ArrowBackIconStyle
} from './styles'

export const BackButton: FC = () => {
  const { handleGoBack } = useLogic()
  return <ArrowBackIconStyle onClick={handleGoBack}>Go back</ArrowBackIconStyle>
}

export default memo(BackButton)
