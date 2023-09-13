import { FC, memo } from 'react'
import { BackgroundContainer, Image } from './styles'
import type { Props } from './types'

const ImageBackground: FC<Props> = ({ imageSrc }) => {
  return (
    <BackgroundContainer>
      <Image src={imageSrc} alt="Background Image" />
    </BackgroundContainer>
  )
}

export default memo(ImageBackground)
