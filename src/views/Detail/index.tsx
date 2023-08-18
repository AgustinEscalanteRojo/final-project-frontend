import { FC, memo } from 'react'
import { DetailsContainer, Content, Backgroundcolor } from './styles'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ImageBackground from '../../components/ImageBackground'

import type { Props } from './types'

const Post: FC<Props> = ({ onLogout }) => {
  return (
    <DetailsContainer>
      <Header onLogout={onLogout} />
      <Content>
        <Backgroundcolor />
      </Content>
      <Footer />
      <ImageBackground imageSrc="/back.jpg" />
    </DetailsContainer>
  )
}

export default memo(Post)
