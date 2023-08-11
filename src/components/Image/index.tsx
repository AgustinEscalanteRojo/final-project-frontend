import { FC, memo } from 'react'
import type { Props } from './types'
import { Img } from './styles'

const Image: FC<Props> = ({ src, alt }) => {
  return <Img src={src} alt={alt} />
}

export default memo(Image)
