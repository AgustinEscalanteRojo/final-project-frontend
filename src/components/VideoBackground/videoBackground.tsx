import { FC, memo } from 'react'
import {
  VideoBackgroundContainer,
  Video,
  Source,
} from './videoBackgroundStyles'
import type { Props } from './videoBackgroundTypes'

const VideoBackground: FC<Props> = ({ videoSrc }) => {
  return (
    <VideoBackgroundContainer>
      <Video autoPlay loop muted>
        <Source src={videoSrc} type="video/mp4" />
      </Video>
    </VideoBackgroundContainer>
  )
}

export default memo(VideoBackground)
