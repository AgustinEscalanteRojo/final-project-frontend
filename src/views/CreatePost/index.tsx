import { FC, memo } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ImageBackground from '../../components/ImageBackground'
import PostForm from '../../components/Forms/PostForm'
import useLogic from './logic'
import { PostContainer, Content } from './styles'
import type { Props } from './types'

const CreatePost: FC<Props> = ({ onLogout }) => {
  const { handleCreate, formError } = useLogic()

  return (
    <PostContainer>
      <Header onLogout={onLogout} />
      <Content>
        <PostForm onSubmit={handleCreate} formError={formError} />
      </Content>
      <Footer />
      <ImageBackground imageSrc="/post.jpg" />
    </PostContainer>
  )
}

export default memo(CreatePost)
