import { FC, memo } from 'react'
import Header from '../../components/Header'
import PostForm from '../../components/Forms/PostForm'
import Details from './Details'
import useLogic from './logic'
import { FormContainer } from './styles'
import type { Props } from './types'

const PostDetailsView: FC<Props> = ({ onLogout }) => {
  const { post, isLoading, isEdit, InitialValues, handleEditPost } = useLogic()

  if (isLoading) {
    return <div>Cargando</div>
  }

  return (
    <>
      <Header onLogout={onLogout} />
      {isEdit ? (
        <FormContainer>
          <PostForm onSubmit={handleEditPost} initialValues={InitialValues} />
        </FormContainer>
      ) : (
        <Details post={post} />
      )}
    </>
  )
}

export default memo(PostDetailsView)
