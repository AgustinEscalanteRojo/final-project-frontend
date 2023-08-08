import { FC, memo } from 'react'
import { PostContainer, Content, Backgroundcolor } from './styles'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import type { Props } from './types'

const Post: FC<Props> = ({ onLogout }) => {
  return (
    
    <PostContainer>
      
      <Header onLogout={onLogout} />

      <Content>
      <Backgroundcolor />
      </Content>
      <Footer/>
    </PostContainer>
  )
}

export default memo(Post)
