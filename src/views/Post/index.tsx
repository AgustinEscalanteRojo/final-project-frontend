import { FC, memo } from 'react'
import Header from '../../components/Header'
import PostForm from '../../components/Forms/PostForm'
import Details from './Details'
import useLogic from './logic'
import { FormContainer } from './styles'
import type { Props } from './types'
import ImageBackground from '../../components/ImageBackground'

const PostDetailsView: FC<Props> = ({ onLogout }) => {
  const {
    post,
    isLoading,
    isEdit,
    InitialValues,
    handleEditPost,
    handleRemovePost,
    currentUser,
  } = useLogic()

  if (isLoading) {
    return <div>Cargando</div>
  }

  return (
    <>
      <Header onLogout={onLogout} />
      {isEdit ? (
        <FormContainer>
          <PostForm onSubmit={handleEditPost} initialValues={InitialValues} />
          <ImageBackground imageSrc="/post.jpg" />
        </FormContainer>
      ) : (
        <Details
          post={post}
          isCurrentUserCreator={currentUser?._id === post?.userId}
          onRemove={handleRemovePost}
        />
      )}
    </>
  )
}

export default memo(PostDetailsView)
