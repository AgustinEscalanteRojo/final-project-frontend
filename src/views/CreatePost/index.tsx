import { FC, memo } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ImageBackground from '../../components/ImageBackground'
import PostForm from '../../components/Forms/PostForm'
import useLogic from './logic'
import { PostContainer, Content } from './styles'
import type { Props } from './types'

const CreatePost: FC<Props> = ({ onLogout }) => {
  const { handleCreate } = useLogic()

  return (
    <PostContainer>
      <Header onLogout={onLogout} />
      <Content>
        <PostForm onSubmit={handleCreate} />
      </Content>
      <Footer />
      <ImageBackground imageSrc="/back.jpg" />
    </PostContainer>
  )
}

export default memo(CreatePost)
