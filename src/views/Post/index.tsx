import { FC, memo } from 'react'
import { PostContainer, Content } from './styles'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import type { Props } from './types'

const Post: FC<Props> = ({ onLogout }) => {
  return (
    <PostContainer>
      <Content>
      <Header onLogout={onLogout} />

      <Footer />
      </Content>
    </PostContainer>
  )
}

export default memo(Post)
