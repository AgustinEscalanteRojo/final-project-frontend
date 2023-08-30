import React, { FC, memo, useCallback, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add'
import { getPosts, removePostById } from '../../services/api/post'
import ImageBackground from '../../components/ImageBackground'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import RecipeReviewCard from '../../components/Card'
import { EditPostInput, Post } from '../../models/Post'
import UpdatePost from '../UpdatePost'
import { allergiesOptions, allergyIcons } from '../../common/constants'
import {
  Container,
  ButtonController,
  ContainerAllergies,
  Cards,
  IconButtonStyled,
  StyledCheckbox,
  AllergyOption,
  AllergyIcon,
  AllergyLabel,
  AllergyIconContainer,
} from './styles'
import type { Props } from './types'

const Dashboard: FC<Props> = ({ onLogout }) => {
  const navigate = useNavigate()
  const [posts, setPosts] = useState<Post[]>([])
  const [post, setPost] = useState<Post | null>(null)
  const [isEdit, setIsEdit] = useState(false)
  const [allergies, setAllergies] = React.useState<string[]>([])

  const handleAllergiesChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    allergy: string
  ) => {
    const { checked } = event.target
    if (checked) {
      setAllergies([...allergies, allergy])
    } else {
      setAllergies(allergies.filter((a) => a !== allergy))
    }
  }

  const handleGoToPost = useCallback(() => {
    navigate('/create-post')
  }, [navigate])

  const fetchPosts = useCallback(async () => {
    const postsList = await getPosts()
    setPosts(postsList)
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  const handleRemovePost = useCallback(async (postId: string) => {
    const currentPosts = await getPosts()
    const filteredPosts = currentPosts.filter(
      (currentPost) => postId !== currentPost._id
    )
    await removePostById(postId)
    setPosts(filteredPosts)
  }, [])

  const handleOnCompleteEdition = useCallback(
    (values: EditPostInput) => {
      const editedPost = { ...post, ...values } as Post
      setPost(editedPost)
    },
    [post]
  )

  if (post && isEdit) {
    return (
      <UpdatePost
        onEditComplete={handleOnCompleteEdition}
        id={post._id}
        initialValues={{
          title: post.title,
          type: post.type,
          duration: post.duration,
          difficulty: post.difficulty,
          allergies: post.allergies as string,
          description: post.description,
          ingredients: post.ingredients,
          diners: post.diners,
          steps: post.steps,
        }}
        onLogout={onLogout}
      />
    )
  }

  return (
    <Container>
      <Header onLogout={onLogout} />

      <ButtonController>
        <IconButtonStyled
          onClick={handleGoToPost}
          color="primary"
          aria-label="add new post"
        >
          <AddIcon fontSize="large" style={{ color: 'black' }} /> {}
        </IconButtonStyled>
      </ButtonController>

      <Cards>
        {posts?.map((post, index) => (
          <RecipeReviewCard
            key={index}
            post={post}
            onRemove={handleRemovePost}
          />
        ))}
      </Cards>



      <ContainerAllergies>
  {allergiesOptions.map((allergy) => (
    <AllergyOption key={allergy}>
      <StyledCheckbox
        checked={allergies.indexOf(allergy) > -1}
        onChange={(event) => handleAllergiesChange(event, allergy)}
      />
<AllergyLabel>
  <AllergyIconContainer>
    <AllergyIcon src={allergyIcons[allergy]} alt={allergy} />
    {allergy}
  </AllergyIconContainer>
</AllergyLabel>
    </AllergyOption>
  ))}
</ContainerAllergies>





      <Footer />
      <ImageBackground imageSrc="/back.jpg" />
    </Container>
  )
}

export default memo(Dashboard)
